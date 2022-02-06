import React from 'react'
import '../sass/files.scss';

class Files extends React.Component {
  render() {
    return <div className="files panel">
      <div className="scrolling-table">
        <table>
          <tr className=" ">
            <th className="checkbox"><input id="cb1" type="checkbox" /> <label for="cb1"></label></th>
            <th className="name">File Name</th>
            <th>File Type</th>
            <th className="date">File Create Date</th>
            <th className="status">Published Status</th>
            <th className="session-name">Session Name</th>
            <th>Session Code</th>
            <th>Session Status</th>

          </tr>
          <tr>
            <td className="checkbox"><input type="checkbox" id="cb2"  /> <label for="cb2"></label></td>
            <td className="">New Microsoft PowerPoint Presentation_150743033671001amVb.pptx</td>
            <td>Presentation</td>
            <td>September 06, 2017 | 02:40 PM</td>
            <td>Not Published</td>
            <td>Reject Data integration until column-oriented databases</td>
            <td>BR1000</td>
            <td>Accepted</td>

          </tr>
          <tr>
            <td className="checkbox"><input type="checkbox"  id="cb3"  /> <label for="cb3"></label></td>
            <td className="">Portugal (2)_1512165233414008toT.pptx</td>
            <td>Presentation</td>
            <td>December 01, 2017 | 10:57 AM</td>
            <td>Not Published</td>
            <td>Promise Data Visualization for Hadoop</td>
            <td>BR1003</td>
            <td>Accepted</td>

          </tr>
          <tr>
            <td className="checkbox"><input type="checkbox"  id="cb4"  /> <label for="cb4"></label></td>
            <td className="">Portugal (2)_1512165233414008toT_1512367612374688wXbS.pptx</td>
            <td>Presentation</td>
            <td>December 01, 2017 | 1:02 PM</td>
            <td>Not Published</td>
            <td>Promise Data Virtualization for Hadoop</td>
            <td>BR1003</td>
            <td>Accepted</td>

          </tr>
        </table>
      </div>
    </div>;
  }
}

export default Files