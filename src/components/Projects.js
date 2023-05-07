import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/frontend1.png";
import projImg2 from "../assets/img/frontend2.png";
import projImg3 from "../assets/img/frontend3.png";
import projImg4 from "../assets/img/backend1.png";
import projImg5 from "../assets/img/backend2.png";
import projImg6 from "../assets/img/backend3.png";
import projImg7 from "../assets/img/fullstack.png";
import colorShape2 from "../assets/img/color-sharp2.png";


function Projects(){


    const frontends = [
        {
            title: "Signovial",
            description: "A React app which resembles the Login page for a specific service, including the functionalities to redirect to different components on clicking the 'Next' button and the 'Forgot Password' button by making concise usage of hooks and states.",
            imgUrl: projImg1,
        },
        {
            title: "Keeper",
            description: "A React application that prompts the user to enter the title and content of a note, which on submission, gets rendered along with the rest of the notes",
            imgUrl: projImg2,
        },
        {
            title: "Dyform",
            description: "A React application that prompts the user to enter their names and uses React Hooks optimally, to save their names dynamically and render a greeting message containing their info.",
            imgUrl: projImg3,
        },

    ]

    const backends = [
        {
            title: "Blog-it-Out",
            description: "This project comprises a blog website with a clean landing page. The compose page allows the user to write blogs to their hearts content and on submission it gets rendered on the homepage.",
            imgUrl: projImg4,
        },
        {
            title: "Weath_fore",
            description: "A web application that prompts the user to enter a particular location and after submissio of the required info, the weather data(humidity, latitude) is fetched using OpenWeather API and rendered on the user's screen.",
            imgUrl: projImg5,
        },
        {
            title: "Newsletter-Sub",
            description: "A web application that prompts the user to enter their name and email address and on submission, the data is sent to the Mailchimp API and the user is subscribed to the newsletter.",
            imgUrl: projImg6,
        },
    ]

    const fullstacks = [
        {
            title: "To-Do",
            description: "A web application to maintain and update the daily to-do list of the user as per their requirement in addition to the functionality of removing an accomplished task from the list.",
            imgUrl: projImg7,
        },
    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2 className="text-center">Projects</h2>
                        <p>Following section includes some of the raw UI designs for the web applications built by me. A detailed description can be found in my Github.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" defaultActiveKey="/home" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Frontend</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Backend</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Full-Stack</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            frontends.map((frontend, index) => {
                                                return(
                                                    <ProjectCard
                                                    key={index}
                                                    {...frontend}
                                                    />
                                                )
                                        })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            backends.map((backend, index) => {
                                                return(
                                                    <ProjectCard
                                                    key={index}
                                                    {...backend}
                                                    />
                                                )
                                        })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row className="justify-content-center align-items-center">
                                    {
                                            fullstacks.map((fs, index) => {
                                                return(
                                                    <ProjectCard
                                                    key={index}
                                                    {...fs}
                                                    />
                                                )
                                        })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}

export default Projects;