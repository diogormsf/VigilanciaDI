export class Sala {
  localizacao: string;
  lotacaoNormal: number;
  lotacaoExame: number;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }

  
}
