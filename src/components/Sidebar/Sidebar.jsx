import './Sidebar.scss';
import burger from "../../assets/images/svg/burger.svg";
import facebook from "../../assets/images/svg/facebook.svg";
import instagram from "../../assets/images/svg/instagram.svg";
import twitter from "../../assets/images/svg/twitter.svg";

const social = [
	{title: 'facebook', src: facebook},
	{title: 'instagram', src: instagram},
	{title: 'twitter', src: twitter},
];

function Sidebar () {
	return (
		<div className="Sidebar">
			<button type="button" className="sidebar__button">
				<img src={burger} alt="burger"/>
			</button>
			<ul className="list">
				{
					social.map((i, idx) => (
						<li className="list__item" key={idx}>
							<a href="#" className="list__item_link" target="_blank">
								<img src={i.src} alt={i.title}/>
							</a>
						</li>
					))
				}
			</ul>
		</div>
	);
}

export {Sidebar};
