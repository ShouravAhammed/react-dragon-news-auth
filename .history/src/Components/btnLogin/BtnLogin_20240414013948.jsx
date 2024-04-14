import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";


const BtnLogin = () => {
    return (
        <div>
            <div className="p-3">
            <h3 className="text-xl font-bold text-[#403F3F]">Login With</h3>
            <div className="mt-5 space-y-4">
            <button
        className="w-full px-8 py-2.5 relative group overflow-hidden font-medium bg-white text-sky-500 inline-block border-sky-500 border rounded-md"
      >
        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out rounded-md transform translate-y-0 bg-sky-500 group-hover:h-full"></span>
        <div className="flex justify-center items-center gap-2">
        <span className="relative group-hover:text-white"><FaGoogle/></span>
        <span className="relative group-hover:text-white">Login With Google</span>
        </div>
      </button>
            <button
        className="w-full px-8 py-2.5 relative group overflow-hidden font-medium bg-white text-gray-800 inline-block border-gray-800 border rounded-md"
      >
        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out rounded-md transform translate-y-0 bg-gray-800 group-hover:h-full"></span>
        <div className="flex justify-center items-center gap-2">
        <span className="relative group-hover:text-white"><FaGithub /></span>
        <span className="relative group-hover:text-white">Login With Github</span>
        </div>
      </button>
            </div>
        </div>
            <div className="p-3">
            <h3 className="text-xl font-bold text-[#403F3F]">Found us on</h3>
            <div className="mt-5 space-y-4">
            <button
        className="w-full px-8 py-2.5 relative group overflow-hidden font-medium bg-white text-sky-500 inline-block border-sky-500 border rounded-md"
      >
        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out rounded-md transform translate-y-0 bg-sky-500 group-hover:h-full"></span>
        <div className="flex justify-center items-center gap-2">
        <span className="relative group-hover:text-white"><FaFacebook/></span>
        <span className="relative group-hover:text-white">Facebook</span>
        </div>
      </button>
            <button
        className="w-full px-8 py-2.5 relative group overflow-hidden font-medium bg-white text-gray-800 inline-block border-gray-800 border rounded-md"
      >
        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out rounded-md transform translate-y-0 bg-gray-800 group-hover:h-full"></span>
        <div className="flex justify-center items-center gap-2">
        <span className="relative group-hover:text-white"><FaTwitter /></span>
        <span className="relative group-hover:text-white">Twitter</span>
        </div>
      </button>
            <button
        className="w-full px-8 py-2.5 relative group overflow-hidden font-medium bg-white text-gray-800 inline-block border-gray-800 border rounded-md"
      >
        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out rounded-md transform translate-y-0 bg-gray-800 group-hover:h-full"></span>
        <div className="flex justify-center items-center gap-2">
        <span className="relative group-hover:text-white"><FaInstagram /></span>
        <span className="relative group-hover:text-white">Instagram</span>
        </div>
      </button>
            </div>
        </div>
        </div>
    );
};

export default BtnLogin;