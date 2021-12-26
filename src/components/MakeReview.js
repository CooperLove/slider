import React, { useEffect, useState } from "react";
import $ from "jquery";
// import ReactDOM from "react-dom";

function MakeReview({ setReviews, people, toggleReviewForm }) {
  const [img, setImg] = useState("");

  const setReviewImage = () => {
    if (
      document.getElementsByClassName("file-input")[0].files[0] !== undefined
    ) {
      loadFile(document.getElementsByClassName("file-input")[0].files[0]);
    }
  };

  var loadFile = function(file) {
    var image = document.getElementById("file-input");
    setImg(URL.createObjectURL(file));
  };

  const addNewReview = () => {
    if (!validateForm()) return;

    let newPeople = [...people];
    newPeople.push({
      id: people[people.length - 1].id + 1,
      image:
        img !== ""
          ? img
          : "https://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/256/user-2-icon.png",
      name: document.getElementsByClassName("name-input-field")[0].value,
      title: document.getElementsByClassName("job-input-field")[0].value,
      quote: document.getElementsByClassName("quote-input-field")[0].value,
    });
    setReviews(newPeople);
    toggleReviewForm();
  };

  const validateForm = () => {
    const name = $(".name-input-field").val();
    const job = $(".job-input-field").val();
    const quote = $(".quote-input-field").val();
    console.log(name.toString() && job.toString() && quote.toString());
    return name.toString() && job.toString() && quote.toString();
  };

  useEffect(() => {
    var el = document.getElementsByClassName("quote-input-field");
    var ele = document.getElementById(el[0].id);
    console.log("Abriu a review", ele.offsetTop);
    console.log(document.getElementsByClassName("file-input")[0].value);

    window.scrollTo({ top: ele.offsetTop, behavior: "smooth" });
  }, []);
  return (
    <form
      method="get"
      className="new-Review-Container"
      // onSubmit={handleSubmit(onSubmit)}
    >
      <div className="form">
        <div className="image-upload">
          <label htmlFor="file-input">
            <img
              className="file-img"
              src={
                img !== ""
                  ? img
                  : "https://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/256/user-2-icon.png"
              }
            />
          </label>

          <input
            id="file-input"
            accept="image/*"
            onChange={() => setReviewImage()}
            className="file-input"
            type="file"
          />
        </div>
        <div className="name-job">
          <label htmlFor="name-field" className="label-job">
            Name
          </label>

          <input
            id="name-field"
            className="name-input-field"
            type="text"
            required={true}
            placeholder="Ex: Pedro"
          />
          <label htmlFor="job-field" className="label-job">
            Job
          </label>
          <input
            id="job-field"
            className="job-input-field"
            type="text"
            required={true}
            placeholder="Ex: Web Developer"
          />
        </div>
      </div>
      <label htmlFor="quote-field">Quote</label>
      <input
        id="quote-field"
        className="quote-input-field"
        type="text"
        required={true}
      />
      <button
        type="submit"
        className="reviewBtn"
        onClick={() => addNewReview()}
        // onSubmit={handleSubmit(onSubmit)}
      >
        Confirm
      </button>
    </form>
  );
}
export default MakeReview;
