export class User {
  username: string;
  id: string;
  nome: string;
  responsavel: [string];
  estatuto: string;
  sabatica: boolean;
  gestor: boolean;
  token?: string;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
