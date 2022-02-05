import React from 'react'
import '../sass/badge.scss';

class Badge extends React.Component {
  render() {
    return <div className="badge panel">
      <div className="layout horizontal between-justified center hr-badge">
        <p className="sm-text md-weight pl-sm ">Badge Output</p>
        <a href="/"><span class="material-icons gray-text pr-sm">edit</span></a>
      </div>
      <ul className="light xxs-text">
        <li><strong>First Name: </strong>Allison</li>
        <li><strong>Preferred First Name for Badge: </strong>Al</li>
        <li><strong>Last Name </strong>Profitt</li>
        <li><strong>Company: </strong>Bio-IT World</li>
        <li><strong>Onsite - Badge Holders: </strong>jVA</li>
        <li><strong>Onsite - Aux: </strong>1</li>
      </ul>
      <div className="layout horizontal between-justified center">
        <span className="pl-sm xxs-text light"><strong>Check-in: </strong>09/16/16 7:51 AM</span>
        <div className="layout horizontal">
          <a href="/"><span class="material-icons gray-text pr-sm">delete</span></a>
          <a href="/"><span class="material-icons gray-text pr-sm">print</span></a>
        </div>
      </div>
    </div>
  }
}

export default Badge