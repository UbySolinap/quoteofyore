import { QUOTES_API, BUDDHISM_API } from "./configuration";

export const state = {
  quote: {},
  results: [],
};

export const loadQuotes = async function (id) {
  try {
    let res, data;
    // Check first if buddhism is selected.
    if (id === "Buddhism") {
      res = await fetch(BUDDHISM_API);
      data = await res.json();
      state.results = [
        {
          id: data.id,
          quote: data.text,
          author: data.byName,
          philosophy: "Buddhism",
        },
      ];
    } else {
      res = await fetch(`${QUOTES_API}/${id}`);
      data = await res.json();
      state.results = data.map((quoteData) => {
        return {
          id: quoteData._id,
          quote: quoteData.quote,
          author: quoteData.source,
          philosophy: id,
        };
      });
    }

    // Choose a random quote from the selected philosophy
    let randomQuote;
    randomQuote =
      state.results[Math.floor(Math.random() * state.results.length)];
    // Prevents the displayed quote for appearing twice in a row
    while (randomQuote.id === state.quote.id) {
      randomQuote =
        state.results[Math.floor(Math.random() * state.results.length)];
    }
    state.quote = randomQuote;
  } catch (err) {
    console.error(err);
  }
};
