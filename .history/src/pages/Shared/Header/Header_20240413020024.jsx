
import moment from 'moment';
import logo from '../../../assets/logo.png'
const Header = () => {
    return (
        <div>
            <img src={logo} alt="" />
            <p className='text-[18px] text-[#706F6F]'>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;