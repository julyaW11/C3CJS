//Declarando variáveis
const titulo = document.querySelector("#titulo");//Titulo
const param1 = document.querySelector("#p1");//Caixa de texto de A
const param2 = document.querySelector("#p2");//Caixa de texto de B
const param3 = document.querySelector("#p3");//Caixa de texto de C
const res = document.querySelector("#resposta")//Caixa de texto Resposta
const btn = document.querySelector("#botao");//Botão


titulo.style= "color: #00FF00"

btn.onclick = () => {
  

    if(param1.value=="")
        param1.focus();

    else if(param2.value=="" && param1.value!="")
        param2.focus();

    else if(param3.value=="" && param2.value!="" && param1.value!="")
        param3.focus();

    else 
        res.value = bha(param1.value,param2.value,param3.value);
    
    
}

//========== PARTE JAVASCRYPT =============
const bha = (valora,valorb,valorc) => {
    let a= Number.parseFloat(valora);
    let b= Number.parseFloat(valorb);
    let c= Number.parseFloat(valorc);

    var delta= Math.pow(b,2) - (4*c*a); 

    console.log(delta);

    if(delta<0)
        return("O delta é negativo");
    
    else{
        var x1= ((-b) + Math.sqrt(delta))/2*a;
        var x2= ((-b) - Math.sqrt(delta))/2*a; 

        return([(x1.toFixed(2)),(x2.toFixed(2))]);
    }
}
