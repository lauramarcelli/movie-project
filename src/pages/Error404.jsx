
import error404Img from "../assets/error 404.png";

const Error404 = () => {
  return (
    <div className="page error-page">
      <figure>
        <img src={error404Img} alt="error" />
      </figure>
    </div>
  );
};

export default Error404;
