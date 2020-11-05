import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./App.css"

class DateCalendar extends Component {

    render() {
        return (
            <div className="calendar-container">
                <main>
                    <Calendar showWeekNumbers={false}/>
                </main>
            </div>
        );
    }
}

export default DateCalendar