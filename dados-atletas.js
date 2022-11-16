class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11){
            return "Infantil"
        }
        else if (this.idade >= 12 && this.idade <= 13){
            return "Juvenil"
        }
        else if (this.idade >= 14 && this.idade <= 15){
            return "Intermediário"
        }
        else if (this.idade >= 16 && this.idade <= 30){
            return "Adulto"
        }
        else {
            return "Sem categoria"
            }
    }

    calculaIMC() {
        let imc = this.altura * this.altura;
        imc = this.peso / imc
        return imc
    }

    calculaMediaValida() {

        let media = this.notas.sort((a, b) => {
            if (a > b) return 1; // Ordena as notas do maior para o menor
        })

        media = media.slice(1, media.length - 1) // Exclui a maior e menor nota, obtendo as notas do meio

        let comprimento = media.length // Obtem o número de notas

        media = media.reduce(function(total, atual) {
            return total + atual; // Retorna a soma das notas
        }) / comprimento // Divide a soma das notas pelo numero de notas somadas, obtendo a média

        return media
    }

    obtemNomeAtleta() {
        console.log(`Nome: ${this.nome}`)
    }

    obtemIdadeAtleta() {
        console.log(`Idade: ${this.idade}`)
    }

    obtemPesoAtleta() {
        console.log(`Peso: ${this.peso}`)
    }

    obtemAlturaAtleta() {
        console.log(`Altura: ${this.altura}`)
    }

    obtemNotasAtleta() {
        console.log(`Notas: ${this.notas}`)
    }

    obtemCategoria() {
        console.log(`Categoria: ${this.calculaCategoria()}`)
    }

    obtemIMC() {
        console.log(`IMC: ${this.calculaIMC()}`)
    }

    obtemMediaValida() {
        console.log(`Média válida: ${this.calculaMediaValida()}
`)
    }
}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

// Chamada de métodos
atleta.calculaCategoria()
atleta.calculaIMC()
atleta.calculaMediaValida()
atleta.obtemNomeAtleta()
atleta.obtemIdadeAtleta()
atleta.obtemPesoAtleta()
atleta.obtemAlturaAtleta()
atleta.obtemNotasAtleta()
atleta.obtemCategoria()
atleta.obtemIMC()
atleta.obtemMediaValida()

// Exibido no console

// Nome: Cesar Abascal
// Idade: 30
// Peso: 80
// Altura: 1.7
// Notas: 10,9.34,8.42,10,7.88
// Categoria: Adulto
// IMC: 27.68166089965398
// Média válida: 9.253333333333332