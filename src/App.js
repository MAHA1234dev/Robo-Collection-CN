import DigitalCollectionExecutiopnDetails from './components/DigitalCollectionExecutiopnDetails';
import Events from './components/eventcalender/Calender';
import Practice from './components/sivaji/Practice';
import CustomCalendar from './components/customCalendar/CustomCalendar'

import './App.css'
import AccordionMuI from './components/AccordionMuI';
import CustomTable from './components/table/CustomTable';
import CustomPicker from './components/datePicker/CustomPicker';
import SearchDropdown from './components/SearchDropDown';
import DetailsTable from './components/tables/DetailsTable';
import ColumnsGroupingTable from './components/tables/ColumnsGroupingTable';
function App() {
  return (
    <div className='App'>
        {/* <header>
          <div id="logo">
            <span className="icon">date_range</span>  
            <span>
              react<b>calendar</b>
            </span>
          </div>
        </header>
        <main>
          <CustomCalendar/>
        </main> */}
      <DigitalCollectionExecutiopnDetails/>
      {/* <Practice/> */}
      {/* <Events/> */}
      {/* <CustomCalendar/> */}
      {/* <AccordionMuI/> */}
      {/* <CustomTable/> */}
      {/* <CustomPicker/> */}
      {/* <SearchDropdown/> */}
      {/* <DetailsTable/> */}
      {/* <ColumnsGroupingTable/> */}
    </div>
  );
}

export default App;
