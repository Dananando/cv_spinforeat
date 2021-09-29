import '../css/MainDivTwo.css';

const MainDivTwo = () => {
    return (
        <div className="divTwo">
            <div className="divTwo__title">
                Expériences
            </div>
            <div className="divTwo__title--little">
                Projet de fin de formation
            </div>
            <div className="divTwo__title--date">
                O'Clock (Juillet 2021 - août 2021)
            </div>
            <div className="divTwo__text">
                <span>
                    Réalisation d'une application web de rencontres et services canins
                </span>
                <span>
                    A quoi ressemble ce projet : <a href="https://www.youtube.com/watch?v=rDUrb9VLdFA">
                        https://www.youtube.com/watch?v=rDUrb9VLdFA (à partir de
                        42:40)
                    </a>
                </span>
                <span>
                    <span className="span--bold">Technos utilisées</span> : React, Node, Express, Sequelize, PostgreSQL
                </span>
            </div>

            <div className="divTwo__title--little">
                Projet personnels
            </div>
            <div className="divTwo__title--date">
                A mon compte (Février 2021 - aujourd'hui)
            </div>
            <div className="divTwo__ulContainer">
                <ul className="divTwo__title__ul"> ► <a href="https://github.com/Dananando/17th-shard-API">Projet CRUD</a> sur les livres de l'écrivain Brandon SANDERSON :
                    <li>✓Architecture REST</li>
                    <li>✓Node.js, Express</li>
                    <li>✓PostgreSQL</li>
                    <li>✓Middleware de vérification d'authentification (avec JWT)</li>
                </ul>
                <ul className="divTwo__title__ul"> ►<a href="https://github.com/Dananando/pokemon-API/tree/rest-api">Projet CRUD</a> avec les 151 premiers Pokémons :
                    <li>✓Architecture REST</li>
                    <li>✓Node.js, Express</li>
                    <li>✓PostgreSQL</li>
                    <li>En cours : une branche utilisant GraphQL et une autre utilisant MongoDB</li>
                </ul>
                <ul className="divTwo__title__ul">            ►Projets front :
                    <li>✓Réalisation de mon site web avec bootstrap</li>
                    <li>✓<a href="https://dananando.github.io/amazing-counter/">Un compteur</a> et un <a href="https://dananando.github.io/color-flipper/">color-flipper</a></li>
                    <li>✓Réalisation de mon <a href="https://github.com/Dananando/cv_spinforeat">CV</a> avec React</li>
                </ul>
            </div>

        </div>
    );
};

export default MainDivTwo;