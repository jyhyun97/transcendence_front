import './Nav.css'
import ft_logo from './images/42_logo.png'

function Nav(){
    return (
        <header className="nav">
            <img src={ft_logo} alt='logo' className='nav_menu' id='logo'></img>
            <span className='nav_menu' id="blank"></span>
            <button className='nav_menu'>rank</button>
            <button className='nav_menu'>mypage</button>
            <button className='nav_menu'>logout</button>
        </header>
    )
}
export default Nav