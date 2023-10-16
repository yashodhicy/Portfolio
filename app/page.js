import Image from 'next/image'
import Aboutme from './aboutme/page'
import Projects from './projects/page'
import AboutmeLayout from './aboutme/layout'
import ProjectsLayout from './projects/layout'



export default function Home() {
  return (
    <main className='flex justify-center homecontainer rounded-2xl' >
      <div className='flex flex-col gap-8 md:flex-row w-full md:flex-row'>
        <img className= 'rounded-r-full rounded-b-full md:w-1/3 h-96'  src='/profile.jpg'/>
        <div>
        <h1 className='text-5xl mt-5 font-bold'> Yashodhi Chathurangi</h1>
        <h2>Talented Software Developer</h2>
        <button>Contact me</button>
        <button>My work </button>
        </div>
      </div>   
    </main>
  )
}
