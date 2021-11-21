export abstract class _Auth {
    
}
export default class Auth extends _Auth {
    access_token: string
    refresh_token: string
    expires_in:number

    constructor(access_token: string,expires_in:number, refresh_token:string) {
        super()
        this.access_token = access_token
        this.expires_in = expires_in
        this.refresh_token = refresh_token
    }

    static fromJsonToAuth(json: any): Auth {
        return new Auth(
            json.access_token,
            json.expires_in,
            json.refresh_token,
        )
    }
    


}



export class EmptyAuth extends _Auth{
    constructor(){
        super()
    }

}