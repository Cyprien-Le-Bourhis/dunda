import { getAuth } from "firebase/auth"

export abstract class _Auth {

}
export default class Auth extends _Auth {
    access_token: string
    refresh_token: string
    expires_in: number
    uid: string

    constructor(access_token: string, expires_in: number, refresh_token: string, uid: string) {
        super()
        this.access_token = access_token
        this.expires_in = expires_in
        this.refresh_token = refresh_token
        this.uid = uid
    }

    static fromJsonToAuth(json: any): Auth {
        console.log("json", json)
        return new Auth(
            json.user.accessToken,
            json._tokenResponse.expiresIn,
            json._tokenResponse.refreshToken,
            json.user.uid,
        )
    }

    //     getCustomToken(userid) {
    //         const userId = 'some-uid';

    //         getAuth()
    //             .createCustomToken(userId)
    //             .then((customToken) => {
    //                 // Send token back to client
    //             })
    //             .catch((error) => {
    //                 console.log('Error creating custom token:', error);
    //             });
    //     }
}





export class EmptyAuth extends _Auth {
    constructor() {
        super()
    }

}