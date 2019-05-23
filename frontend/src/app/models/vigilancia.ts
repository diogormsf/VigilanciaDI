import { Exame } from './exame';
import { Professor } from './professor';

export class Vigilancia {
  professor: Professor;
  exame: Exame;
  indisponibilidade: string;
}
