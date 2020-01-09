import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUser = this.demoUser.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li className='auth-error' key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    demoLogin() {
        if (this.props.match.path === '/login') {
            return (
                    <input className="session-submit session-demo"
                        type="submit"
                        value="Demo login"
                        onClick={this.demoUser}
                    />
            )
        } else {
            return ""
        };
    }

    demoUser() {
        this.setState({
            email: 'demo@email.com',
            password: 'password'
        })
    }

    inputUsername() {
        if (this.props.match.path === '/signup') {
            return (
                <label className='login-label'>
                    <input type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                        className="login-input"
                        placeholder='Username'
                    />
                </label>
            )
        } else {
            return ""
        };
    }

    render() {
        return (
            <div className='login-splash'>
                <h2 className='login-title'>
                    {this.props.formType}
                </h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="login-form">
                        <label className='login-label'>
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                                placeholder='Email'
                            />
                        </label>
                        {this.inputUsername()}
                        <label className='login-label'>
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                                placeholder='Choose password'
                            />
                        </label>
                        {this.renderErrors()}
                        <input className="session-submit"
                            type="submit"
                            value={this.props.formButton}
                        />
                        {this.demoLogin()}
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;

// code from Vanessa for demo login
//
// demo(user) {
//     const intervalSpeed = 75;
//     const { email, password } = user;
//     const demoEmailTime = email.length * intervalSpeed;
//     const demoPasswordTime = password.length * intervalSpeed;
//     const buffer = intervalSpeed * 2;
//     const totalDemoTime = demoEmailTime + demoPasswordTime + buffer;
//     this.demoEmail(email, intervalSpeed);
//     setTimeout(() => this.demoPassword(password, intervalSpeed), demoEmailTime);
//     setTimeout(() => this.props.loginForm(user), totalDemoTime)
//     setTimeout(() => this.props.closeModal(), totalDemoTime + buffer)
// }
// demoEmail(email, intervalSpeed) {
//     let i = 0;
//     setInterval(() => {
//         if (i <= email.length) {
//             this.setState({ email: email.slice(0, i) })
//             i++
//         } else {
//             clearInterval()
//         }
//     }, intervalSpeed);
// }
// demoPassword(password, intervalSpeed) {
//     let j = 0;
//     setInterval(() => {
//         if (j <= password.length) {
//             this.setState({ password: password.slice(0, j) })
//             j++
//         } else {
//             clearInterval();
//         }
//     }, intervalSpeed);
// }

// render() {
//     <button className="demo-button"
//         onClick={this.handleDemoSubmit}
//         value="Demo Sign In">
//         <span>Continue with Demo</span>
//     </button>
// }