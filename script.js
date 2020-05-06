var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;

var opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];

var opcionUsuario;
var opcionMaquina = Math.floor( Math.random() * (opciones.length));

opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2\nLagarto: 3\nSpock: 4" , 0);

alert("Máquina elegió:" + opciones[opcionMaquina]);


if(opcionUsuario == piedra)
{
  alert("Elegiste Piedra!");
  if(opcionMaquina == piedra)
  {
  	alert("Empate!");
  }
  
  else if(opcionMaquina == papel)
  {
    alert("Perdiste! Papel tapa piedra");
  }
  
  else if(opcionMaquina == tijera)
  {
    alert("Ganaste! Piedra aplasta tijera");
  }
  else if(opcionMaquina == lagarto)
  {
    alert("Ganaste! Piedra aplasta lagarto");
  }
  else if(opcionMaquina == spock)
  {
    alert("Perdiste! Spock vaporiza piedra!");
  }

}
  
else if(opcionUsuario == papel)
{
  alert("Elegiste Papel!");
  if(opcionMaquina == piedra)
  {
    alert("Ganaste! Papel tapa a piedra");
  }
  
  else if(opcionMaquina == papel)
  {
    alert("Empate!");
  }
  
  else if(opcionMaquina == tijera) 
  {
    alert("Perdiste! Tijeras cortan papel");
  }
  else if(opcionMaquina == lagarto)
  {
    alert("Perdiste! Lagarto devora papel");
  }
  else if(opcionMaquina == spock)
  {
    alert("Ganaste! Papel desautoriza Spock");
  }
  
}

else if(opcionUsuario == tijera)
{
	alert("Elegiste Tijera!");
	if(opcionMaquina == piedra)
    {
      alert("Perdiste! Piedra aplasta a tijeras");
    }
    
    else if(opcionMaquina == papel)
    {
      alert("Ganaste! Tijeras cortan papel");	
    }

    else if(opcionMaquina == tijera)
    { 
      alert("Empate!");
    }
    else if(opcionMaquina == lagarto)
  {
    alert("Ganaste! Tijera decapitan a lagarto");
  }
  else if(opcionMaquina == spock)
  {
    alert("Perdiste! Spock rompe tijeras!");
  }

}

else if(opcionUsuario == lagarto)
{
	alert("Elegiste Lagarto!");
	if(opcionMaquina == piedra)
    {
      alert("Perdiste! Piedra aplasta a lagarto");
    }
    
    else if(opcionMaquina == lagarto)
    {
      alert("Empate!");	
    }

    else if(opcionMaquina == tijera)
    { 
      alert("Perdiste! Tijera decapitan lagarto");
    }
    else if(opcionMaquina == papel)
  {
    alert("Ganaste! Lagarto devora papel");
  }
  else if(opcionMaquina == spock)
  {
    alert("Ganaste! Lagarto envenena a Spock");
  }

}
else if(opcionUsuario == spock)
{
	alert("Elegiste Spock!");
	if(opcionMaquina == piedra)
    {
      alert("Ganaste! Spock vaporiza piedra");
    }
    
    else if(opcionMaquina == lagarto)
    {
      alert("Perdiste! Lagarto envenena a Spock");	
    }

    else if(opcionMaquina == tijera)
    { 
      alert("Ganaste! Spock rompe tijeras");
    }
    else if(opcionMaquina == papel)
  {
    alert("Perdiste! Papel desautoriza a Spock");
  }
  else if(opcionMaquina == spock)
  {
    alert("Empate");
  }

}

else

{
	alert("Debes elegir una opción");
}