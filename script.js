const body = document.body
const hiddenIcon = document.querySelectorAll('.icons')

const input = document.getElementById('input')
const btn = document.getElementById('btn')
const listContainer = document.getElementById('list-container')

const hides = document.querySelector('.bin')
const strike = document.querySelector('.strike')

// DARK MODE & Light Mode

let darkMode = true

hiddenIcon.forEach(icons => {
    icons.addEventListener('click',() => {
        removeHiddenIcon()
        icons.classList.add('hidden-icon')
    })
})

function removeHiddenIcon(){
    hiddenIcon.forEach(icons => {
        icons.classList.remove('hidden-icon')
    })

    if(darkMode === true) {
        changeModeToLight()
        darkMode = false
    } else if(darkMode === false) {
        changeModeToDark()
        darkMode = true
    }
}

function changeModeToLight(){
    body.style.backgroundColor = 'White'
}

function changeModeToDark(){
    body.style.backgroundColor = '#1f1d1c'
}

// ADDING LIST

btn.addEventListener('click', () => {
    let text = input.value;
    
    if (text !== "") {
        let list = document.createElement('li');
        list.classList.add('content')
        list.innerHTML = 
        `<p class="context">${text}</p>
        <i class="fa-regular fa-trash-can bin"></i>
        <i class="fa-solid fa-strikethrough strike"></i>`
        listContainer.insertBefore(list,listContainer.childNodes[0])
        input.value = ''
    }
})

// ADDING STRIKE

strike.addEventListener('click', e => {
    if (e.target.parentElement == 'LI') {
        e.target.parentElement.childNode[0].classList.toggle('unactive')
    }
})