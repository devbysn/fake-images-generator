import "./App.css";
import React, { useState, useEffect } from "react";

import axios from "axios";

function App() {
  const [image, setImage] = useState("");

  const handleChange = () => {
    axios
      .get(
        "https://api.generated.photos/api/v1/faces?api_key=lERuwAxTCpSfUdRZKI0i5A&order_by=random&gender=female"
      )
      .then((res) => {
        const uri = res.data.faces[0].urls[4][512];
        uri && setImage(uri);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    // Update the document title using the browser API
    handleChange();
  });

  return (
    <div className="App">
      <h1>AI photo Generator</h1>
      {image && <img src={image} alt="AI Face" />}
      <button type="button" onClick={handleChange}>
        Show Another Image
      </button>
    </div>
  );
}

export default App;
