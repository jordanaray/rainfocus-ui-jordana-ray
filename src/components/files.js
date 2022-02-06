import React from 'react'
import '../sass/files.scss';
import Checkbox from './checkbox';
import { files } from '../data/fileData.js';

class Files extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      files: files
    }
  }

  handleAllChecked = (event) => {
    let files = this.state.files
    files.forEach(file => file.isChecked = event.target.checked)
    this.setState({ files: files })
  }

  handleCheckChieldElement = (event) => {
    let files = this.state.files
    files.forEach(file => {
      if (file.value === event.target.value)
        file.isChecked = event.target.checked
    })
    this.setState({ files: files })
  }


  render() {

    return <div className="files panel">
      <div className="scrolling-table">
        <table>
          <tr>
            <th className="checkbox"><input type="checkbox" value="checkedall" onClick={this.handleAllChecked} /></th>
            <th className="name">File Name</th>
            <th>File Type</th>
            <th className="date">File Create Date</th>
            <th className="status">Published Status</th>
            <th className="session-name">Session Name</th>
            <th>Session Code</th>
            <th>Session Status</th>
          </tr>


          {
            this.state.files.map((file) => {
              return (<Checkbox handleCheckChieldElement={this.handleCheckChieldElement}  {...file} />)
            })
          }
        </table>
      </div>
    </div>;
  }
}

export default Files