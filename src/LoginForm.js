import React, {Component} from 'react'

class LoginForm extends Component {
    render() {
        return (
        <div>
        <p>Log in</p>
            <form>
                
                <input placeholder = 'Username' className = "form-control" />
                <input placeholder = 'Email' className = "form-control" />
                <button className = 'btn-warning' onClick = {() => {alert('ALERT')}}>Login</button>
            </form>
    
        </div>
    );
    }
} export default LoginForm;