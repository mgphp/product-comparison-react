import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ProductItem from './components/product_item';
import Styles from '../style/styles.scss';

class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = ({
      products: [],
      selectedProduct: null
    })
  }
  
  componentWillMount() {
    fetch('./public/json/products.json')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          products: data.products
        });
      });
  }
  
  handleSelected(e) {
    const selected = [];
    
    const foo = Array
      .apply(null, e.target.options)
      .forEach((option) => {
        if (option.selected) {
          selected.push(parseInt(option.value, 10));
        }
      });
    
    this.setState({ selected });
  }
  
  render() {
    const { products, selected } = this.state;
    console.log(products);
    return (
      <div className="App">
        {products &&
          <div className="select">
            <select ref="select"
                    multiple
                    onChange={(e) => this.handleSelected(e)}>{
                      Object.keys(products).map((id) =>
                        <option key={products[id].id}
                                value={products[id].id}>{products[id].name}
                        </option>
                      )}
            </select>
            <button onClick={() => {this.setState({ selectedProducts: null })}}>clear</button>
          </div>
        }
        {selected && products &&
        <div>
          <ul key={0} className="headers">
            <li key={1}>Card</li>
            <li key={2}>Balance Transfer Rates</li>
            <li key={3}>Money Transfer Rates</li>
            <li key={4}>Purchase Rates</li>
            <li key={5}>Additional Info</li>
          </ul>
          
          <ul>
            {selected.map((id) => <ProductItem key={id} product={products[id]} />)}
          </ul>
        </div>
        }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
