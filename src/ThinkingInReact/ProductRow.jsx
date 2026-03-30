import React, { Component } from 'react'

export class ProductRow extends Component {
  render() {
    const { products } = this.props
    return (
      <tr>
        <td>{products.name}</td>
        <td>{products.price}</td>
      </tr>
    )
  }
}

export default ProductRow
