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



// const mainForm = document.forms.pupu

// const inputRadio = document.querySelector('[data-inputAtr]')

// console.log(inputRadio.target)

// const mainFormInput = mainForm.user
// const mainFormTextarea = mainForm.tel
// const inputRadioBtn = mainForm.radioButton

// mainForm.addEventListener("submit", ()=> {
// 	console.log(inputRadioBtn[0].checked)
// 	console.log(inputRadioBtn[1].checked)
// 	console.log(inputRadioBtn[2].checked)
// 	alert(mainFormInput.value + '    ' + mainFormTextarea.value)
// })


// console.log(mainFormInput.value)
// console.log(mainFormTextarea.value)



// function sendEmail() {


// var name = document.getElementsByName("user")[0].value;


// var email = document.getElementsByName("tel")[0].value;


// // const message = document.getElementsByName("message")[0].value;


// var subject = "Новое сообщение от Stone Ocean"


// var body = "Имя: " + name + " ";
// body += "Email: " + email + " ";
// body += "Сообщение:" + message;
// return window.open("mailto:misano4955@giratex.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body))
// console.log(body)
// alert()
// }

let form = document.querySelector('pupu');
const userName = document.querySelector('#name')
const userNumber = document.querySelector('#call')
const buttonInp = document.querySelector("#send")
console.log(serialize('pupu'))


buttonInp.onclick = function (event) {
	event.preventDefault ()
	console.log(userName.value)
	console.log(userNumber.value)
}


