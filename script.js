const body = document.body
const hiddenIcon = document.querySelectorAll('.icons')

const addToDo = document.querySelector('#main-2')

const form = document.querySelectorAll('.form')

const strike = document.querySelectorAll('.strike')
const writeContent = document.querySelectorAll('write-content')
const context = document.querySelector('.context')
const list = document.getElementsByTagName('li')


// DARK MODE
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


// CLICK TO ADD TYPING BOX
addToDo.addEventListener('click', () => {
    const enterText = document.createElement('li')
    enterText.innerHTML = 
    `<div class="content">
    <form class="form">
        <input class="write-content" type="text" placeholder="Type Here...">
    </form>
    <i class="fa-regular fa-trash-can bin"></i>
    <i class="fa-solid fa-strikethrough strike"></i>
    </div>`
    context.appendChild(enterText)
})

form.addEventListener('submit', (e) => {
    e.preventdefault()

    localStorage.setItem
})

// ADDING STRIKE
list.forEach(l => {
    l.addEventListener('click', () => {
        this.writeContent.classList.add('unactive')
    })
})