
/* Classificação de   triangulos
DENTRO DOS PARÊNTESES DO QUERY SELECTOR TEM AS "IDS"*/

//Declarando variáveis
const ld1 = document.querySelector("#lado1");
const ld2 = document.querySelector("#lado2");
const ld3 = document.querySelector("#lado3"); 

const btn =  document.querySelector("#classificar"); //BOTÃO
const res = document.querySelector("#resposta"); //CAIXA DA RESPOSTA
const aviso = document.querySelector("#aviso");//AVISO
const t = document.querySelector("#titulo"); //Cabeçalho colorido 

const l1 = document.querySelector("#l1");
const l2 = document.querySelector("#l2");
const l3 = document.querySelector("#l3");


t.style="color: #1E90FF"; //Cabeçalho colorido 
ld1.onblur = () => {

    if(ld1.value == "") { //Se o valor for deixado em branco, vai deixar vermelho
        l1.style = "color: #FF0000";
        ld1.style = "border-color: #FF0000"; 
    }

    else {
        l1.style = "color: #000000";
        ld1.style = "border-color: #000000";
    }
}


ld2.onblur = () => {

    if(ld2.value == "") { //Se o valor for deixado em branco, vai deixar vermelho
        l2.style = "color: #FF0000";
        ld2.style = "border-color: #FF0000"; 
    }

    else{
        l2.style = "color: #000000";
        ld2.style = "border-color: #000000";
    }
}


ld3.onblur = () => {

    if(ld3.value == "") { //Se o valor for deixado em branco, vai deixar vermelho
        l3.style = "color: #FF0000";
        ld3.style = "border-color: #FF0000"; 
    }

    else{
        l3.style = "color: #000000";
        ld3.style = "border-color: #000000";
    }

}

//BOTÃO: Vai fazer com que o usuário, ao clicar na tela, vá direto para o campo de preenchimento.
btn.onclick = () => {

    if(ld1.value=="")
        ld1.focus();
    

    else if(ld2.value=="" && ld1.value!="")
        ld2.focus(); 
    

    else if(ld3.value=="" && ld1.value!= "" && ld2.value!= "")
        ld3.focus(); 
    

    else if(ld1.value<1 || ld2.value<1 || ld3.value<1 ){
        ld1.value = "";
        ld2.value = "";
        ld3.value = "";
        res.value= "";
        aviso.innerText= "Digite (apenas) valores positivos.";
    }

   else {
    res.value = tri(ld1.value,ld2.value,ld3.value);  // TRI função"
    aviso.innerText=""; 
   }

}

//========== PARTE JAVASCRYPT =============
const tri = (valor1,valor2,valor3) => {
    valor1= Number.parseFloat(valor1);
    valor2= Number.parseFloat(valor2);
    valor3= Number.parseFloat(valor3);

    if (valor1==valor2 && valor2==valor3 && valor3==valor1) 
        return("Triângulo Equilátero"); 
    

    else if(valor1!=valor2 && valor1!=valor3 && valor2!=valor3)
        return("Triângulo Escaleno"); 
    

    else
        return("Triângulo Isósceles"); 
    
}

