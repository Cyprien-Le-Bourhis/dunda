import { User } from "@/domain/entities/User";
import CornApiService from "./corn_api_service";

export default class UsersApiService {
  #cornApiService;
  constructor(cornApiService: CornApiService) {
    this.#cornApiService = cornApiService
  }

  async getUsers(params?: Record<string, unknown>): Promise<User[]> {
    const response = (await this.#cornApiService.get("/users", params)).data.data;
    return response.map((user: any): User => User.fromJsonToUser(user));
  }

  async getUser(id: number): Promise<User> {
    const response = (await this.#cornApiService.get(`/users/${id}`)).data.datas;
    return User.fromJsonToUser(response)
  }
  //TODO check Return With back
  async updateUser(body: Record<string, unknown> | null, id: number): Promise<void> {
    (await this.#cornApiService.put(`/users/${id}`, body));
  }

}