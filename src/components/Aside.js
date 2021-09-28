import '../css/Aside.css';

import DivOne from './DivOne';
import DivTwo from './DivTwo';

const Aside = () => {
    return (
        <aside className="leftSpace">
            <DivOne />
            <DivTwo />
        </aside>
    );
};

export default Aside;