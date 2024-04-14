import { Link, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Login = () => {

  const {setTheUser} = useContext(AuthContext)
  const location = useLocation();
  console.log('loginpage', location.pathname)

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        setTheUser(email, password)
        .then(result => {
          const user = result.user
          console.log(user)
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <Navbar></Navbar>

            <div className="">
  <div className="hero-content">
    <div className="card rounded-none w-full max-w-sm shadow-2xl">

      <form className="card-body" onSubmit={handleLogin}>
        <h3 className="text-center pb-8 border-b-2 text-2xl">Login your account</h3>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email Address</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input rounded-none bg-[#F3F3F3]" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input bg-[#F3F3F3] rounded-none" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        <button
        className="w-full px-8 py-2.5 relative group overflow-hidden font-medium bg-gray-800 text-white inline-block border-gray-800 border"
      >
        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-white group-hover:h-full"></span>
        <span className="relative group-hover:text-gray-800">Login</span>
      </button>
        </div>
        <p className="text-center mt-3"> Don`t Have An Account ? <Link className="font-medium text-red-500" to={'/register'}>Register</Link></p>
      </form>

    </div>
  </div>
</div>

        </div>
    );
};

export default Login;