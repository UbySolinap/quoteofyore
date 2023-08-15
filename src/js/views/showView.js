import { QUOTE_SEC, TIMEOUT_SEC } from "../configuration";

class ShowView {
  _parentElement = document.querySelector(".intro-div");
  _features = document.querySelector(".features");
  _philosophyBtns = document.querySelectorAll(".btn-philosophy");

  render(data) {
    const markup = this._generateMarkup(data);
    this._parentElement.innerHTML = "";
    // Disable all the philosophy button first
    this._disablePhilosophyButtons();
    this._parentElement.classList.add("quotes-div");

    this._parentElement.insertAdjacentHTML("afterbegin", markup);

    // Render the feature buttons after the render of quotes
    this._showFeatures(data);

    // Enable the philosophy button after a period of time
    setTimeout(() => {
      this._enablePhilosophyButtons();
    }, TIMEOUT_SEC);
  }

  _generateMarkup(data) {
    return `
        <p class="quote">
            "${data.quote}"
        </p>
        <p class="quote-author">- ${data.author}</p>
        
    `;
  }

  _generateFeatures(data) {
    return `
      <button class="features-btn regenerate-btn" data-id="${data.philosophy}">
        <i class="fa-solid fa-shuffle"></i>
      </button>
      <button class="features-btn copy-btn">
        <i class="fa-regular fa-clipboard"></i>
      </button>
      <a class="features-btn btn twitter-btn" href='https://twitter.com/intent/tweet?text="${data.quote}" - ${data.author}' target="_blank">
        <i class="fa-brands fa-twitter"></i>
      </a>
    `;
  }

  _showFeatures(data) {
    this._features.innerHTML = "";
    this._features.classList.remove("hidden");
    const markup = this._generateFeatures(data);
    setTimeout(() => {
      this._features.insertAdjacentHTML("afterbegin", markup);
    }, TIMEOUT_SEC);
  }

  renderWait() {
    this._parentElement.innerHTML = "";
    this._parentElement.classList.remove("quotes-div");
    this._features.classList.add("hidden");
    const markup = `
    <h1 class="wait">Please wait while the quote is being generated...</h1>
    `;
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _disablePhilosophyButtons() {
    this._philosophyBtns.forEach((btn) => {
      // btn.setAttribute("disabled", "disabled");
      btn.disabled = true;
    });
  }

  _enablePhilosophyButtons() {
    this._philosophyBtns.forEach((btn) => {
      // btn.removeAttribute("disabled");
      btn.disabled = false;
    });
  }
}

export default new ShowView();
