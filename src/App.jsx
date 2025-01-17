import { useState } from 'react'
import * as React from 'react';
import styled from 'styled-components'
import './App.css'
import Switch, { switchClasses } from '@mui/joy/Switch';
import Typography from '@mui/joy/Typography';

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
  background-color: #63E6FA;
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

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #63E6FA;
  width: 80%;
  height: 25%;
  margin: 10px;
  border-radius: 20px;
  cursor: pointer;
`;

const CardText = styled.h2`
  color: #171717;
  font-size: 35px;
  cursor: pointer;
`;

function App() {

  const [checked, setChecked] = useState(false);

  const handleToggleCheck = (e) =>{
    setChecked(e.target.checked);
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
          <Card>
            <CardText>About</CardText>
          </Card>
          <Card>
            <CardText>Skills</CardText>
          </Card>
          <Card>
            <CardText>Projects</CardText>
          </Card>
        </CardsContainer>
        <InfoCont>

        </InfoCont>
      </InfoBackgr>
    </>
  )
}

export default App
