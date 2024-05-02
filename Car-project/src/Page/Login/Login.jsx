import { Link } from "react-router-dom";
import bannerImg from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
function Login() {
  const { signWithEamilPassword ,user} = useContext(AuthContext);
  console.log(user)
  function handelLoginFrom(e) {
    e.preventDefault();
    const from = e.target;
    const email = e.target.email.value;
    const password = e.target.password.value;
    signWithEamilPassword(email, password)
    .then(result => {
        console.log(result.user)
        alert("Login success")
    })
    .catch((error) => {
        console.log(error.message)
    })
  }
  return (
    <div>
      <div className="  bg-base-200">
        <div className="hero-content flex-col pt-20 gap-x-10 lg:flex-row-reverse">
          <div className=" w-1/2 card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelLoginFrom} className="card-body">
              <div>
                <h1 className="text-5xl text-center font-bold">Login now!</h1>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
              <div>
                <p className="text-center">
                  Link to car doctor ?{" "}
                  <Link to="/register" className="text-green-600 font-bold">
                    Sign Up{" "}
                  </Link>
                </p>
              </div>
            </form>
          </div>
          <div className="text-center lg:text-left w-1/2 ">
            <img src={bannerImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
