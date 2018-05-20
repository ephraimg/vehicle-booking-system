
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
            time: '10:00',
            duration: '5',
            jobWaiting: false,
            jobSuccess: false,
            jobFailure: false
        };
        this.handleCustomerChange = this.handleCustomerChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleDurChange = this.handleDurChange.bind(this);
        this.clearJobStatus = this.clearJobStatus.bind(this);
        this.createJob = this.createJob.bind(this);
    }
    handleCustomerChange(e) {
        this.setState({ customer: e.target.value });        
    }
    handleDateChange(date) {
        this.setState({ date });
    }
    handleTimeChange(e) {
        this.setState({ time: e.target.value });
    }
    handleDurChange(e) {
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
        const start = moment(this.state.date).hour(this.state.time.slice(0, 2));
        const stop = moment(start).add(this.state.duration, 'hours');
        const config = {
            customer: this.state.customer || 'Anonymous customer',
            date: this.state.date.utc().format(),
            start: start.utc().format(),
            stop: stop.utc().format()
        };
        axios.post('/jobs', config)
            .then(res => this.setState({ jobWaiting: false, jobSuccess: true }))
            .catch(err => this.setState({ jobWaiting: false, jobFailure: true }))
            .finally(() => setTimeout(this.clearJobStatus, 2000));
    }
    render() { return (
        <JobComponent 
            customer={this.state.customer}
            date={this.state.date}
            time={this.state.time}
            duration={this.state.duration}
            jobWaiting={this.state.jobWaiting}
            jobSuccess={this.state.jobSuccess}
            handleCustomerChange={this.handleCustomerChange}
            handleDateChange={this.handleDateChange}
            handleTimeChange={this.handleTimeChange}
            handleDurChange={this.handleDurChange}
            clearJobStatus={this.clearJobStatus}
            createJob={this.createJob}
        /> );
    }
}

export { JobCreate };
