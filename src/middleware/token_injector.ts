export default class TokenInjector {
  #accessToken = "";

  injectToken(): string {
    return this.#accessToken;
  }
  saveToken(token: string): void {
    this.#accessToken = token;
  }
}
