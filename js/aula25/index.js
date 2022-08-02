// ? :
// (condição) ? 'valor para verdadeiro' : 'valor para falso';
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

if (pontuacaoUsuario >= 1000) {
  console.log("usuario VIP");
} else {
  console.log("usuario NORMAl");
}
