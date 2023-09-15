// ---------------- Nivel Básico  ---------------------------------------

//console.log("Hello World 2");

function Soma(num1, num2){
    return num1 + num2;
}
//console.log(Soma(5, 7));

function ParOuInpar(num){
    if(num % 2 == 0){
        return "Par";
    }else{
        return "Inpar";
    }
}
//console.log(ParOuInpar(9));
//console.log(ParOuInpar(10));


function MaiorValor(num1, num2, num3){
    numArray = [num1, num2, num3];

    let maiorNumero = numArray[0];

    numArray.forEach(element => {
        if(element > maiorNumero){
            maiorNumero = element;
        }
    });

    return maiorNumero;
}
//console.log(MaiorValor(1, 15, 9));


//de 1 a 100 retorna Fizz para multiplos de 3, Buzz para muitiplos de 5 e FizzBuzz para Multiplos de 3 e 5
function FizzBuzz(){
    for(i = 1; i <= 100; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log(i, ": FizzBuzz");
        }else

        if(i % 3 == 0){
            console.log(i, ": Fizz");
        }else

        if(i % 5 == 0){
            console.log(i, ": Buzz");
        }
    }
}
//FizzBuzz();


function InverteString(stringOriginal){
    let stringAuxiliar;
    stringAuxiliar = stringOriginal.split('');
    let stringInvertida = new Array();

    let position = 0;
    for(i = stringAuxiliar.length; i >= 0; i--){
        stringInvertida[position] = stringAuxiliar[i];
        position += 1;
    }

    let stringFinal = stringInvertida.join('');
    //console.log(stringFinal);

    return stringFinal;
}
//console.log(InverteString("Erasmo"));


function Factorial(num){
    let factorial = 1;

    for(i = 1; i <= num; i++){
        factorial = factorial * i;
    }

    return factorial;
}
//console.log(Factorial(4));


function Primos1A100(){
    for(k = 1; k <= 100; k++){
        let primo = true;
        for(i = 2; i < k; i++){
            if(k % i == 0){
                primo = false;
            }
        }

        if(primo){
            console.log(k, ":É Primo");
        }
    }
}
//Primos1A100();



// --------------  Nivel Intermediário -----------------------

function Palindrome(num){
    
    numString = num.toString();
    
    numAux = numString.split('');
    numInvertido = new Array();

    let position = numAux.length -1;
    numAux.forEach(element => {
        numInvertido[position] = element;
        position -= 1;
    });

    if(numInvertido.join('') == numString){
        console.log(numString, ": É Palindrome");
    }else{
        console.log(numString, ": Não é Palindrome!");
    }
}
//Palindrome(1221);




//Gerar número aleatórios e ordenalos em ordem crescente
function RandomGenerator(){
    let randomNumber = new Array();

    for(i = 0; i < 5; i++){
        randomNumber[i] = Math.floor(Math.random() * 10)
    }

    console.log("Números não Ordenados: ");
    randomNumber.forEach(element => {
        console.log(element)
    });


    let aux;
    for(i = 0; i < randomNumber.length - 1; i++){
        for(j = i; j < randomNumber.length; j++){
            if(randomNumber[i+1] < randomNumber[i]){
                aux = randomNumber[i];
                randomNumber[i] = randomNumber[i+1];
                randomNumber[i+1] = aux;
            }
        }
    }

    console.log("Números Ordenados: ");
    randomNumber.forEach(element => {
        console.log(element)
    });
}
//RandomGenerator();