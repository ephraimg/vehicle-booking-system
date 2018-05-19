
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const JobCreate = props => (
    <div>  
        <h1>Create a new job</h1>
        <form>
            <div>
                <label for="date">Select a date:</label>
                <DatePicker name="date"
                    selected={props.date}
                    onChange={props.handleDateChange}
                />
            </div>
            <div>
                <label for="start">Select a start time:</label>
                <select name="start" selected={props.time} onChange={props.handleTimeChange}>
                    { Array(24).fill(0).map((el, idx) =>
                        <option value={idx}>{('0' + idx).slice(-2) + ':00'}</option>)
                    }
                </select>
            </div>
            <div>
                <label for="duration">Select a duration:</label>
                <select name="duration" selected={props.duration} onChange={props.handleDurChange}>
                    { Array(12).fill(0).map((el, idx) =>
                        <option value={idx + 1}>{`${idx + 1} hours`}</option>)
                    }
                </select>
            </div>
            <button type="button" onClick={props.createJob}>
                Request booking
            </button>
        </form>
        <div>
            { props.jobWaiting ? 'Please wait a moment...' : null }
            { props.jobSuccess ? 'Job saved successfully!' : null }
            { props.jobFailure ? 'Error! Please try again.' : null }
        </div>
    </div>
);


export { JobCreate };
