import { Sala } from './sala';
import { UnidadeCurricular } from './unidade-curricular';

export class Exame {
  unidadecurricular: UnidadeCurricular;
  semestre: number;
  epoca: number;
  data: Date;
  // horario: string;
  sala: [Sala];
}
