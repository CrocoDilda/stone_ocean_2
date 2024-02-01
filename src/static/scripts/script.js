// const wrapper = document.querySelector('[data-wrapper]')
// const ListItem = document.querySelector('[data-item]')
// const number = document.querySelector('[data-number]')
// const inputValue = document.querySelector("#name")


// function say () {
// 	console.log(inputValue)
// 	console.log(345345)
// }


// let timerId = setInterval(() => console.log(inputValue), 1000);


// wrapper.addEventListener('mouseover', (event) => {
// 	const item = +event.target.atributeList.contains('[data-item]')
// 	console.log(item);
// 	if (item === 1) {
// 		ListItem.insertAdjacentHTML ('beforeend', passHoverPattern(item))
// 	} else if (item === 2) {
// 		ListItem.insertAdjacentHTML ('beforeend', passHoverPattern(item))
// 	}
// })

// function passHoverPattern (num) {
// 	return `					
// 	<div data-index="${num}" class="gallery__fone">
// 		<button class="gallery__more button">Показать ещё</button>
// 	</div>`
// }


// const button = document.querySelector("[data-button]")


const mainForm = document.forms.pupu

const mainFormInput = mainForm.user
const mainFormTextarea = mainForm.tel

mainForm.addEventListener("submit", ()=> {
	alert(mainFormInput.value + '    ' + mainFormTextarea.value)
})


// console.log(mainFormInput.value)
// console.log(mainFormTextarea.value)
