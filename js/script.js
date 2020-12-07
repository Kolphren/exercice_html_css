var basket = 0;

function addBasket(){
    basket ++;
    document.getElementById('basket').innerHTML = ('Panier : ' + basket);
}

var buttons = document.querySelectorAll('#add');
    buttons.forEach(element => {
        element.addEventListener('click', addBasket);
    });
