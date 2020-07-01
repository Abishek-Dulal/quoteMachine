import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTumblr, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function(props) {
  return (
    <div id="share-box">
      <a id="#tweet-quote" href="twitter.com/intent/tweet">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a id="tumblr-quote " href="twitp">
        <FontAwesomeIcon icon={faTumblr} size="2x" />
      </a>
      <button id="new-quote" onClick={props.changeQuote}>
        New Quote
      </button>
    </div>
  );
}
