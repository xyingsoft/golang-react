import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from './product_item';

class ProductList extends Component {
    componentWillMount(){
    }

    renderList = ({list}) => {
      if(list){
        return list.map((item)=>{
          return(
            <ProductItem item={item} />
          )
        })
      }
    }
  
    render() {
      return (
        <div className="App">
          <div className="categories_container">
            <div class="row">
              {this.renderList(this.props)}
            </div>
          </div>
        </div>
      );
    }
  }

  function mapStateToProps(state) {
    return {
      produts: state.products
    }
  }
  
  export default connect(mapStateToProps)(ProductList)