function orariolavoro() {
  let giorno=document.getElementById("text1").value;
  let giornol=giorno.toLowerCase();
  let giornos=giornol.split(" ");
  let orario1=["lunedì","martedì","mercoledì"];
  let orario2=["giovedì","venerdì"];
  let orario3=["sabato","domenica"];

  if (orario1.includes(giornos)) 
    {
      document.getElementById("orario").textContent="il tuo giono lavorativo inizia alle 8:00 e finisce alle 16:00";
    }
  
  else if (orario2.includes(giornos)) 
    {
      document.getElementById("orario").textContent="il tuo giono lavorativo inizia alle 8:00 e finisce alle 15:00";
    }
  
  else if (orario3.includes(giornos)) 
    {
      document.getElementById("orario").textContent="oggi è il tuo giorno libero riposa";
    }
  
  else 
    {
      document.getElementById("orario").textContent="metti un giorno esistente";
    }
}

document.getElementById("b1").addEventListener("click",orariolavoro);