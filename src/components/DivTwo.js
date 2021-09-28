import '../css/DivTwo.css';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/Octicons-mark-github.svg';

const DivTwo = () => {
    return (
        <div className="leftSpace__divTwo">
            <div className="leftSpace__divTwo__title">
                Coordonnées et infos complémentaires
            </div>
            <ul className="leftSpace__divTwo__ul">
                <li>Âge : 30 ans</li>
                <li>Habite à Soisy-sous-Montmorency (95)</li>
                <li>Téléphone : +33 6 60 93 57 18</li>
                <li>Mail : dan.andriamihaja@gmail.com</li>
                <li>Permis B - Véhiculé</li>
                <li><a href="https://dananando.github.io/startbootstrapfreelancer/">Site web de Stéphane</a></li>
                <li>
                    <a href="https://www.linkedin.com/in/sandriamihaja/"><img className="leftSpace__divTwo__ul__li__img" alt="Little linkedin logo" src={linkedin} /></a></li>
                <li>
                    <a href="https://github.com/Dananando"><img className="leftSpace__divTwo__ul__li__img" alt="Little github logo" src={github} /></a>
                </li>
            </ul>

        </div >
    );
};

export default DivTwo;