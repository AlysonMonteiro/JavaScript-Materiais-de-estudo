/*luiz otavio miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.90
nome nasceu em 1980
*/
const nome = 'Alyson'
const sobrenome= 'Monteiro'
const idade = 21;
const peso = 84;
const alturaEmMetros =  1.80;
let ano = 2022;
let indiceMassaCorporal; //peso / (altura 8 altura)
let anoNascimento;
indiceMassaCorporal = peso / (alturaEmMetros * alturaEmMetros);
anoNascimento = ano - idade;

 console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
 console.log(`tem ${alturaEmMetros} de altura e seu IMC(Indice de massa corporal) é de ${indiceMassaCorporal}`);
 console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);
