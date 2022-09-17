import type { NextPage } from "next";
import Image from "next/future/image";
import { useState } from "react";
import styled from "styled-components";
import Canvas from "../components/matrixCanvas";
import FacePicture from "../components/svg/FacePicture";
import FacePhoto from "../public/face-profile-photo.png";

const HomeBlock = styled.div`
  display: flex;
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

  & > ${FaceWrapper}, & > ${Content} {
    filter: blur(3px);
    transition: filter 0.5s ease;

    &:hover {
      filter: blur(0px);
    }
  }
`;

const JobTitle = styled.h2`
  color: var(--matrix-green);
`;

const CanvasWrapper = styled.div`
  position: absolute;
`;

const Home: NextPage = () => {
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
          <JobTitle>Développeur Web</JobTitle>
        </Content>
      </Title>
    </HomeBlock>
  );
};

export default Home;
