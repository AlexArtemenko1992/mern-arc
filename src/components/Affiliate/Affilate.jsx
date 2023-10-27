import "./Affilate.scss";
import Container from "../../global/Container/Container";
import VacImg from "../../assets/vac-img.png";

const Affilate = () => {
  return (
    <div className="affilate">
      <Container>
        <h2 className="affilate-main__title">Професія Арбітражник трафіку</h2>
        <div className="affilate-wrap">
          <div className="affilate-descr">
            <h3 className="affilate-subtitle">Хто такий арбітражник?</h3>
            <p className="affilate-text">
              Арбітражник/affiliate marketer/media buyer – це фахівець, який
              купує та перепродає онлайн трафік. Для цього він налаштовує та
              запускає рекламу, а залучений трафік перенаправляє на сайт
              замовника. Прибуток арбітражника – це різниця між виплатами від
              партнерів та затратами на закупку реклами. Ми навчаємо
              оптимізувати рекламні кампанії так, щоб отримувати якомога
              дешевший релевантний трафік, та відповідно – якомога більший
              прибуток.
            </p>
            <h4 className="affilate-list-title">Що дає професія:</h4>
            <ul>
              <li>
                дохід у $ без фінансової стелі (зарплатня на старті від 1000$)
              </li>
              <li>затребуваність на ринку праці</li>
              <li>робота з будь-якої точки світу (потрібен тільки інтернет)</li>
              <li>фінансова стабільність</li>
              <li>робота з західними партнерами</li>
              <li>розкриття талантів та розвиток</li>
            </ul>
            <p className="affilate-bottom-text">
              Професія Media Buyer входить в ТОП-5 найоплачуваніших онлайн
              професій в Україні у 2023 році! Попит на арбітражників росте з
              кожним роком. Середня зарплатня в Україні складає 1500$, згідно
              work.ua та dou.ua. Арбітражник з досвідом від 2 років має 3000$+.
            </p>
          </div>
          <div className="affilate-image">
            <img src={VacImg} alt="vac-image" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Affilate;
