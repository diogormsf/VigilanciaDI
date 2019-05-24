import { Professor } from './professor';

export class Indisponibilidade {
  professor: Professor;
  inicio: Date;
  fim: Date;
  justificacao: string;

  deserialize(input: any): Indisponibilidade {
    Object.assign(this, input);
    this.professor = new Professor().deserialize(input.professor);
    return this;
  }
}
