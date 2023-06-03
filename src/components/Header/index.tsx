import './Header.scss';

interface HeaderProps {
	onExit: () => void;
}

const Header = ({ onExit }: HeaderProps) => {
	return (
		<header>
			<img className="logo" src="images/voll-logo.svg" alt="logo"></img>
			<div className="div-action">
				<img className="profile" src="images/profile.svg" alt="profile" />
				<a className="exit" href="#" onClick={() => onExit()}>Sair</a>
			</div>
		</header>
	)
}

export default Header;