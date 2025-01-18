import { useState } from 'react'
import * as React from 'react';
import styled from 'styled-components'
import './App.css'
import Switch, { switchClasses } from '@mui/joy/Switch';
import Typography from '@mui/joy/Typography';
import SWEPic from './IMGs/SWEPic.jpg';
import MEPic from './IMGs/MEPic.jpg';
import AdobeIll from './IMGs/ADOBEILLLogo.png';
import AdobePh from './IMGs/ADOBEPHLogo.png';
import AdobePr from './IMGs/ADOBEPRLogo.png';
import CapCut from './IMGs/CAPCUTLogo.png';
import Js from './IMGs/JSLogo.png';
import Htmll from './IMGs/HTMLLogo.png';
import Css from './IMGs/CSSLogo.png';
import ReactL from './IMGs/REACTLogo.png';
import Java from './IMGs/JAVALogo.png';
import Python from './IMGs/PYTHONLogo.png';
import Sql from './IMGs/SQLLogo.png';
import Php from './IMGs/PHPLogo.png';

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

const LogoHeaderME = styled.h3`
  color: #FD76FD;
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

const InfoContME = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  background: rgb(4,189,218);
  background: linear-gradient(152deg, rgba(217,0,217,1) 0%, rgba(253,118,253,1) 100%);
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
  border: none;
  cursor: pointer;
  transition: 0.5s;
  &:hover{
    background-color: rgba(4,189,218,1);
    transition: 0.5s;
  }
`;

const CardME = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FD76FD;
  width: 80%;
  height: 25%;
  margin: 10px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  transition: 0.5s;
  &:hover{
    background-color: #D900D9;
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

const METitle = styled.h1`
  color: #F5F5F5;
  font-size: 50px;
  font-style: italic;
  margin: 0px;
  margin-top: 30px;
`;

const ProfileMETitle = styled.h2`
  color: #F5F5F5;
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

const MEPicCont = styled.div`
  display: flex;
  width: 48%;
  height: 100%;
  background-image: url(${MEPic});
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

const MECardText = styled.h2`
  color: #F5F5F5;
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
  width: 100%;
  height: 50%;
  margin: 0px 0px;
`;

const SkillsDivider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 95%;
`;

const SkillImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$bg});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
`;

const ProjectsCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ProjectCard = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 90%;
  background-color: #171717;
  color: ${(props) => props.textColor || 'black'};
  border-radius: 25px;
  border: none;
  transition: 0.5s;
  &:hover{
    background-color: ${(props) => props.$colorBg};
    color: #F5F5F5;
    translate: 0px -10px;
    box-shadow: 0px 20px 10px 1px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
  }
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
  };

  const handleSkills = () =>{
    setSkills(true);
    setAbout(false);
    setProjects(false);
  };

  const handleProjects = () =>{
    setProjects(true);
    setAbout(false);
    setSkills(false);
  };

  const handleProjectsBtn = (projectName) =>{
    if(projectName == 'XlComp'){
      alert('XlComp Project');
    }
    else if(projectName == 'Project2'){
      alert('Project in construction');
    }
    else if(projectName == 'Project3'){
      alert('Project in construction');
    }
    else if(projectName == 'Project4'){
      alert('Project in construction');
    }
    else if(projectName == 'LifeStyle Instagram'){
      alert('LifeStyle IG Project');
    }
    else if(projectName == 'Youtube'){
      alert('Youtube Project');
    }
    else if(projectName == 'Developer Instagram'){
      alert('Developer IG Project');
    }
    else if(projectName == 'Designs'){
      alert('Designs Project');
    }
  };

  const skillsArr = [
    { id: 1, img: `${Java}` },
    { id: 2, img: `${Python}` },
    { id: 3, img: `${Sql}` },
    { id: 4, img: `${Php}` }
  ];

  const skillsArr2 = [
    { id: 1, img: `${Htmll}` },
    { id: 2, img: `${Css}` },
    { id: 3, img: `${Js}` },
    { id: 4, img: `${ReactL}` }
  ];

  const skillsMEArr = [
    { id: 1, img: `${AdobePr}` },
    { id: 2, img: `${AdobePh}` },
    { id: 3, img: `${AdobeIll}` },
    { id: 4, img: `${CapCut}` }
  ];

  const projectsArr = [
    { name: 'XlComp', colorBg: 'green' },
    { name: 'Project2', colorBg: 'darkgrey' },
    { name: 'Project3', colorBg: 'darkgrey' },
    { name: 'Project4', colorBg: 'darkgrey' }
  ];

  const MEprojectsArr = [
    { name: 'LifeStyle Instagram', colorBg: 'orange' },
    { name: 'Youtube', colorBg: 'darkred' },
    { name: 'Developer Instagram', colorBg: '#63E6FA' },
    { name: 'Designs', colorBg: 'wheat' }
  ];

  return (
    <>
      <Header>
        {!checked ? (
        <LogoHeader>CAOP_Decode</LogoHeader>
      ):(
        <LogoHeaderME>CAOP_Decode</LogoHeaderME>
      )}
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
          {!checked ?(
            <>
              <Card onClick={handleAbout}>
                <CardText>About</CardText>
              </Card>
              <Card onClick={handleSkills}>
                <CardText>Skills</CardText>
              </Card>
              <Card onClick={handleProjects}>
                <CardText>Projects</CardText>
              </Card>
            </>
          ):(
            <>
            <CardME onClick={handleAbout}>
              <MECardText>About</MECardText>
            </CardME>
            <CardME onClick={handleSkills}>
              <MECardText>Skills</MECardText>
            </CardME>
            <CardME onClick={handleProjects}>
              <MECardText>Projects</MECardText>
            </CardME>
          </>
          )}
        </CardsContainer>
        {!checked ? (
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
               {skillsArr.map((skill) => (
                    <SkillCard key={skill.id}>
                    <SkillImg $bg={skill.img} />
                  </SkillCard>
                ))}
              </SkillsSec>
              <SkillsSec>
                {skillsArr2.map((skill) => (
                    <SkillCard key={skill.id}>
                    <SkillImg $bg={skill.img} />
                  </SkillCard>
                ))}
              </SkillsSec>
            </SkillsDivider>
            </>
          )}
          {projects &&(
            <>
              <ProjectsCont>
              {projectsArr.map((project) => (
                  <ProjectCard key={project.name} $colorBg={project.colorBg} textColor={'#63E6FA'} onClick={ () => handleProjectsBtn(project.name)}>
                    <h2>{project.name}</h2>
                  </ProjectCard>
                ))}
              </ProjectsCont>
            </>
          )}
          </SWEInfo>
        </InfoCont>
        ):(
          <InfoContME>
          <METitle>MULTIMEDIA ENGINEER</METitle>
          <ProfileMETitle>Profile</ProfileMETitle>
          <SWEInfo>
          {about &&(
            <>
            <SWETextCont>
              <SWETextInfo>
                As a Multimedia Engineer, I bring a wealth of creative experience in video production, short film creation, and photo and video editing. Proficient in Adobe Creative Suite and CapCut.
                <br/><br/>
                Skills in storytelling through video, meticulous attention to detail in editing, and a deep understanding of multimedia trends. As a strong communicator and team collaborator, I thrive in dynamic environments, meeting deadlines without compromising quality. With a passion for visual storytelling and a commitment to growth, I am dedicated to delivering projects that leave a lasting impact.
              </SWETextInfo>
            </SWETextCont>
            <MEPicCont/>
            </>
          )}
           {skills &&(
            <>
            <SkillsDivider>
              <SkillsSec>
               {skillsMEArr.map((skill) => (
                    <SkillCard key={skill.id}>
                    <SkillImg $bg={skill.img} />
                  </SkillCard>
                ))}
              </SkillsSec>
            </SkillsDivider>
            </>
          )}
          {projects &&(
            <>
              <ProjectsCont>
              {MEprojectsArr.map((project) => (
                  <ProjectCard key={project.name} $colorBg={project.colorBg} textColor={'#FD76FD'} onClick={ () => handleProjectsBtn(project.name)}>
                    <h2>{project.name}</h2>
                  </ProjectCard>
                ))}
              </ProjectsCont>
            </>
          )}
          </SWEInfo>
        </InfoContME>
        )}
      </InfoBackgr>
    </>
  )
}

export default App
