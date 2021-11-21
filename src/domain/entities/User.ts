export class User {
  civility: string;
  birthday: Date;
  firstname: string;
  surname: string;
  email: string;
  id: number;
  login: string;

  // metas: Map<string, any>

  constructor(
    civility: string,
    birthday: string,
    firstname: string,
    surname: string,
    email: string,
    id: number,
    login: string
    // metas: Map<string, any>
  ) {
    (this.civility = civility),
      (this.birthday = new Date(Date.parse(birthday)));
    this.firstname = firstname;
    this.surname = surname;
    this.email = email;
    this.id = id;
    this.login = login;
    // this.metas = metas;
  }

  static fromJsonToUser(json: any): User {
    // const metas = new Map<string, any>();
    // for (const meta in json.metas) {
    //   metas.set(meta, json.metas[meta])
    // }
    return new User(
      json.civility,
      json.birthday,
      json.firstname,
      json.surname,
      json.email,
      json.id,
      json.login
      // metas
    );
  }
}
