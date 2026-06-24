const subs_button = document.getElementById('subs_life');
const add_button = document.getElementById('add_life');
const subs_Xbutton = document.getElementById('subs_Xlife');
const add_Xbutton = document.getElementById('add_Xlife');
const life_txt = document.getElementById('life_txt');
const reset_btn = document.getElementById('reset_btn');

const cmd_1_btn = document.getElementById('cmd_1_btn');
const cmd_2_btn = document.getElementById('cmd_2_btn');
const cmd_3_btn = document.getElementById('cmd_3_btn');
const cmd_1_mns_btn = document.getElementById('cmd_1_mns_btn');
const cmd_2_mns_btn = document.getElementById('cmd_2_mns_btn');
const cmd_3_mns_btn = document.getElementById('cmd_3_mns_btn');

const btnSett = document.getElementById('btn_sett');
const menuSett = document.getElementById('menu_sett');
const btnCloseSett = document.getElementById('btn_close_sett');
const themeSelect = document.getElementById('theme_select');

const opponents_nmb = document.getElementById('opponents_select');
const cmd_cont_list = document.querySelectorAll('.single_cmd_cont')

let life_count = 40;
let cmd_1_count = 0;
let cmd_2_count = 0;
let cmd_3_count = 0;

let death_color = "rgb(206, 10, 10)";

function update_gamestate(){
    life_txt.textContent = life_count;
    cmd_1_btn.textContent = cmd_1_count;
    cmd_2_btn.textContent = cmd_2_count;
    cmd_3_btn.textContent = cmd_3_count;

    life_txt.style.color = "";
    cmd_1_btn.style.color = "";
    cmd_2_btn.style.color = "";
    cmd_3_btn.style.color = "";

    let is_dead = false;

    if (cmd_1_count >= 21){
        is_dead = true;
        cmd_1_btn.style.color = death_color;
    };

    if (cmd_2_count >= 21){
        is_dead = true;
        cmd_2_btn.style.color = death_color;
    };

    if (cmd_3_count >= 21){
        is_dead = true;
        cmd_3_btn.style.color = death_color;
    };

    if (life_count <= 0){
        is_dead = true;
    };

    if (is_dead){
        life_txt.style.color = death_color;
    };

    save_state();
};

function update_opp(){
    let selected_nmb = parseInt(opponents_nmb.value);

    for(let i = 0; i < cmd_cont_list.length; i++){
        if (i < selected_nmb){
            cmd_cont_list[i].style.display = "flex";
        }else{
            cmd_cont_list[i].style.display = "none";
        }
    }
};

function save_state(){
    localStorage.setItem("saved_life", life_count);
    localStorage.setItem("saved_cmd1", cmd_1_count);
    localStorage.setItem("saved_cmd2", cmd_2_count);
    localStorage.setItem("saved_cmd3", cmd_3_count);
    localStorage.setItem("saved_theme", themeSelect.value);
    localStorage.setItem("saved_opp", opponents_nmb.value);
};

function load_state(){
    if (localStorage.getItem("saved_life") !== null){
        life_count = localStorage.getItem("saved_life");
        cmd_1_count = localStorage.getItem("saved_cmd1");
        cmd_2_count = localStorage.getItem("saved_cmd2");
        cmd_3_count = localStorage.getItem("saved_cmd3");
    };

    if (localStorage.getItem("saved_theme") !== null){
        themeSelect.value = localStorage.getItem("saved_theme");
        document.body.setAttribute('data-theme', themeSelect.value);
    };

    if (localStorage.getItem("saved_opp") !== null){
        opponents_nmb.value = localStorage.getItem("saved_opp");
    };

    update_gamestate();
    update_opp();
};

subs_button.addEventListener('click', function(){
    life_count--;
    update_gamestate();
});

add_button.addEventListener('click', function(){
    life_count++;
    update_gamestate();
});

subs_Xbutton.addEventListener('click', function(){
    life_count -= 10;
    update_gamestate();
});

add_Xbutton.addEventListener('click', function(){
    life_count += 10;
    update_gamestate();
});

cmd_1_btn.addEventListener('click', function(){
    cmd_1_count++;
    life_count--;
    update_gamestate();
});

cmd_2_btn.addEventListener('click', function(){
    cmd_2_count++;
    life_count--;
    update_gamestate();
});

cmd_3_btn.addEventListener('click', function(){
    cmd_3_count++;
    life_count--;
    update_gamestate();
});

cmd_1_mns_btn.addEventListener('click', function(){
    if (cmd_1_count > 0){
        cmd_1_count--;
        life_count++;
        update_gamestate();
    }
});

cmd_2_mns_btn.addEventListener('click', function(){
    if (cmd_2_count > 0){
        cmd_2_count--;
        life_count++;
        update_gamestate();
    }
});

cmd_3_mns_btn.addEventListener('click', function(){
    if (cmd_3_count > 0){
        cmd_3_count--;
        life_count++;
        update_gamestate();
    }
});

reset_btn.addEventListener('click', function(){
    life_count = 40;
    cmd_1_count = 0;
    cmd_2_count = 0;
    cmd_3_count = 0;
    update_gamestate();
});

btnSett.addEventListener('click', function(){
    menuSett.showModal();
});

btnCloseSett.addEventListener('click', function(){
    menuSett.close();
});

themeSelect.addEventListener('change', function(){
    document.body.setAttribute('data-theme', themeSelect.value);
    save_state();
    menuSett.close();
});

opponents_nmb.addEventListener('change', function(){
    update_opp();
    save_state();
    menuSett.close();
});

update_opp();
load_state();