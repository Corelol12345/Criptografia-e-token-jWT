import { createHash } from 'crypto'

function criaHash(senha){
    return createHash('sha256').update(senha).digest('hex')
}

console.log(criaHash("uma String Qualquer"))

class Usuario{
    constructor(nome, senha){
        this.nome = nome;
        this.hash = criaHash(senha);
    }

    autentica(nome, senha){
        if (nome === this.nome && this.hash === criaHash(senha)){
            console.log("Usuario autenticado com sucesso!")
            return true;
        }

        console.log("Usuario ou senha incorretos.");
        return false;

    }
}

const usuario = new Usuario('Joao manoel','minhaSenha')

console.log(usuario)

// caso de sucesso
usuario.autentica('Joao manoel', 'minhaSenha')

// caso de fracasso
usuario.autentica('Joao manoel', 'senhaErrada')