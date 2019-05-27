import { Sala } from './sala';
import { UnidadeCurricular } from './unidade-curricular';

export class Exame {
  unidadecurricular: UnidadeCurricular;
  semestre: number;
  epoca: number;
  data: Date;
  horario?: string;
  sala: [Sala];

  deserialize(input: any): Exame {
    Object.assign(this, input);
    this.unidadecurricular = new UnidadeCurricular().deserialize(input.unidadecurricular);
    this.sala = input.sala.map((s: Sala) => new Sala().deserialize(s));
    return this;
  }
}
