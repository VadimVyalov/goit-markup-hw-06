(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    no_scroll: document.querySelector("[data-html]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModalShow);
  refs.closeModalBtn.addEventListener("click", toggleModalHide);

  function toggleModalShow() {
    refs.modal.classList.toggle("is-hidden");
    refs.no_scroll.classList.toggle("no-scroll");  
    refs.modal.classList.toggle("modal-show");
  }

  function toggleModalHide() {
    refs.modal.classList.toggle("modal-show");
    refs.modal.classList.toggle("modal-hide");
    setTimeout(function () { refs.modal.classList.toggle("is-hidden"); 
        refs.no_scroll.classList.toggle("no-scroll"); 
        refs.modal.classList.toggle("modal-hide");
        }, 300);
    ;
  }
})();

