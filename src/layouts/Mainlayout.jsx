import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Mainlayout = () => {
    return (
        <div>
            {/* NavBar */}
            <div className='h-16'>
                <NavBar></NavBar>
            </div>
            {/* Packet */}
            <div className='min-h-[calc(100vh-116px)]'>
                <Outlet></Outlet>
            </div>
            {/* Footer */}
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Mainlayout;