import { Exame } from './exame';
import { Professor } from './professor';

export class Vigilancia {
  professor: Professor;
  exame: Exame;
  indisponibilidade: string;

  deserialize(input: any): Vigilancia {
    Object.assign(this, input);
    this.professor = new Professor().deserialize(input.professor);
    this.exame = new Exame().deserialize(input.exame);
    return this;
  }

  getExame(): Exame {
    return this.exame;
  }
}
