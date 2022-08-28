function calculoArr(num) {
    let resultado = [num]

    for (let i = 1; i <= num; i++) {
        if( i % 5 == 0 && i % 9 ==0){
            resultado[i-1]="LuidyMoura"; 
        }else if(i % 5 == 0){
            resultado[i-1]="Luidy";
        }else if(i % 9 == 0){
            resultado[i-1]="Moura";
        }else{
            resultado[i-1]=i;
        }
    }
    return resultado 
}
console.log(calculoArr(45));