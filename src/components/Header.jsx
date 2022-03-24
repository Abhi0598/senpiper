import React, { Component } from 'react'
import './Header.css'
import Table from './Table';
import Form from './Form';
class Header extends Component {
  constructor() {
    super();
    this.state = {
      table: true,
      }
  }

 
  render() {
    return (
      <React.Fragment>
      <div className="header">
        <button style={{ borderBottom: this.state.table ? "2px solid #AA94DE" : "none" }}className='form' onClick={() =>  this.setState({ table: true})}>Form</button>
        <button style={{ borderBottom: this.state.table ? "none" : "2px solid #AA94DE" }} className='table'  onClick={() => this.setState({ table: false})}>Table</button>
      </div>
    <div>
    {this.state.table ? <div> <Form /> </div> : <div> <Table /> </div>}
    </div>
      </React.Fragment>
    )
  }
}


export default  Header;