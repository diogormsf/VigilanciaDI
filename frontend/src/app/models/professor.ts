import { UnidadeCurricular } from './unidade-curricular';

export class Professor {
  nome: string;
  estatuto: string;
  sabatica: boolean;
  gestor: boolean;
  responsavel: [UnidadeCurricular];
}
