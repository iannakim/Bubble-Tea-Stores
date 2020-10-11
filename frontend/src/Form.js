import React from 'react'



class Form extends React.Component{
  //leave form empty
  state = {
    storeName: "",
    orders: ""
  }

//For you to use 'evt.target.name', the keys of your state have to match the name of your inputs.
  //[evt.target.name] = storeName , orders
   // this matches the keys of my state

  handleInputChange = (evt) => {
      this.setState({
        [evt.target.name] : evt.target.value
      })

      //evt.target.value is only going to return strings
          // parseInt to turn it into a number
  }


  handleSubmit = (evt) => {
      evt.preventDefault()
        fetch("http://localhost:3000/stores", {
          method: "POST",
          headers: {"Content-Type": "Application/json"},
          body: JSON.stringify({
            storeName: this.state.storeName,
            orders: this.state.orders
          })
        })
        .then(res => res.json())
        .then((newlyCreatedStore) => {
          this.props.addStoreToState(newlyCreatedStore)
        })
  }



    render(){
      // console.log(this.state)
      return(
        <div>
            <h2>Open up a franchise!</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="s_name">Name</label>
                    <input type="text"
                      id="s_name"
                      value={this.state.storeName}
                      onChange={this.handleInputChange}
                      name="storeName"
                    />
                    <label htmlFor="s_order">Order</label>
                    <input type="number" 
                      id="s_order"
                      value={this.state.orders} 
                      onChange={this.handleInputChange}
                      name="orders"
                    />
                    <input type="submit" value="Create a store" />
                </form>
        </div>

      )
    }



}



export default Form