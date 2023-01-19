import React, { useState } from "react";
import { useParams } from "react-router-dom";
function AboutLayout() {
  const brief = [
    { id: 1, briefStory: "Our Clients" },
    { id: 2, briefStory: "Our Sponsers" },
    { id: 3, briefStory: "Our Duty" },
    { id: 4, briefStory: "Our Goal" },
  ];

  const [input, setInput] = useState(brief);
  const { id } = useParams();
  return (
    <div>
      <h1>About Layout is here brother!</h1>
      {input.map((e) => {
        // if (e.id == id) {
        return (
          <div>
            <ul>
              <li></li>
            </ul>
            <h2>Main funds from {e.id}</h2>
            <p>Main pillars {e.briefStory}</p>
          </div>
        );
        // }
      })}
    </div>
  );
}

export default AboutLayout;
