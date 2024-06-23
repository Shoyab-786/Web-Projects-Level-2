hidden_c = document.querySelectorAll('.h_class');
w_class = document.querySelector('.w_class');
close_btn = document.querySelector('.close');

close_btn.addEventListener('click', () => {
    hidden_c.forEach(element => element.classList.toggle('v_class'));
    w_class.classList.toggle('w_class');

})


document.querySelector('.getMail').addEventListener('click', () => {
    alert("Send your mail to: shoyabm463@gmail.com");
})