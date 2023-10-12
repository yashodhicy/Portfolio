import Image from 'next/image'
import Aboutme from './aboutme/page'
import Projects from './projects/page'
import AboutmeLayout from './aboutme/layout'
import ProjectsLayout from './projects/layout'


export default function Home() {
  return (
    <main>
      <p>this is the main</p>
      
      <AboutmeLayout >
        <Aboutme/>  
      </AboutmeLayout >
      <ProjectsLayout>
        <Projects />
      </ProjectsLayout>

      
    </main>
  )
}
