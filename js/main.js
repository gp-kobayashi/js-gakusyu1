
//ハンバーガーメニュー
{
    const btn = document.querySelector('.menu_button');
    const menu_container = document.querySelector('.menu_container');

    btn.addEventListener('click',() => {
        btn.classList.toggle('active');
        menu_container.classList.toggle('active');
        });
}


//スライドとモーダルウィンドウのテキスト
{
    const images_texts = [
        {image:'img/01.jpg',text:'1枚目の画像です'},
        {image:'img/02.jpg',text:'2枚目の画像です'},
        {image:'img/03.jpg',text:'3枚目の画像です'},
        {image:'img/04.jpg',text:'4枚目の画像です'},
    ];
    const slide_img = document.getElementById('slide_img');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const modal_text = document.getElementById('modal_text');
    let current = 0;

    next.addEventListener('click',() => {
        if(current + 1 < images_texts.length){
            current++;
            slide_img.src = images_texts[current].image;
            modal_text.textContent= images_texts[current].text;
        }
    });

    prev.addEventListener('click',() => {
        if(current > 0){
            current--;
            slide_img.src = images_texts[current].image;
            modal_text.textContent= images_texts[current].text;
        }
    });
}

    

//モーダルウィンドウ
{
    const open = document.getElementById('modal_open');
    const modal_container = document.getElementById('modal_container');
    const modal_bg = document.getElementById('modal_bg');
    const close = document.getElementById('modal_close');

    open.addEventListener('click',() => {
        modal_container.classList.add('active');
        modal_bg.classList.add('active');
    });
    close.addEventListener('click',() => {
        modal_container.classList.remove('active');
        modal_bg.classList.remove('active');
    });
    modal_bg.addEventListener('click',() => {
        modal_container.classList.remove('active');
        modal_bg.classList.remove('active');
    });
}

//トグルメニュー
{
    const accordion = document.querySelectorAll('.accordion_header');
    
    accordion.forEach((selected) => {
        selected.addEventListener('click',() => {
            const content = selected.nextElementSibling;
            content.classList.toggle('active');
            const icon = selected.querySelector('.accordion_icon');
            icon.classList.toggle('active');
        });
    });

    
}