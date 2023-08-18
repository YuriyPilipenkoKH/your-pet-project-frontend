import { NavLink } from "react-router-dom";


export default function Login () {
  return (
    <div>
      <h2> Login</h2>
      <p>
        Don't have an account? <NavLink to="/register">Registration</NavLink>
      </p>
    </div>
  );
}
