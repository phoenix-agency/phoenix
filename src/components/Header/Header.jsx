import GitHubSvg from '../../assets/svg/GitHubSvg'
import './HeaderStyle.css'
export default function Header() {
  return (
    <div className="Header">
        <div className='HeaderContainer'>
          <div className='Row Width17 Padding'>
            <p>Email : </p>
            <a href="mailto:Dodolasaumure@gmail.com"><p className='Grey'>Dodolasaumure@gmail.com</p></a>
          </div>
          <div className='Row Width10 Border Padding'>
            <p>Tel : </p>
            <a href="tel:0612345678"><p className='Grey'>06 12 34 56 78</p></a>
            
          </div>
        </div>
        <a href="https://github.com" target="_blank" rel="noreferrer"><GitHubSvg /></a>
    </div>
  )
}
