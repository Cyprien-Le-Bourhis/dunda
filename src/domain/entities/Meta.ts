export default class Meta {
    alias: string;
    field: string;
    constructor(alias: string, field: string) {
        this.alias = alias;
        this.field = field
    }

    static fromJsonToMeta(json: any): Meta {
        return new Meta(
            json.alias,
            json.field,
        );
    }
}