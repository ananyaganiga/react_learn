import "./banner.css";
import ananyaImg from "../../assets/bannerimg.jpg";
function Banner(props) {
  return (
    <div class="banner">
      <img className="banner-image" src={props.ananyaImg} />
    </div>
  );
}
export default Banner;
