import '../css/MainDivOne.css';

const MainDivOne = () => {
    return (
        <div className="divOne">
            <div className="divOne__title">
                Formation
            </div>
            <div className="divOne__title--little">
                Ecole O'Clock
            </div>
            <div className="divOne__title--date">
                Février 2021 - Août 2021
            </div>
            <div className="divOne__title--resume">
                Formation développeur fullstack JavaScript - 5 mois
                (700h) :
            </div>
            <ul className="divOne__title__ul"> ►"Socle" de 3 mois :
                <li>✓Javascript (ES6), HTML5/CSS3</li>
                <li>✓Node.js, Express, API REST</li>
                <li>✓PostgreSQL, Sequelize</li>
            </ul>
            <ul className="divOne__title__ul"> ►"Spécialisation" de 1 mois - Data & API :
                <li>✓Approfondissement Javascript</li>
                <li>✓Sqitch (versioning de BDD)</li>
                <li>✓NoSQL (MongoDB)</li>
                <li>✓GraphQL, Redis</li>
            </ul>
            <ul className="divOne__title__ul">            ►"Projet de fin de formation" de 1 mois :
                <li>✓Développement en équipe "from scratch" d'une application web</li>
            </ul>

            <div className="divOne__title--little">
                INSA Rouen
            </div>
            <div className="divOne__title--date">
                Septembre 2009 - Septembre 2014
            </div>
            <div className="divOne__title--date">
                Diplôme d'Ingénieur
            </div>
            <div className="divOne__title--resume">
                Ingénieur généraliste spécialisé en Maîtrise des
                Risques Industriels
            </div>
        </div>
    );
};

export default MainDivOne;