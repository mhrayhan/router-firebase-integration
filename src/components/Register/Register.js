import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div className=''>
            <h3>Please Register</h3>
            <form action="" className='form'>
                <input type="text"  placeholder='Your Name'/>
                <br />
                <input type="email"  placeholder='Your Email'/>
                <br />
                <input type="password" name="" id="" placeholder='Password'/>
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;