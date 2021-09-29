import '../css/AsideDivThree.css';

import uk from '../assets/uk.svg';
import node from '../assets/node.svg';
import postgresql from '../assets/postgresql.svg';
import react from '../assets/react.svg';
import web from '../assets/web.png';

const AsideDivThree = () => {
    return (
        <div className="leftSpace__divThree">
            <div className="leftSpace__divThree__title">
                Compétences
            </div>
            <div className="leftSpace__divThree__skills">
                <img className="leftSpace__divThree__skills__img" src={web} alt="HTML CSS JS BOOTSTRAP"/>
                <img className="leftSpace__divThree__skills__img" src={node} alt="NodeJS"/>
                <img className="leftSpace__divThree__skills__img" src={postgresql} alt="postgresql"/>
                <img className="leftSpace__divThree__skills__img" src={react} alt="React"/>
                <img className="leftSpace__divThree__skills__img" src={uk} alt="The United-Kingdom flag"/>
            </div>
        </div>
    );
};

export default AsideDivThree;