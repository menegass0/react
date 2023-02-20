import { useEffect, useState } from "react"
import { Navbar, Container, Nav} from "react-bootstrap"
import logo from "../assets/img/logo.svg"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"


export const NavBar = () => {
    //vai usar essas cl,asses para verificar qual link esta ativado e para ativar o proximo link
    const {activeLink, setActiveLink} = useState('home');
    //classes que vao ser usadas para verificar se a pagina está escrollada ou nao
    const {scrolled, seScrolled} = useState(false);


    useEffect(() =>{
        //funçao para ver se a pagina está esscrollada
        const onScroll = () =>{
            if(window.scrollY > 50){
                seScrolled(true);
            }else{
                seScrolled(false);
            }
        }

        //quando escrolla a pagina chama a função onScroll criada acima
        window.addEventListener("scroll", onScroll);

        //remove o event listener criado acima
        return() => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value)=>{
        setActiveLink(value);
    }


    //caso scrolled seja verdade seta o nome da classe como scrolled, caso contrario seta como vazio
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
            </div>
            <button className="vvd" onclick={() => console.log('connect')}>
                <span>Let's connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
}