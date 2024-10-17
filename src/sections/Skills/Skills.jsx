import { useTheme } from '../../common/ThemeContext';
import Skill from './Skill'
import style from './SkillsStyles.module.css'
function Skills() {

    const darkGit = "https://img.icons8.com/office/160/github.png"
    const lightGit = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"

    const { theme } = useTheme();

    const gitIcon = theme == 'light'?lightGit : darkGit
    const nodeIcon = theme == 'light'?"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg":"https://img.icons8.com/color/144/nodejs.png"
    const expressIcon = theme == 'light'?"https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/express/express-original-wordmark.svg":"https://img.icons8.com/nolan/256/express-js.png"
    return (
        <div className={style.skills}>
                
                <h2>I have experience with these technologies</h2>
            <div className={style.skillsGrid}>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="The logo icon for react" title="React"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="The logo icon for HTML 5" title="HTML 5"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="The logo icon for CSS3" title="CSS 3"/>
                <Skill source="https://img.icons8.com/color/144/tailwindcss.png" alt="The logo icon for TailwindCSS" title="Twilwind CSS"/>
                <Skill source={gitIcon} alt="The logo icon for GitHub" title="GitHub"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="The logo icon for NPM" title="NPM"/>
                <Skill source={nodeIcon} alt="The logo icon for NodeJS" title="Node JS"/>
                <Skill source="https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/mongodb/mongodb-plain-wordmark.svg" alt='mongo db icon' title="Mongo Db"/>
                <Skill source={expressIcon} alt="The logo icon for ExpressJS" title="Express JS"/>
            </div>            
        </div>
    )
}
export default Skills


