import '../styles/components/maincontent.sass'

import AboutContainer from './AboutContainer'
import FormationContainer from './FormationContainer'
import ProjectsContainer from './ProjectsContainer'
import TecnhologiesContainer from './TechnologiesContainer'
import ExperienceContainer from './ExperienceContainer'
import CertificationContainer from './CertificationContainer'


const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <FormationContainer />
      <CertificationContainer />
      <ExperienceContainer />
      <TecnhologiesContainer />
      <ProjectsContainer />
    </main>
  )
}

export default MainContent