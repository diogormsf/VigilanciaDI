export class UnidadeCurricular {
  nome: string;
  codigo: number;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
