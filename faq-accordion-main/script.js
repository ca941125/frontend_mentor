function toggleAccordion(cardNumber) {
    let cardBody = document.getElementById('card-body-' + cardNumber);
    let icon = document.querySelector('icono');

    if (cardBody.style.display === 'block') {
        cardBody.style.display = 'none';
        icon.src = 'assets/images/icon-minus.svg'; // Cambiar a la imagen de cerrar
    } else {
        cardBody.style.display = 'block';
        icon.src = 'assets/images/icon-plus.svg'; // Cambiar a la imagen de abrir
    }
}