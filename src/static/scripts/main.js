let selector = document.querySelector("#tel")
let im = new Inputmask("+7(999) 999-99-99")
im.mask(selector)

let validation = new JustValidate("form")

validation.addField("#name", [
  {
    rule: "required",
    errorMessage: "Введите имя!"
  },
  {
    rule: "minLength",
    value: 2,
    errorMessage: "Минимум 2 символа!"
  }
]).addField("#tel", [
  {
    validator: (value) => {
      const phone = selector.inputmask.unmaskedvalue()
      return Boolean(Number(phone) && phone.length > 0)
    },
    errorMessage: 'Введите телефон'
  },
  {
    validator: (value) => {
      const phone = selector.inputmask.unmaskedvalue()
      return Boolean(Number(phone) && phone.length === 10)
    },
    errorMessage: 'Введите телефон полностью'
  }
]).onSuccess(async function () {
  let data = {
    name: document.getElementById("name").value,
    tel: selector.inputmask.unmaskedvalue(),
    msg: document.getElementById("msg").value
  }

  let response = await fetch("mail.php", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  })

  let result = await response.text()
  const send = document.querySelector('[data-send]')
  
  send.style.transition = '.4s'
  opened()
setTimeout(() => {
	closed()
  }, 5000)


  function opened () {
	send.style.right = '30px'
  }

  function closed () {
	send.style.right = '-500px'
  }

})
