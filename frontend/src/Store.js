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
      open: true
    }


    handleOrderClick = (evt) => {
      fetch(`http://localhost:3000/stores/${this.props.store.id}`, {
      method: "PATCH",
      headers: {
          "content-type": "Application/json"
      },
      body: JSON.stringify({
          orders: this.props.store.orders + 1
      })
  })
      .then(res => res.json())
      .then(updatedStore => {
          this.props.updateStoreFromState(updatedStore)
      })
}


  handleDelete = () => {
    fetch(`http://localhost:3000/stores/${this.props.store.id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then((deletedObj) => {
        this.props.deleteStoreFromState(deletedObj.id)
      })

  }


  // componentWillUnmount(){
  //   console.log("GOODBYE", this.props.store.storeName)
  // }


  toggleStore = (evt) => {
    this.setState({
      open: !this.state.open
    })
  }


  render(){
    // In class components, write your console.log above your return, below your render
    let drinkMenu = this.props.drinks.map((drink) => {
      // console.log(drink)
      return <li key={drink.id} >{drink.name}</li>
    })
    let {storeName, orders} = this.props.store

    return(
      <div className="container">
            <img 
            src="https://static.fabfitfun.com/magazine/wp-content/uploads/2019/01/31104253/Screen-Shot-2019-01-31-at-10.42.05-AM.jpg" 
            alt='Starbarks' 
            onClick={this.toggleStore}
            />
            <button className="delButton" onClick={this.handleDelete}>
                x
            </button>
            <p>{storeName}</p>
            <ul className="menu">{drinkMenu}</ul><br/>
            <button onClick={ this.handleOrderClick } >
                Orders: {orders}
            </button>
            { this.state.open ? <h6>Open</h6> : <h6>Closed</h6> }
      </div>


    )
  }
}


export default Store