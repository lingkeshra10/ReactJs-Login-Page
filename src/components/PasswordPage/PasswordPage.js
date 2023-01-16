import { useNavigate } from "react-router-dom";
import './PasswordPage.css';

function PasswordPage(){

  const navigate = useNavigate();

  function redirectHomePage(){
    navigate("/home");
  }

  return(
      <div className="Auth-form-content">
        <button className='back-button'> &larr; Go back</button>
        <img className="security-image-icon" src={ require('../../images/personIcon.jpeg') } />
        <div className="form-group mt-3">
            <label>Password</label>
            <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter your password"
            />
        </div>
        <div className="d-grid gap-2 mt-3">
            <button onClick={redirectHomePage} type="submit" className="btn btn-primary">
                Submit
            </button>
        </div>
        <p className="text-center mt-2">
            <a href="#">Forgot password?</a>
        </p>
      </div>
    );
}

export default PasswordPage;