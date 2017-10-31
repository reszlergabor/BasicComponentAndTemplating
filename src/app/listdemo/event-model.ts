export class EventModel {
  id: number;
  name: string;
  pic?: string;  //a kérdőjellel opcionálissá tesszük

  constructor(id, name, pic=''){
    // Object assign(this, param)

    this.id = id;
    this.name = name;
    this.pic = pic;
  }
}
