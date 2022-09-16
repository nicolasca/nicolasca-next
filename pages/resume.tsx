import React from "react"
import styled from "styled-components"
import Image from 'next/future/image';
// import ExperienceItem from "../components/ExperienceItem"
import facePicture from "../public/nicolas.svg"
import { NextPage } from "next"
import Head from "next/head"

const Resume = styled.div`
  display: block;
  margin: auto;
  max-width: 700px;
  flex-direction: column;
  background-color: #fff;
  margin-top: 1rem;

  & > * {
    margin: 1rem;
    padding: -1rem;
  }
`

const FaceWrapper = styled.div`
    position: relative;
  width: 100px;
  height: 100px;
  margin-right: 1rem;

  &:hover img {
    cursor: crosshair;
    .Lips {
      fill: blue;
      transition: fill 0.5s ease;
    }
  }

  .Lips {
    transition: fill 0.5s ease;
  }
`

const Skills = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  display: flex;
  align-items: center;
`

const JobTitle = styled.h2`
  color: blue;
`

const styleImage = {
    'width': '100%',
    'height': '100%'
}

const ResumePage: NextPage = () => {
  return (
    <>
    <Head>
        <title>CV</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Resume>
        <Title>
            <FaceWrapper>
            <img src='/nicolas.svg' alt='happy' width={100} height={100}/>

            </FaceWrapper>

          <div>
            <h1>Nicolas Castejon</h1>
            <JobTitle>Développeur Web</JobTitle>
          </div>
        </Title>

        <Skills>
          <h2>
            Compétences
          </h2>
          <div>
            <p>Javascript, HTML, CSS</p>
            <p>Frameworks & libs:ReactJS, Angular 2+, </p>
          </div>
        </Skills>

        <div>
          <h2>
            Expérience
            <small>
              {" (7 "}
              ans
              {")"}
            </small>
          </h2>
          {/* <ExperienceItem
            title="Métropole de lyon"
            link="https://data.grandlyon.com"
            linkTitle="data.grandlyon.com"
            time="Mars 2018 - Juin 2020"
            description="Refonte du portail Open Data de la Métropole de Lyon"
            technologies="Angular 8, Bulma, Mapbox GL JS, Docker, NestJS, Gitlab CI"
          ></ExperienceItem> */}

          <div>
            <h3>Voyage</h3>
            <h4>Mars 2015 - Sept. 2016</h4>
            <p>Voyage en sac à dos en Asie et Amérique du Sud.</p>
            <p>Escales de 3 mois à Perth (Australie) et 6 mois à São Paulo</p>
          </div>

          {/* <ExperienceItem
            title="Fruition Sciences"
            link="https://fruitionsciences.com/fr/home"
            linkTitle="fruitionsciences.com"
            time="Jan. 2013 - Mars 2015"
            description="Création de l'application mobile sur iOS. Maintenance du site web"
            technologies="Ionic, Phonegap, Openlayers, PHP"
          ></ExperienceItem>

          <ExperienceItem
            title="Première expérience: Capgemini"
            time="Jan. 2011 - Mai 2012"
            description="Application bancaire pour une demande de crédit"
            technologies="Java, Spring, SOAP"
          ></ExperienceItem> */}
        </div>

        <div className="Education">
          <h2>
            Formation
          </h2>
          <div>
            <h3>Master en Informatique - 2010</h3>
            <p>Université de Montpellier</p>
          </div>
          <div>
            <h3>Master en Biologie - 2008</h3>
            <p>Université de Lyon</p>
          </div>
        </div>
      </Resume>
    </>
  )
}

export default ResumePage