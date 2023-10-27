import "./Comments.scss";
import Container from "../../global/Container/Container";
import Person1 from "../../assets/person_1.jpeg";
import Person2 from "../../assets/person_2.jpeg";
import Person3 from "../../assets/person_3.jpeg";

const Comments = () => {
  return (
    <div className="comments" id="comments">
      <Container>
        <h3 className="comments-main__title">Відгуки наших студентів</h3>

        <div className="students">
          <div className="student">
            <img src={Person1} alt="person" />
          </div>

          <div className="student">
            <img src={Person2} alt="person2" />
          </div>

          <div className="student">
            <img src={Person3} alt="person3" />
          </div>
          <div className="student">
            <img src={Person1} alt="person4" />
          </div>

          <div className="student">
            <img src={Person2} alt="person5" />
          </div>

          <div className="student">
            <img src={Person3} alt="person6" />
          </div>
          <div className="student">
            <img src={Person1} alt="person7" />
          </div>

          <div className="student">
            <img src={Person2} alt="person8" />
          </div>

          <div className="student">
            <img src={Person3} alt="person9" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Comments;
