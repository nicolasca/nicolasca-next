import type { NextPage } from "next";
import Image from "next/future/image";
import { useState } from "react";
import styled from "styled-components";
import Canvas from "../components/matrixCanvas";
import FacePicture from "../components/svg/FacePicture";
import FacePhoto from "../public/face-profile-photo.png";

const HomeBlock = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

const Content = styled.div`
  position: relative;
  background-color: white;
  padding: 2rem;
  border-radius: 3rem;
`;

const FaceWrapper = styled.div`
  position: relative;
  width: 33%;
  aspect-ratio: 1;
  background-color: white;
  border-radius: 50%;

  &:hover {
    cursor: crosshair;
    .Lips {
      fill: var(--matrix-green);
      transition: fill 0.5s ease;
    }
  }

  svg {
    position: absolute;
    /* transform: translateY(50%); */
  }

  .Lips {
    transition: fill 0.5s ease;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  width: 100%;
  height: 100%;

  text-transform: uppercase;
  position: relative;

  & > ${FaceWrapper}, & > ${Content} {
    filter: blur(10px);
    transition: filter 0.5s ease;

    &:hover {
      filter: blur(1px);
    }
  }
`;

const JobTitle = styled.h2`
  color: var(--matrix-green);
  text-transform: uppercase;
`;

const CanvasWrapper = styled.div`
  position: absolute;
`;

const FollowBottom = styled.div`
  position: absolute;
  bottom: 0;
  background: white;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    cursor: pointer;
  }

  .down-arrow {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
  }
`;

const ProjectionSection = styled.div`
  height: 100vh;
`;

const Home: NextPage = () => {
  const scrollToBottom = () => {
    const screenHeight = window.innerHeight;
    const element = document.getElementById("section-2");
    console.log("scroll", screenHeight);
    element?.scrollIntoView({ behavior: "smooth" });
    // window.scrollTo({top:-screenHeight, behavior: 'smooth'});
  };

  return (
    <HomeBlock>
      <CanvasWrapper>
        <Canvas />
      </CanvasWrapper>
      <Title>
        <FaceWrapper>
          <FacePicture />
        </FaceWrapper>

        <Content>
          <h1>Nicolas Castejon</h1>
          <JobTitle>Developpeur Web</JobTitle>
        </Content>
        <FollowBottom onClick={scrollToBottom}>
          <span>Follow the white rabbit</span>
          <span className="down-arrow"></span>
        </FollowBottom>
      </Title>
      <ProjectionSection id="section-2">
        <div>more content to follow</div>
        <div>more content to follow</div>
        <div>more content to follow</div>
      </ProjectionSection>
      <div>
        <h2>CREDITS</h2>
        <span>Matrix effect: Ganesh Prasad - https://codepen.io/gnsp/pen/vYBQZJm</span>
      </div>
    </HomeBlock>
  );
};

export default Home;
