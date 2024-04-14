import { FaGoogle } from "react-icons/fa";


const BtnLogin = () => {
    return (
        <div className="p-3">
            <h3 className="text-xl font-bold text-[#403F3F]">Login With</h3>
            <div className="mt-5">
            <button
        className="w-full px-8 py-2.5 relative group overflow-hidden font-medium bg-white text-[#403F3F] inline-block border-sky-400 border rounded-md"
      >
        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#403F3F] group-hover:h-full"></span>
        <div className="flex justify-center items-center gap-2">
        <span className="relative group-hover:text-white"><FaGoogle/></span>
        <span className="relative group-hover:text-white">Login With Google</span>
        </div>
      </button>
            </div>
        </div>
    );
};

export default BtnLogin;