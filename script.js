let puntos = 0;
function realizarEjercicio(link) {
    puntos += 1;
    document.getElementById('puntos-num').textContent = puntos;
    actualizarMascota();
    window.open(link, '_blank');
}
function actualizarMascota() {
    const img = document.getElementById('mascota-img');
    if (puntos >= 11) {
        img.src = 'img/mascota3.png';
    } else if (puntos >= 6) {
        img.src = 'img/mascota2.png';
    } else {
        img.src = 'img/mascota1.png';
    }
}
