import { ReactComponent as EyeIcon } from "../../assets/eye.svg";
import { Link, useNavigate } from "react-router-dom";
import "./UserLoginForm.scss";
import { useForm } from "react-hook-form";
import cls from "classnames";
import { useState } from "react";
import { useDispatch } from "react-redux";

const UserLoginForm = () => {
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: "onSubmit" });

  const onLoginHandler = (userData) => {
    console.log(userData);
    if (isValid) {
      const { email, password } = userData;
      const validUser = { email, password };

      try {
        fetch("http://localhost:5000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(validUser),
        })
          .then((res) => {
            setError(null);
            return res.json();
          })
          .then((res) => {
            if (res.user) {
              setData(res);
              localStorage.setItem("user", JSON.stringify(res.user));
              localStorage.setItem("token", res.accessToken);
              localStorage.setItem("refreshToken", res.refreshToken);
              dispatch({ type: "LOGIN", payload: data });
              navigate("/courses");
            } else {
              setError(res);
              throw new Error(error);
            }
          });
      } catch (error) {
        console.log(error);
      }
    }

    return;
  };

  const togglePassword = () => {
    setIsShow((prev) => !prev);
  };

  const onChangeResetError = (e) => {
    setError(null);
  };

  return (
    <>
      <form className="user-login-form" onSubmit={handleSubmit(onLoginHandler)}>
        {error && <p className="form-error">{error.message}</p>}

        <div className="field-controll">
          <label
            className={cls("field-label", {
              "field-label-error": errors.email || error,
            })}
          >
            Ваш Email
          </label>
          <input
            type="text"
            autoComplete="true"
            onFocus={error && onChangeResetError}
            className={cls("field-input", {
              "field-input-error": errors.email || error,
            })}
            placeholder="Введіть ваш email. Приклад, test@test.com..."
            {...register("email", {
              required: "Поле email є обов'язковим для заповнення",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/i,
                message: "Введіть корректний email. Зразок test@gmail.com",
              },
            })}
          />
          {errors.email && (
            <div className="error-msg">{errors.email.message}</div>
          )}
        </div>
        <div className="field-controll">
          <label
            className={cls("field-label", {
              "field-label-error": errors.password || error,
            })}
          >
            Ваш пароль
          </label>
          <input
            type={!isShow ? "password" : "text"}
            placeholder="Введіть ваш пароль..."
            autoComplete="true"
            onFocus={error && onChangeResetError}
            className={cls("field-input", {
              "field-input-error": errors.password || error,
            })}
            {...register("password", {
              required: "Поле password є обов'язковим для заповнення",
              minLength: {
                value: 10,
                message:
                  "Мінімальна довжина пароля повинна бути не менше 10 символів",
              },
              maxLength: {
                value: 30,
                message:
                  "Максимальна довжина пароля повинна бути не менше 10 символів",
              },
            })}
          />
          <EyeIcon
            className={cls("eye-icon", {
              "eye-icon-error": errors.password || error,
            })}
            onClick={togglePassword}
          />
          {errors.password && (
            <div className="error-msg">{errors.password.message}</div>
          )}
        </div>

        <p className="help-text">
          Якщо у вас немає аккаунту, натисніть кнопку
          <Link to="/registration"> зареєструватись</Link>
        </p>

        <input
          className="button"
          type="submit"
          value={"Вхід"}
          // disabled={!isValid}
        />
      </form>
    </>
  );
};

export default UserLoginForm;
