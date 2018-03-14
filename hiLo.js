function hiLo(){

let nAleatorio = Math.round((Math.random() *100)+1);
let nUsuario ;

    do{
        nUsuario =prompt("Digite um numero entre 1 e 100");
        console.log (nAleatorio);

        if (nUsuario > nAleatorio){
            console.log ("High");    
        }
        else if (nUsuario < nAleatorio){
            console.log ("Low");
        }
        else {
            console.log ("You are right"); 
        }
    }while (nUsuario != nAleatorio);
}

hiLo();
