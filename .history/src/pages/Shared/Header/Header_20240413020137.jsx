
import moment from 'moment';
import logo from '../../../assets/logo.png'
const Header = () => {
    return (
        <div>
            <img src={logo} alt="" />
            <p className='text-xl text-[#706F6F] font-medium'>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>

        </div>
    );
};

export default Header;