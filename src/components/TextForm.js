import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Clear Text", "success");
  };
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed Extraspaces", "success");
  }
    
  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
    

  };

  const [text, setText] = useState("");
  // setText("new text");)
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='dark'?'grey':'white',
          color:props.mode==='dark'?'white':'black'}}
          id="mybox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>
      Remove ExtraSpace
      </button>
      <button className="btn btn-primary mx-3 my-1" onClick={handleClearClick}>
        Clear Text
      </button>
      <button  className="btn btn-primary mx-2 my-1" onClick={() => {
         navigator.clipboard.writeText(text);}}>
        
        Copy Text
       </button>
     
     
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split("").length} words and {text.length} charcters</p>
      <p>{0.008 * text.split("").length}Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview it here" }</p>


    
    </div>
    </>
  );
  }
