const wrapper = document.querySelector('[data-wrapper]')
const ListItem = document.querySelector('[data-item]')
const number = document.querySelector('[data-number]')




wrapper.addEventListener('mouseover', (event) => {
	const item = +event.target.atributeList.contains('[data-item]')
	console.log(item);
	if (item === 1) {
		ListItem.insertAdjacentHTML ('beforeend', passHoverPattern(item))
	} else if (item === 2) {
		ListItem.insertAdjacentHTML ('beforeend', passHoverPattern(item))
	}
})

function passHoverPattern (num) {
	return `					
	<div data-index="${num}" class="gallery__fone">
		<button class="gallery__more button">Показать ещё</button>
	</div>`
}


