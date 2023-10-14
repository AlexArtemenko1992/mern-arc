import { ReactComponent as EyeIcon } from "../../assets/eye.svg";
import { Link, useNavigate } from "react-router-dom";
import "./UserLoginForm.scss";
import { FormControl, Select, MenuItem } from "@mui/material";
import { useForm } from "react-hook-form";
import cls from "classnames";
import { useState } from "react";
import { useDispatch } from "react-redux";

const UserLoginForm = ({ isRegistration, isRequest }) => {
  const [isShow, setIsShow] = useState(false);
  const [isShowRepeatPassword, setIsShowRepeatPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors, isValid },
    getValues,
    handleSubmit,
    reset,
  } = useForm({ mode: "onSubmit" });

  const onSubmitHandler = (data) => {
    if (isValid) {
      localStorage.setItem("user", JSON.stringify(data));
      reset();
      navigate("/login");
    }
    return;
  };

  const onLoginHandler = (data) => {
    if (isValid && localStorage.getItem("user")) {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (
        data.email === storedUser.email &&
        data.password === storedUser.password
      ) {
        dispatch({ type: "LOGIN" });
      }
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
    <form
      className="user-login-form"
      onSubmit={
        isRegistration
          ? handleSubmit(onSubmitHandler)
          : handleSubmit(onLoginHandler)
      }
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
          className={cls("field-input", { "field-input-error": errors.email })}
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
      {isRegistration && (
        <>
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
        </>
      )}
      {isRegistration ? (
        <p className="help-text">
          Якщо у вас є аккаунт, натисніть кнопку
          <Link to="/login"> вхід</Link>.
        </p>
      ) : (
        <p className="help-text">
          Якщо у вас немає аккаунту, натисніть кнопку
          <Link to="/registration"> зареєструватись</Link>
        </p>
      )}
      <input
        className="button"
        type="submit"
        value={isRegistration ? "Зареєструватись" : "Вхід"}
        // disabled={!isValid}
      />
    </form>
  );
};

export default UserLoginForm;
