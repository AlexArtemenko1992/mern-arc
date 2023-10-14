import { useState, useCallback } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./AdminTabs.scss";
import { AdminForm } from "../";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      className={`item${index}`}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      style={{ fontFamily: "Oswald !important", height: "auto" }}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const AdminTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = useCallback((event, newValue) => {
    setValue(newValue);
  }, []);

  return (
    <>
      <Box
        sx={{
          width: "100%;",
          paddingTop: "30px;",
          fontFamily: "Oswald !important",
        }}
        centered={"true"}
      >
        <Box
          sx={{
            borderBottom: 1,
            border: "none;",
            fontFamily: "Oswald !important",
          }}
        >
          <Tabs value={value} onChange={handleChange} centered>
            <Tab
              style={{ color: "#fff" }}
              label="Зарегистрировать пользователя"
              {...a11yProps(0)}
            />
            <Tab
              style={{ color: "#fff" }}
              label="Удалить пользователя"
              {...a11yProps(1)}
            />
            <Tab
              style={{ color: "#fff" }}
              label="Изменить пароль пользователю"
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
        <CustomTabPanel style={{ color: "#fff" }} value={value} index={0}>
          <AdminForm />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <AdminForm isRemoved />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <AdminForm isChangePassword />
        </CustomTabPanel>
      </Box>
    </>
  );
};

export default AdminTabs;
