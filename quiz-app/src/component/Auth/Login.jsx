import {useAuth} from "../../context/index";
import "./Auth.css";

export const AuthLogin = () => {
  
    const {username,password,authDispatch} = useAuth();
    console.log({ username, password })

    const handleUserNameChange = (e) => {
        authDispatch ({
            type:"USERNAME",
            payload:e.target.value
        })
    }

    const handlePasswordChange = (e) => {
        authDispatch ({
            type: "PASSWORD",
            payload:e.target.value
        })
    }

    const hanldeLoginClick = (e) => {
        e.preventDefault();   
     }
    
    return(
        <div className="d-grid">
        <div className="login-auth d-flex direction-column justify-center">
            <h2 className="auth-title">Login</h2>
            <form onSubmit={hanldeLoginClick}>
                <div className="form-container">
                    <label className="form-label">Username</label>
                    <input className="form-input lh-ls" placeholder="prakashsakari" onChange={handleUserNameChange} />
                </div>
                <div className="form-container">
                    <label className="form-label">Password</label>
                    <input className="form-input lh-ls" placeholder="*******" onChange={handlePasswordChange} />
                </div>
                <div className="cta">
                    <button className="button login-btn btn-margin cursor sign-up-btn">Login</button>
                </div>
            </form>
        </div>
    </div>
    )
}