import { UnidadeCurricular } from './unidade-curricular';

export class Professor {
  nome: string;
  estatuto: string;
  sabatica: boolean;
  gestor: boolean;
  responsavel: [UnidadeCurricular];

  deserialize(input: any): Professor {
    Object.assign(this, input);
    this.responsavel = input.responsavel.map((resp: UnidadeCurricular) => new UnidadeCurricular().deserialize(resp));
    return this;
  }
}
