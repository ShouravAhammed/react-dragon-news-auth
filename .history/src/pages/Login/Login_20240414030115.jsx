import Navbar from "../Shared/Navbar/Navbar";


const Login = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="">
  <div className="hero-content">
    <div className="card rounded-none w-full max-w-sm shadow-2xl">

      <form className="card-body">
        <h3 className="text-center pb-8 border-b-2 text-2xl">Login your account</h3>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email Address</span>
          </label>
          <input type="email" placeholder="email" className="input rounded-none bg-[#F3F3F3]" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input bg-[#F3F3F3] rounded-none" required />
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
        <p>Please Register</p>
      </form>

    </div>
  </div>
</div>

        </div>
    );
};

export default Login;