const Peter_Gabriel = {
    nome: "Thor Filho de Odin ",
    codinome: "Thor ",
    armaPrincipal: "Mjölnir ",
    armaSecundaria: "Rompe-Tormentas ",
    velocidade: 80, 
    forca: 90,
    resistencia: 80,

}

const Phil_Collins = {
    nome: "Peter Parker ",
    codinome: "Homem Arranha ",
    armaPrincipal: "Lançador de teia ",
    armaSecundaria: "",
    velocidade: 20, 
    forca: 40,
    resistencia: 80,

}

const Mike_Rutherford = {
    nome: "Homem de Ferro ",
    codinome: "Tony Stark ",
    armaPrincipal: "armadura ",
    armaSecundaria: "",
    velocidade: 35, 
    forca: 45,
    resistencia: 70,

}

const Steve_Hackett = {
    nome: "Scott Lang ",
    codinome: "Homem Formiga ",
    armaPrincipal: "formigas ",
    armaSecundaria: "",
    velocidade: 10, 
    forca: 20,
    resistencia: 55,

}

const Tony_Banks = {
    nome: "Thanos ",
    codinome: "Thanos ",
    armaPrincipal: "Manopla_do_infinito ",
    armaSecundaria: "",
    velocidade: 20, 
    forca: 90,
    resistencia: 100,

}

function info(nome,codinome,armaPrincipal,armaSecundaria,velocidade,forca,resistencia) {
        return "Nome do personagem: " + nome + "\n"
            + " Codinome do personagem: " + codinome + "\n"
            + " Arma principal: " + armaPrincipal + "\n"
            + " Arma secundaria: " + armaSecundaria + "\n"
            + " Nível de força: " + forca + "\n"
            + " Nível de velocidade: " + velocidade + "\n"
            + " Nível de resistência: " + resistencia
    }

    const lista = [
        Peter_Gabriel,
        Phil_Collins,
        Mike_Rutherford,
        Steve_Hackett,
        Tony_Banks
    ];

    for(let i = 0; i < lista.length; i++){
        for(let j = i + 1; j < lista.length; j++){
            let heroi1 = lista[i];
            let heroi2 = lista[j];



            console.log(info(
                heroi1.nome,
                heroi1.codinome,
                heroi1.armaPrincipal,
                heroi1.armaSecundaria,
                heroi1.velocidade,
                heroi1.forca,
                heroi1.resistencia
            ));

            console.log("\nVS\n")

            console.log(info(
                heroi2.nome,
                heroi2.codinome,
                heroi2.armaPrincipal,
                heroi2.armaSecundaria,
                heroi2.velocidade,
                heroi2.forca,
                heroi2.resistencia
            ));

            console.log("\nRESULTADO: ");

            if(heroi1.velocidade > heroi2.velocidade){
                console.log(heroi1.codinome + " é melhor na velocidade!");
            }
            else if(heroi2.velocidade > heroi1.velocidade) {
                console.log(heroi2.codinome + ' é melhor na velocidade!');
            }
            else{
                console.log(' empate na velocidade!');
            }

            if(heroi1.forca > heroi2.forca){
                console.log(heroi1.codinome + ' é melhor na força!');
            }
            else if(heroi2.forca > heroi1.forca) {
                console.log(heroi2.codinome + ' é melhor na forca!');
            }
            else{
                console.log(" empate na forca!");
            }

            if(heroi1.resistencia > heroi2.resistencia){
                console.log(heroi1.codinome + ' é irresistível!\n');
            }
            else if(heroi2.resistencia > heroi1.resistencia) {
                console.log(heroi2.codinome + ' é irresistível!\n');
            }
            else{
                console.log(" empate na resistencia!\n")
            }
        }
    }
