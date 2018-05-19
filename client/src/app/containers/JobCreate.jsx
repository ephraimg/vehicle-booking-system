
import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { JobCreate as JobComponent } from '../components/JobCreate';

class JobCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: moment(),
            time: '7',
            duration: '5',
            jobWaiting: false,
            jobSuccess: false,
            jobFailure: false
        };
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleDurChange = this.handleDurChange.bind(this);
        this.clearJobStatus = this.clearJobStatus.bind(this);
        this.createJob = this.createJob.bind(this);
    }
    handleDateChange(date) {
        console.log('new date: ', date);
        this.setState({ date });
    }
    handleTimeChange(e) {
        console.log('new time: ', e.target.value);
        this.setState({ time: e.target.value });
    }
    handleDurChange(e) {
        console.log('new duration: ', e.target.value);
        this.setState({ duration: e.target.value });
    }
    clearJobStatus() {
        this.setState({
            jobWaiting: false,
            jobSuccess: false,
            jobFailure: false
        });
    }
    createJob(e) {
        this.setState({ jobWaiting: true });
        const config = { };
        axios.post('/jobs', config)
            .then(res => this.setState({ jobWaiting: false, jobSuccess: true }))
            .catch(err => this.setState({ jobWaiting: false, jobFailure: true }))
            .finally(() => setTimeout(this.clearJobStatus, 2000));
    }
    render() { return (
        <JobComponent 
            date={this.state.date}
            time={this.state.time}
            duration={this.state.duration}
            jobWaiting={this.state.jobWaiting}
            jobSuccess={this.state.jobSuccess}
            handleDateChange={this.handleDateChange}
            handleTimeChange={this.handleTimeChange}
            handleDurChange={this.handleDurChange}
            clearJobStatus={this.clearJobStatus}
            createJob={this.createJob}
        /> );
    }
}

export { JobCreate };
