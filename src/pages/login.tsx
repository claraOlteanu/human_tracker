import styles from '../app/styles/login.module.css';

import '../app/globals.css'
import { MySqlConnector } from '../../lib/mySQL';
import { useState } from 'react';

export default function Login() {
    const [emailValue, setEmailInputText] = useState("");
    const [passValue, setPassInputText] = useState("");


  async function login(email: string, pass: string) {
    const result = await MySqlConnector.getInstance().getUserByEmail(email);
    if(result) {
        console.log(result);
    }
  }

  return (
    <main className="main-container">
        <div className="container">
            <div className="d-flex justify-content-center h-100">
                <div className="card">
                    <div className="card-header">
                        <h3>Sign In</h3>
                        <div className="d-flex justify-content-end social_icon">
                            <span><i className="fab fa-facebook-square"></i></span>
                            <span><i className="fab fa-google-plus-square"></i></span>
                            <span><i className="fab fa-twitter-square"></i></span>
                        </div>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="username" required value={emailValue} />
                                
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="password" className="form-control" placeholder="password" required value={passValue}/>
                            </div>
                            <div className="row align-items-center remember">
                                <input type="checkbox" id="rememberMe" name="rememberMe"/>
                                <label htmlFor="rememberMe">Remember me</label>
                            </div>
                            <div className="form-group links">
                                <input type="submit" onClick={() => login(emailValue, passValue)} value="Login" className="btn float-right login_btn"/>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-center links">
                            Don't have an account?<a href="registerPage.html">Sign Up</a>
                        </div>
                        <div className="d-flex justify-content-center">
                            <a href="#">Forgot your password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}