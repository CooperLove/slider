import React, { useState } from "react";
import "./App.css";
import data from "./Data.js";

import MakeReview from "./components/MakeReview";
import Slider from "./components/Slider";

function App() {
  const [showReview, setShowReview] = useState(false);
  const toggleReviewForm = () => setShowReview(!showReview);
  const [people, setPeople] = useState(data);

  return (
    <section>
      <Slider toggleReviewForm={toggleReviewForm} people={people} />
      {showReview ? (
        <MakeReview
          people={people}
          setReviews={setPeople}
          toggleReviewForm={toggleReviewForm}
        />
      ) : (
        ""
      )}
    </section>
  );
}

export default App;
