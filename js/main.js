// Define 
const sideMenu = document.getElementById('sideMenuItem');
const qoute = document.getElementById('qoute');
const dropDwon = document.getElementById('dropDwonContent');



// Toggle Menu
function toggleMenu() {
    sideMenu.classList.toggle('hiden-menu');
    qoute.classList.toggle('d-none');
    document.querySelector('body').classList.toggle('overflow-y-hidden');
}

function close() {
    sideMenu.classList.toggle('hiden-menu');
}




let items = [];

function addItems() {
    event.preventDefault();
    let getItem = document.getElementById('item').value;
    if (getItem) {
        items.push(getItem);
    }
    // Looping
    var list = ''
    for (var x of items) {
        list += `
           
                <li >${x}</li>
           
        `
    }
    document.getElementById('list').innerHTML = list

    document.getElementById('item').value = '';
}