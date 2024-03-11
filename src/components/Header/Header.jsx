import './Header.scss';
import logo from "../../assets/images/logo/logo.jpg";
import wallet from "../../assets/images/svg/wallet.svg";

function Header () {
	return (
		<div className="Header">
			<a href="#" className="logo">
				<img src={logo} alt="logo"/>
			</a>
			<nav>
				<ul className="menu">
					<li className="menu__item"><a className="menu__item_link active" href="#">Home</a></li>
					<li className="menu__item"><a className="menu__item_link" href="#">Roadmap</a></li>
					<li className="menu__item"><a className="menu__item_link" href="#">About Us</a></li>
					<li className="menu__item">
						<a className="menu__item_link" href="#">
							<img src={wallet} alt="wallet"/>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export {Header};
