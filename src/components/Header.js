import logo from '../images/troll.svg';


export default function Header(props){
    return (
        <header className="header">
            <div className="header--title">
                <img className='logo' src={logo} alt='logo' />
                <h1>Meme generator</h1>
            </div>
            <div className="header--title">
                <p>React Course - Project 3</p>
            </div>
        </header>
    )
}