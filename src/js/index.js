const botaoTrailer = document.querySelector('.botao-trailer');
const modal = document.querySelector('.modal');
const fecharModal = document.querySelector('.fechar-modal');
const video = document.getElementById('video');
const linkVideo = video.src;

function alterarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alterarModal();
    video.setAttribute("src", linkVideo);
});

fecharModal.addEventListener("click", () => {
    alterarModal();
    video.setAttribute("src", "");
});



