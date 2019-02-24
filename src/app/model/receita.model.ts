import { Ingrediente } from './ingrediente.model';

export class Receita {
    public nome: string;
    public descricao: string;
    public caminhoImagem: string;
    public ingredientes: Ingrediente[];

    constructor(nome: string, decricao: string, caminhoImagem: string, ingredientes: Ingrediente[]) {
      this.nome = nome;
      this.descricao = decricao;
      this.caminhoImagem = caminhoImagem;
      this.ingredientes = ingredientes;
    }
}
