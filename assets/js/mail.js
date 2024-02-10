let sendEmail = document.getElementById("sendEmail")
let nameInput = document.getElementById("name")
let emailInput = document.getElementById("email")
let ticketInput = document.getElementById("ticket")

let ServiceID = "service_5vb9z9t";
let TemplateID = "template_ty6gr1l";

sendEmail.addEventListener('submit', (e)=>{
    e.preventDefault();
    const inputData = {
        name : nameInput.value,
        email : emailInput.value,
        ticket : ticketInput.value
    }
    emailjs.send(ServiceID, TemplateID, inputData)
    .then(()=> {
        alert("sucssec")
        location.reload()
    })
})