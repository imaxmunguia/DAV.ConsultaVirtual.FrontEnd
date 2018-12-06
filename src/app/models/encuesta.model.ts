import {Deserializable} from "./deserializable.model";

export class Encuesta {
  id_encuesta: string;
  desc_clase: string;
  catedratico_clase: string;
  hora: string;
  dias: [];
  periodo: string;
  fecha_inicio: Date;
  fecha_fin: Date;


  constructor() {
    this.hora='';
    this.dias = [];

  }

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
  getDate() {
    return this.hora+ ' ' + this.dias.join(' ');
  }
}
