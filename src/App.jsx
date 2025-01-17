import { useState } from 'react'
import * as React from 'react';
import styled from 'styled-components'
import './App.css'
import Switch, { switchClasses } from '@mui/joy/Switch';
import Typography from '@mui/joy/Typography';
import SWEPic from './IMGs/SWEPic.jpg';

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
`;

const LogoHeader = styled.h3`
  color: #63E6FA;
`;

const InfoBackgr = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #171717;
  width: 100%;
  height: 75%;
  border-radius: 50px;
  box-shadow: -19px 20px 10px 1px rgba(0, 0, 0, 0.2);
`;

const InfoCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  background: rgb(4,189,218);
  background: linear-gradient(152deg, rgba(4,189,218,1) 0%, rgba(99,230,250,1) 100%);
  width: 75%;
  height: 100%;
  border-radius: 50px;
`;

const SectionsTitle = styled.h2`
  color: #F5F5F5;
  margin: 0px;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:25%;
  height: 100%;
`;

const Card = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #63E6FA;
  width: 80%;
  height: 25%;
  margin: 10px;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.5s;
  &:hover{
    background-color: rgba(4,189,218,1);
    transition: 0.5s;
  }
`;

const SWETitle = styled.h1`
  color: #171717;
  font-size: 50px;
  font-style: italic;
  margin: 0px;
  margin-top: 30px;
`;

const ProfileTitle = styled.h2`
  color: #171717;
  font-style: italic;
  margin: 0px;
`;

const SWEInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 70%;
  margin-top: 10px;
`;

const SWETextCont = styled.div`
  display: flex;
  width: 48%;
  height: 100%;
  background-color: #F5F5F5;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
`;

const SWEPicCont = styled.div`
  display: flex;
  width: 48%;
  height: 100%;
  background-image: url(${SWEPic});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
`;

const SWETextInfo = styled.p`
  text-align: justify;
  width: 90%;
  height: 90%;
  color: #171717;
`;

const CardText = styled.h2`
  color: #171717;
  font-size: 35px;
  cursor: pointer;
  font-weight: 300;
`;

const SkillCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 90%;
  background-color: #F5F5F5;
  border-radius: 20px;
  transition: 0.5s;
  &:hover{
    translate: 0px -10px;
    box-shadow: 0px 20px 10px 1px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
  }
`;

const SkillsSec = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 50%;
  margin: 20px 0px;
`;

const SkillsDivider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 95%;
`;



function App() {

  const [checked, setChecked] = useState(false);

  const handleToggleCheck = (e) =>{
    setChecked(e.target.checked);
  }

  const [about, setAbout] = useState(true);
  const [skills, setSkills] = useState(false);
  const [projects, setProjects] = useState(false);

  const handleAbout = () =>{
    setAbout(true);
    setSkills(false);
    setProjects(false);
  }

  const handleSkills = () =>{
    setSkills(true);
    setAbout(false);
    setProjects(false);
  }

  const handleProjects = () =>{
    setProjects(true);
    setAbout(false);
    setSkills(false);
  }

  return (
    <>
      <Header>
        <LogoHeader>CAOP_Decode</LogoHeader>
        <Switch
        onChange={handleToggleCheck}
        checked={checked}
        color={checked ? 'success' : 'danger'}
        
        slotProps={{
          track: {
            children: (
              <React.Fragment>
                <Typography component="span" level="inherit" sx={{ ml: '10px' }}>
                  ME
                </Typography>
                <Typography component="span" level="inherit" sx={{ mr: '8px' }}>
                  SWE
                </Typography>
              </React.Fragment>
            ),
          },
        }}
        sx={{
          '--Switch-thumbSize': '35px',
          '--Switch-trackWidth': '75px',
          '--Switch-trackHeight': '31px',
          '--Switch-trackBackground': '#63E6FA',
        '&:hover': {
          '--Switch-trackBackground': '#04BDDA',
        },
        [`&.${switchClasses.checked}`]: {
          '--Switch-trackBackground': '#FD76FD',
          '&:hover': {
            '--Switch-trackBackground': '#D900D9',
          }
        }}
      }
      />
      </Header>
      <InfoBackgr>
        <CardsContainer>
          <SectionsTitle>
            Sections
          </SectionsTitle>
          <Card onClick={handleAbout}>
            <CardText>About</CardText>
          </Card>
          <Card onClick={handleSkills}>
            <CardText>Skills</CardText>
          </Card>
          <Card onClick={handleProjects}>
            <CardText>Projects</CardText>
          </Card>
        </CardsContainer>
        <InfoCont>
          <SWETitle>SOFTWARE ENGINEER</SWETitle>
          <ProfileTitle>Profile</ProfileTitle>
          <SWEInfo>
          {about &&(
            <>
            <SWETextCont>
              
              <SWETextInfo>
              As a passionate Software Engineer with 2-3 years of experience, I specialize in backend development, leveraging robust expertise in Java, SQL, Python, and PHP to deliver efficient and scalable solutions. My skills extend to frontend technologies, including HTML, CSS, JavaScript, and React.
              <br/><br/>
              I am a strong communicator, a self-driven learner, and an effective team player. My time management skills and commitment to problem-solving ensure that I deliver high-quality results under stablished and tight deadlines. My ultimate goal is to craft impactful software that meets user needs and drives innovation in every project I undertake.
              </SWETextInfo>
            </SWETextCont>
            <SWEPicCont/>
            </>
          )}
           {skills &&(
            <>
            <SkillsDivider>
              <SkillsSec>
              <SkillCard>

              </SkillCard>
              <SkillCard>
                
              </SkillCard>
              <SkillCard>
                
              </SkillCard>
              <SkillCard>
                
              </SkillCard>
              </SkillsSec>
              <SkillsSec>
              <SkillCard>
                
              </SkillCard>
              <SkillCard>
                
              </SkillCard>
              <SkillCard>
                
              </SkillCard>
              <SkillCard>
                
              </SkillCard>
              </SkillsSec>
            </SkillsDivider>
            </>
          )}
          </SWEInfo>
        </InfoCont>
      </InfoBackgr>
    </>
  )
}

export default App
