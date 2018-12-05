import {Deserializable} from "./deserializable.model";

export class Encuesta {
  id: number;
  asignatura: string;
  catedratico: string;
  time: string;
  days: [];

  constructor() {
    this.time='';
    this.days = [];
  }

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
  getDate() {
    return this.time+ ' ' + this.days.join(' ');
  }
}
