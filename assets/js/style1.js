const cantidadJugadas = prompt("Cuántas veces quiere jugar")
const min = 1;
const max = 3;
for (let i=1; i<=parseInt(cantidadJugadas); i++){
    console.log("El valor es " + i)
  
   
    let jugadaContraParte = parseInt(prompt("ingrese su jugada, las opciones son: 1. Piedra 2. Papel 3. Tijera"))
    let jugadorPc = Math.floor(Math.random()*(max-min+1)+min);


    if(jugadaContraParte === 1){
        alert("Su elección es Piedra");  
    }else if(jugadaContraParte === 2){
        alert("Su elección es Papel");
    }else if(jugadaContraParte === 3){
        alert("Su elección es Tijera");
    }else{
        alert("El número no es válido")
    }

    if(jugadorPc === 1){
        alert("El PC seleccionó Piedra");
    }else if(jugadorPc === 2){
        alert("El PC seleccionó Papel");
    }else if(jugadorPc === 3){
        alert("El PC seleccionó Tijera");
    }else{
        alert("Error")
    }
    
    /*
        if(jugadorPc === jugadaContraParte){
            alert("Esto es un empate");
        }else if(jugadaContraParte === 1 && jugadorPc === 2){
            alert("Usted es el ganador");
        }else if(jugadaContraParte === 1 && jugadorPc === 3){
            alert("Usted es el ganador");
        }else if(jugadaContraParte == 2 && jugadorPc === 1){
            alert("Suerte para la próxima");
        }else if(jugadaContraParte === 2 && jugadorPc === 3){
            alert("Suerte para la próxima");
        }else if(jugadaContraParte === 3 && jugadorPc === 1){
            alert("Usted es el ganador");
        }else if(jugadaContraParte === 3 && jugadorPc === 2){
            alert("Suerte para la próxima");
        }
    */
    if(jugadorPc === jugadaContraParte){
        alert("Esto es un empate");
    }else if( (jugadaContraParte == 1 && jugadorPc == 3) || (jugadaContraParte == 2 && jugadorPc == 1) || (jugadaContraParte == 3 && jugadorPc == 2) ){
        alert("Felicidades! Usted ganó");

    }else {
    alert("Suerte para la próxima");
    }
}


