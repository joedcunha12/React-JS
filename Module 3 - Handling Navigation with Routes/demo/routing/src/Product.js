import React from 'react'
import { Route, Link} from 'react-router-dom'

const Products = ({ match }) => <p>{match.params.id}</p>

class Product extends React.Component {
  render() {
    const { url } = this.props.match
    return (
    <div>
      <h1>Product</h1>
      <strong>select a Product</strong>
      <ul>
        <li>
          <Link to ="/Product/Secret, Alchemist, SCOOP"> Books</Link>
        </li>
        <li>
          <Link to ="/Product/Addgel, Trimax, Cello"> Pen</Link>
        </li>
      </ul>
      <Route path= "/Product/:id" component ={Products} />

      </div>
    )
  }
}

export default Product