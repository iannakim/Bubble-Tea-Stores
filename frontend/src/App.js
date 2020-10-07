import React from 'react';
import Header from './Header'
import StoreContainer from './StoreContainer'
import Form from './Form'

import './App.css';


// Props is information coming from a Parent Component down to its children
  // Information that's passed when the component is created
  // props is always received as a POJO

// JS  code can be interpolated in JSX with {}

// arrayOfStores -> [{}, {}, {}]
  // arrayOfStores needs to be saved to state somewhere, so we can dynamically decide on the number of stores to render
  // Only class components can have state


  // Parent's state can be sent down as props
    // state -> props (OK)
  // Child's props should not become child's state
    // props -> state (X)


  class App extends React.Component {

    state = {
        stores: []
    }

    componentDidMount(){
      fetch("http://localhost:3000/stores")
      .then(res => res.json())
      .then((arrayOfStores) => {
        this.setState({
          stores: arrayOfStores
        })
      })
    }

    addStoreToState = (newlyCreatedStore) => {
      let copyOfStores = [...this.state.stores, newlyCreatedStore]
      this.setState({
        stores: copyOfStores
      })
    }
    

    deleteStoreFromState = (deletedID) => {
      let copyOfStores = this.state.stores.filter(storeObj => {
        return storeObj.id !== deletedID
      })
      this.setState({
        stores: copyOfStores
      })
    }



    updateStoreFromState = (updateObj) => {
      let copyOfStores = this.state.stores.map((store) => {
        if (store.id === updatedObj.id){
          return updatedObj
        } else {
          return store
        }
      })
    }


    render(){
      return (
        <div className="App">
          < Header title="Top Bubble Tea Stores"/>
          < Form 
            addStoreToState={this.addStoreToState}
            />
          < StoreContainer 
            stores={this.state.stores} 
            deleteStoreFromState={this.deleteStoreFromState}
            updateStoreFromState={this.updateStoreFromState}  
          />
      
        </div>
      );
    }
      
  }
    
export default App;
    