
<script>


function sendEmail() {


const name = document.getElementsByName("name")[0].value;


const email = document.getElementsByName("email")[0].value;


const message = document.getElementsByName("message")[0].value;


const subject = "Новое сообщение от " + Stone Ocean;


const body = "Имя: " + name + " ";
body += "Email: " + email + " ";
body += "Сообщение:" + message;
window.open("mailto:youremail@example.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body));

}

</script>