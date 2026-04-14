import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/common/Loader";
import "../../styles/login.scss";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const onSubmit = (data: any) => {
    if (data) {
      setLoading(true);
      setTimeout(() => {
        reset();
        setLoading(false);
        navigate("/dashboard");
      }, 2000);
    }
  };

  if (loading) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <Loader />
      </div>
    );
  }

  return (
    <section className="login">
      <div className="login-div">
        <section className="login-images">
          <img
            src="https://joy-okwudire-lendsqr-fe-test.vercel.app/images/logo.svg"
            alt="logo"
            className="logo"
          />
          <div>
            <img
              src="https://joy-okwudire-lendsqr-fe-test.vercel.app/images/login-illus.svg"
              alt="illustration"
            />
          </div>
        </section>

        <section className="login-form">
          <img
            src="https://joy-okwudire-lendsqr-fe-test.vercel.app/images/logo.svg"
            alt="logo"
            className="logo"
          />

          <section>
            <div className="login-header">
              <h1>Welcome!</h1>
              <p>Enter details to login.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                {errors.email && errors.email.type === "required" && (
                  <span role="alert" className="input-error">
                    Please enter your email
                  </span>
                )}
              </div>

              <div>
                <div className="input-password">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />
                  <p
                    className="password-visible"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "HIDE" : "SHOW"}
                  </p>
                </div>
                {errors.password && errors.password.type === "required" && (
                  <span role="alert" className="input-error">
                    Please enter your password
                  </span>
                )}
              </div>

              <p>FORGOT PASSWORD?</p>

              <button type="submit">LOG IN</button>
            </form>
          </section>
        </section>
      </div>
    </section>
  );
};

export default Login;