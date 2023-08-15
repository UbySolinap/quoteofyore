class FeaturesView {
  _parentElement = document.querySelector(".features");

  addHandlerRegenerateQuote(handler) {
    if (!this._parentElement.classList.contains("hidden")) {
      this._parentElement.addEventListener("click", (e) => {
        const regenerateBtn = e.target.closest(".regenerate-btn");

        if (!regenerateBtn) return;

        const philosophy = regenerateBtn.dataset.id;

        handler(philosophy);
      });
    }
  }

  addHandlerCopyToClipboard(handler) {
    this._parentElement.addEventListener("click", (e) => {
      const clipboardBtn = e.target.closest(".copy-btn");
      if (!clipboardBtn) return;

      const quote = document.querySelector(".quote").textContent;
      const quoteAutor = document.querySelector(".quote-author").textContent;

      const text = `${quote}\n${quoteAutor}`.trimStart();
      handler(text);
    });
  }
}

export default new FeaturesView();
