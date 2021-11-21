import Auth, { EmptyAuth, _Auth } from "@/domain/entities/Auth";
import TokenInjector from "@/middleware/token_injector";
import CookieService from "../services/cookie_service";
import DundaApiService from "../services/dunda_api_service";

export default class AuthRepo {

  #isAuth: _Auth;
  // #cornApiService: CornApiService;
  #dundaApiService: DundaApiService;
  #tokenInjector: TokenInjector;
  #cookieService: CookieService

  constructor(dundaApiService: DundaApiService, tokenInjector: TokenInjector, cookieService: CookieService) {
    this.#isAuth = new EmptyAuth();
    this.#tokenInjector = tokenInjector;
    this.#dundaApiService = dundaApiService;
    this.#cookieService = cookieService;
  }

  loadCookieToken(): void {
    const expiresIn = this.#cookieService.get("expires_in")
    const refreshToken = this.#cookieService.get("refresh_token")
    const token = this.#cookieService.get("token")
    if (expiresIn && refreshToken && token) {
      this.#isAuth = new Auth(token, parseInt(expiresIn), refreshToken)
      if (this.#isAuth instanceof Auth) {
        this.#tokenInjector.saveToken(this.#isAuth.access_token)
      }
    }
  }

  get isAuth(): boolean {
    return this.#isAuth instanceof Auth
  }

  async login(email: string, password: string): Promise<void> {
    console.log('Login !')
    const resp = await this.#dundaApiService.logIn(email, password);
    this.#isAuth = resp;
    console.log('repsonse de dundalogin', resp)
    if (this.#isAuth instanceof Auth) {
      this.#cookieService.set("token", this.#isAuth.access_token, this.#isAuth.expires_in)
      this.#cookieService.set("refresh_token", this.#isAuth.refresh_token, this.#isAuth.expires_in)
      this.#cookieService.set("expires_in", this.#isAuth.expires_in.toString(), this.#isAuth.expires_in)
      this.#tokenInjector.saveToken(this.#isAuth.access_token);
    }
  }

  #deleteCookie(): void {
    this.#cookieService.delete("token")
    this.#cookieService.delete("refresh_token")
    this.#cookieService.delete("expires_in")
  }

  logout(): void {
    this.#deleteCookie()
    this.#isAuth = new EmptyAuth();
  }
}
