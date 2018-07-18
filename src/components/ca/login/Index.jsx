import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FetchApi from '../../../utils/FetchAPI';

import './style.css';

export default class LoginIndex extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            message: ''
        };
    }

    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { username, password } = this.state;

        FetchApi('POST','/api/auth/login', { username, password })
            .then((result) => {
                localStorage.setItem('authToken', result.data.token);
                this.setState({ message: '' });
                this.props.history.push('/')
            })
            .catch(error => {
                if(error.response.status === 401) {
                    this.setState({ message: 'Login failed. Username or password not match' });
                }
            });
    }

    render() {
        const { username, password, message } = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    {message !== '' &&
                        <div>
                            { message }
                        </div>
                    }
                    <h2>Please sign in</h2>
                    <label htmlFor="inputEmail">Email address</label>
                    <input id="inputEmail" type="email" placeholder="Email address" name="username" value={username} onChange={this.onChange} required/>
                    <label htmlFor="inputPassword">Password</label>
                    <input id="inputPassword" type="password" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
                    <button type="submit">Login</button>
                    <p>
                        Not a member? <Link to="/register">Register here</Link>
                    </p>
                </form>
            </div>
        );
    }
}
