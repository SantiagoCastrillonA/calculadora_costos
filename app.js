function complejidad() {
    let f_baja = parseInt(document.getElementById('baja').value);
    let f_media = parseInt(document.getElementById('media').value);
    let f_alta = parseInt(document.getElementById('alta').value);

    let total_dias = (f_baja * 5) + (f_media * 10) + (f_alta * 15);
    let total_costo = (total_dias * 8) * 30;

    // Actualizamos el resultado dentro de la función
    document.getElementById('resultado').textContent = `El tiempo total es de ${total_dias} dias y el costo total en dolares es de: $${total_costo.toFixed(2)}`;
}

const botonCalcular = document.getElementById('calcularBtn');

// Añadimos el eventListener para el clic
botonCalcular.addEventListener('click', function() {
    complejidad(); // Llamamos a la función complejidad() cuando el botón es clickeado
});
