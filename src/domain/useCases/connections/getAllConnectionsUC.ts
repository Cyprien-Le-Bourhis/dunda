import RsApi from '../../../data/services/corn_api_service';
import Connection from "../../entities/Connection";

export default class GetAllConnections {
  #rsApi: RsApi

  constructor(rsApi: RsApi) {
    this.#rsApi = rsApi
  }

  async execute(): Promise<Connection[]> {
    return await this.#rsApi.getConnections();
  }
}