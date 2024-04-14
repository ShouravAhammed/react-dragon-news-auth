import Navbar from "../Shared/Navbar/Navbar";


const Login = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="hero">
  <div className="hero-content">
    <div className="card  w-full max-w-sm shadow-2xl">

      <form className="card-body">
        <h3 className="text-center">Login your account</h3>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>

    </div>
  </div>
</div>

        </div>
    );
};

export default Login;