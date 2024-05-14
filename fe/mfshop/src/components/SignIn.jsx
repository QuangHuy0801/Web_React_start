import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { signIn, forgotPassword } from '../services/UserService'; 
import '../assets/style.css';  

function SignIn() {
    const [loginName, setLoginName] = useState('');
    const [password, setPassword] = useState('');
    const [errorLogin, setErrorLogin] = useState('');
    const [errorForgot, setErrorForgot] = useState('');
    const [showForgotPassword, setShowForgotPassword] = useState(false);

    const navigate = useNavigate(); 

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const response = await signIn(loginName, password);
            if (response.data) {
                navigate('/home'); 
            } else {
                setErrorLogin('username hoặc mật khẩu không chính xác');
            }
            console.log(response.data);
        } catch (error) {
            setErrorLogin(error.response ? error.response.data.message : 'Sign-in failed');
        }
    };

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await forgotPassword(loginName);
            // Handle successful forgot password request (e.g., show confirmation message)
            console.log(response.data);
        } catch (error) {
            setErrorForgot(error.response ? error.response.data.message : 'Failed to retrieve password');
        }
    };

    return (
        <section className="ftco-section">
            <div className="container">
                {/* Logo Section */}
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center mb-5">
                        <a href="/home" className="heading-section">Male Fashion</a>
                    </div>
                </div>
                {/* Sign In Section */}
                {showForgotPassword ? (
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-lg-10">
                            <div className="wrap d-md-flex">
                                <div className="img" style={{ backgroundImage: 'url(/login-form-14/images/bg-1.jpg)' }}></div>
                                <div className="login-wrap p-4 p-md-5">
                                    <div className="d-flex">
                                        <div className="w-100" style={{ display: 'flex', transform: 'translateY(10px)' }}>
                                            <h4 className="mb-4">Forgot Password</h4>
                                        </div>
                                    </div>
                                    <form onSubmit={handleForgotPassword} className="signin-form">
                                        <div className="form-group mb-3">
                                            <label className="label" htmlFor="name">Username</label>
                                            <input value={loginName} onChange={(e) => setLoginName(e.target.value)} name="login-name" type="text" className="form-control" placeholder="Username" required />
                                        </div>
                                        <div>
                                            {errorForgot && <p style={{ color: 'red' }}>{errorForgot}</p>}
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="form-control btn btn-primary rounded submit px-3">Check Username</button>
                                        </div>
                                    </form>
                                    <p style={{ marginBottom: 'unset', marginTop: '3rem' }} className="text-center">
                                        Not a member? <a href="/signup">Sign Up</a>
                                    </p>
                                    <p className="text-center">
                                        Or &nbsp; <a href="#" onClick={() => setShowForgotPassword(false)}>Sign In</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-lg-10">
                            <div className="wrap d-md-flex">
                                <div className="img" style={{ backgroundImage: 'url(/login-form-14/images/bg-1.jpg)' }}></div>
                                <div className="login-wrap p-4 p-md-5">
                                    <div className="d-flex">
                                        <div className="w-100" style={{ display: 'flex', transform: 'translateY(10px)' }}>
                                            <h3 className="mb-4">Sign In</h3>
                                        </div>
                                    </div>
                                    <form onSubmit={handleSignIn} className="signin-form">
                                        <div className="form-group mb-3">
                                            <label className="label" htmlFor="name">Username</label>
                                            <input value={loginName} onChange={(e) => setLoginName(e.target.value)} name="login-name" type="text" className="form-control" placeholder="Username" required />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label className="label" htmlFor="password">Password</label>
                                            <input value={password} onChange={(e) => setPassword(e.target.value)} name="password" type="password" className="form-control" placeholder="Password" required />
                                        </div>
                                        <div>
                                            {errorLogin && <p style={{ color: 'red' }}>{errorLogin}</p>}
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="form-control btn btn-primary rounded submit px-3">Sign In</button>
                                        </div>
                                        <div className="form-group d-md-flex">
                                            <div className="w-50 text-left">
                                                <label className="checkbox-wrap checkbox-primary mb-0">Remember Me
                                                    <input name="remember" type="checkbox" defaultChecked />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="w-50 text-md-right">
                                                <a href="#" onClick={() => setShowForgotPassword(true)}>Forgot Password</a>
                                            </div>
                                        </div>
                                    </form>
                                    <p className="text-center">
                                        Not a member? <a href="/signup">Sign Up</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default SignIn;
