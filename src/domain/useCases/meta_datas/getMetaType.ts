import Meta from '../../entities/Meta';
import GetMetas from './getMetasUC';
export default class GetMetaType {
    #getMetas: GetMetas
    #metas?: Meta[]
    constructor(getMetas: GetMetas) {
        this.#getMetas = getMetas
    }

    async init(): Promise<void> {
        this.#metas = await this.#getMetas.execute();
    }

    execute(fieldKey: string): FieldType {
        if (this.#metas == null) {
            throw new Error('META PAS INIT')
        }
        const type = this.#metas?.find((meta) => meta.alias == fieldKey)?.field
        return type ? FieldType[type] : FieldType.undefined
    }
}

export enum FieldType {
    text,
    number,
    bool,
    undefined
}