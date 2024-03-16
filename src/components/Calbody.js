const Calbody = () => {

  // gets current date, but will change
  let currentDate = new Date()  
  // gets current Year
  const currentYear = new Date().getFullYear()
  // gets current Month
  const currentMonth = new Date().getMonth()
  
  // grabs tbody for individual cell spaces
  const calendarDatesEl = document.querySelector('#calendarDates')
  
  // Holds HTML of calendar cells
  let calendarDatesHtml;


  // Function to update displayed cal
  const updateCalendar = () => {
    // Get year
    const year = currentDate.getFullYear()
    // Get month
    const month = currentDate.getMonth()
    // Get first day of Month
    let firstDayOfMonth = new Date(year, month, 1).getDay()
    // Get num of days in current month
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    // Get today's day in current month, to be highlit
    const today = new Date().getDate()

    // Make Sunday last DOW
    if(firstDayOfMonth === 0){
        firstDayOfMonth = 7
    }

    

    // Handle adding blank days
    for(let i = 1; i < firstDayOfMonth; i++){
        calendarDatesHtml += <td class="empty"></td>
    }

    // Fill current month days
    for(let i = 1; i <= daysInMonth; i++){
        if(i === today && month === currentMonth && year === currentYear){
            // Adds today class if day is today
            calendarDatesHtml += <td class="today"><a class="swap">{i}</a></td>
        } else {
            // otherwise just adds reg td tag
            calendarDatesHtml += <td><a class="swap">{i}</a></td>
        }
        // Start new row every 7 days
        if((firstDayOfMonth + i) % 7 === 1){
            calendarDatesHtml += <tr></tr>
        }
    }
    
    // calendarDatesEl.innerHTML = calendarDatesHtml
    // console.log(calendarDatesHtml)
    return calendarDatesHtml
    
    }


  // Initial function run
//   updateCalendar()

  return (
    <div className="calendarBody">
        <table>
            <thead>
                <tr>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                    <th>Sun</th>
                </tr>
            </thead>
            <tbody id="calendarDates">
                {updateCalendar()}
            </tbody>
        </table>
      </div>
  )
}

export default Calbody
