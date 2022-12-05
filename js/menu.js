var menuIcon = document.querySelector('.icone-menu')
var ul = document.querySelector ('.ul');
var mainText = document.querySelector ('.main-text')

menuIcon.addEventListener('click',()=>{

    if (ul.classList.contains('ativo')) {
        ul.classList.remove('ativo');
    }else{
        ul.classList.add('ativo')
    }
})