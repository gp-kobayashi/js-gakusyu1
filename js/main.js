
//ハンバーガーメニュー
{
    const btn = document.querySelector('.menu_button');
    const menu_container = document.querySelector('.menu_container');

    btn.addEventListener('click',() => {
        btn.classList.toggle('active');
        menu_container.classList.toggle('active');
        });
}


//スライド
{
    const images = ['img/01.jpg','img/02.jpg','img/03.jpg','img/04.jpg']
    const slideImg = document.getElementById('slide_img');
    const prev =document.getElementById('prev');
    const next =document.getElementById('next');
    let current = 0;

    next.addEventListener('click',function(){
        if(current + 1 < images.length){
            current++;
            slideImg.src = images[current];
        }
    });

    prev.addEventListener('click',function(){
        if(current > 0){
            current--;
            slideImg.src = images[current];
        }
    });
}

//モーダルウィンドウ
{
    const open =document.getElementById('modal-open');
    const modal_container =document.getElementById('modal-container');
    const modal_bg =document.getElementById('modal-bg');
    const close =document.getElementById('modal-close');

    open.addEventListener('click',() => {
        modal_container.classList.add('active')
        modal_bg.classList.add('active')
    });
    close.addEventListener('click',() => {
        modal_container.classList.remove('active')
        modal_bg.classList.remove('active')
    });
    modal_bg.addEventListener('click',() => {
        modal_container.classList.remove('active')
        modal_bg.classList.remove('active')
    });
}

//トグルメニュー
{
    const accordion =document.querySelector('.accordion_header');
    const accordion_content =document.querySelector('.accordion_content')

    accordion.addEventListener('click',() => {
        accordion_content.classList.toggle('active');
        });

}