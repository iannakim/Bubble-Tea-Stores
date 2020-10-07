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


  handleDelete = () => {
    fetch(`http:localhost:3000/stores/${this.props.store.id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then((deletedObj) => {
        this.props.deleteStoreFromState(deletedObj.id)
      })

  }


  render(){
    // In class components, write your console.log above your return, below your render

    let {storeName, orders} = this.props.store

    return(
      <li className="container">
          <img src="https://ih1.redbubble.net/image.1006770049.1439/flat,750x1000,075,f.jpg" alt="bubble tea"></img>
          <button className="delButton" onClick={this.handleDelete}>
            x
          </button>
          <p>Store Name: <span>{storeName}</span></p>
          <button onClick={ this.handleOrderClick } >
            Orders: {orders}
          </button>
      </li>


    )
  }
}


export default Store