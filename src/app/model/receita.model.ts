export class Receita {
    public nome: string;
    public descricao: string;
    public caminhoImagem: string;

    constructor(nome: string, decricao: string, caminhoImagem: string) {
      this.nome = nome;
      this.descricao = decricao;
      this.caminhoImagem = caminhoImagem;
    }
}
