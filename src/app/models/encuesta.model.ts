import {Deserializable} from "./deserializable.model";

export class Encuesta {
  id_encuesta: string;
  desc_clase: string;
  id_carrera: string;
  desc_carrera: string;
  id_clase: string;
  catedratico_clase: string;
  hora: string;
  dias: [];
  periodo: number;
  fecha_inicio: Date;
  fecha_fin: Date;
  activa: boolean;


  constructor() {
    this.hora='';
    this.dias = [];
    this.activa = true;
  }

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
  getDate() {
    return this.hora+ ' ' + this.dias.join(' ');
  }
}
