import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'
import LanguageContainer from './LanguageContainer'

import Avatar from '../img/eu.jpg'

import '../styles/components/sidebar.sass'



const Sidebar = () => {
  return <aside id="sidebar">
    <img src={Avatar} alt="Raul Carbone" />
    <p className="title">Desenvolvedor Js | HTML5 | CSS3 | ReactJS | Node.js</p>
    <SocialNetworks />
    <InformationContainer />
    <p className="title-second">Idiomas</p>
    <LanguageContainer />
    <a href="/curriculo.pdf" download="curriculo.pdf" className="btn">
      Download Curriculo
    </a>
  </aside>
}

export default Sidebar