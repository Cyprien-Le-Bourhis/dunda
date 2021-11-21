export class Item {
  type: string;
  name: string;
  rarety: string;
  value: number;




  constructor(
    type: string,
    name: string,
    rarety: string,
    value: number,


  ) {
    this.type = type,
      this.name = name;
    this.rarety = rarety;
    this.value = value;

  }

  static fromJsonToUser(json: any): Item {
    return new Item(
      json.type,
      json.name,
      json.rarety,
      json.value,

    );
  }
}
