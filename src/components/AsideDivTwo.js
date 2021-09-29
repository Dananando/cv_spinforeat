import '../css/AsideDivTwo.css';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/Octicons-mark-github.svg';

const AsideDivTwo = () => {
    return (
        <div className="leftSpace__divTwo">
            <div className="leftSpace__divTwo__title">
                Coordonnées et infos complémentaires
            </div>
            <ul className="leftSpace__divTwo__ul">
                <li className="leftSpace__divTwo__ul__li"><span className="leftSpace__divTwo__ul__li__span">Âge</span> : 30 ans</li>
                <li className="leftSpace__divTwo__ul__li"><span className="leftSpace__divTwo__ul__li__span">Habite à Soisy-sous-Montmorency (95)</span></li>
                <li className="leftSpace__divTwo__ul__li"><span className="leftSpace__divTwo__ul__li__span">Téléphone</span> : +33 6 60 93 57 18</li>
                <li className="leftSpace__divTwo__ul__li"><span className="leftSpace__divTwo__ul__li__span">Mail</span> : <a href="mailto:dan.andriamihaja@gmail.com">dan.andriamihaja(at)gmail.com</a></li>
                <li className="leftSpace__divTwo__ul__li">Permis B - Véhiculé</li>
                <li className="leftSpace__divTwo__ul__li"><a href="https://dananando.github.io/startbootstrapfreelancer/">Site web de Stéphane</a></li>
            </ul>
            <div className="leftSpace__divTwo__divImg">
                <a className="leftSpace__divTwo__divImg__a" href="https://www.linkedin.com/in/sandriamihaja/">
                    <img className="leftSpace__divTwo__divImg__img" alt="Little linkedin logo" src={linkedin} />
                </a>
                <a className="leftSpace__divTwo__divImg__a" href="https://github.com/Dananando">
                    <img className="leftSpace__divTwo__divImg__img" alt="Little github logo" src={github} />
                </a>
            </div>
        </div >
    );
};

export default AsideDivTwo;