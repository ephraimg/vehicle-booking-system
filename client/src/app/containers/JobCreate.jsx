
import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { JobCreate as JobComponent } from '../components/JobCreate';

class JobCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customer: '',
            date: moment(),
            time: '10',
            duration: '1',
            jobStatus: null
        };
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.clearJobStatus = this.clearJobStatus.bind(this);
        this.createJob = this.createJob.bind(this);
    }
    handleFormChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleDateChange(date) { 
        this.setState({ date }); 
    }
    clearJobStatus() {
        this.setState({ jobStatus: null });
    }
    createJob(e) {
        const start = moment(this.state.date).set({hour:this.state.time, minute:0, second:0, millisecond:0});
        const stop = moment(start).add(this.state.duration, 'hours');
        if (!this.state.date || !this.state.time || !this.state.duration || !this.state.customer) {
            this.setState({ jobStatus: 'All form fields must be completed.' });
            return setTimeout(this.clearJobStatus, 2000);
        }
        this.setState({ jobStatus: 'waiting' });
        const config = {
            customer: this.state.customer,
            date: moment(this.state.date).set({hour:0, minute:0, second:0, millisecond:0}).format(),
            start: start.format(),
            stop: stop.format()
        };
        axios.post('/jobs', config)
            .then(res => {
                if (res.data.error) { throw res.data.error; }
                this.setState({ jobStatus: 'success' });
            })
            .catch(err => this.setState({ jobStatus: err }))
            .finally(() => setTimeout(this.clearJobStatus, 2000));
    }
    render() { return (
        <JobComponent 
            customer={this.state.customer}
            date={this.state.date}
            time={this.state.time}
            duration={this.state.duration}
            jobStatus={this.state.jobStatus}
            handleFormChange={this.handleFormChange}
            handleDateChange={this.handleDateChange}
            clearJobStatus={this.clearJobStatus}
            createJob={this.createJob}
        />
    )}
}

export { JobCreate };
