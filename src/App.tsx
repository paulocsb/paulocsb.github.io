import './App.css'
import { LinkedInIcon, XTwitterIcon, BlueskyIcon, GithubIcon, MediumIcon } from './assets'
import { SiGooglegemini, SiReact, SiTailwindcss, SiVite } from '@icons-pack/react-simple-icons';
import * as cowsay from "cowsay"

const Greetings = () => {
  const cowsaid: string = cowsay.say({ text: "👋 Hello!", e: "oO", });

  return (
    <pre>
      {cowsaid}
    </pre>
  )
}

const TerminalPrompt = ({ promptCommand, className }: {
  promptCommand: string;
  className?: string;
}) => {
  return (
    <div className={`terminal-line`}>
      <span className="terminal-prompt">root@paulocsb.dev</span>
      <span className="terminal-separator">~</span>
      <span className="terminal-cursor">$</span>
      <span className={`${className || ''}`}>{promptCommand}</span>
    </div>
  )
}

function App() {
  return (
    <div data-theme='terminal'>
      <main className='flex flex-col w-screen justify-between gap-3 p-5 ctp-bg-base min-h-screen'>
        {/* Terminal typing animation */}
        <TerminalPrompt className='typing-command' promptCommand='whoami' />

        {/* Content that fades in after typing */}
        <section className="output flex flex-col w-screen justify-between gap-2">
          <div className='flex flex-row gap-3 items-center'>
            <ul className="space-y-1 ml-4">
              <li>
                <a className="ctp-text-blue hover:ctp-text-green transition-colors duration-200"
                  href="https://github.com/paulocsb" target="_blank" rel="noopener noreferrer">
                  <GithubIcon className='inline align-top w-6 h-6' /> GitHub
                </a>
              </li>
              <li>
                <a className="ctp-text-blue hover:ctp-text-blue transition-colors duration-200"
                  href="https://linkedin.com/in/paulocsb" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon className='inline align-top w-6 h-6' /> LinkedIn
                </a>
              </li>
              <li>
                <a className="ctp-text-blue hover:ctp-text-sky transition-colors duration-200"
                  href="https://x.com/paulocsb" target="_blank" rel="noopener noreferrer">
                  <XTwitterIcon className='inline align-top w-6 h-6' /> X (Former Twitter)
                </a>
              </li>
              <li>
                <a className="ctp-text-blue hover:ctp-text-sapphire transition-colors duration-200"
                  href="https://bsky.app/profile/‪paulocsb.bsky.social‬" target="_blank" rel="noopener noreferrer">
                  <BlueskyIcon className='inline align-top w-6 h-6' /> Bluesky
                </a>
              </li>
              <li>
                <a className="ctp-text-blue hover:ctp-text-sapphire transition-colors duration-200"
                  href="https://bsky.app/profile/‪paulocsb.bsky.social‬" target="_blank" rel="noopener noreferrer">
                  <MediumIcon className='inline align-top w-6 h-6' /> Medium
                </a>
              </li>
            </ul>
            <Greetings />
          </div>

          <p className="mt-4 ctp-text-text">
            I'm a software developer with a deep passion for coding and building meaningful experiences. I've worked across a range of technologies and enjoy solving real-world problems through thoughtful engineering.
          </p>

          <p className="mt-4 ctp-text-text mb-6">
            Outside the tech world, you'll find me in a kimono (purple belt in Brazilian Jiu-Jitsu 🥋), on a surfboard chasing waves 🌊, or exploring new places around the globe ✈️. The beach and ocean are my reset button — they keep me grounded, creative, and inspired.
          </p>

          <TerminalPrompt promptCommand='cat interests.md' />

          <h3 className="mt-2 w-fit">Interests</h3>
          <ul className="mt-2 space-y-1 ml-4 ctp-text-subtext1 mb-6">
            <li className='flex flex-row gap-2'><SiGooglegemini />AI and terminal tools</li>
            <li className='flex flex-row gap-2'><SiGooglegemini />backend development</li>
            <li className='flex flex-row gap-2'><SiGooglegemini />mobile development (swift, react native)</li>
            <li className='flex flex-row gap-2'><SiGooglegemini />fullstack development</li>
            <li className='flex flex-row gap-2'><SiGooglegemini />open source</li>
          </ul>

          <TerminalPrompt promptCommand='contact' />

          <h3 className="mt-2 w-fit">Getting in touch</h3>
          <ul className="mt-2 space-y-1 ml-4 ctp-text-subtext1">
            <li className='flex flex-row gap-2'><SiGooglegemini />Email: hello@paulocsb.dev</li>
            <li className='flex flex-row gap-2'><SiGooglegemini />And the stuff linked above.</li>
          </ul>
        </section>

        <footer className="ctp-text-subtext0 pt-8">
          This site was built with
          <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer" className="ctp-text-blue hover:ctp-text-mauve"> <SiVite className='inline align-top w-6 h-6' /> Vite</a> +
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="ctp-text-blue hover:ctp-text-mauve"> <SiReact className='inline align-top w-6 h-6' /> React</a> +
          <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="ctp-text-blue hover:ctp-text-mauve"> <SiTailwindcss className='inline align-top w-6 h-6' /> Tailwind</a>
        </footer>
      </main>
    </div>
  )
}

export default App