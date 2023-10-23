import "./Tooltip.scss";
import { Link } from "react-router-dom";

const Tooltip = ({ isLoading, isError, isSuccess }) => {
  return (
    <div className="tooltip-wrapper">
      {isLoading && (
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      {!isLoading && isError && (
        <div className="error-wrapper">
          <h2>Помилка</h2>
          <p>{isError.message}</p>
          <p>Будьласка спробуйте увійти у ваш аккаунт</p>
          <Link to="/login">Натисніть сюди</Link>
        </div>
      )}
      {!isLoading && isSuccess && (
        <div className="success-wrapper">
          <h2>Вітаємо</h2>
          <p>Успішна реєстрація</p>
          <p>
            Будьласка підтвердіть вашу електронну поштку, лист був відправлений
            на вашу почту. (Лист може потрапити у папку: "Спам" на вашій
            електронній пошті)
            <br /> {isSuccess.user.email}
          </p>
          <Link to="/login">Натисніть сюди</Link>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
