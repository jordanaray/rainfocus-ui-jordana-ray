import React from 'react'
import '../sass/schedule.scss';

class Schedule extends React.Component {
  render() {
    return <div className="schedule panel">
      <div className="layout horizontal center hr-badge">
        <p className="sm-text md-weight pl-sm pr-sm">Sunday</p>
        <span class="gray-text xxs-text pr-sm">July 5, 2018</span>
      </div>

      <div className="layout horizontal center hr-schedule pl-sm">
        <span><strong>07:00 AM</strong></span>
        <span className="brand-primary bold">|</span>
        <span className="brand-secondary">Find Sessions.</span>
      </div>

      <div className="layout horizontal center hr-schedule between-justified pl-sm">
        <div className="layout horizontal">
          <span><strong>08:00 AM</strong></span>
          <span className="brand-primary bold">|</span>
          <div className="layout vertical">
            <span className="pb-0">BR1058 Exchange Search and Knowledge discovery until Storage Technologies</span>
            <span className="pt-0">10:00AM - 10:45 AM</span>
          </div>
        </div>
        <div className="layout horizontal vertical-sm">
          <a href="/"><span class="material-icons pr-sm">edit</span></a>
          <a href="/"><span class="material-icons pr-sm">delete</span></a>
        </div>
      </div>
      
      <div className="layout horizontal center hr-schedule pl-sm">
        <span><strong>09:00 AM</strong></span>
        <span className="brand-primary bold">|</span>
        <span className="brand-secondary">Find Sessions.</span>
      </div>
      
      <div className="layout horizontal center hr-schedule between-justified pl-sm">
        <div className="layout horizontal">
          <span><strong>10:00 AM</strong></span>
          <span className="brand-primary bold">|</span>
          <div className="layout vertical">
            <span className="pb-0">BR1063 Write Data virtualization by Hadoop</span>
            <span className="pt-0">10:00AM - 10:45 AM</span>
          </div>
        </div>
        <div className="layout horizontal vertical-sm ">
          <a href="/"><span class="material-icons pr-sm">edit</span></a>
          <a href="/"><span class="material-icons pr-sm">delete</span></a>
        </div>
      </div>

      <div className="layout horizontal center hr-schedule pl-sm">
        <span><strong>11:00 AM</strong></span>
        <span className="brand-primary bold">|</span>
        <span className="brand-secondary">Find Sessions.</span>
      </div>
    </div>
      ;
  }
}

export default Schedule