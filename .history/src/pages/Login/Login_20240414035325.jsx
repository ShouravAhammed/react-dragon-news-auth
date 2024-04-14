import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Login = () => {

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.target.email.value)
       
    }

    return (
        <div>
            <Navbar></Navbar>

            <div className="">
  <div className="hero-content">
    <div className="card rounded-none w-full max-w-sm shadow-2xl">

      <form className="card-body">
        <h3 className="text-center pb-8 border-b-2 text-2xl">Login your account</h3>
        <div className="form-control" onSubmit={handleLogin}>
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
        <input 
        className="w-full px-8 py-2.5 relative group overflow-hidden font-medium bg-gray-800 text-white inline-block border-gray-800 border"
      >
        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-white group-hover:h-full"></span>
        <span className="relative group-hover:text-gray-800">Login</span>
      </input>
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