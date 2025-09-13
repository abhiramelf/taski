import TaskiLogo from '../assets/taski-logo.svg';
import GitHubLogo from '../assets/github.png';

export default function Navbar() {
    return (
        <nav>
            <img className='site-logo' src={TaskiLogo} alt="Taski Logo" />
            <img role='button' onClick={
                    () => window.open("https://github.com/abhiramelf/taski", "_blank")
                } className='github-logo' src={GitHubLogo} alt="GitHub Logo" />
        </nav>
    )
}