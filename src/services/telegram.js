import axios from "axios";

const telegramSend = (userData) => {
  const TOKEN = "6479484305:AAE1AeqG_S50iqheur10P-p_4cMJdeNG21s";
  const CHAT_ID = "-1001855117649";
  const API_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const msg = `
          Заявка с сайта
  email: ${userData.email}
  направление: ${userData.plan}
  номер: ${userData.phone}
  телеграм: ${userData.nickname}
    `;

  const res = msg;
  axios
    .post(API_URL, {
      chat_id: CHAT_ID,
      // parse_mode: "json",
      text: res,
    })
    .catch((e) => {
      throw new Error(e);
    });
};

export default telegramSend;
