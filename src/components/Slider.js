import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import $ from "jquery";

function Slider({ toggleReviewForm, people }) {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    var i = index + 1 >= people.length ? 0 : index + 1;
    setIndex(i);
  };
  const prevSlide = () => {
    var i = index - 1 < 0 ? people.length - 1 : index - 1;
    setIndex(i);
  };

  useEffect(() => {
    let slider = setInterval(() => {
      nextSlide(index);
    }, 5000);
    return () => clearInterval(slider);
  }, [index]);

  useEffect(() => {
    console.log("Hi", $(".reviewBtn"));
    $(".reviewBtn").animate({ width: "250px" }, 1000);
    setTimeout(function () {
      $(".reviewBtn").css("color", "white");
    }, 1000);
  }, []);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span> Reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          let pos = "nextSlide";
          if (index === personIndex) pos = "activeSlide";
          if (
            index - 1 === personIndex ||
            (index === 0 && personIndex === people.length - 1)
          )
            pos = "lastSlide";
          return (
            <article className={pos} key={id}>
              <img className="person-img" src={image} alt={title} />
              <h2>{name}</h2>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={() => prevSlide(index)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => nextSlide(index)}>
          <FiChevronRight />
        </button>
      </div>
      <button className="reviewBtn" onClick={() => toggleReviewForm()}>
        Make a reviews
      </button>
    </section>
  );
}

export default Slider;
