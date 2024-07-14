const Button = document.querySelectorAll('.img_button');
const contentItem = document.querySelectorAll('.content-item');

Button.forEach(function(element){
    element.addEventListener('click', open)
})

function open(evt){
    const target = evt.currentTarget;
    const button = target.dataset.button;
    const contentActive = document.querySelectorAll(`.${button}`);

    Button.forEach(function(item){
        item.classList.remove('btn_active')
    })

    target.classList.add('btn_active')

    contentItem.forEach(function(item){
        item.classList.remove('content-item-active')
    })

    contentActive.forEach(function(item){
        item.classList.add('content-item-active')
    })
}