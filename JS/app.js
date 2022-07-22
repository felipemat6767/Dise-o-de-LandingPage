var contenedor = document.querySelector('.slider'),
    btnizquierdo = document.getElementById('btn-izq'),
    btnderecho = document.getElementById('btn-der')


btnderecho.addEventListener("click", function () {
    console.log("Hello")
    contenedor.scrollLeft += contenedor.offsetWidth;

})

//Evento para el boton izquierdo

btnizquierdo.addEventListener("click", function () {
    contenedor.scrollLeft -= contenedor.offsetWidth;
})

//Obtener Fecha del dia de hoy

date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
document.getElementById("current_date").innerHTML = "Fecha Actual: " + month + "/" + day + "/" + year + ": " + "AFP Actual: 33.073,68";
//document.getElementById("current_date").appendChild(p)

var formulario = document.getElementById("formulario")

function validar(e) {
    e.preventDefault()
    var inputnombre = document.getElementById("nombre").value,
        inputapellido = document.getElementById("apellido").value,
        inputnumero = document.getElementById("numero").value,
        inputedad = document.getElementById("edad").value,
        inputemail = document.getElementById("email").value,
        modal = document.getElementById("myModal"),
        span = document.getElementsByClassName("close"),
        respuestaform = document.getElementById("Respuesta-form")

    if (inputnombre == 0 || inputemail == 0 || inputapellido == 0 || inputedad == 0 || inputnumero == 0) {
        e.preventDefault();
        alert("Falta completar informacion")
    } else {
        alert("Informacion enviada")
        e.preventDefault();
        respuestaform.innerHTML = "Gracias por cotizar con nosotros " +  inputnombre + " " + inputapellido + " uno de nuestros ejecutivos te llamara al telefono " + inputnumero + " y enviará un correo  al correo: " + inputemail
        modal.style.display = "block";
        span.onclick = function () {
            modal.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        inputnombre = "";
        inputemail = "";
    }

}

//Evento del formulario
formulario.addEventListener("submit", validar)


