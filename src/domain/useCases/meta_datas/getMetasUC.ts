import RsApi from '../../../data/services/corn_api_service';
import Meta from '../../entities/Meta';
export default class GetMetas {
    #rsApi: RsApi
    #metas?: Meta[]

    constructor(rsApi: RsApi) {
        this.#rsApi = rsApi
    }

    async execute(): Promise<Meta[]> {
        if (this.#metas == null) {
            this.#metas = await this.#rsApi.getMetas()
        }
        return this.#metas;
    }
}