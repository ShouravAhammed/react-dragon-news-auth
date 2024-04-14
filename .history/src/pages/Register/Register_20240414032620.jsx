import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Register = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="">
  <div className="hero-content">
    <div className="card rounded-none w-full max-w-sm shadow-2xl">

      <form className="card-body">
        <h3 className="text-center pb-8 border-b-2 text-2xl">Register your account</h3>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" id="name" name="name" placeholder="name" className="input rounded-none bg-[#F3F3F3]" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email Address</span>
          </label>
          <input type="email" id="email" name="email" placeholder="email" className="input rounded-none bg-[#F3F3F3]" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" id="password" name="password" placeholder="password" className="input bg-[#F3F3F3] rounded-none" required />
        </div>
        <div className="mt-2 flex items-center gap-2">
            <input type="checkbox" name="checked" id="checked" /><label className="label">Accept Term & Conditions</label>
        </div>
        <div className="form-control">
        <button
        className="w-full px-8 py-2.5 relative group overflow-hidden font-medium bg-gray-800 text-white inline-block border-gray-800 border"
      >
        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-white group-hover:h-full"></span>
        <span className="relative group-hover:text-gray-800">Register</span>
      </button>
        </div>
        <p className="text-center mt-3"> You Have Already An Account ? <Link className="font-medium text-red-500" to={'/login'}>Login</Link></p>
      </form>

    </div>
  </div>
</div>

        </div>
    );
};

export default Register;