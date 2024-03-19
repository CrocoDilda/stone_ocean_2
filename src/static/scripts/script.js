const hiddenBlock = document.querySelector('[data-hidden]')
const hiddenButton = document.querySelectorAll('[data-hiddenButton]')
const closedButton = document.querySelector('[data-closedButton]')
const body = document.querySelector('body')
const inputs = document.querySelectorAll('input')


hiddenBlock.style.transition = '.2s'
hiddenButton.forEach(element => {
	element.addEventListener('click', () => {
		body.style.overflowY = 'hidden'
		hiddenBlock.className = 'absolute'
	})
});

closedButton.addEventListener('click', () => {
	hiddenBlock.className = 'block_hidden'
	body.style.overflowY = 'scroll'
})

console.dir()
document.forms[1].name.placeholder = 'adsf'
