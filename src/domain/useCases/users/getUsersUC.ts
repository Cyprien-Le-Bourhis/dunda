import UsersApiService from '@/data/services/users_api_service';
import { User } from '../../entities/User';


export default class GetUsersUC {
  #usersApi: UsersApiService

  constructor(usersApi: UsersApiService) {
    this.#usersApi = usersApi
  }

  async execute(args: GetUsersParams): Promise<User[]> {
    const params = {
      "users_search": args.users_search ?? "",
      "sorting_column": "firstname",
      "sorting_direction": "asc"
    }
    const resp = await this.#usersApi.getUsers(params)
    return resp;
  }
}

interface GetUsersParams {
  users_search?: string
}


