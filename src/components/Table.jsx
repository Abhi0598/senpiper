import React, { Component } from 'react'

import './Table.css';

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tableData: []
    }
  }


  componentDidMount() {
    const data = JSON.parse(localStorage.getItem('userFormData'))
    this.setState({
      tableData: data
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="Feedback">
          <h1>All Feedback</h1>
        </div>
        <div className='Table'>
          <table>
            <thead>
              <th>Form Name</th>
              <th>Text field</th>
              <th>Phone field</th>
              <th>Email field</th>
              <th>Please rate the quality of the service you received from your host</th>
              <th>Please rate the quality of your beverage</th>
              <th> Was our restaurant clean?</th>
              <th> Please rate your overall dining experience.</th>
              <th>Comment</th>
            </thead>
            <tbody>
              {this.state.tableData.length > 0 && this.state.tableData.map((p, i) => {
                return (
                  <tr>
                    <td>
                      {p.formName}
                    </td>
                    <td>
                      {p.textData}
                    </td>
                    <td>
                      {p.phoneNumber}
                    </td>
                    <td>
                      {p.email}
                    </td>
                    <td>
                      {p.serviceQuality}
                    </td>
                    <td>
                      {p.beverageQuality}
                    </td>
                    <td>
                      {p.cleaningQuality}
                    </td>
                    <td>
                      {p.diningExperience}
                    </td>
                    <td>
                      {p.name}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    )
  }
}

export default Table;