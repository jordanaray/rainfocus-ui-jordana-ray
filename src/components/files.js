import React from 'react'
import '../sass/files.scss';

class Files extends React.Component {
  render() {
    return <div className="files">
      <div className="scrolling-table">
        <table>
          <tr>
            <th><input type="checkbox" /></th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Points</th>
            <th>Points</th>
            <th>Points</th>
            <th>Points</th>
            <th>Points</th>
            <th>Points</th>
            <th>Points</th>
            <th>Points</th>
            <th>Points</th>
            <th>Points</th>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
            <td>94</td>
            <td>94</td>
            <td>94</td>
            <td>94</td>
            <td>94</td>
            <td>94</td>
            <td>94</td>
            <td>94</td>
            <td>94</td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Adam</td>
            <td>Johnson</td>
            <td>67</td>
            <td>67</td>
            <td>67</td>
            <td>67</td>
            <td>67</td>
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