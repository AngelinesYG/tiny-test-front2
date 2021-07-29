import React from 'react'
import axios from 'axios'

class Allergens extends React.Component {
  state = {
    allergens: [],
  };

//   this.state={
//      search:null
//  }
//
//  searchSpace = (event) =>{
//     let keyword = event.target.value;
//
// }

  displayAllergen = async () => {
    const response = await axios.get(
      `https://60f5adf918254c00176dffc8.mockapi.io/api/v1/allergens/`
    );
    console.log(response);

    this.setState({
      allergen: response.data.name
    });
  };



  render() {
    return (
      <div>
        <button onClick={this.displayAllergen}>Click Here to View allergens</button>
        {this.state.allergens.map((allergen) => (
          <div>
            <dl>
              <dt>Allergen Name:</dt>
              <dd>{this.state.allergen}</dd>
            </dl>
          </div>

        ))}
      </div>
    );
  }
}


export default Allergens
