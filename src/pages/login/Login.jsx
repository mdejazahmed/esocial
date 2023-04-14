import { Link } from "react-router-dom";
import "./login.scss";

export default function Login() {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Welcom to Esocial</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            ullam, iure vero minus dolor ad, commodi reiciendis asperiores
            voluptatibus dolorem doloremque?
          </p>
          <span>Don't you have an acoount?</span>
          <Link to="/register">
          <button>Register</button>
          </Link>
        </div>
        <div className="right">
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="Mobile"/>
                <input type="password" placeholder="Password" />
                <button>Login</button>
            </form>
        </div>
      </div>
    </div>
  );
}
