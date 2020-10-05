import React from 'react'

// Class Components: Need a function called 'render' that returns ONE chunk of JSX
  // Class Components should be capitalized
  // Class Components gets their props via 'this.props'


  // State can only exist inside of a class component
  // Anything dynamically rendered in your frontend application should come from state somewhere

    //setState --> triggers a rerender -> modifies the DOM

class Store extends React.Component{
  // event listeners should be defined in the same place as its being passed in
    // your event listeners inside class components should be arrow functions
  
  
  state = {
    count: 10,
    open: true
  }


  
    handleOrderClick = (evt) => {
    // Using arroa functions make 'this' the instance
      // Using 'bind' is annoying

    // Anytime that state needs to chage, use 'this.setState'
      //setState triggers a rerender
    let partialStateOnj = {count: this.state.count +1}
    this.setState(partialStateOnj)

    //SECOND ARGUMENT of this.setState is a callback
    //this.setState({}, () => {
      // What to do after state has changed
    // })

    // Anytime that your new state is dependent on your old state,
    // you might want to use functional setState
        //the return value of the callback is a POJO
        //that POJO gets merged into old state

      // this.setState((oldState) => {
      //   return {
      //     count: oldState.count +1
      //   }

      // })



  }



  render(){
    console.log("STATE", this.state)
    // In class components, write your console.log above your return, below your render
    return(
      <li className="container">
        <img src="https://image.spreadshirtmedia.com/image-server/v1/mp/designs/1022374492,width=178,height=178,version=1555513711/cute-kawaii-bubble-tea-tshirt-boba-milk-tea-lover.png" alt="buble tea"></img>
        <p>Store Name: <span>{this.props.storeName}</span></p>
        <button onClick={ this.handleOrderClick } >Orders: {this.state.count}</button>
      </li>


    )
  }
}


export default Store