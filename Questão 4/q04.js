
const titulo = document.querySelector("#titulo");
const caixa = document.querySelector("#caixa");
const tvetor = document.querySelector("#vetor");
const btn = document.querySelector("#botao");
const aviso = document.querySelector("#aviso");
const p = document.querySelector("#p");
let vetor= [];

titulo.style="color: #D8BFD8";

caixa.onblur = () => {
    
    if(caixa.value==""){
        caixa.style="border-color: #FF0000";
        tvetor.style = "color: #FF0000";
       
    }

    else {
        caixa.style="border-color: #000000";
        tvetor.style = "color: #000000";
    }
        
    
}

btn.onclick = () => {

    p.innerHTML="";

    if(caixa.value==""){
        caixa.focus(); 
        aviso.innerText="Digite algum valor.";
    }

    else if(caixa.value<1){
        caixa.focus(); 
        aviso.innerText="Digite um valor acima de 0.";
    }

    else {
    aviso.innerText=""; 
    v(caixa.value);
    
    }
 

}

const v = (tamanho) =>{
    tamanho=Number.parseInt(tamanho);
     

    for(let i=1; i<=tamanho;i++){

        if(i%5==0 && i%9==0)
            vetor.push("LuidyMoura"); 

        else if(i%5==0)
            vetor.push("Luidy");

        else if(i%9==0)
            vetor.push("Moura");
        
        else
            vetor.push(`${i} `)
        
    }

    p.innerHTML=vetor; 
    vetor=[];
} 