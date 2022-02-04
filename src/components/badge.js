import React from 'react'
import '../sass/badge.scss';

class Badge extends React.Component {
    render() {
      return <div className="badge">
      <h1 className="red">Badge Output</h1>
      <ul>
          <li>First Name:</li>
          <li>Preferred First Name for Badge: </li>
          <li>Company:</li>
          <li>Onsite - Badge Holders:</li>
          <li>Onsite - Aux:</li>
      </ul>
</div> 
    }
  }

  export default Badge