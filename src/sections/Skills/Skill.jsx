import style from './SkillsStyles.module.css'

function Skill({source, alt, title}) {
    return  <img className={style.skillimg} src={source} alt={alt} title={title}/>
}

export default Skill
