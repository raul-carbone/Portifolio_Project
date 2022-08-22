import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
  DiAngularSimple
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologies = [
  {id: "html", name: "HTML5", icon: <DiHtml5 />, text: "Possui ótimo conhecimento na linguagem de marcação HTML." },
  {id: "css", name: "CSS3", icon: <DiCss3 />, text: "Possui ótimo conhecimento na linguagem de marcação CSS." },
  {id: "js", name: "JavaScript", icon: <DiJsBadge />, text: "Possui ótimo conhecimento na linguagem de programação JavaScript." },
  {id: "node", name: "Node.js", icon: <DiNodejsSmall />, text: "Possui conhecimento aceitável no Node.js" },
  {id: "react", name: "React", icon: <DiReact />, text: "Possui um conhecimento aceitável em ReactJS." },
  {id: "angular", name: "Angular", icon: <DiAngularSimple />, text: "Possui um conhecimento aceitável em Angular." }
]


const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer