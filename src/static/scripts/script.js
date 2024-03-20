const stubForm = document.querySelector('[data-stub]')
const workingForm = document.querySelector('[data-working]')
const hiddenButton = document.querySelectorAll('[data-hiddenButton]')
const background = document.querySelectorAll('[data-background]')
const closedButton = document.querySelector('[data-closedButton]')
const body = document.querySelector('body')



hiddenButton.forEach(element => {
	element.addEventListener('click', () => {
		stubForm.classList.remove('application--stub')
		workingForm.classList.add('application--working')
		background[0].classList.add('application--background')
		body.style.overflowY = 'hidden'
	})
})

closedButton.addEventListener('click', () => {
	stubForm.classList.add('application--stub')
	workingForm.classList.remove('application--working')
	background[0].classList.remove('application--background')
	body.style.overflowY = ''
})

