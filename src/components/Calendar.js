import Calbody from "./Calbody"

const Calendar = () => {
  // Get necessary elements from DOM??
  // const prevMonthBtn = document.querySelector('#prevMonthBtn')
  // const nextMonthBtn = document.querySelector('#prevMonthBtn')
  // const currentMonthEl = document.querySelector('#currentMonth')
  // const calendarDatesEl = document.querySelector('#calendarDates')
  // const calendarBody = document.querySelector('.calendarBody')
 

  // gets current date, but will change
  let currentDate = new Date() 

  return (
    <div className="calendar">
      <div className="calendarHeader">
        <button id="prevMonthBtn">
            <span className="materialSymbolsOutlined">
                chevron_left
            </span>
        </button>
        <h2 id="currentMonth">{currentDate.toLocaleDateString('en-US',{month:'long', year:'numeric'})}</h2>
        <button id="prevMonthBtn">
            <span className="materialSymbolsOutlined">
                chevron_right
            </span>
        </button>
      </div>
      <Calbody></Calbody>
    </div>
  )
}

export default Calendar
