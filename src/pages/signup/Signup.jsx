import './Signup.css';
// import axios from 'axios';
import sideImg from '../../assets/images/side-img.png'
import formImage from '../../assets/images/form-image.png'
import hrLine from '../../assets/images/hr-line.png'
import ofLogo from '../../assets/icons/offerl-logo.svg'
import googleIcon from '../../assets/icons/google-icon.svg'
import facebookIcon from '../../assets/icons/facebook-icon.svg'
import appleIcon from '../../assets/icons/apple-icon.svg'
import PhoneCode from '../../components/PhoneCode'
import { useState } from 'react';



const Signup = () => {
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [logDetail, setLogDetails] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isLogin, setIsLogin] = useState(true)
    const [isSignup, setIsSignup] = useState(false)

    const handleIsLogin = () => {
        setIsSignup(false)
        setIsLogin(true)
        console.log(`isLogin: ${isLogin}`)
    }

    const handleIsSignup = () => {
        setIsLogin(false)
        setIsSignup(true)
        console.log(`isSignup: ${isSignup}`)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const URL = 'https://localhost:5000/auth';
        // const { data: { token, email, password } } = await axios.post(`${URL}/${isLogin ? 'signup' : 'login'}`, {
        //     email, phone, password
        // });

    }

    return (
        <section className="signup">
            <div className="s-img">
                <img src={sideImg} alt="side-img" />
            </div>


            {/*  Content form */}
            <div className="s-content">
                <div className="s-content-wrapper">
                    <div className="ol-head">
                        <div className="of-logo">
                            <img src={ofLogo} lt="offerletter-logo" />
                        </div>
                        <h1>Offerletter</h1>
                    </div>

                    <div className="lo-sg">
                        <span onClick={handleIsLogin}>Login</span>
                        <span onClick={handleIsSignup}>Signup</span>
                    </div>

                    <div className={!isLogin? "form-img is-login" : "form-img"}>
                        <img className='image-form' src={formImage} alt="form-image" />
                        <div className="form-div">
                            <form onSubmit={handleSubmit}>
                                {!isLogin && (<input
                                    type="text"
                                    required
                                    placeholder="Email Id"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />)}
                                {isLogin && (<input
                                    type="text"
                                    required
                                    placeholder="Phone No/Email Id"
                                    value={logDetail}
                                    onChange={(e) => setLogDetails(e.target.value)}
                                />)}

                                {!isLogin && (<div className="phone-no">
                                    <PhoneCode setPhone={setPhone}/>
                                </div>)}
                                <input 
                                    type="password"
                                    required
                                    placeholder="Password"
                                    value={password}
                                    style={{marginTop: isLogin? '15px' : '10px'}}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {!isLogin && (<input
                                    type="password"
                                    required
                                    placeholder="Retype Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />)}
                                {isLogin && (<p style={{marginTop: isLogin? '15px' : '10px'}}>Forget Password</p>)}
                                <button style={{marginTop: isLogin? '15px' : '10px'}}>Sign Up</button>
                            </form>
                            {/* Horizontal line for Or */}
                            <div className="or" style={{marginTop: isLogin? '13px' : '7px'}}>
                                <div className="h-line">
                                    <img src={hrLine} alt="hr-line" />
                                </div>
                                <span>Or</span>
                                <div className="h-line">
                                    <img src={hrLine} alt="hr-line" />
                                </div>
                            </div>

                            {/* Sign In with */}
                            <div className="opts-wrapper">
                                <div className="sign-in-opts" style={{marginTop: isLogin? '15px' : '10px'}}>
                                    <span>Sign up with Google</span>
                                    <div className="icon-div">
                                        <div className="icon-img">
                                            <img src={googleIcon} alt="google-icon" />
                                        </div>
                                    </div>
                                </div>
                                <div className="sign-in-opts" style={{marginTop: isLogin? '15px' : '10px'}}>
                                    <span>Sign up with Facebook</span>
                                    <div className="icon-div">
                                        <div className="icon-img">
                                            <img src={facebookIcon} alt="facebook-icon" />
                                        </div>
                                    </div>
                                </div>
                                <div className="sign-in-opts" style={{marginTop: isLogin? '15px' : '10px'}}>
                                    <span>Sign up with Apple</span>
                                    <div className="icon-div">
                                        <div className="icon-img">
                                            <img src={appleIcon} alt="apple-icon" />
                                        </div>
                                    </div>
                                </div>
                                {/* Agreement */}
                                {!isLogin && (<div className="agreement">
                                    <input
                                    type="checkbox" 
                                    className="checkbox" 
                                    />
                                    <p>I agree to OFFERLETTER 
                                        <span><a href="#"> User Agreement </a></span> 
                                        and <span><a href="#"> Privacy Policy</a></span>
                                    </p>
                                </div>)}

                                {/* Switch between login and signup */}

                                {!isLogin && (<p className='switch'>Already have an account? <span onClick={handleIsLogin}>Login</span></p>)}
                                {isLogin && (<p className='switch' style={{marginTop: isLogin? '35px' : '15px'}}>Don't have an account? <span onClick={handleIsSignup}>Signup</span></p>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Signup;