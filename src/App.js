import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Event Handling</h1>

      <button id= "Mein Button ID"
      onClick={(e) => {
        console.log(e.target.value)}}

        onMouseEnter={() => {
          console.log("Maus ist auf Button")
        }}

       onMouseLeave={() => {
        console.log("Maus hat Button verlassen")
       }} 
  
      > 
      klick mich
      </button>


       <input type="checkbox"
       onChange={(e) => {
        console.log(e.target.checked)
       }}
       
       ></input>


       <input type="text"
       onKeyDown={(e) => {
        console.log(e.key)
       }}
       >
       </input>

    </div>
  );
}

