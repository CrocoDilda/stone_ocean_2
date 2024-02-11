
const servicesBtn = document.querySelector('[data-services-btn]')
const sercives = document.querySelector('[data-services]')
const advantagesBtn = document.querySelector('[data-advantages-btn')
const advantages = document.querySelector('[data-advantages]')
const galleryBtn = document.querySelector('[data-gallery-btn]')
const gallery = document.querySelector('[data-gallery]')
const contactsBtn = document.querySelector('[data-contacts-btn]')
const contacts = document.querySelector('[data-contacts]')

const hiddenBlock = document.querySelector('[data-hidden]')
const hiddenBtn = document.querySelector('[data-hiddenBtn]')
const closedBtn = document.querySelector('[data-closedBtn]')
const body = document.querySelector('[data-body]')


servicesBtn.addEventListener('click', e => {scroll(sercives)})
advantagesBtn.addEventListener('click', e => {scroll(advantages)})
galleryBtn.addEventListener('click', e => {scroll(gallery)})
contactsBtn.addEventListener('click', e => {scroll(contacts)})

function scroll(section) {
		section.scrollIntoView({ 
		block: 'start', // к ближайшей границе экрана
		behavior: 'smooth', // и плавно 
	})
}

hiddenBtn.addEventListener('click', () => {
	hiddenBlock.classList.remove('block_hidden')
	hiddenBlock.classList.add('absolute')
	body.classList.add('body--hidden')
})

closedBtn.addEventListener('click', () => {
	hiddenBlock.classList.remove('absolute')
	hiddenBlock.classList.add('block_hidden')
	body.classList.remove('body--hidden')
})

