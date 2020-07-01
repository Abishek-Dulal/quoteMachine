import React, { useState } from "react";
import { Quotes } from "./QuotesList";

import ShareBox from "./ShareBox";
import QuoteText from "./QuoteText";

import { Colors } from "./Colors";

export default function() {
  let [index, changeIndex] = useState(
    Math.floor(Math.random() * Quotes.length)
  );

  let handleChange = () => {
    let val = Math.floor(Math.random() * Quotes.length);
    let colval = Math.floor(Math.random() * Colors.length);
    changeIndex(val);
    let color = Colors[colval];
    document.body.style.background = color;
    document.getElementById("text").style.color = color;
    document.getElementById("author").style.color = color;
    document.getElementById("new-quote").style.background = color;
    Array.from(document.getElementsByTagName("a")).forEach(i => {
      i.style.background = color;
    });
  };

  return (
    <div id="quote-box">
      <QuoteText text={Quotes[index].quote} />
      <div id="author">- {Quotes[index].auther}</div>
      <ShareBox changeQuote={handleChange} />
    </div>
  );
}
