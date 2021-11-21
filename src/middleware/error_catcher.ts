import axios from "axios";

export default class ErrorCatcher {
    processError(e: Error): Error {
        if (axios.isAxiosError(e)) {
            const code = (e.response?.status === undefined) ? 500 : e.response?.status;
            if (code > 400 && code < 500) {
                return new RsClientError();
            } else if (code > 500) {
                return new RsServerError();
            }
            else {
                return new UnknownRsError();
            }
        } else {
            return new UnknownRsError();
        }
    }
}

class RsServerError extends Error {
    override message = "server error rsApi"
}
class RsClientError extends Error {
    override message = "unauth rsApi"
}
class UnknownRsError extends Error {
    override message = "unknown rs error"
}