/*
variaveis
sao espaços de memoria que voce reserva e pode
guardar o que quiser la dentro!
3 formas de criar variaveis:
-var / jeito antigo - evite
-let -> cria variavel que pode alterar o valor depois.
-const -> constante , nao altera o valor depois.

funções: trecho de codigo que, so é executado quando é chamado.

*/

const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")
function cliqueiNoBotao()
{
    form.style.left ="50%"
    form.style.transform ="translateX(-50%)"
    mascara.style.visibility ="visible"

}
function esconderForm(){

    
    form.style.left ="-305px"
    form.style.transform ="translateX(0)"
    mascara.style.visibility ="hidden"

}