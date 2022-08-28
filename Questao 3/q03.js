//Declarando variáveis

const titulo = document.querySelector("#titulo");
const nota1 =  document.querySelector("#nota1");
const caixa = document.querySelector("#caixanota");
const btn = document.querySelector("#botao");//Botão
const res = document.querySelector("#resposta");
const aviso = document.querySelector("#aviso");

titulo.style="color: #DDA0DD";

caixa.onblur = () => {
    
    if(caixa.value=="") {
        caixa.style= "border-color: #FF0000";
        nota1.style= "color: #FF0000";
        
    }

    else {
        caixa.style= "border-color: #000000";
        nota1.style= "color: #000000";
        
    }
}


btn.onclick = () => {

    if(caixa.value ==""){
        caixa.focus();
        aviso.innerText="Nota não digitada"; 
    }

    else if(caixa.value<0){
        caixa.focus();
        aviso.innerText="Digite uma nota possível.";
    }

    else {
        aviso.innerText=""; 
        res.value = ap(caixa.value); 
    }

}

//========== PARTE JAVASCRYPT =============
const ap= (valornota) => {
    valornota = Number.parseFloat(valornota); 
    var original;   

    if(valornota<38)
        return(`Nota = ${valornota},Reprovado(a)!`);



    else if (valornota>37){
            if(valornota%5==0)
                return(`Nota = ${valornota},Aprovado(a)!`);
            
            else{
                original=valornota;
                while(valornota%5!=0){
                    valornota++;

                    if(valornota%5==0){
                        break; 
                    }
                }
            }
        
        if((valornota-original)<3)
            return(`${original}=> ${valornota},Aprovado(a)!`);
        
        else
            return(`Nota = ${original},Aprovado(a)!`);
    }
        
    
    
    
}

