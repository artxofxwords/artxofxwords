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

  async function handleFormSubmit(e) {
    e.preventDefault();

    const body = {
      guestName: localStorage.getItem("guestName"),
      colors: colors,
      colorsComment: e.target.colorsComment.value,
      layout: layout,
      layoutComment: e.target.layoutComment.value,
      favoriteProject: e.target.favoriteProject.value,
      favoriteProjectWhy: e.target.favoriteProjectWhy.value,
      otherComment: e.target.otherComment.value,
    };
    console.log("body for post feedback", body);

    const response = await fetch(`http://localhost:3000/feedback/newFeedback`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log("response from post feedback", response);

    if (response.status === 200) {
      setSuccessFeedback("Thanks for your thoughts!");

      setTimeout(() => setSuccessFeedback(""), 3000);
    } else {
      setErrorFeedback(
        "Oh dear, something went wrong, feedback not submitted."
      );

      setTimeout(() => setErrorFeedback(""), 3000);
    }

    console.log(data);
    e.target.reset();
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div style={{
          display: "inline-flex",
          flexDirection: "column",
          rowGap: "8px",
          marginLeft: "3vw"
        }}>
        <h1
          style={{
            display: "flex",
            width: "85vw",
            color: "white",
            fontSize: "2.3em",
            textShadow: "1px 1px 2px #f4d2c8",
            padding: "4px",
          }}
        >
          Feedback Form
        </h1>
        <div
          style={{
            display: "inline-flex",
            flexDirection: "row",
            columnGap: "12px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <label htmlFor="colors">
            What do you think of the website colors?
          </label>
          <Button
            style={{
              display: "flex",
              alignItems: "center",
              color: "#ffffff",
              backgroundColor: "#d97271",
              border: "solid white",
              borderRadius: "8px",
              height: "3vh",
            }}
            onClick={() => setColorsToggle(!colorsToggle)}
          >
            {colors}
          </Button>

          <label htmlFor="colorsComment">Can you explain?</label>
          <input
            type="colorsComment"
            name="colorsComment"
            id="colorsComment"
            placeholder="comments"
            style={{
              borderRadius: "8px",
              border: "0px",
              height: "3vh",
            }}
          />
        </div>

        <div
          style={{
            display: "inline-flex",
            flexDirection: "row",
            columnGap: "12px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <label htmlFor="layout">
            What do you think of the website layout?
          </label>
          <Button
            style={{
              display: "flex",
              alignItems: "center",
              color: "#ffffff",
              backgroundColor: "#d97271",
              border: "solid white",
              borderRadius: "8px",
              height: "3vh",
            }}
            onClick={() => setLayoutToggle(!layoutToggle)}
          >
            {layout}
          </Button>

          <label htmlFor="layoutComment">Can you explain?</label>
          <input
            type="layoutComment"
            name="layoutComment"
            id="layoutComment"
            placeholder="comments"
            style={{
              borderRadius: "8px",
              border: "0px",
              height: "3vh",
            }}
          />
        </div>

        <div
          style={{
            display: "inline-flex",
            flexDirection: "row",
            columnGap: "12px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <label htmlFor="favoriteProject">
            Which project was your favorite?
          </label>
          <input
            type="favoriteProject"
            name="favoriteProject"
            id="favoriteProject"
            placeholder="favorite project"
            style={{
              borderRadius: "8px",
              border: "0px",
              height: "3vh",
            }}
          />

          <label htmlFor="favoriteProjectWhy">Why?</label>
          <input
            type="favoriteProjectWhy"
            name="favoriteProjectWhy"
            id="favoriteProjectWhy"
            placeholder="explanation"
            style={{
              borderRadius: "8px",
              border: "0px",
              height: "3vh",
            }}
          />
        </div>

        <div
          style={{
            display: "inline-flex",
            flexDirection: "row",
            columnGap: "12px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <label htmlFor="otherComment">Other Comments</label>
          <input
            type="otherComment"
            name="otherComment"
            id="otherComment"
            placeholder="comments"
            style={{
              borderRadius: "8px",
              border: "0px",
              height: "3vh",
              width: "20vw"
            }}
          />
        </div>

        <span style={{ color: "green" }}>{successFeedback}</span><span style={{ color: "red" }}>{errorFeedback}</span>
        <Button
          style={{
            display: "flex",
            alignItems: "center",
            color: "#ffffff",
            backgroundColor: "#d97271",
            border: "solid white",
            borderRadius: "8px",
            height: "4vh",
            width:"90px"
          }}
          type="submit"
        >
          Submit
        </Button>
        </div>
      </form>
    </div>
  );
}
