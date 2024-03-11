import footerCover_1 from '../../assets/images/footer/footer-cover-1.jpg';
import footerCover_2 from '../../assets/images/footer/footer-cover-2.jpg';
import footerCover_3 from '../../assets/images/footer/footer-cover-3.jpg';
import eye from '../../assets/images/svg/eye.svg';
import ploty_1 from '../../assets/images/ploty/ploty-1.webp'
import ploty_2 from '../../assets/images/ploty/ploty-2.jpeg';
import ploty_3 from '../../assets/images/ploty/ploty-3.jpg';

import {Swiper, SwiperSlide} from 'swiper/react';

//import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';

import './SwiperSlider.scss'

import {Pagination, EffectFade} from 'swiper/modules';

const page_thumb = [
	{
		count: '1',
		name: 'Julius Caesar',
		price: '221',
		footerCover: footerCover_1,
		image: ploty_1,
	},
	{
		count: '2',
		name: 'Into the Abyss',
		price: '157',
		footerCover: footerCover_2,
		image: ploty_2,
	},
	{
		count: '3',
		name: 'Discobolus',
		price: '95',
		footerCover: footerCover_3,
		image: ploty_3
	},
];

const footer_info = [
	{title: 'Token ID', value: 'AUXPO#66156'},
	{title: 'Creator', value: 'Enzo Tribiani'},
	{title: 'Base Price', value: '46 ETH'},
	{title: 'Limit', value: '5 per wallet'},
	{title: 'Mint Date', value: '5th March 2022'},
];


function SwiperSlider () {

const swiper_params = {
	modules: [Pagination, EffectFade],
	slidesPerView: 1,
	spaceBetween: 30,
	speed: 1500,
	effect: 'fade',
	fadeEffect: {crossFade: true},
	direction: 'vertical',
	pagination: {
		clickable: true,
		renderBullet: function (index, className) {
			return `<p class=${className}>#0${page_thumb[ index ].count}
						<span class="pagination-art"> ${page_thumb[ index ].name}</span>
						<span class="pagination-price"><span>${page_thumb[ index ].price}</span>&nbsp;ETH</span>
						<img class="pagination-image" src=${page_thumb[ index ].footerCover} alt={page_thumb[ index ].footerCover} />
						</p>`;
		},

	},
	loop: false,
};

	return (
		<>
			<Swiper {...swiper_params} className="mySwiper">
				{page_thumb.map((p, idx) => (
					<SwiperSlide key={p.count}>
						<img src={page_thumb[idx].image} alt="page_thumb[idx].image"/>
						<div className="swiper-body">
							<h2 className="swiper-body__title">Win <span>3D printed</span><br/>
								miniature model</h2>
							<p className="swiper-body__desc">Bid now to avail these models and many<br />
								other rewards on exclusive pieces.</p>
							<div className="swiper-body__buttons">
								<a href="#" className="btn buy">Buy
									Now</a>
								<a href="#" className="btn view">
									<img src={eye} alt="eye"/>View NFT
								</a>
							</div>
						</div>
						<div className="swiper-footer">
							<div className="footer-info">
								<p className="footer-info__author">Maria Roman
									Generative</p>
								{footer_info.map((i) => (
									<p
										className="footer-info__item"
										key={i.title}
									>
										{i.title}
										<span>{i.value}</span>
									</p>
								))}
							</div>
							<div className="footer-cover">
								<img src={p.footerCover} alt="footerCover"/>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}

export {SwiperSlider};