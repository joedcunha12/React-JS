import React from 'react'

class Customer extends React.Component {
  render() {
    const { params } = this.props.match
    return (
      <div>
        <h1>Customer</h1>
        <p>{params.id}</p>
      </div>
    )
  }
}

export default Customer