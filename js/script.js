var basket = 0;

// fonction pour ajouter un chiffre au panier virtuel
function addBasket(){
    basket ++;
    document.getElementById('basket').innerHTML = ('Panier : ' + basket);
}

// sélection des boutons "ajouter au panier"
var buttons = document.querySelectorAll('#add');
buttons.forEach(element => {
    element.addEventListener('click', addBasket);
});
