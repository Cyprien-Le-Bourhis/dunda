
import dundaApi from '../../../data/services/dunda_api_service';
import { Item } from '../../entities/Item';


export default class GetItemsUC {
  #Api: dundaApi

  constructor(Api: dundaApi) {
    this.#Api = Api
  }

  async execute() {
    const resp = await this.#Api.getItems()
    return resp;
  }
}



