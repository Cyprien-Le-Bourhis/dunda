
import dundaApi from '../../../data/services/dunda_api_service';
import { Item } from '../../entities/Item';


export default class CreateItemsUC {
  #Api: dundaApi

  constructor(Api: dundaApi) {
    this.#Api = Api
  }

  async execute(datas: Item) {
    this.#Api.CreateItems(datas)
  }
}



