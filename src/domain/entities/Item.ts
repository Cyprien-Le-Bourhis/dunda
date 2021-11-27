export class Item {
  type: string;
  name: string;
  rarety: string;
  value: number;
  icon: number;




  constructor(
    type: string,
    name: string,
    rarety: string,
    value: number,
    icon: number

  ) {
    this.type = type,
      this.name = name;
    this.rarety = rarety;
    this.value = value;
    this.icon = icon;


  }



  static fromJsonToItem(json: any): Item {
    return new Item(
      json.type,
      json.name,
      json.rarety,
      json.value,
      json.icon,

    );
  }
}

