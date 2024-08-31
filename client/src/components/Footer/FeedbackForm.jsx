import { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";

export default function FeedbackForm() {
  const [colors, setColors] = useState("");
  const [colorsToggle, setColorsToggle] = useState(true);
  const [layout, setLayout] = useState("");
  const [layoutToggle, setLayoutToggle] = useState(true);

  const [successFeedback, setSuccessFeedback] = useState();
  const [errorFeedback, setErrorFeedback] = useState();

  useEffect(() => {
    if (colorsToggle) {
      setColors("I like them!");
    } else {
      setColors("I don't like them.");
    }
  }, [colorsToggle]);

  useEffect(() => {
    if (layoutToggle) {
      setLayout("I like it!");
    } else {
      setLayout("I don't like it.");
    }
  }, [layoutToggle]);

  // async function handleColors () {
  //     setColors(!colors);
  // }

  // async function handleLayout () {
  //     setLayout(!layout);
  // }

  async function handleFormSubmit(e) {
    e.preventDefault();

    const body = {
      colors: colors,
      colorsComment: e.target.colorsComment.value,
      layout: layout,
      layoutComment: e.target.layoutComment.value,
      favoriteProject: e.target.favoriteProject.value,
      favoriteProjectWhy: e.target.favoriteProjectWhy.value,
      otherComment: e.target.otherComment.value,
    };

    const response = await fetch("https://localhost:3000/feedbackForm", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = response.json();

    if (response.status === 200) {
      setSuccessFeedback("Thanks for your thoughts!");
    } else {
      setErrorFeedback(
        "Oh dear, something went wrong, feedback not submitted."
      );
    }

    console.log(data);
    e.target.reset();
  }

  return (
    <div>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <h1
          style={{
            display: "flex",
            width: "85vw",
            color: "white",
            fontSize: "2.3em",
            textShadow: "1px 1px 2px #f4d2c8",
            padding: "15px",
          }}
        >
          Feedback Form
        </h1>
        <div>
          <label htmlFor="colors">
            What do you think of the website colors?
          </label>
          {/* <input type="text" name="colors" id="colors" value={colorsToggle} /> */}
          <Button
            style={{
              display: "flex",
              alignItems: "center",
              color: "#ffffff",
              backgroundColor: "#d97271",
              border: "solid white",
              borderRadius: "8px",
              height: "4vh",
            }}
            onClick={() => setColorsToggle(!colorsToggle)}
          >
            {colors}
          </Button>
        </div>

        <div>
          <label htmlFor="colorsComment">Can you explain?</label>
          <input
            type="colorsComment"
            name="colorsComment"
            id="colorsComment"
            placeholder="comments"
          />
        </div>

        <div>
          <label htmlFor="layout">
            What do you think of the website layout?
          </label>
          {/* <input type="" name="" id="" placeholder="" /> */}
          <Button
            style={{
              display: "flex",
              alignItems: "center",
              color: "#ffffff",
              backgroundColor: "#d97271",
              border: "solid white",
              borderRadius: "8px",
              height: "4vh",
            }}
            onClick={() => setLayoutToggle(!layoutToggle)}
          >
            {layout}
          </Button>
        </div>

        <div>
          <label htmlFor="layoutComment">Can you explain?</label>
          <input
            type="layoutComment"
            name="layoutComment"
            id="layoutComment"
            placeholder="comments"
          />
        </div>

        <div>
          <label htmlFor="favoriteProject">
            Which project was your favorite?
          </label>
          <input
            type="favoriteProject"
            name="favoriteProject"
            id="favoriteProject"
            placeholder="favorite project"
          />
        </div>

        <div>
          <label htmlFor="favoriteProjectWhy">Why?</label>
          <input
            type="favoriteProjectWhy"
            name="favoriteProjectWhy"
            id="favoriteProjectWhy"
            placeholder="why"
          />
        </div>

        <div>
          <label htmlFor="otherComment">Other Comments</label>
          <input
            type="otherComment"
            name="otherComment"
            id="otherComment"
            placeholder="comments"
          />
        </div>

        <p style={{ color: "green" }}>{successFeedback}</p>
        <p style={{ color: "red" }}>{errorFeedback}</p>
        <Button
          style={{
            display: "flex",
            alignItems: "center",
            color: "#ffffff",
            backgroundColor: "#d97271",
            border: "solid white",
            borderRadius: "8px",
            height: "5vh",
          }}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
