// Definindo a classe Heroi
class Heroi {
  // Construtor da classe
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método para o herói atacar
  atacar() {
    let ataque;

    // Definindo o tipo de ataque com base no tipo do herói
    switch (this.tipo) {
      case 'mago':
        ataque = 'usou magia';
        break;
      case 'guerreiro':
        ataque = 'usou espada';
        break;
      case 'monge':
        ataque = 'usou artes marciais';
        break;
      case 'ninja':
        ataque = 'usou shuriken';
        break;
      default:
        ataque = 'usou um ataque desconhecido';
    }

    // Exibindo a mensagem de ataque
    console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
  }
}

// Criando um herói
const meuHeroi = new Heroi('Aragorn', 30, 'guerreiro');

// Chamando o método atacar do herói
meuHeroi.atacar();