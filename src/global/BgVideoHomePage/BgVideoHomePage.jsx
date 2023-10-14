import videoBg from "../../assets/bg-video.mp4";
import "./BgVideoHomePage.scss";

const BgVideo = ({ children }) => {
  return (
    <div className="bg-video">
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        src={videoBg}
        width={"100%"}
        height={"100%"}
      />
      <div className="overlay" />
      {children}
    </div>
  );
};

export default BgVideo;
