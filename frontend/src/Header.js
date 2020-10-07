import React from 'react'

// Functional Component: Function that returns ONE chucnk of JSX (<></>)
  // Function name should be capitalized
  //functional components gets their props form the argument of the function


function Header(props){
  return(
    <div>
      <h1>{props.title}</h1>
    </div>
  
  ) 
}

// Write your exports

export default Header