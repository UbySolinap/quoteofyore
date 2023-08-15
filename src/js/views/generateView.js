class GenerateView {
  _parentElement = document.querySelector(".philosophies-div");

  addHandlerGenerateQuote(handler) {
    this._parentElement.addEventListener("click", (e) => {
      const selected = e.target.closest(".btn-philosophy");

      if (!selected) return;

      const id = selected.dataset.id;
      handler(id);
    });
  }
}

export default new GenerateView();
