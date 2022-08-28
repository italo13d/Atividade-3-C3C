const TipoTriangulo = (a, b, c) => {
        // Condição pro triângulo equilátero.
    if (a < (b + c) && b < (a + c) && c < (a + b)) {
      if (a == b && b == c) {
        console.log('Equilátero:Os três lados são iguais.');
      } // Condição para o triângulo isósceles.
      else if (a == b || a == c || c == b) {
        console.log('Isósceles:Dois lados iguais.');
      } // Condição para o triângulo escaleno.
      else {
        console.log('Escaleno:Todos os lados são diferentes.');
      }
    }
    
  
  }
  
  TipoTriangulo(8, 4, 8);
  TipoTriangulo(5, 5, 5);
  TipoTriangulo(5, 7, 10);
  