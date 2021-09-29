import '../css/Main.css';

import MainDivOne from './MainDivOne';
import MainDivTwo from './MainDivTwo';
// import AsideDivTwo from './AsideDivTwo';
// import AsideDivThree from './AsideDivThree';
// import AsideDivFour from './AsideDivFour';

const Main = () => {
    return (
        <main className="main">
            <MainDivOne />
            <MainDivTwo />
        </main>
    );
};

export default Main;