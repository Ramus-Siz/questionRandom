

//EXERCICE OPERATIONS

function operations(){

    let numberOfOperation =Math.floor(Math.random() * 4);
    let listOfOperation=['+','/','*','-'];
    let signOfOperation = listOfOperation[numberOfOperation];

    return  signOfOperation ;      
}


function nombreAleatoire() {

    let nombreChoisi= Math.floor(Math.random() * 10 );
    return  nombreChoisi;
    
}

function questions(){
    
    let index=1; 
    let score=0;
    let name= prompt('QUEL EST VOTRE PRENOM');
    console.log(`BIENVENU ${name}`);

    while (index<=3) {

        let firstNumber= nombreAleatoire();
        let secondeNumber= nombreAleatoire();
        let sign=operations();
        if (secondeNumber===0 && sign==='/') {
            console.log('OPERATION IMPOSIBLE');
            index--;
            
        }else{
            let reponse= calculer(firstNumber, secondeNumber, sign);
            let userReponse= parseInt(prompt(`Question ${index}: ${firstNumber} ${sign} ${secondeNumber} = `));

            if (Number.isInteger(userReponse)) {
                reponse === userReponse ? score++ : score= score;
                
            }else{
                console.log('LA VALEUR SAISI N\'EST PAS UN ENTIER');
                index--;
            }
            

        }
                index++;

        }

    return `SCORE: ${score}/3. MERCI ${name} D'AVOIR JOUER A NOTRE JEUX.`;
    
  
}

function calculer(firstNumber,secondeNumber, sign){
    
    let calcul;

    console.log(sign);
   switch (sign) {
    case '+':
        calcul= firstNumber+secondeNumber;
        
        break;
    case '-':
        calcul= firstNumber-secondeNumber;
            
        break;
    case '/':
        calcul=firstNumber/secondeNumber;
            
        break;
    case '*':
        calcul=firstNumber*secondeNumber;
                
        break;
   
    default:
        break;
   }

    return  calcul;
  
}

console.log(questions());










