const title = document.querySelector('#main-heading')



const ul = document.querySelector('ul')
const li = document.createElement('li')
ul.append(li)
li.classList.add('list-item')
li.innerText = 'Movie 6'
const listItems = document.querySelectorAll('.list-item')

listItems.forEach(item => {
    item.style.fontSize = '24px'
})

title.style.color = 'red'