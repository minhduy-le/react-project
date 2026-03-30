import React, { Component } from 'react'
import './FilterableProductTable.css'
import SearchBar from './SearchBar'
import { ProductTable } from './ProductTable'
const productList = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
]
const fetchAPI = () => Promise.resolve(productList)

export class FilterableProductTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productList: [],
      searchText: '',
      inStockOnly: false
    }
  }
  componentDidMount() {
    fetchAPI().then((res) => {
      this.setState({
        productList: res
      })
    })
  }

  handleChange = (event) => {
    const name = event.target.name
    if (name === 'product') {
      this.setState({
        searchText: event.target.value
      })
      this.setState({})
    } else if (name === 'inStockOnly') {
      this.setState({
        inStockOnly: event.target.checked
      })
    }
  }
  render() {
    const { productList, searchText, inStockOnly } = this.state
    return (
      <div className='FilterableProductTable'>
        <SearchBar searchText={searchText} inStockOnly={inStockOnly} handleChange={this.handleChange} />
        <ProductTable productList={productList} searchText={searchText} inStockOnly={inStockOnly} />
      </div>
    )
  }
}

export default FilterableProductTable
