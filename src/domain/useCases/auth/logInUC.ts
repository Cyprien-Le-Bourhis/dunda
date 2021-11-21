import AuthRepo from "@/data/repositories/auth_repo";
export default class LogInUC {
  #authRepo: AuthRepo;
  constructor(authRepo: AuthRepo) {
    this.#authRepo = authRepo;
  }

  async execute(email: string, password: string): Promise<void> {
    await this.#authRepo.login(email, password);
  }
}
