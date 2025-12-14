import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/hangman game.jpeg";
import emotion from "../../Assets/Projects/amazone.PNG";
import editor from "../../Assets/Projects/blog website.jpg";
import chatify from "../../Assets/Projects/portfolio.jpeg";
import suicide from "../../Assets/Projects/certificate.jpeg";
import bitsOfCode from "../../Assets/Projects/chatbot.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Portfolio"
              description="A stock portfolio tracker is a tool, often software or an app, that helps investors monitor and manage their stock investments. It provides a centralized view of all holdings, including stocks, mutual funds, ETFs, and other assets, allowing users to track performance, assess diversification, and make informed investment decisions. .."
              ghLink="https://github.com/Parwaizmusharraf/portfolio "
               
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="ChatBot"
              description="AI Chat-bots in customer service are digital assistants that use artificial intelligence to understand and respond to customer inquiries in real time. They can help resolve simple issues around the clock and free up your agents to focus on complex issues that require critical thinking and empathy."
              ghLink="https://github.com/Parwaizmusharraf/chatbot "
                
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Blog Webpage"
              description="Blog Website made using HTML, CSS, JavaScript and boostrap. this website is designed to 
              share my thoughts , experiences and ideas on various topics with a wider audience"
              ghLink="https://github.com/Parwaizmusharraf/Project-blogs"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Hangman Game"
              description="Hangman is a word-guessing game where one player thinks of a word, and another player tries to guess it by suggesting letters. For each incorrect letter guessed, a part of a stick figure being hanged is drawn. The goal is to guess the word before the stick figure is complete.."
              ghLink="https://github.com/Parwaizmusharraf/hangman_game"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Certificate Generator"
              description="Easily create certificates and awards online to recognize the achievements of your employees, speakers, students etc. Simply enter some details and generate your certificate PDF in one click. You can download up to 5 beautiful PDF certificates per day for free. Creating a lot of certificates and need to automate the process? Look into our API or Nocode automations to generate PDF certificates in bulk."
              ghLink="https://github.com/Parwaizmusharraf/Certgen-main"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Amazone CLone"
              description="A responsive and interactive clone of the Amazon homepage built using HTML, CSS, and Vanilla JavaScript. This project replicates the front-end UI and adds dynamic behavior to enhance user experience. It's designed to showcase real-world e-commerce functionality through custom-built components and JavaScript interactivity"
              ghLink="https://github.com/Parwaizmusharraf/amazine-clone"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
