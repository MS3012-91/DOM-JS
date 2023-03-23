const container = document.querySelector ('.container')
const el = document.querySelectorAll ('.element')

el.forEach ((e) =>  {
    e.addEventListener ('click', makeActive) 
}
)

function makeActive () {
    this.classList.add ('active');
    let x= getComputedStyle(this);
    let y =x.getPropertyValue('background-color')
    document.body.style.backgroundColor = y;
    this.removeEventListener ('click', makeActive)
    this.addEventListener ('click', makePassive)
}

function makePassive () {
    this.classList.remove ('active')
    document.body.style.backgroundColor = 'white';
    this.removeEventListener ('click', makePassive)
    this.addEventListener ('click', makeActive)
}


