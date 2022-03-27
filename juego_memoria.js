var cuerpo = document.getElementById('cuerpo');


cuerpo.addEventListener('click',function(e){
    var caraFrente = document.getElementById('caraFrente');

    if(!caraFrente.innerHTML)
    {
        caraFrente.style.transition = "opacity 1s";
        caraFrente.style.opacity = "100%";
        caraFrente.innerHTML = `<img src="https://scontent.fmex16-1.fna.fbcdn.net/v/t1.6435-9/109119284_1377724675760437_6163195043215968101_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_ohc=jvrfgloWoVAAX8ypw9m&_nc_ht=scontent.fmex16-1.fna&oh=00_AT_V8QCwXVeZF9-Rir-X07RVckVpqU5E8MVgxGI2-pN4mQ&oe=625E6569" 
        alt="LSM ASL" style="width: 150px; height: 200px;">`;
        document.getElementById('caraAtras').innerHTML = ``;
        document.getElementById('caraAtras').style.transition = "opacity 1s";
        document.getElementById('caraAtras').style.opacity = "0%";
    } else {
        caraFrente.style.transition = "opacity 1s";
        caraFrente.style.opacity = "0%";
        caraFrente.innerHTML = ``;
        document.getElementById('caraAtras').innerHTML = `<img src="https://i.pinimg.com/236x/15/35/4c/15354cf0b58abb4b7f1047efeb240159.jpg"
        alt="LSM A" style="width: 150px; height: 200px;">`;
        document.getElementById('caraAtras').style.position="absolute";
    document.getElementById('caraAtras').style.transition="transform 1s";
    document.getElementById('caraAtras').style.transform="rotateY(180deg)";
    document.getElementById('caraAtras').style.opacity = "100%";
    }


})