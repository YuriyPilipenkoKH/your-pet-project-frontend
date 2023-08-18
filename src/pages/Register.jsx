import { NavLink } from "react-router-dom";


export default function Register() {
  return (
    <div>
      <h2>Registration</h2>
      
      <p>
        Already have an account? <NavLink to="/login">Login</NavLink>
      </p>
    </div>
  );
}
