import * as model from "./model.js";
import generateView from "./views/generateView.js";
import showView from "./views/showView.js";
import featuresView from "./views/featuresView.js";

const controlShowQuote = async function (id) {
  try {
    showView.renderWait();

    await model.loadQuotes(id);
    console.log(model.state.results);
    console.log(model.state.quote);

    // Render the quote
    showView.render(model.state.quote);
  } catch (err) {
    console.error(err);
  }
};

const controlClipboard = async function (text) {
  try {
    await navigator.clipboard.writeText(text);
    window.alert("Quote copied to clipboard.");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

const init = function () {
  generateView.addHandlerGenerateQuote(controlShowQuote);
  featuresView.addHandlerRegenerateQuote(controlShowQuote);
  featuresView.addHandlerCopyToClipboard(controlClipboard);
};

init();
