import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../constants/data'

const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From scratch to production and here are some of my hobby projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'react app' ?
            <ToggleButton active value="react app" onClick={() => setToggle('react app')}>REACT APP'S</ToggleButton>
            :
            <ToggleButton value="react app" onClick={() => setToggle('react app')}>REACT APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'nextjs app' ?
            <ToggleButton active value="nextjs app" onClick={() => setToggle('nextjs app')}>NEXTJS APP'S</ToggleButton>
            :
            <ToggleButton value="nextjs app" onClick={() => setToggle('nextjs app')}>NEXTJS APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'mini projects' ?
            <ToggleButton active value="mini projects" onClick={() => setToggle('mini projects')}>MINI PROJECTS</ToggleButton>
            :
            <ToggleButton value="mini projects" onClick={() => setToggle('mini projects')}>MINI PROJECTS</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects