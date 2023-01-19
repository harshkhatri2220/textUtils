import React, { useState } from "react";

export default function Textform(props) {
  const handleUpclick = () => {
    // console.log("uppercase was clicked " + Text);
    let newText = Text.toUpperCase();
    setText(newText);
  };
  const handleLoclick = () => {
    // console.log("uppercase was clicked " + Text);
    let newText = Text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("onchange was clicked");
    setText(event.target.value);
  };
  const handleclearText = () => {
    setText("");
  };
  const [Text, setText] = useState("Enter text here"); // here "useState" is a hook
  // Text is a value whose initial value is "enter text here"
  //and setext is function through which we can change value of Text
  //here Text is a state
  return (
    <>
      <div className="container" >
        <form>
          <div className="form-group" >
            <h1 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h1>
            <textarea
              className="form-control"
              id="myBox"
              rows="8"
              value={Text}
              onChange={handleOnChange}
              style={{backgroundColor:props.mode==='dark'?'black':'white', color:props.mode==='light'?'black':'white'}}
              // style={{color:props.mode==='light'?'black':'white'}}
            ></textarea>
          </div>
        </form>
        <button className="btn btn-primary my-3" onClick={handleUpclick}>
          convert to Upercase
        </button>
        <button className="btn btn-primary my-3 mx-1" onClick={handleLoclick}>
          convert to Lowercase
        </button>
        <button className="btn btn-primary my-3 mx-1" onClick={handleclearText}>
          Clear Text
        </button>
      </div>

      <div className="container my-3" style={{color:props.mode=='light'?'black':'white'}}>{props.heading}
        <h1>your text summary</h1>
        <p>
          your text has {Text.split(" ").length} words and {Text.length}{" "}
          characters
        </p>

        <h2>Priview</h2>
        <p>{Text}</p>
      </div>
    </>
  );
}
