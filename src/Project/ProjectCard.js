import './ProjectCard.css';
import github from '/Users/adi/Documents/Study/Trimester 4/Development/React/portfolio/src/HomePage/github.svg';
function projectCard(props) {
  return (
      <div className="main_postcard">
          <div className="product-name">
              <h1>{props.title}</h1>
          </div>
          <div className="product-img">
              <img src={props.image} alt="product"></img>
          </div>
          <div className="product-discription">
              <p>{props.description}</p>
          </div>
          <div className="github-productCard">
              <a href={props.github} target="_blank">
                  <img src={github} alt="github"></img>
              </a>
          </div>
      </div>
  );
}
export default projectCard;