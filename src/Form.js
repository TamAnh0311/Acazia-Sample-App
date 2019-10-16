import React from 'react';
import './App.css';
import './navbar-toggle.scss';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            isSuccess: Boolean,
            isDisplay: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ email: event.target.value });
    }

    // componentDidMount() {
    //     this.handleSubmit(this.state.email);
    // }

    handleSubmit(email) {
        console.log('trigered')
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if ( re.test(email) ) {
            this.setState({ 
                isSuccess : true,
                isDisplay : true
            });
        }
        else {
            this.setState({ 
                isSuccess : false,
                isDisplay : true,
            });
        }
    }


    handleMsg() {
        const isDisplay = this.props.isDisplay
        const isSuccess = this.props.isSuccess
        if (isDisplay){
            console.log("isDisplay", isDisplay)
                if (!isSuccess) {
                console.log("success", isSuccess)
                return (
                    <div className="msgBox__block msgBox--error">
                        <p>One or more fields have an error. Please check and try again.</p>
                    </div>
                )
            }
            else {
                return (
                    <div className="msgBox__block msgBox--success">
                        <p>Thank you for your message. It has been sent.</p>
                    </div>
                )
            }
        }
    }

    render() {
        return (
            <div className="sub-input form-group">
                <input
                    type="text"
                    name="subscribe"
                    className="input-field  form-control w-20"
                    placeholder="Enter your mail!"
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                <span><button
                    className="badge badge-pill badge-light"
                    type="submit"
                    onClick={this.handleSubmit}
                >Send</button></span>

                <div className="msgBox">
                    {this.handleMsg(this.state.isSuccess, this.state.isDisplay)}
                </div>
            </div>
        )
    }
}


export default Form