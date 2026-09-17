import RegisterForm from "../../components/RegisterForm/RegisterForm";
import HelmetComponent from "../../components/HelmetComponent";
import AuthBrandPanel from "../../components/AuthBrandPanel/AuthBrandPanel";
import { NavLink } from "react-router-dom";
const RegisterPage = () => {
  return (
    <main>
      <HelmetComponent>Register page</HelmetComponent>
      <section>
        <div className="container">
          <AuthBrandPanel />
          <div>
            <RegisterForm />

            <p>
              Already have an account? <NavLink to="/login">Sign In</NavLink>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RegisterPage;
