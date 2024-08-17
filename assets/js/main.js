function generateRandomString(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }
    return randomString;
}

function generate() {
    let ticketNumber = document.getElementById("ticketNumber")
    ticketNumber.innerHTML = generateRandomString(5)
}


const boxes = document.querySelectorAll('.box');
const buttons = document.querySelectorAll('.change-color');

// تحميل الألوان المحفوظة من localStorage
for (let i = 0; i < boxes.length; i++) {
    const boxColor = localStorage.getItem(`box${i + 1}`);
    if (boxColor) {
        boxes[i].style.backgroundColor = boxColor;
    }
}

// إضافة حدث النقر لتغيير لون المربعات عند النقر عليها
boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        box.style.backgroundColor = 'green';
        // حفظ اللون في localStorage
        localStorage.setItem(`box${index + 1}`, 'green');
    });
});

// إضافة حدث النقر للأزرار لتغيير لون المربعات عند النقر عليها
buttons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        event.stopPropagation(); // تمنع تنفيذ الحدث على المربع الأم عند النقر على الزر
        const box = boxes[index];
        box.style.backgroundColor = 'red';
        // حفظ اللون في localStorage
        localStorage.setItem(`box${index + 1}`, 'red');
    });
});

function WhatsApp() {
    let inputNumber = document.getElementById("number");
    let name = document.getElementById("name");

    let link = document.getElementById("WhatsApp");
    link.href = `http://wa.me/+20${inputNumber.value}/?text=انا ${name.value} من BSA، حضرتك سجلت معانا في Bio verse Sine Wave Verse فحابين نأكد علي حضرتك الحضور 
 ويرجي الانضمام سريعا الي الجروب التالي لمعرفة التفاصيل الخاصة بالحضور  
   https://chat.whatsapp.com/KV4R2FfIuoA0XLDMAspzLf`
}

let date = new Date()
let cc = document.querySelectorAll("#cc")

cc.forEach((e) => {
    e.innerHTML = `Design By BSA, cc ${date.getFullYear()}`
})
