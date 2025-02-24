import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import { Outlet } from "react-router-dom";


const Home = () => {
    return (
        <div>
            {/* NavBar */}
            <div className="h-16">
                <NavBar></NavBar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;