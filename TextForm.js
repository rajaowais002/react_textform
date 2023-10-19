import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpclick = () =>{
        console.log("The button is clicked");
        setText("you have change the text");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleChange = (event) =>{
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');

  return (
    <>    <div>
        <h1>{props.heading} - {text}</h1>
        <label htmlFor="inputPassword5" className="form-label">password</label>
        <textarea className="form-control" value={text} onChange={handleChange}></textarea>
        <button className="btn btn-primary" onClick={handleUpclick}>convert to uppercase</button>
    </div>
    <div className="container my-3">
        <h1>YOur TExT will be here</h1>
        <p>{text.split(" ").length}words and {text.length}characters</p>

    </div>



    </>


  )
}
