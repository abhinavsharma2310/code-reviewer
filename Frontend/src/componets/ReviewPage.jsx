import React, { useState, useEffect } from "react";
import "../App.css";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import Editor from "react-simple-code-editor";
import axios from "axios";

const ReviewPage = () => {
  const [code, setCode] = useState(`function sum() {
    return a + b;
  }`);
  const [review, setReview] = useState(""); // This stores the AI review output
  const [isReviewing, setIsReviewing] = useState(false);

  const handleReviewClick = () => {
    const leftPanel = document.querySelector(".left");
    const rightPanel = document.querySelector(".right");

    setIsReviewing(true);
    leftPanel.classList.add("glow");

    // Simulate review delay (e.g., 3 seconds)
    setTimeout(() => {
      leftPanel.classList.remove("glow");
      rightPanel.classList.add("shake");

      // Stop shaking after animation
      setTimeout(() => {
        rightPanel.classList.remove("shake");
      }, 500);

      setIsReviewing(false);
    }, 3000);
  };

  const reviewCode = async () => {
    try {
      const response = await axios.post("http://localhost:3000/ai/get-review" , { code });
      console.log(code)
      console.log(response.data);
      setReview(response.data); // Update the state with the review response
    } catch (error) {
      console.error("Error fetching review:", error);
    }
  };

  return (
    <main>
      <div className="left">
        <div className="code">
          <span>// Your code is here</span>
          <Editor
            value={code}
            onValueChange={(newCode) => setCode(newCode)} // Proper state update
            highlight={(code) =>
              prism.highlight(code, prism.languages.javascript, "javascript")
            }
            padding={10}
            style={{
              fontFamily: '"Fira Code", "Fira Mono", monospace',
              fontSize: 16,
              borderRadius: "10px", // Optional: Round the corners a bit
              height: "98%",
              width: "100%",
              backgroundColor: "black", // Dark background for better contrast
              color: "white", // White text for visibility
            }}
          />
        </div>
        <button
          className="review"
          onClick={() => {
            handleReviewClick();
            reviewCode();  // Ensure you call reviewCode here (not reviewcode)
          }}
          disabled={isReviewing}
        >
          {isReviewing ? "Reviewing..." : "Review"}
        </button>
      </div>

      <div className="right">
        <h3>AI Review Output</h3>
        <p>{review}</p> {/* Display the AI review output here */}
      </div>
    </main>
  );
};

export default ReviewPage;
