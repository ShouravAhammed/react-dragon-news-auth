
import moment from 'moment';
import logo from '../../../assets/logo.png'
const Header = () => {
    return (
        <div className='flex justify-center items-center my-'>
            <div className='text-center space-y-2'>
            <img src={logo} alt="" />
            <h3 className='text-[#18px] font-normal text-[#706F6F]'>Journalism Without Fear or Favour</h3>
            <p className='text-xl text-[#706F6F] font-medium'>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            </div>

        </div>
    );
};

export default Header;