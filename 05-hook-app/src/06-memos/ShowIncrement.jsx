
import React from "react";
export const ShowIncrement = React.memo(({increment}) => {
    console.log(' I am called again :(');
  return (
   <button
   className="btn btn-primary"
   onClick={() =>{
    increment(5);
   }}>
    Increment
   </button>
  )
})
