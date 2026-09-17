import LoginForm from "../../components/LoginForm/LoginForm";
import HelmetComponent from "../../components/HelmetComponent";
import { NavLink } from "react-router-dom";
import AuthBrandPanel from "../../components/AuthBrandPanel/AuthBrandPanel";
const LoginPage = () => {
  return (
    <main>
      <HelmetComponent>Login page</HelmetComponent>
      <section>
        <div className="container">
          <AuthBrandPanel />
          <div>
            <LoginForm />
            <p>
              Don't have an account? <NavLink to="/register">Sign Up</NavLink>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
