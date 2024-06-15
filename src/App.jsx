import { useState } from 'react'
import { NavBar } from './Components/NavBar'
import { Inicio } from './Screens/Inicio'
import { Sobremi } from './Screens/Sobremi'
import { Education } from './Screens/Education'
import { Experiencia } from './Screens/Experiencia'
import { Proyectos } from './Screens/Proyectos'
import { Footer } from './Components/Footer'



import './Styles/NavBar.css'
import './Styles/Inicio.css'
import './Styles/Sobremi.css'
import './Styles/Education.css'
import './Styles/Experiencia.css'
import './Styles/Experiencia.css'
import './Styles/Proyectos.css'
import './Styles/Footer.css'
import './App.css'

export function App() {
  return (
    <>
      <NavBar/>
      <Inicio/>
      <Sobremi/>
      <Education/>
      <Experiencia/>
      <Proyectos/>
      <Footer/>
    </>
  )
}