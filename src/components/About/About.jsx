import React from 'react'
import "./about.css"
import AboutImage from "../../image/about.svg"

function About() {
  return (
    <div className='about' id='about'>
      <h2 className='aboutTitle'>Quyidagi texnologiyalarni o'rganasiz:</h2>
      <div className='containerS'>
        <div className='aboutBox'>
          <div className='aboutImage'>
            <img src={AboutImage} alt="About Image" />
          </div>
          <div className='aboutContentTextGroup'>
            <div className='aboutContentText'>
              <div className='aboutContentItem js'>Javascript dasturlash tili</div>
              <div className='aboutContentItem html'>TypeScript</div>
              <div className='aboutContentItem bootstrap'>Bootstrap</div>
              <div className='aboutContentItem react'>React freymvork</div>
              <div className='aboutContentItem css'>Redux-Toolkit</div>
              <div className='aboutContentItem git'>Git</div>
              <div className='aboutContentItem testing'>Jest</div>
              <div className='aboutContentItem github'>Next.js</div>
            </div>
            <h3 className='aboutContentMotiv'>Aynan shu ko'nikmalarni ish beruvchilar 2024-yilda endigina ishni boshlayotgan dasturchilardan ko'rishni xohlashadi</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About