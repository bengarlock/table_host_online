import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import React from 'react'


class DateCalendar extends React.Component {

    onChange = (date) => {
        this.props.setDate(new Date(date))
    }

    render() {
        return (
            <div>
                <Calendar
                    onClickDay={this.onChange}
                    value={this.props.date}
                />
            </div>
        );
    }
}
export default DateCalendar