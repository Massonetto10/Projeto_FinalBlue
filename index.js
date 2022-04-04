console.clear();
const prompt = require("prompt-sync")();

function tempo (hora, minuto){            
  hour = hour + hora
  min = min + minuto
  if (hour > 24){
      dia++
      hour -= 24                       // Função para calcular o tempo.
  }
  if (min >= 60){
      hour++
      min -= 60
  }
  console.log(`
  DIA ${dia}
  ${hour}:${min}`) 
}  
    
  let dia = 1;
  hour = 0;
  min = 0;

const personagem = {                 // Status iniciais do personagem.
  Sono: 0,
  Fome: 0,
  Dinhero: 600,
};

const partejogo = [
  "INICIO-VIAJEM",
  "MEIO-VIAJEM",                          // Partes do jogo.
  "FINAL-VIAJEM",
  "INICIO DO JOGO",
];

const pausa = () => prompt(`Precione ENTER para continuar!`);

const escolhaErrada = () => console.log(`Você digitou uma opção incorreta!`);

function statuspersonagem(personagem) {
  console.log();
  console.log(`STATUS ATUAIS:`);
  console.log(personagem);
}

let novoJogo = 0;


function fimJogo() {
  
  let escolha = prompt(`Deseja voltar para o começo da ${partejogo[i]}? SIM ou NAO: `).toUpperCase();
    
  console.clear();

  while (escolha != "SIM" && escolha != "NAO") {
    escolhaErrada();
    escolha = prompt(`Deseja jogar novamente? SIM ou NAO: `).toUpperCase();      
    console.clear();
  }
 
  if (escolha == "NAO") {          // Condição para recomeçar o jogo.
    novoJogo = 1;
  }
}

function introducao() {               // Função para introdução do jogo. 
  console.clear();
  console.log(`Bem vindo ao jogo que simula a rotina de um caminhoneiro.`);
  console.log(`Vamos começar!`);
  pausa();
  console.clear();
}

                                      // Função para 1º parte do jogo.(Inicio do jogo)
function primeiraParte() {
  tempo(05,00);
  console.log(`Olá amigo, me chamo Bino,sou motorista da empresa MT Transportes e hoje vamos seguir viajem.
  E agora vamos por o pé na estrada.
  E ai pra onde vamos?:
  Pegar frete no POSTO com um desconhecido.
  Pegar frete na CENTRAL com um conhecido`); 

  let primeiraEscolha = prompt(`Escolha entre POSTO ou CENTRAL: `).toUpperCase();    
  console.clear();


  while (primeiraEscolha != "POSTO" && primeiraEscolha != "CENTRAL") {
    escolhaErrada();
    primeiraEscolha = prompt(`Escolha entre POSTO ou CENTRAL: `).toUpperCase();      
    console.clear();
  }

  if (primeiraEscolha == "POSTO") { 
    console.log(`Ixa deu errado.Que furada que entramos.`);
    tempo(06,00);
    personagem.Dinhero = 0;    
    statuspersonagem(personagem); 
    console.log();
    console.log(`Era um ladrão que roubo o dinheiro e chave do caminhão.
     Você perdeu R$600,00 do seu dinheiro e voltou a pé pra casa.`);
    fimJogo(); 
  } else { 
    i++;
    personagem.Sono = 15; 
    personagem.Fome = 15; 
    console.log(`Isso sim é um frete bom, deu tudo certo.`);
    tempo(7,00);
    statuspersonagem(personagem);
    pausa();
    console.clear();
    console.log(`Esse frete foi bom,você ganhou R$550,00.`);    
    personagem.Dinhero += 550; 
    statuspersonagem(personagem);
    pausa();
    console.clear();
  }
} 

                                        // Função para 2º parte do jogo.(Meio do jogo)
function segundaParte() {
  console.log(`Estamos indo muito bem , enquanto seguimos em frente avistamos uma balança móvel.`);
  personagem.Sono = 25;
  personagem.Fome = 25; 
  personagem.Dinhero = 1150;
  tempo(08,00)
  statuspersonagem(personagem);
  pausa();
  console.clear();
  console.log(`Devemos parar na balança ou seguir em frente? `);
  
  let segundaEscolha = prompt(`Digite SIM se deseja pesar o caminão, ou NAO para furar a balança: `).toUpperCase(); 
  console.clear();
  
  while (segundaEscolha != "SIM" && segundaEscolha != "NAO") {
    escolhaErrada(); 
    segundaEscolha = prompt(`Digite SIM para pesar o caminhão, ou NAO para furar a balança: `).toUpperCase();    
    console.clear();
  }
 
  if (segundaEscolha == "NAO") {
    console.log(`Furamos a balança,mas a policia rodoviaria estava a frente e nos parou.`);
    tempo(09,00);
    personagem.Sono += 30;
    personagem.Fome += 30;       
    console.log(`A policia apreendeu o caminhao,e levou para o pátio você vai ter que pagar uma multa  
     e voltar de taxi pra casa.(Perdeu todo seu dinheiro)`);
    personagem.dinheiro = 0;
    console.log();
    statuspersonagem(personagem);
    fimJogo();
  } else {
    i++; 
    console.log(`Que beleza,pesamos o caminhão e estava tudo ok e a policia não nos parou.Seguimos em frente.`);
    personagem.Sono = 55;
    personagem.Fome = 55;
    personagem.Dinhero = 1150;
    tempo(10,00);
    statuspersonagem(personagem);
     pausa();
    console.clear();
  }
}

                                          // Função para 3º parte do jogo.(Final do Jogo)
function terceiraParte() {
  console.log(
    `Agora precisamos pegar o frete de retorno.
    Qual a melhor opção?
    1 - Frete de MADEIRA R$320,00
    2 - Frete de FRUTAS R$215,00.`
  );
  tempo(11,00);  
  pausa();
  console.clear();
  console.log(`Que maravilha temos 2 fretes de retorno.` ); 
  pausa();
  console.clear();
  console.log(`Cuidado ao escolher talves nem sempre o que paga mais é melhor.` );
  
  
  let terceiraEscolha = prompt(`Escolha entre, MADEIRA ou FRUTAS: `).toUpperCase();    
  console.clear();

 
  while (terceiraEscolha != "MADEIRA" && terceiraEscolha != "FRUTAS") {
    escolhaErrada();
    terceiraEscolha = prompt(`Escolha entre, MADEIRA ou FRUTAS: `).toUpperCase();     
    console.clear();
  }
 
  if (terceiraEscolha == "MADEIRA") {
    console.log(`Esse frete é muito perigoso, estrada ruim e não tem muita segurança.`);
    tempo(12,00)    
    console.log(`A embreagem do caminhão estraga e você perde R$500,00.
    O caminhão tem que ser guinchado até a garagem e temos que ir embora de carona.`);    
    personagem.Fome =75;
    personagem.Sono = 75;
    personagem.dinheiro -= 500;
    statuspersonagem(personagem);
    fimJogo(); 
  } else {
    i++;
    tempo(13,00);
    console.log(`Esse frete foi muito bom e ainda ganhamos umas futas para forrar o estomago.`);
    personagem.Dinhero = 1365;
    personagem.Fome = 25;
    personagem.Sono = 85; 
    statuspersonagem(personagem);
    pausa();
  }
}

function finalDaHistoria() {               // Função para finalizar o jogo.
  console.clear();
  console.log(
    `Agora que chegamos ${partejogo[2]} podemos levar o caminhão para a garagem e ir para casa descançar.
    Amanhã, é um novo dia.`);    
  console.log();
  console.log(`Obrigado por me acompanhar,nos vemos novamente em breve.`);
  return fimJogo(); 
  i++;
}
                                         //Repetição que inicia o jogo.
while (novoJogo == 0) {
  introducao();
  for (i = 0; i < 5; ) { 
    personagem.Sono = 100;
    personagem.Fome = 100;
    personagem.Dinhero = 600;
    
    if (i == 0) {
      console.log(partejogo[i]);
      console.log();
      primeiraParte();
      if (novoJogo == 1) {
        break;
      }
    } else if (i == 1) {
      console.log(partejogo[i]);
      console.log();
      segundaParte();
      if (novoJogo == 1) {
        break;
      }
    } else if (i == 2) {
      console.log(partejogo[i]);
      console.log();
      terceiraParte();
      if (novoJogo == 1) {
        break;
      }
    } else if (i == 3) {
      console.log();
      finalDaHistoria();
      if (novoJogo == 1) {
        break;
      } else {
        break;
      }
    }
  }
}