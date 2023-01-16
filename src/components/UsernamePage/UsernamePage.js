import { useNavigate } from "react-router-dom";

function UsernamePage(){

  const navigate = useNavigate();

  function redirectHomePage(){
    navigate("/home");
  }

  return(
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Login Page</h3>
        <div className="form-group mt-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Enter username"
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button onClick={redirectHomePage} type="next" className="btn btn-primary">
            Next
          </button>
        </div>
        <p className="text-center mt-2">
          <a href="#">Forgot password?</a>
        </p>
      </div>
    );
}

export default UsernamePage;