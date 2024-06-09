import './Project.css';
import ProjectCard from './ProjectCard';
import tictactoe from './tic-tac-toe.png';
import event from './EventCountdown.png'
import social from './Scaler_social.png'
function Project() {
  return (
      <div>
          <div className="project-title">
              <h1>Project</h1>
          </div>
          <div className="project-content">
              <div className="project-card">
                  <ProjectCard
                      title={"Tic Tac Toe"}
                      image={tictactoe}
                      description={
                          "A Java-based Tic Tac Toe game involves creating a 3x3 grid, allowing two players to take turns marking 'X' and 'O' on the grid, and implementing logic to check for win conditions or a draw. The game uses basic control structures, arrays or a 2D array for the board, and  console output for interaction."
                      }
                      github={"https://github.com/Adityajaiswal03/Tic-tac-toe"}
                  />
              </div>
              <div className="project-card">
                  <ProjectCard
                      title={"Event CountDown"}
                      image={event}
                      description={
                          "A web-based event countdown timer involves creating a countdown display for upcoming events with customizable themes. The project includes an HTML structure for the countdown, CSS styles for different themes, and JavaScript to handle the countdown logic and theme switching, allowing users to select their preferred event theme for a personalized experience."
                      }
                      github={
                          "https://github.com/Adityajaiswal03/Event-Countdown"
                      }
                  />
              </div>
              <div className="project-card">
                  <ProjectCard
                      title={"Scaler Social"}
                      image={social}
                      description={
                          "A scalable social media feed made with vanilla JavaScript, HTML, and CSS involves creating a dynamic feed that displays posts from users, with features for liking, commenting, sharing, and deleting posts. The project includes an HTML structure for the feed, CSS for styling the posts and interactions, and JavaScript to handle data fetching, rendering posts, updating the feed in real-time, and managing post deletions as users interact."
                      }
                      github={
                          "https://github.com/Adityajaiswal03/scaler-social"
                      }
                  />
              </div>
          </div>
      </div>
  );
}
export default Project;