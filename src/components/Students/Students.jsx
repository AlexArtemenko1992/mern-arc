import "./Students.scss";

const Students = () => {
  const std = [
    { id: 1, fullname: "Дмитро Василенко", photoUrl: "person_1" },
    { id: 2, fullname: "Cергій Бондар", photoUrl: "person_2" },
    { id: 3, fullname: "Валерій Олійник", photoUrl: "person_3" },
  ];
  return (
    <div className="students">
      <h3 className="students__title"></h3>
      <div className="students__list"></div>
    </div>
  );
};

export default Students;
