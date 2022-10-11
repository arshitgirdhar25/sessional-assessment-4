// import { useState } from "react";
// import Timer from "./components/Timer";
// import Todo from "./components/Todo"

// function App() {
//   const [toggle, setToggle] = useState(false)
//   return (
//     <div>

//       {/* TODO LIST  */}
//       {/* <h1>Todo List App</h1>
//       <hr/>
//       <Todo/> */}

//       { toggle ? <p> Alternate Component</p> : <Timer/>}
//       <button onClick={() => setToggle(!toggle)}> Toggle </button>
//     </div>
//   );
// }

// export default App;


import { useState } from "react";
import './App.css';
import { FaStar } from "react-icons/fa";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};



function App() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }


  return (
    <div className="container">
      <h2> React Ratings </h2>
      <div className="stars">
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
      <textarea className="text-area" placeholder="What's your experience?"/>

      <button className="btn"> Submit  </button>
      
    </div>
  );
};




export default App;