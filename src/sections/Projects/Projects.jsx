import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/chat-app.png';
import freshBurger from '../../assets/employee.png';
import blog from '../../assets/blogging.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
      <ProjectCard
          src={blog}
          link="https://mern-blog-flua.onrender.com"
          h3="MERN BLOG"
          p="Full Stack Responsive"
        />
        <ProjectCard
          src={viberr}
          link="https://chat-app-pm4v.onrender.com"
          h3="Chat APP"
          p="End-to-End Chat"
        />
        <ProjectCard
          src={freshBurger}
          link="https://employee-details-9otp.onrender.com"
          h3="Employee Record"
          p="Database web App"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
