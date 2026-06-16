const subs_button = document.getElementById('subs_life');
const add_button = document.getElementById('add_life');
const life_txt = document.getElementById('life_txt');
const restart_btn = document.getElementById('restart_btn')

let life_count = 40;

subs_button.addEventListener('click', function(){
     life_count--;
     life_txt.textContent = life_count;
    if (life_count <= 0){
        life_txt.style.color = "rgb(206, 10, 10)";
    }else{
        life_txt.style.color = "";
    }
})

add_button.addEventListener('click', function(){
    life_count++;
    life_txt.textContent = life_count;
    if (life_count <= 0){
        life_txt.style.color = "rgb(206, 10, 10)";
    }else{
        life_txt.style.color = "";
    }
})

restart_btn.addEventListener('click', function(){
    life_count = 40;
    life_txt.textContent = "40";
    life_txt.style.color = "";
})