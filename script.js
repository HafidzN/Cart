let list = document.querySelectorAll('.ports .list .item');
list.forEach(item => {
    item.addEventListener('click', function(event){
        if(event.target.classList.contains('add')){
            var itemNew = item.cloneNode(true);
            let checkIsset  = false;

            let listCartPort = document.querySelectorAll('.cart .subchart-port .item');
            listCartPort.forEach(cart =>{
                if(cart.getAttribute('data-key') == itemNew.getAttribute('data-key')){
                    checkIsset = true;
                    cart.classList.add('danger');
                    setTimeout(function(){
                        cart.classList.remove('danger');
                    },1000)
                }
            })
            if(checkIsset == false){
                document.querySelector('.listCartPort').appendChild(itemNew);
            }
        }
    })
})
function Remove($key){
    let listCartPort = document.querySelectorAll('.cart .subchart-port .item');
    listCartPort.forEach(item => {
        if(item.getAttribute('data-key') == $key){
            item.remove();
            return;
        }
    })
}

let listSubscription = document.querySelectorAll('.subscriptions .list .item');
listSubscription.forEach(item => {
    item.addEventListener('click', function(event){
        if(event.target.classList.contains('add')){
            var itemNew = item.cloneNode(true);
            let checkIsset  = false;

            let listCartPort = document.querySelectorAll('.cart .subchart-subs .item');
            listCartPort.forEach(cart =>{
                if(cart.getAttribute('data-key') == itemNew.getAttribute('data-key')){
                    checkIsset = true;
                    cart.classList.add('danger');
                    setTimeout(function(){
                        cart.classList.remove('danger');
                    },1000)
                }
            })
            if(checkIsset == false){
                document.querySelector('.listCartSubscription').appendChild(itemNew);
            }

        }
    })
})

function RemoveSub($key){
    let listCartPort = document.querySelectorAll('.cart .subchart-subs .item');
    listCartPort.forEach(item => {
        if(item.getAttribute('data-key') == $key){
            item.remove();
            return;
        }
    })
}