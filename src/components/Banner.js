import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";




function Banner(){
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Dibyajyoti", "a Developer", "a Techie", "a Bibliophile" ];
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

    return(
    <section className="banner" id="home">
      <Container>
        <Row>
          <Col xs={12} md={6} xl={7} className="text-start">
            <TrackVisibility>
            {({ isVisible }) => 
              <div className={isVisible? "animate__animated animate__bounce":""}>
                <h1>{'Hi! I am '}<span className="wrap">{text}</span></h1>
                <p>I have a strong passion for technology and a deep fascination with how it can be used to make our lives better and improve both our personal and professional endeavors .I am constantly seeking new ways to innovate and stay ahead of the curve and also keeping up-to-date with the latest advancements in technology.</p>
                <button className="animate__animated animate__rubberBand" onClick={()=>console.log('connect')}>Let's connect <ArrowRightCircle size={25} /></button>
              </div>
            }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={HeaderImg} alt="Header Img"></img>
            </Col>
        </Row>
      </Container>
    </section>
    )   
}

export default Banner;