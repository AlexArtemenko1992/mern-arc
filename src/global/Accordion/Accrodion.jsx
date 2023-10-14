import { useState } from "react";
import "./Accordion.scss";

const mockItems = [
  {
    id: 1,
    title: "Чи підійде курс якщо вже є базові знання?",
    body: "Навчання підходить як новачкам, так і людям з досвідом. На курсі присутня велика кількість інформації з фішками та кейсами, які будуть цікаві та корисні навіть діючим баєрам.",
  },
  {
    id: 2,
    title: "Чи потрібний досвід?",
    body: "Звичайно, це не обов`язково, але буде хорошим бонусом. Ми вивчаємо все з нуля, тому навіть новачок зможе успішно стартувати!",
  },
  {
    id: 3,
    title: "Яка сума потрібна для старту?",
    body: "200 $ - оптимальна цифра для комфортного старту, але на невеликих обсягах результат можна отримати маючи 50 $.",
  },
  {
    id: 4,
    title: "Як відбувається навчання?",
    body: "Після оплати ти отримуєш доступ до матеріалу, переглянувши відео + мануали, доступ до домашнього завдання, яке уважно переглядає відділ підтримки. Проводимо дзвінки, розбори + рубрику питання/відповідь. Після цього починаємо спільно заливати рк в кабінети.",
  },
];

const mockItemsV2 = [
  {
    id: 5,
    title: "Скільки зможу заробити?",
    body: "У середньому, прибуток арбітражника стартує від 4000-6000 $, та йде далі вгору. Велике значення має час, який виділяєте на роботу.",
  },
  {
    id: 6,
    title: "Чи потрібні вкладення?",
    body: "Усі інструменти вже включені у вартість, ви оплачуєте лише білінг Facebook/Google",
  },
  {
    id: 7,
    title: "А чи буде результат?",
    body: "У вас будуть всі інструменти для успішного запуску рекламної кампанії + облікові записи, проксі, антидетект вже входять в курс. Нашою перевагою є постійна підтримка та доступ до всієї актуальної інформації на власній платформі.",
  },
  {
    id: 8,
    title: "Які гарантії?",
    body: "Основна гарантія – це кількість успішних випускників після проходження курсу. Бонус: наші кейси завжди у відкритому доступі: у наших чатах та каналах.",
  },
];

const AccordionItem = ({ id, title, body }) => {
  const [state, setState] = useState(false);

  const toggleAccordion = () => {
    setState((prev) => !prev);
  };

  return (
    <div className="accordion-item">
      <div onClick={toggleAccordion} className="accordion-trigger">
        <h4>{title}</h4>
        <div className={`accordion-icon ${state ? "is-active" : ""}`}></div>
      </div>
      <div className={`accordion-content ${state ? "is-active" : ""}`}>
        <p>{body}</p>
      </div>
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="accordion">
      <div className="left">
        {mockItems.map(({ id, title, body }) => (
          <AccordionItem key={id} id={id} title={title} body={body} />
        ))}
      </div>
      <div className="right">
        {mockItemsV2.map(({ id, title, body }) => (
          <AccordionItem key={id} id={id} title={title} body={body} />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
