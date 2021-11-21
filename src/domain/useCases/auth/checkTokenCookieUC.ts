import AuthRepo from "@/data/repositories/auth_repo";
export default class CheckTokenCookieUC {
  #authRepo: AuthRepo;
  constructor(authRepo: AuthRepo) {
    this.#authRepo = authRepo;
  }

  async execute(): Promise<void> {
    this.#authRepo.loadCookieToken()
  }
}
