import { Link } from "react-router-dom";
import bannerImg from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
function Signup() {
  const {createEmailAndPassword} = useContext(AuthContext)
  function handelLoginFrom(e) {
    e.preventDefault();
    const from = e.target;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ name, email, password });
    createEmailAndPassword(email,password)
    .then(result => {
      console.log(result.user)
      alert("sign up completed")
    })
    .catch((error) => {
      alert(error.message)
    })
  }

  return (
    <div>
      <div className=" min-h-screen bg-base-200">
        <div className="hero-content flex-col pt-20 gap-x-10 lg:flex-row-reverse">
          <div className=" w-1/2 card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelLoginFrom} className="card-body">
              <div>
                <h1 className="text-5xl text-center font-bold">Login now!</h1>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered"
                  required
                />
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
                  Already have an account ?{" "}
                  <Link to="/login" className="text-green-600 font-bold">
                    Login{" "}
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

export default Signup;
