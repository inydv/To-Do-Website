const body = document.body
const hiddenIcon = document.querySelectorAll('.icons')
const btn = document.querySelector('.btn')
const circle = document.querySelector('.circle')
const addToDo = document.querySelector('#main-2')
const main = document.querySelector('#main')

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
    // btn.classList.toggle('darkmode')
}

function changeModeToDark(){
    body.style.backgroundColor = '#1f1d1c'
    // btn.classList.toggle('darkmode')
}

addToDo.addEventListener('click', () => {
    const enterText = document.createElement('div')
    enterText.classList.add('content')
    enterText.innerHTML = `<input class="write-content" type="text" placeholder="Type Here...">
    <i class="fa-solid fa-circle-notch circle-2"></i>`
    main.appendChild(enterText)
})