const yesBtn = document.querySelector("#yesBtn");

yesBtn.addEventListener("click",function() {
  alert("Mmmh... espero no hayas estado intentando clickear el otro botón😞😾💔 mentiraaa🥺, sabía tu respuesta🤍... Ojo que yo te quiero más🥰 Ahora, escanea el código QR Azul👀");
});

const noBtn = document.querySelector("#noBtn");

noBtn.addEventListener("mouseover", function(){
  const randomX = parseInt(Math.random()*100);
  const randomY = parseInt(Math.random()*100);
  noBtn.style.setProperty("top",randomY+"%");
  noBtn.style.setProperty("left",randomX+"%");
  noBtn.style.setProperty("transform","translate(-${randomX}%,-${randomY}%)");
})
