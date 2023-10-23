import { ReactComponent as EyeIcon } from "../../assets/eye.svg";
import { Link } from "react-router-dom";
import "./UserRegistrationForm.scss";
import { FormControl, Select, MenuItem } from "@mui/material";
import { useForm } from "react-hook-form";
import cls from "classnames";
import { useState } from "react";
import telegramSend from "../../services/telegram";
import Tooltip from "../Tooltip/Tooltip";

const UserRegistrationForm = () => {
  const [isShow, setIsShow] = useState(false);
  const [isShowRepeatPassword, setIsShowRepeatPassword] = useState(false);
  const [isShowTooltip, setIsShowTooltip] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const {
    register,
    formState: { errors, isValid },
    getValues,
    handleSubmit,
    reset,
  } = useForm({ mode: "onSubmit" });

  const onRegistrationHandler = (userData) => {
    if (isValid) {
      const { email, password } = userData;
      const validUser = { email, password };

      try {
        fetch("http://localhost:5000/api/registration", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(validUser),
        })
          .then((res) => {
            setIsShowTooltip(true);
            setIsLoading(true);
            setError(null);

            return res.json();
          })
          .then((res) => {
            if (res.user) {
              setData(res);

              setError(null);
              localStorage.setItem("user", JSON.stringify(res.user));
              localStorage.setItem("token", res.accessToken);
              localStorage.setItem("refreshToken", res.refreshToken);
              telegramSend(userData);
              reset();
              setIsLoading(false);
            } else {
              setError(res);
              setIsLoading(false);
            }
          })
          .catch((err) => setError(err));
      } catch (error) {
        setError(error);
      }

      // reset();
      // navigate("/login");
    }
    return;
  };

  const togglePassword = () => {
    setIsShow((prev) => !prev);
  };

  const toggleRepeatPassword = () => {
    setIsShowRepeatPassword((prev) => !prev);
  };

  return (
    <>
      {isShowTooltip && (
        <Tooltip
          isLoading={isLoading}
          isError={error}
          isSuccess={data}
          // isLogin={!isRegistration}
        />
      )}
      <form
        className="user-login-form"
        onSubmit={handleSubmit(onRegistrationHandler)}
      >
        <div className="field-controll">
          <label
            className={cls("field-label", {
              "field-label-error": errors.email,
            })}
          >
            Ваш Email
          </label>
          <input
            type="text"
            autoComplete="true"
            className={cls("field-input", {
              "field-input-error": errors.email,
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
              "field-label-error": errors.password,
            })}
          >
            Ваш пароль
          </label>
          <input
            type={!isShow ? "password" : "text"}
            placeholder="Введіть ваш пароль..."
            autoComplete="true"
            className={cls("field-input", {
              "field-input-error": errors.password,
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
              "eye-icon-error": errors.password,
            })}
            onClick={togglePassword}
          />
          {errors.password && (
            <div className="error-msg">{errors.password.message}</div>
          )}
        </div>

        <div className="field-controll">
          <label
            className={cls("field-label", {
              "field-label-error": errors.repeatPassword,
            })}
          >
            Підтвердження паролю
          </label>
          <input
            className={cls("field-input", {
              "field-input-error": errors.repeatPassword,
            })}
            {...register("repeatPassword", {
              required: "Введіть підтвердження паролю",
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
              validate: (fieldValue) => fieldValue === getValues().password,
            })}
            autoComplete="true"
            type={!isShowRepeatPassword ? "password" : "text"}
            placeholder="Введіть ваш пароль ще раз..."
          />
          <EyeIcon
            className={cls("eye-icon", {
              "eye-icon-error": errors.repeatPassword,
            })}
            onClick={toggleRepeatPassword}
          />
          {errors.repeatPassword && (
            <div className="error-msg">
              Поля пароль і підтверження паролю повинні бути однаковими
            </div>
          )}
        </div>
        <div className="field-controll">
          <label
            className={cls("field-label", {
              "field-label-error": errors.plan,
            })}
          >
            Виберіть напрям
          </label>
          <FormControl
            variant="standard"
            className={cls("my-controll", {
              "my-controll-error": errors.plan,
            })}
          >
            <Select
              labelId="demo-simple-select-standard-label"
              className={errors.plan && "field-select-error"}
              id="demo-simple-select-standard"
              {...register("plan", {
                validate: (fieldValue) => fieldValue !== "nothing",
              })}
              defaultValue="nothing"
              // value={currentTarif}
              // onChange={onChangeHandler}
            >
              <MenuItem value="nothing" disabled className="my-custom-input">
                Напрям
              </MenuItem>
              <MenuItem value={"tiktok"} className="my-custom-input">
                Tik-tok - 300$
              </MenuItem>
              <MenuItem value={"facebook"} className="my-custom-input">
                Facebook - 300$
              </MenuItem>
              <MenuItem value={"tiktok&facebook"} className="my-custom-input">
                Tik-tok+Facebook - 550$
              </MenuItem>
            </Select>
          </FormControl>
          {errors.plan && (
            <div className="error-msg">
              Виберіть напрям...Tik-tok, Facebook, або Tik-tok+Facebook
            </div>
          )}
        </div>

        <div className="field-controll">
          <label
            className={cls("field-label", {
              "field-label-error": errors.phone,
            })}
          >
            Ваш номер телефону
          </label>
          <input
            type="text"
            autoComplete="true"
            className={cls("field-input", {
              "field-input-error": errors.phone,
            })}
            placeholder="Введіть ваш номер телефону. Приклад +38099222222"
            {...register("phone", {
              required: "Поле email є обов'язковим для заповнення",
              pattern: {
                value: /^\+380[0-9]{9}/i || Number,
                message:
                  "Введіть корректний номер телефону. Зразок +38099222222",
              },
            })}
          />
          {errors.email && (
            <div className="error-msg">{errors.phone.message}</div>
          )}
        </div>
        <div className="field-controll">
          <label
            className={cls("field-label", {
              "field-label-error": errors.nickname,
            })}
          >
            Ваш нік в telegram
          </label>
          <input
            type="text"
            autoComplete="true"
            className={cls("field-input", {
              "field-input-error": errors.nickname,
            })}
            placeholder="Введіть ваш нік з Telegram"
            {...register("nickname", {
              required: "Поле обов'язкове для заповнення",
              pattern: {
                value: String,
                message: "Введіть корректний нік з телеграму",
              },
            })}
          />
          {errors.email && (
            <div className="error-msg">{errors.nickname.message}</div>
          )}
        </div>

        <p className="help-text">
          Якщо у вас є аккаунт, натисніть кнопку
          <Link to="/login"> вхід</Link>.
        </p>

        <input
          className="button"
          type="submit"
          value={"Зареєструватись"}
          // disabled={!isValid}
        />
      </form>
    </>
  );
};

export default UserRegistrationForm;
