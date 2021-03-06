import '../css/AsideDivOne.css';
import profilePic from '../assets/welovedevs.png';

const AsideDivOne = () => {
    return (
        <div className="leftSpace__divOne">
            <img className="leftSpace__profilePic" src={profilePic} alt="Profile pic from welovedevs website" />
            <div className="leftSpace__title">
                Stéphane ANDRIAMIHAJA
            </div>
            <div className="leftSpace__title--red">
                Développeur Javascript
            </div>
        </div>
    );
};

export default AsideDivOne;