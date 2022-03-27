

var cuerpo = document.getElementById('cuerpo');

cuerpo.addEventListener('click',function(e){
    document.getElementById('caraFrente').style.transition = "opacity 2s";
    document.getElementById('caraFrente').style.opacity = "0%";
    document.getElementById('caraAtras').style.transition = "opacity 2s";
    document.getElementById('caraAtras').style.opacity = "100%";
})