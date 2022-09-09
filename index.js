const title = document.querySelector('#main-heading')
const listItems = document.querySelectorAll('.list-items')

listItems.forEach(item => {
    item.style.fontSize = '24px'
})
title.style.color = 'red'