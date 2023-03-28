import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Innovations from "../../components/innovations/Innovations";
import Navbar from "../../components/navbar/Navbar";
import Inovacije from "../inovacije/Inovacije";

const Home = () => {
    return ( 
        <div>
            <Navbar />
            <Header />
            <Innovations />
            <Inovacije />
            <Footer />
        </div>
     );
}
 
export default Home;