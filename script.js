document.addEventListener("DOMContentLoaded", () => {
    const btnEmail = document.getElementById("btn-email");

    if (btnEmail) {
        btnEmail.addEventListener("click", function() {
            revelarEmail("felipe.bortoto.santos@edu.unifil.com.br"); 
        });
    }
});

function revelarEmail(email) {
    const container = document.getElementById("email-container");
    
    container.innerHTML = `<a href="mailto:${email}" class="email-revelado slide-up-anim">${email}</a>`;
}