const yesBtn = document.querySelector("#yesBtn");

yesBtn.addEventListener("click",function() {
  alert("¡Hola! mira lo que voy aprendiendo jiji ¡Feliz Cumpleaños!🥳🎉🎁 (bueno, ambos sabemos que esto lo estas leyendo 3 días después🥴) Hey hey!... espero no hayas estado intentando clickear el otro botón😾💔 En verdad, ya sabía tu respuesta🤍... Aclaremos que yo te quiero mucho más🥰 Ahora, luego de este gran mensaje de alerta es hora de escanear el código QR Azul👀");
});

const noBtn = document.querySelector("#noBtn");

noBtn.addEventListener("mouseover", function(){
  const randomX = parseInt(Math.random()*100);
  const randomY = parseInt(Math.random()*100);
  noBtn.style.setProperty("top",randomY+"%");
  noBtn.style.setProperty("left",randomX+"%");
  noBtn.style.setProperty("transform","translate(-${randomX}%,-${randomY}%)");
})
