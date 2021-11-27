export default class TokenInjector {
  #accessToken = "";
  #refreshToken = "";
  #uid = "";

  injectRefreshToken() {
    return this.#refreshToken;
  }
  injectUid() {
    return this.#uid;
  }
  injectToken(): string {
    return this.#accessToken;
  }
  saveToken(token: string, refreshToken: string, uid: string): void {
    this.#accessToken = token;
    this.#refreshToken = refreshToken;
    this.#uid = uid;
  }
}
