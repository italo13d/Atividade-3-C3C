let bhaskara = (a, b, c) => {
    let resultado = [];
    let delta = (b * b) - 4 * a * c; 

    if (delta < 0) {
        return "Delta é negativo";
    }else{
        let raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
        let raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
        resultado.push(raiz1);
        resultado.push(raiz2); 
        return resultado
    }
}
console.log(bhaskara(10, 7, 5));
console.log(bhaskara(3, 2, -5));