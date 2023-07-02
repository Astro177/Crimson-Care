import Appointment from './Appointment';
import Banner from './Banner';
import Campaigns from './Campaigns';
import Process from './Process';

const Homepage = () => {
    return (
        <div>
            <Banner/>
            <Process/>
            <Campaigns/>
            <Appointment/>
        </div>
    );
};

export default Homepage;