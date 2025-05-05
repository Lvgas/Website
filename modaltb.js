document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalText = document.getElementById("modal-text");
    const closeButton = document.querySelector(".close-button");
  
    const buttons = document.querySelectorAll(".btn");
  
    buttons.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
  
        const title = this.dataset.title;
        const text = this.dataset.text;
  
        modalTitle.textContent = title;
        modalText.textContent = text;
        modal.style.display = "block";
      });
    });
  
    closeButton.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  