import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Category from "../../components/Category/category";
import Banner from "../../components/Banner/banner";
function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Category />
      <Footer />
    </div>
  );
}
export default Home;
