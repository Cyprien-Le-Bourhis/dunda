import { User } from './User';

export default class Connection {
    user: User;
    id: number;
    date: Date;

    constructor(user: User, id: number, date: string) {
        this.user = user;
        this.id = id;
        this.date = new Date(Date.parse(date))
    }

    static fromJsonToConnection(json: any): Connection {
        return new Connection(
            User.fromJsonToUser(json.user),
            json.user.id,
            json.date
        );
    }
}