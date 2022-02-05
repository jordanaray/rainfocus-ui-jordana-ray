import React from 'react'
import '../sass/files.scss';

class Files extends React.Component {
  render() {
    return <div className="files panel">
      <div className="scrolling-table">
        <table>
          <tr className="layout horizontal ">
            <th className="checkbox"><input type="checkbox" /></th>
            <th>File Name</th>
            <th>File Type</th>
            <th>File Create Date</th>
            <th>Published Status</th>
            <th>Session Name</th>
            <th>Session Code</th>
            <th>Session Status</th>

          </tr>
          <tr>
            <td className="checkbox"><input type="checkbox" /></td>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>

          </tr>
          <tr>
            <td className="checkbox"><input type="checkbox" /></td>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
            <td>94</td>
            <td>94</td>
            <td>94</td>
            <td>94</td>

          </tr>
          <tr>
            <td className="checkbox"><input type="checkbox" /></td>
            <td>Adam</td>
            <td>Johnson</td>
            <td>67</td>
            <td>67</td>
            <td>67</td>
            <td>67</td>
            <td>67</td>

          </tr>
        </table>
      </div>
    </div>;
  }
}

export default Files