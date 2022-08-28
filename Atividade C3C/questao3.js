function calculoNota(nota){
    if(nota < 0 || nota > 100){
        return "Nota Invalida";
    }
    if(nota < 40){
        if(nota < 38){
            return "Aluno Reprovado";
        }else{
            let prox=proxDiv5(nota);
            if(prox-nota<3){
                nota = prox;
            }
            return nota; 
        }
    }else{
        let prox=proxDiv5(nota);
        if(prox-nota<3){
            nota = prox;
        }
        return nota; 

    }
}
function proxDiv5(x) {
    return Math.ceil(x / 5) * 5;
}
console.log(calculoNota(58));