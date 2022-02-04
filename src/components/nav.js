import React from 'react'
import '../sass/nav.scss';

class Nav extends React.Component {
    render() {
      return <div className="nav wrapper">
          <aside>
            <ul>
                <li>First Name:</li>
                <li>Preferred First Name for Badge: </li>
                <li>Company:</li>
                <li>Onsite - Badge Holders:</li>
                <li>Onsite - Aux:</li>
            </ul>
              
              </aside>
      </div> 
      ;
    }
  }

  export default Nav