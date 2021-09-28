import '../css/DivOne.css';
import profilePic from '../assets/welovedevs.png';

const DivOne = () => {
    return (
        <div className="leftSpace__divOne">
            <img className="leftSpace__profilePic" src={profilePic} alt="Profile pic from welovedevs website" />
            <div className="leftSpace__title">
                Stéphane ANDRIAMIHAJA - <span className="leftSpace__title__span">Développeur Javascript</span>
            </div>
        </div>
    );
};

export default DivOne;