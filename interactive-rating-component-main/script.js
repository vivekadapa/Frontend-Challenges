const main = document.querySelector("main");
const thankyou = document.querySelector(".thankyou");
const submit = document.getElementById("submit");
const button = document.querySelectorAll(".btn");
const rate = document.querySelector(".rated")




submit.addEventListener('click',function(){
        thankyou.classList.remove("d-none");
        main.style.display = "none";
})

button.forEach(btn => {
    btn.addEventListener('click',function(){
        rate.innerHTML = btn.innerHTML;
    })
});




