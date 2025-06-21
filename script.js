const btnAdd = document.querySelector('.btnAdd');
const inputFile = document.querySelector('.inputFile');
const list = document.querySelector('.list');
const btnClosed = document.querySelector('.btnClosed');
const liList = document.querySelector('.li_list');
const inpFile = document.querySelector('.inpFile');


btnAdd.addEventListener('click', () => {
    const id = Math.floor(Math.random() * 100);
    const inputValue = inputFile.value;
    const file = inpFile.files[0];

    if(inputFile.value === '') {
        inputFile.value = 'Задача не указана';
        return;
    };

    if(inputFile.value === 'Задача не указана') {
        inputFile.value = '';
        return;
    };

    const li = document.createElement('li');
    li.className = 'li_list';
    li.setAttribute('id', id);

    if(file) {
        const img = document.createElement('img');
        img.className = 'imgFile';
        img.setAttribute('src', URL.createObjectURL(file));

        li.appendChild(img);

    };

    const span = document.createElement('span');
    span.className = 'spanText';
    span.textContent = inputValue;

    const btn = document.createElement('button');
    btn.className = 'btnClosed';
    btn.setAttribute('data-id', id);
    btn.textContent = 'X';

    list.appendChild(li)
    li.appendChild(span);
    li.appendChild(btn);

    inputFile.value = '';

});

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('btnClosed')) {
       const li = e.target.closest('.li_list');
       if(li) {
        inpFile.value = '';
        li.remove();
       }
    }
});

