import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export default function(props) {
  return (
    <div id="text">
      <span>
        <FontAwesomeIcon icon={faQuoteLeft} />
      </span>
      {props.text}
    </div>
  );
}
