import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import React from 'react'


class DateCalendar extends React.Component {

    state = {
        date: this.props.date
    }

    onChange = (date) => {
        this.props.setDate(date)
    }

    render() {
        return (
            <div>
                <Calendar
                    onClickDay={this.onChange}
                    value={this.state.date}
                />
            </div>
        );
    }
}
export default DateCalendar