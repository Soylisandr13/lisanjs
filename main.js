const edad = Number(prompt("¿Cuál es tu edad?"));

if (edad >= 18) {
    console.log("Eres mayor de edad");
    alert("¡Bienvenido!");
}else {
    console.log("Eres menor de edad");
    alert("Vuelve más tarde");
 document.body.innerHTML = "<h1>Acceso denegado</h1><p>Debes ser mayor de edad para ingresar.</p>";}