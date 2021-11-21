import AuthRepo from '@/data/repositories/auth_repo';
export default class LogOutUC {
    #authRepo: AuthRepo
    constructor(authRepo: AuthRepo) {
        this.#authRepo = authRepo
    }

    execute(): void {
        this.#authRepo.logout();
    }
}