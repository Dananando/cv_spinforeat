import '../css/Aside.css';

import AsideDivOne from './AsideDivOne';
import AsideDivTwo from './AsideDivTwo';
import AsideDivThree from './AsideDivThree';
import AsideDivFour from './AsideDivFour';

const Aside = () => {
    return (
        <aside className="leftSpace">
            <AsideDivOne />
            <AsideDivTwo />
            <AsideDivThree />
            <AsideDivFour />
        </aside>
    );
};

export default Aside;