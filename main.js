
  const boton = document.getElementById("boton");

        boton.addEventListener("mouseover", function() {
        let x = Math.floor(Math.random() * (window.innerWidth - boton.offsetWidth));
        let y = Math.floor(Math.random() * (window.innerHeight - boton.offsetHeight));
        
        if (x < 0) {
            x = 0;
        }
        
        if (y < 0) {
            y = 0;
        }
        
        boton.style.left = x + "px";
        boton.style.top = y + "px";
        });

 