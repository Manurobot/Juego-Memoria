

var cuerpo = document.getElementById('cuerpo');

cuerpo.addEventListener('click',function(e){
    document.getElementById('caraFrente').style.transition = "opacity 5s";
    document.getElementById('caraFrente').style.opacity = "0%";
    document.getElementById('caraFrente').remove(); 
    console.log(document.getElementById('caraAtras'));
    document.getElementById('caraAtras').style.transition = "opacity 2s";
    document.getElementById('caraAtras').style.opacity = "0%";
    document.getElementById('caraAtras').innerHTML = `
    <img src="https://i.pinimg.com/236x/15/35/4c/15354cf0b58abb4b7f1047efeb240159.jpg"
    alt="LSM A" style="width: 150px; height: 200px;">`;
})