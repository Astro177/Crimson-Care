import Appointment from './Appointment';
import Banner from './Banner';
import Campaigns from './Campaigns';
import Process from './Process';
import Volunteer from './Volunteer';

const Homepage = () => {
    return (
        <div>
            <Banner/>
            <Process/>
            <Campaigns/>
            <Appointment/>
            <Volunteer/>
        </div>
    );
};

export default Homepage;