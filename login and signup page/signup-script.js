var form = document.querySelector('form');
var labels = document.querySelectorAll('label');
var inputs = document.querySelectorAll('input:not(input[type="submit"])');
var submit = document.querySelector('input[type="submit"]');
var signUp = document.querySelectorAll('#signup a');

form.addEventListener ("submit", function (e) {
    e.preventDefault();
});

submit.addEventListener('click' , function (){
    if (inputs[0].value == '') {
        inputs[0].style.border = '2px solid #C62828';
        inputs[0].style.boxShadow = '0 2px 5px #C62828, 0 1px 2.5px #B8B09C';

        var p = document.createElement('p');

        p.innerHTML = 'username required!';
        p.style.color = '#C62828';
        p.style.margin = '0px';
        p.style.paddingLeft = '15px';
        p.style.textAlign = 'left';
        form.appendChild(p);
        inputs[0].insertAdjacentElement('afterend',p);
    }

    if (inputs[1].value == '') {
        inputs[1].style.border = '2px solid #C62828';
        inputs[1].style.boxShadow = '0 2px 5px #C62828, 0 1px 2.5px #B8B09C';

        var p = document.createElement('p');

        p.innerHTML = 'email required!';
        p.style.color = '#C62828';
        p.style.margin = '0px';
        p.style.paddingLeft = '15px';
        p.style.textAlign = 'left';
        form.appendChild(p);
        inputs[1].insertAdjacentElement('afterend',p);
    }

    if (inputs[2].value == '') {
        inputs[2].style.border = '2px solid #C62828';
        inputs[2].style.boxShadow = '0 2px 5px #C62828, 0 1px 2.5px #B8B09C';

        var p = document.createElement('p');

        p.innerHTML = 'password required!';
        p.style.color = '#C62828';
        p.style.margin = '0px';
        p.style.paddingLeft = '15px';
        p.style.textAlign = 'left';
        form.appendChild(p);
        inputs[2].insertAdjacentElement('afterend',p);
    }
    else if ((inputs[0].value != '') && (inputs[1].value != '') && (inputs[1].value != '')){
        console.log(`username is : ${inputs[0].value} email is : ${inputs[1].value} password is : ${inputs[1].value}`);
        window.location.href = 'login.html';
    }
})