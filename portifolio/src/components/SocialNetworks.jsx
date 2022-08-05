import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'


import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    {name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/raul-carbone-bb1154180/"},
    {name: "github", icon: <FaGithub />, link: "https://github.com/raul-carbone"},
]


const SocialNetworks = () => {
  return (
    <section id="social-networks">
        {socialNetworks.map((network) => (
            <a href={network.link} className='social-btn' id={network.name} key={network.name} target='_blank'>
                {network.icon}
            </a>
        ))}
    </section>
  )
}

export default SocialNetworks