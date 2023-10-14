import { memo } from "react";
import { useSelector } from "react-redux";
import styles from "./AdminForm.module.scss";

const AdminForm = ({ isRemoved, isChangePassword }) => {
  const isShow = useSelector((state) => state.loginReducer.isShow);

  console.log(isShow);
  const onClickHandler = (e) => {
    e.preventDefault();

    console.log("CLICK");
  };

  return (
    <form action="post" className={styles["admin-form"]}>
      {!isRemoved && !isChangePassword && (
        <div>
          <label>First name</label>
          <input placeholder="First name..." />
        </div>
      )}
      {!isRemoved && !isChangePassword && (
        <div>
          <label>Last name</label>
          <input placeholder="Last name..." />
        </div>
      )}
      <div>
        <label>Email</label>
        <input placeholder="Email. For example this test@test.com" />
      </div>
      {(!isRemoved || isChangePassword) && (
        <div>
          <label>{isChangePassword ? "New Password" : "Password"}</label>
          <input placeholder={isChangePassword ? "New Password" : "Password"} />
        </div>
      )}
      {!isRemoved && !isChangePassword && (
        <div>
          <label>Rate</label>
          <select>
            <option>facebook</option>
            <option>tiktok</option>
            <option>facebook+tiktok</option>
          </select>
        </div>
      )}

      <button onClick={onClickHandler}>
        {isRemoved ? "Removed" : isChangePassword ? "Change" : "Register"}
      </button>
    </form>
  );
};

export default memo(AdminForm);
