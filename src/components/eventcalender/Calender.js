import React, { Component } from "react"
import '../../index.css'
import { PropertyPane } from './property-pane';
import { SampleBase } from './sample-base';
import { applyCategoryColor } from './helper';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import dataSource from './dataSource.json';
import { extend } from "@syncfusion/ej2-base";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  cardDiv: {
    [theme.breakpoints.up('xs')]: {
      marginTop: "1.8rem",
      marginBottom: "0.8rem",
    },
    [theme.breakpoints.up('sm')]: {
      width: "100%",
      borderRadius: "none",
      boxShadow: "80px",
      height: "28vh",
      marginTop: "1.8rem",
      marginBottom: "1.8rem"
    },
    [theme.breakpoints.between("md", "lg")]: {
      width: "32.4%",
      borderRadius: "none",
      height: "28vh",
      marginTop: "0.8rem",
      marginBottom: "1.6rem"
    },
    [theme.breakpoints.up('xl')]: {
      width: "24%",
      borderRadius: "none",
      boxShadow: "80px",
      height: "28vh",
      marginTop: "1.8rem",
      marginBottom: "1.8rem"
    }
  },

}));


export default class Events extends SampleBase {
  constructor(props) {
    super(props);
    this.state = {
      finalData: []
    }
  }

  scheduleObj;
  data = extend([], dataSource.scheduleData, null, true);
  onEventRendered(args) {
    applyCategoryColor(args, this.scheduleObj.currentView);
  }
  onClear() {
    document.getElementById('EventLog').innerHTML = '';
  }
  onCreate() {
    this.appendElement('Schedule <b>Load</b> event is triggered<hr>');
  }
  onActionBegin() {
    this.appendElement('Schedule <b>Action Begin</b> event is triggered<hr>');
  }
  onActionComplete() {
    this.appendElement('Schedule <b>Action Complete</b> event is triggered<hr>');
  }
  onActionFailure() {
    this.appendElement('Schedule <b>Action Failure</b> event is triggered<hr>');
  }
  onCellDoubleClick() {
    debugger
    this.appendElement('SChedule <b>Cell Double Click</b> event is triggered<hr>');
  }
  onCellClick() {
    debugger
    this.appendElement('Schedule <b>Cell Click</b> event is triggered<hr>');
  }
  onNavigating() {
    this.appendElement('Schedule <b>Navigating</b> event is triggered<hr>');
  }
  onDestroyed() {
    this.appendElement('Schedule <b>Destroyed</b> event is triggered<hr>');
  }
  onEventClick() {
    debugger
    this.appendElement('Schedule <b>Event Click</b> event is triggered<hr>');
  }
  // onPopupOpen() {
  //   debugger
  //   this.appendElement('Schedule <b>Popup Open</b> event is triggered<hr>');
  // }
  appendElement(html) {
    let span = document.createElement('span');
    span.innerHTML = html;
    let log = document.getElementById('EventLog');
    // log.insertBefore(span, log.firstChild);
  }
  handleChange = (e) => {
    if (e.target.value === "All") {
      this.setState({ finalData: this.data })
    }
    if (e.target.value === "Location") {
      let dataArray = []
      dataSource.scheduleData.map((item) => {
        if (item.Location === "Greenland") {
          dataArray.push(item)
        }
      })
      this.setState({ finalData: dataArray })
    }
  }
  componentDidMount = () => {
    this.setState({ finalData: this.data })
  }
  render() {
    return (
      <div>
        <div className="mx-4 my-3">
          <select id="cars" onChange={(e) => this.handleChange(e)}>
            <option value="All">All</option>
            <option value="Reminders">Reminders</option>
            <option value="Hearing Dates">Hearing Dates</option>
            <option value="Location">Location</option>
          </select>
        </div>
        <div className='schedule-control-section'>

          <div className='col-lg-12 control-section'>
            <div className='control-wrapper'>
              <ScheduleComponent
                ref={schedule => this.scheduleObj = schedule}
                width='100%'
                height='650px'
                selectedDate={new Date(2021, 0, 10)}
                eventSettings={{ dataSource: this.state.finalData }}
                // created={this.onCreate.bind(this)}
                eventRendered={this.onEventRendered.bind(this)}
                actionBegin={this.onActionBegin.bind(this)}
                actionComplete={this.onActionComplete.bind(this)}
                actionFailure={this.onActionFailure.bind(this)}
                // cellClick={this.onCellClick.bind(this)}
                // cellDoubleClick={this.onCellDoubleClick.bind(this)}
                destroyed={this.onDestroyed.bind(this)}
                navigating={this.onNavigating.bind(this)}
                eventClick={this.onEventClick.bind(this)}
              // popupOpen={this.onPopupOpen.bind(this)}
              >
                <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop,]} />
              </ScheduleComponent>
            </div>
          </div>
          {/* <div className='col-lg-3 property-section'>
        <PropertyPane title='Event Trace'>
          <table id='property' title='Properties' className='property-panel-table' style={{ width: '100%' }}>
            <tbody>
              <tr style={{ height: '250px' }}>
                <td>
                  <div className='eventarea' style={{ height: '245px', overflow: 'auto' }}>
                    <span className='EventLog' id='EventLog' style={{ wordBreak: 'normal' }}></span>
                  </div>
                </td>
              </tr>
              <tr style={{ height: '50px' }}>
                <td style={{ width: '30%' }}>
                  <div className='evtbtn' style={{ paddingBottom: '10px' }}>
                    <ButtonComponent title='Clear' onClick={this.onClear.bind(this)}>Clear</ButtonComponent>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </PropertyPane>
      </div> */}
        </div>
      </div>

    );
  }
}