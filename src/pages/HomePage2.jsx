 import Layout from "../components/Layout";
 import img1 from "../assets/images/hero-banner/img1.png";
 import img2 from "../assets/images/hero-banner/img2.jpg";
 import Personalized from "../components/Personalized";
 import LaserHairRemoval from "../assets/images/services/laser-hair-removal.jpg";
 import imgPersonalized from "../assets/images/img1.webp";
 import ServicesSlider from "../components/ServicesSlider";

 
 const HomePage = () => {
  return (
    <Layout>
<div id="smooth-wrapper">
		<div id="smooth-content">
			<main className="page-content">	
				<div className="relative 2xxl:h-245 xxl:h-230 xl:h-205 lg:h-162.5 md:h-137.5 h-auto xl:pt-0 md:pt-20 sm:pt-30 pt-25 bg-light overflow-hidden z-1 after:size-full after:absolute after:bottom-0 after:right-0 after:-z-1 after:bg-[url(../../skincare/images/hero-banner/bg.png)] after:bg-no-repeat after:bg-[right_-13px_bottom]">
					<div className="container h-full">
						<div className="h-full">
							<div className="row items-center h-full">
								<div className="md:w-1/2 w-full">
									<div className="2xxl:-mr-7.5 2xxl:ml-0 xl:ml-10 max-md:mb-7.5">
										<h1 className="2xxl:text-4xxl xl:text-xl lg:text-4xxl sm:text-3xxl text-[32px] lg:mb-7.5 mb-3.75 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Discover Personalized treatment that enchance your natural beauty</h1>
										<div className="text-secondary py-3 px-5 lg:text-lg text-sm max-w-150 border-l-4 border-secondary bg-linear-(--content-bx-2-gradient) lg:mb-10 mb-3.75 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
											At Riverstone Laser, we believe every individual deserves to shine. Our experienced team offers luxurious skincare solutions designed to deliver real, lasting results — because you’re not just glowing, you’re truly unforgettable.
										</div>
										<div className="flex">
											<a href="https://app.squareup.com/appointments/book/9qze62967coq3v/L0BCN9T6Y4JAQ/start" target="_blank" rel="noopener noreferrer"className="btn btn-lg btn-icon btn-primary wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
												Book Appointment
												<span className="size-11 min-w-11 bg-white rounded-2lg text-heading inline-flex items-center justify-center -my-2.75 -mr-4.5 ml-3"><i className="feather icon-arrow-right"></i></span>
											</a>
											{/* <div className="flex ml-12.5 max-xl:hidden wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
												<img className="w-15 aspect-square -ml-3 first:ml-0 rounded-full" src="images/avatar/small/avatar1.webp" alt="Riverflow Laser client avatar 1"/>
												<img className="w-15 aspect-square -ml-3 first:ml-0 rounded-full" src="images/avatar/small/avatar2.webp" alt="Riverflow Laser client avatar 2"/>
												<img className="w-15 aspect-square -ml-3 first:ml-0 rounded-full" src="images/avatar/small/avatar3.webp" alt="Riverflow Laser client avatar 3"/>
												<img className="w-15 aspect-square -ml-3 first:ml-0 rounded-full" src="images/avatar/small/avatar4.webp" alt="Riverflow Laser client avatar 4"/>
												<a href="about-us.html" className="avatar btn btn-square !size-15 btn-white shadow-btn [writing-mode:tb-rl] !rounded-5xl -ml-3 first:ml-0 group">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path className="group-hover:stroke-white" d="M7 17L17 7" stroke="var(--color-secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
														<path className="group-hover:stroke-white" d="M7 7H17V17" stroke="var(--color-secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
													</svg>
												</a>
											</div> */}
										</div>
									</div>
								</div>
								<div className="md:w-1/2 w-full self-end wow fadeInRight" data-wow-delay="0.8s" data-wow-duration="0.8s">
									<div className="relative 2xxl:w-187.5 xxl:w-162.5 lg:w-105 sm:w-87.5 w-65 3xl:ml-12.5 lg:ml-0 md:-ml-7.5 max-md:mx-auto" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
										<img className="thumbnail" src={img1} alt="Riverflow Laser personalized aesthetic treatment hero"/>
										{/* <div className="absolute 3xl:right-5 sm:-right-10 -right-7.5 lg:bottom-20 sm:bottom-8.75 bottom-5" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
											<button className="flex items-center justify-center" data-type="youtube" data-src="https://www.youtube.com/embed/o8OgzQdA70c">
												<i className="fa-solid fa-play block animate-rotate [animation-direction:reverse] text-black xl:text-2xl absolute z-1"></i>
												<span className="word-rotate-box flex justify-center items-center xl:size-45 lg:size-37.5 size-30 bg-transparent rounded-full animate-identifier text-center p-3.75 relative after:absolute after:top-0 after:left-0 after:size-full after:-z-1 after:rounded-full after:border-[25px] after:border-transparent after:backdrop-blur-[17px] after:bg-white/70 after:drop-shadow-[0px_0px_100px_rgba(0,0,0,0.15)]">
													<span className="word-rotate block animate-identifier [animation-direction:reverse] duration-300 text-black text-2xl">More Collection Explore </span>
												</span>
											</button>
										</div> */}
									</div>
								</div>
							</div>
							{/* <div className="absolute right-8.75 top-1/2 [writing-mode:tb] -rotate-180 -translate-y-1/2 max-xl:hidden">
								<div className="flex gap-1.5 bg-white shadow-[0_0_25px_rgba(var(--secondary-rgb),0.05)] px-3.75 py-2 rounded-5xl items-center text-secondary text-2xs font-medium">
									<ul className="flex gap-0.75">
										<li className="text-yellow-400 text-2sm"><i className="fa fa-star"></i></li>
										<li className="text-yellow-400 text-2sm"><i className="fa fa-star"></i></li>
										<li className="text-yellow-400 text-2sm"><i className="fa fa-star"></i></li>
										<li className="text-yellow-400 text-2sm"><i className="fa fa-star"></i></li>
										<li className="text-yellow-400 text-2sm"><i className="fa fa-star"></i></li>
									</ul>
									<span className="font-bold text-primary mr-1.25">(4.8)</span>
									<span className="text-sm font-medium">12k+ ratings on google</span>
								</div>
							</div> */}
							<div className="3xl:top-[15%] top-[12%] left-[7%] absolute max-xl:hidden animate-move3" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
								<div className="relative overflow-hidden rounded-full">
									<img src={img2} alt="Riverflow Laser skincare client portrait"/>
								</div>
							</div>
							{/* <div className="absolute bottom-[6%] left-[42%] max-lg:hidden animate-move3" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
								<img src="images/hero-banner/img3.jpg" alt="Riverflow Laser clinic treatment detail" className="rounded-ee-[65%] 2xl:size-28.75 size-23.75 object-cover"/>
							</div> */}
							{/* <div className="bottom-12.5 left-20 absolute max-xl:hidden" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
								<img src="images/hero-banner/img4.jpg" alt="Riverflow Laser skincare treatment detail" className="3xl:rounded-e-5xl rounded-e-2xxl 3xl:h-50 3xl:w-30 w-20 h-37.5 object-cover"/>
							</div> */}

							<svg className="absolute sm:top-[18%] top-[10%] sm:right-[38%] right-[80%] lg:w-15 sm:w-7.5 w-5 animate-identifier" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M30.5 0L34.4251 26.5749L61 30.5L34.4251 34.4251L30.5 61L26.5749 34.4251L0 30.5L26.5749 26.5749L30.5 0Z" fill="var(--color-primary)"/>
							</svg>
							<svg className="absolute top-[48%] right-[8%] lg:w-7.5 w-5 animate-identifier" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M30.5 0L34.4251 26.5749L61 30.5L34.4251 34.4251L30.5 61L26.5749 34.4251L0 30.5L26.5749 26.5749L30.5 0Z" fill="var(--color-primary)"/>
							</svg>
						</div>
					</div>

					<div className="h-[calc(100%_-_80px)] w-20 min-w-20 absolute bottom-0 flex justify-between items-center flex-col py-18.75 px-3.75 left-0 border-r border-black/10 max-xl:hidden">
						{/* <ul className="flex gap-7.5 [writing-mode:tb-rl]">
							<li><a className="text-sm uppercase text-secondary tracking-[1px]" href="javascript:void(0);">Instagram</a></li>
							<li><a className="text-sm uppercase text-secondary tracking-[1px]" href="javascript:void(0);">Facebook</a></li>
							<li><a className="text-sm uppercase text-secondary tracking-[1px]" href="javascript:void(0);">twitter</a></li>
						</ul>
						<a href="javascript:void(0);" className="btn btn-white btn-sm !py-2 !px-4 shadow-btn [writing-mode:tb-rl] !rounded-2xl">LET'S TALK</a> */}
					</div>

					<div className="top-[10%] -left-25 opacity-20 w-62.5 aspect-square rounded-full h-auto absolute bg-primary blur-[100px] -z-1"></div>
					<div className="banner-shape5 -right-25 -bottom-25 opacity-30 w-62.5 aspect-square rounded-full h-auto absolute bg-primary blur-[100px] -z-1"></div>
					<div className="banner-shape6 left-[30%] -bottom-37.5 opacity-20 w-62.5 aspect-square rounded-full h-auto absolute bg-primary blur-[100px] -z-1"></div>
				</div>
						<section className="2xl:pt-25 2xl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 sm:pb-5 pt-10 pb-5 bg-light">
			<div className="container">
				<div className="row">
					<div className="xl:w-5/12 lg:w-1/2 w-full mb-3.75">
						<div className="2xxl:-ml-10 lg:ml-0 sm:ml-7.5 ml-3.75 lg:pr-10 relative mb-21.25" data-bottom-top="transform: translateY(-30px)" data-top-bottom="transform: translateY(30px)">
							<div className="relative overflow-hidden 2xl:h-155 sm:h-130 h-87.5 2xl:rounded-es-[150px] sm:rounded-es-[180px] rounded-es-8xl z-1">
								<img src={imgPersonalized} alt="Personalized skincare consultation at Riverflow Laser" className="size-full object-cover"/>
							</div>
							<div className="absolute top-7.5 sm:-left-7.5 -ml-3.75 h-full 2xl:w-54.5 lg:w-[40%] md:w-[31%] sm:w-[42%] w-[38%]">
								<svg className="size-full" viewBox="0 0 217 620" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M2 2H215V618H170C133.427 618 99.5833 606.313 72 586.471V588.927C99.6969 608.5 133.505 620 170 620H215H217V618V2V0H215H2H0V2V450C0 487.378 12.0629 521.938 32.508 550H34.9905C14.2616 522.06 2 487.462 2 450V2Z" fill="#0A3366"/>
									<path d="M57.8488 560.9L53.5269 569.179L56.9986 577.849L48.7195 573.527L40.0494 576.999L44.3713 568.72L40.8996 560.05L49.1787 564.371L57.8488 560.9Z" fill="#0A3366"/>
								</svg>
							</div>
							{/* <div className="absolute lg:-bottom-21.25 -bottom-16.25 z-2 lg:left-[26%] left-2/5" data-bottom-top="transform: translateY(-30px)" data-top-bottom="transform: translateY(30px)">
								<button className="flex items-center justify-center" data-type="youtube" data-src="https://www.youtube.com/embed/o8OgzQdA70c">
									<i className="fa-solid fa-play block animate-rotate [animation-direction:reverse] text-black xl:text-2xl absolute z-9"></i>
									<span className="word-rotate-box flex justify-center items-center xl:size-45 lg:size-37.5 size-30 bg-transparent rounded-full animate-identifier text-center p-3.75 relative after:absolute after:top-0 after:left-0 after:size-full after:-z-1 after:rounded-full after:border-[25px] after:border-transparent after:backdrop-blur-[17px] after:bg-white after:drop-shadow-[0px_0px_100px_rgba(0,0,0,0.15)]">
										<span className="word-rotate block animate-identifier [animation-direction:reverse] duration-300 text-black text-2xl">More Collection Explore </span>
									</span>
								</button>
							</div> */}
						</div>
					</div>
					<div className="xl:w-7/12 lg:w-1/2 w-full mb-7.5 relative">
						<div className="relative">
							<div className="sm:mb-7.5 mb-5 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
								<h2 className="2xxl:text-3xl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize mb-3.75">Beyond Skin Deep Personalized Care for Your Unique Beauty Journey description At Riverstone Laser And Skin Care.</h2>
								<p className="xl:text-lg sm:text-base text-sm font-light">We believe healthy, radiant skin is achievable for everyone. We combine advanced machines with innovative cosmetic solutions to address your unique skin concerns. Our team create personalized treatment plans to achieve your desired results, whether it's treating acne, restoring sun damage, or enhancing your natural beauty. Explore our website to learn more about our services and discover the confidence that comes with feeling your best in your own skin.</p>
							</div>
							<div className="flex items-center mb-3.75 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
								<div className="rounded-6xl inline-flex items-center justify-center sm:py-2.5 py-2 xl:pr-12.5 sm:pr-7.5 pr-3.75 sm:pl-3.75 pl-2.5 xl:min-h-17.5 sm:min-h-15.5 min-h-13.75 mr-5 bg-transparent border border-secondary">
									<div className="flex pr-6.25 mr-6.25 border-r border-black/10">
										{/* <img className="xl:w-12 sm:w-10.5 w-8 aspect-square rounded-full border-white border-2 first:ml-0 -ml-3" src="images/avatar/small/avatar1.webp" alt="Riverflow Laser client avatar 1"/>
										<img className="xl:w-12 sm:w-10.5 w-8 aspect-square rounded-full border-white border-2 first:ml-0 -ml-3" src="images/avatar/small/avatar2.webp" alt="Riverflow Laser client avatar 2"/>
										<img className="xl:w-12 sm:w-10.5 w-8 aspect-square rounded-full border-white border-2 first:ml-0 -ml-3" src="images/avatar/small/avatar3.webp" alt="Riverflow Laser client avatar 3"/>
										<img className="xl:w-12 sm:w-10.5 w-8 aspect-square rounded-full border-white border-2 first:ml-0 -ml-3" src="images/avatar/small/avatar4.webp" alt="Riverflow Laser client avatar 4"/> */}
									
									<a href="about-us.html" className="btn btn-square btn-white lg:!size-17.5 lg:!min-w-17.5 md:!size-15 md:!min-w-15 !size-13.75 !min-w-13.75 !rounded-5xl shadow-7"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 17L17 7" stroke="var(--color-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 7H17V17" stroke="var(--color-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
									<span className="xl:text-base sm:text-sm text-xs">Learn More</span>
									</div>
							
								</div>
								<a href="about-us.html" className="btn btn-square btn-white lg:!size-17.5 lg:!min-w-17.5 md:!size-15 md:!min-w-15 !size-13.75 !min-w-13.75 !rounded-5xl shadow-7">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M7 17L17 7" stroke="var(--color-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
										<path d="M7 7H17V17" stroke="var(--color-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
									</svg>
								</a>
							</div>
							{/* <div className="flex gap-1.5 sm:text-sm text-xs font-medium wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
								<ul className="flex gap-0.75">
									<li className="text-star text-2sm"><i className="fa fa-star text-orange"></i></li>
									<li className="text-star text-2sm"><i className="fa fa-star text-orange"></i></li>
									<li className="text-star text-2sm"><i className="fa fa-star text-orange"></i></li>
									<li className="text-star text-2sm"><i className="fa fa-star text-orange"></i></li>
									<li className="text-star text-2sm"><i className="fa fa-star text-orange"></i></li>
								</ul>
								<span className="font-bold">(4.8)</span>
								<span className="text-sm font-medium">12k+ ratings on google</span>
							</div> */}
							<div className="absolute -bottom-[11%] 2xxl:-right-[12%] -right-7.5 max-xxl:hidden" data-bottom-top="transform: translateY(-30px)" data-top-bottom="transform: translateY(30px)">
								<img src="images/about/img2.webp" className="2xxl:max-w-37.5 max-w-30 absolute rotate-[-20deg] -left-[60%]" alt="Personalized skincare consultation accent image"/>
								<img src="images/about/img3.webp" className="2xxl:max-w-37.5 max-w-30" alt="Riverflow Laser skincare treatment accent image"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

				<div className="relative 2xxl:p-7.5 sm:p-5 p-3.75 bg-secondary overflow-hidden">
			<ul className="flex items-center flex-nowrap animate-ticker [animation-duration:15s]">
				<li className="text-white 2xxl:text-3xl md:text-2xl sm:text-xl text-base font-normal flex justify-center relative capitalize 2xxl:after:size-7.5 md:after:size-5 sm:after:size-4.5 after:size-3.5 after:bg-center after:bg-no-repeat 2xxl:after:mx-12.5 md:after:mx-6.25 sm:after:mx-5 after:mx-3.75 after:bg-size-[100%] after:bg-starsvg-white wow bounceIn" data-wow-delay="0.1s" data-wow-duration="0.8s">Accessories</li>	
				<li className="text-white 2xxl:text-3xl md:text-2xl sm:text-xl text-base font-normal flex justify-center relative capitalize 2xxl:after:size-7.5 md:after:size-5 sm:after:size-4.5 after:size-3.5 after:bg-center after:bg-no-repeat 2xxl:after:mx-12.5 md:after:mx-6.25 sm:after:mx-5 after:mx-3.75 after:bg-size-[100%] after:bg-starsvg-white wow bounceIn" data-wow-delay="0.2s" data-wow-duration="0.8s">Haircare</li>	
				<li className="text-white 2xxl:text-3xl md:text-2xl sm:text-xl text-base font-normal flex justify-center relative capitalize 2xxl:after:size-7.5 md:after:size-5 sm:after:size-4.5 after:size-3.5 after:bg-center after:bg-no-repeat 2xxl:after:mx-12.5 md:after:mx-6.25 sm:after:mx-5 after:mx-3.75 after:bg-size-[100%] after:bg-starsvg-white wow bounceIn" data-wow-delay="0.3s" data-wow-duration="0.8s">Nailcare</li>
				<li className="text-white 2xxl:text-3xl md:text-2xl sm:text-xl text-base font-normal flex justify-center relative capitalize 2xxl:after:size-7.5 md:after:size-5 sm:after:size-4.5 after:size-3.5 after:bg-center after:bg-no-repeat 2xxl:after:mx-12.5 md:after:mx-6.25 sm:after:mx-5 after:mx-3.75 after:bg-size-[100%] after:bg-starsvg-white wow bounceIn" data-wow-delay="0.4s" data-wow-duration="0.8s">Beautycare</li>
				<li className="text-white 2xxl:text-3xl md:text-2xl sm:text-xl text-base font-normal flex justify-center relative capitalize 2xxl:after:size-7.5 md:after:size-5 sm:after:size-4.5 after:size-3.5 after:bg-center after:bg-no-repeat 2xxl:after:mx-12.5 md:after:mx-6.25 sm:after:mx-5 after:mx-3.75 after:bg-size-[100%] after:bg-starsvg-white wow bounceIn" data-wow-delay="0.5s" data-wow-duration="0.8s">Bodycare</li>	
				<li className="text-white 2xxl:text-3xl md:text-2xl sm:text-xl text-base font-normal flex justify-center relative capitalize 2xxl:after:size-7.5 md:after:size-5 sm:after:size-4.5 after:size-3.5 after:bg-center after:bg-no-repeat 2xxl:after:mx-12.5 md:after:mx-6.25 sm:after:mx-5 after:mx-3.75 after:bg-size-[100%] after:bg-starsvg-white wow bounceIn" data-wow-delay="0.6s" data-wow-duration="0.8s">Skincare</li>	
				<li className="text-white 2xxl:text-3xl md:text-2xl sm:text-xl text-base font-normal flex justify-center relative capitalize 2xxl:after:size-7.5 md:after:size-5 sm:after:size-4.5 after:size-3.5 after:bg-center after:bg-no-repeat 2xxl:after:mx-12.5 md:after:mx-6.25 sm:after:mx-5 after:mx-3.75 after:bg-size-[100%] after:bg-starsvg-white wow bounceIn" data-wow-delay="0.7s" data-wow-duration="0.8s">Accessories</li>	
				<li className="text-white 2xxl:text-3xl md:text-2xl sm:text-xl text-base font-normal flex justify-center relative capitalize 2xxl:after:size-7.5 md:after:size-5 sm:after:size-4.5 after:size-3.5 after:bg-center after:bg-no-repeat 2xxl:after:mx-12.5 md:after:mx-6.25 sm:after:mx-5 after:mx-3.75 after:bg-size-[100%] after:bg-starsvg-white wow bounceIn" data-wow-delay="0.8s" data-wow-duration="0.8s">Haircare</li>	
				<li className="text-white 2xxl:text-3xl md:text-2xl sm:text-xl text-base font-normal flex justify-center relative capitalize 2xxl:after:size-7.5 md:after:size-5 sm:after:size-4.5 after:size-3.5 after:bg-center after:bg-no-repeat 2xxl:after:mx-12.5 md:after:mx-6.25 sm:after:mx-5 after:mx-3.75 after:bg-size-[100%] after:bg-starsvg-white wow bounceIn" data-wow-delay="0.9s" data-wow-duration="0.8s">nailcare</li>	
				<li className="text-white 2xxl:text-3xl md:text-2xl sm:text-xl text-base font-normal flex justify-center relative capitalize 2xxl:after:size-7.5 md:after:size-5 sm:after:size-4.5 after:size-3.5 after:bg-center after:bg-no-repeat 2xxl:after:mx-12.5 md:after:mx-6.25 sm:after:mx-5 after:mx-3.75 after:bg-size-[100%] after:bg-starsvg-white wow bounceIn" data-wow-delay="1.0s" data-wow-duration="0.8s">Beautycare</li>
				<li className="text-white 2xxl:text-3xl md:text-2xl sm:text-xl text-base font-normal flex justify-center relative capitalize 2xxl:after:size-7.5 md:after:size-5 sm:after:size-4.5 after:size-3.5 after:bg-center after:bg-no-repeat 2xxl:after:mx-12.5 md:after:mx-6.25 sm:after:mx-5 after:mx-3.75 after:bg-size-[100%] after:bg-starsvg-white wow bounceIn" data-wow-delay="1.1s" data-wow-duration="0.8s">Accessories</li>	
				<li className="text-white 2xxl:text-3xl md:text-2xl sm:text-xl text-base font-normal flex justify-center relative capitalize 2xxl:after:size-7.5 md:after:size-5 sm:after:size-4.5 after:size-3.5 after:bg-center after:bg-no-repeat 2xxl:after:mx-12.5 md:after:mx-6.25 sm:after:mx-5 after:mx-3.75 after:bg-size-[100%] after:bg-starsvg-white wow bounceIn" data-wow-delay="1.2s" data-wow-duration="0.8s">Haircare</li>	
				<li className="text-white 2xxl:text-3xl md:text-2xl sm:text-xl text-base font-normal flex justify-center relative capitalize 2xxl:after:size-7.5 md:after:size-5 sm:after:size-4.5 after:size-3.5 after:bg-center after:bg-no-repeat 2xxl:after:mx-12.5 md:after:mx-6.25 sm:after:mx-5 after:mx-3.75 after:bg-size-[100%] after:bg-starsvg-white wow bounceIn" data-wow-delay="1.3s" data-wow-duration="0.8s">Nailcare</li>
				<li className="text-white 2xxl:text-3xl md:text-2xl sm:text-xl text-base font-normal flex justify-center relative capitalize 2xxl:after:size-7.5 md:after:size-5 sm:after:size-4.5 after:size-3.5 after:bg-center after:bg-no-repeat 2xxl:after:mx-12.5 md:after:mx-6.25 sm:after:mx-5 after:mx-3.75 after:bg-size-[100%] after:bg-starsvg-white wow bounceIn" data-wow-delay="1.4s" data-wow-duration="0.8s">Beautycare</li>
				<li className="text-white 2xxl:text-3xl md:text-2xl sm:text-xl text-base font-normal flex justify-center relative capitalize 2xxl:after:size-7.5 md:after:size-5 sm:after:size-4.5 after:size-3.5 after:bg-center after:bg-no-repeat 2xxl:after:mx-12.5 md:after:mx-6.25 sm:after:mx-5 after:mx-3.75 after:bg-size-[100%] after:bg-starsvg-white wow bounceIn" data-wow-delay="1.5s" data-wow-duration="0.8s">Bodycare</li>
			</ul>
		</div>


							<section className="2xl:pt-25 md:pt-17.5 sm:pt-12.5 pt-10 bg-light">
									<ServicesSlider />
			<div className="container">
				<div className="sm:mb-7.5 mb-5 lg:max-w-275 mx-auto text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
					<h2 className="2xxl:text-3xl xl:text-3xl lg:text-4xl sm:text-3xxl text-[22px] font-bold capitalize">Transform Your Skin with Our Highly Trained Technicians and Advanced Machines</h2>
					<p className="mx-auto xl:text-lg sm:text-base text-sm font-light max-w-full">Experience a transformative journey that sculpts your physique and unlocks your full potential.</p>
				</div>
				
				<div className="flex [counter-reset:counter-item] xl:[--service-count:5] [--service-count:4] mb-7.5 swiper dz-flex-swiper dz-flex-wrapper wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
				
					{/* <div className="swiper-wrapper"> */}
						
						{/* <div className="!flex relative 2xl:flex-[0_0_120px] xl:flex-[0_0_100px] lg:flex-[0_0_80px] flex-[0_0_100%] !duration-500 bg-center mr-4.5 overflow-hidden 2xl:!w-30 xl:!w-25 lg:!w-20 !w-full gap-0 swiper-slide [.dz-flex-item.active]:bg-none 2xl:[.dz-flex-item.active]:!w-[calc(100%_-_(var(--service-count)_-_1)_*_140px)] 2xl:[.dz-flex-item.active]:flex-[0_0_calc(100%_-_(var(--service-count)_-_1)_*_140px)] xl:[.dz-flex-item.active]:!w-[calc(100%_-_(var(--service-count)_-_1)_*_120px)] xl:[.dz-flex-item.active]:flex-[0_0_calc(100%_-_(var(--service-count)_-_1)_*_120px)] lg:[.dz-flex-item.active]:!w-[calc(100%_-_(var(--service-count)_-_1)_*_100px)] lg:[.dz-flex-item.active]:flex-[0_0_calc(100%_-_(var(--service-count)_-_1)_*_100px)] dz-flex-item active">
							<div className="2xl:pt-6.25 pt-3.75 2xl:pb-22.5 pb-20 text-center 2xl:min-h-125 min-h-110 flex flex-col justify-between items-center duration-200 opacity-100 visible w-full z-2 cursor-pointer rounded-xxl bg-blend-color-burn overflow-hidden relative 2xl:max-w-30 xl:max-w-25 max-w-20 bg-position-[center_top] [.swiper-slide.active_&]:invisible [.swiper-slide.active_&]:w-0 before:absolute 2xxl:before:text-7xl 2xl:before:text-5xxl before:text-4xxl before:leading-[1.2] before:font-bold before:text-white before:opacity-10 before:left-1/2 before:bottom-0 before:z-2 before:duration-500 before:-translate-x-1/2 before:![content:'0'_counter(counter-item)] before:[counter-increment:counter-item] after:absolute after:top-0 after:left-0 after:size-full after:bg-secondary after:opacity-70 after:rounded-xxl max-lg:after:hidden max-lg:before:hidden max-lg:hidden bg-[url(../../skincare/images/services/middle/img1.webp)]">
								<a href="service-detail.html" className="btn btn-square btn-white shadow-btn [writing-mode:tb-rl] !rounded-5xl relative z-1 2xl:!size-15 2xl:!min-w-15 !size-11.25 !min-w-11.25 text-2xl">
									<i className="feather icon-arrow-up-right"></i>
								</a>
								<h3 className="text-white font-normal 2xl:text-2xl text-xl [writing-mode:vertical-rl] rotate-180 relative z-1">Laser Hair Removal</h3>
							</div>
							<div className="rounded-2xl opacity-100 duration-500 h-full overflow-hidden z-1 flex bg-white w-[inherit] flex-1 [.swiper-slide.active_&]:w-full before:text-[150px] before:leading-normal before:font-semibold before:text-secondary before:opacity-5 before:absolute before:right-3.75 before:top-3.75 before:z-1 before:duration-500 before:[content:'0'_counter(counter-item)]">
								<div className="flex 2xl:gap-7.5 md:gap-5 gap-2.5 2xl:p-7.5 p-5 2xl:min-w-187.5 lg:min-w-150 min-w-full max-md:flex-col">
									<div className="flex xl:w-75 xl:h-110 xl:min-w-75 md:w-62.5 md:min-w-62.5 md:h-100 sm:h-87.5 h-70 w-full min-w-full relative overflow-hidden">
										<img src={LaserHairRemoval} alt="Laser hair removal treatment at Riverflow Laser" className="size-full object-cover rounded-xxl"/>
										<a href="appointment.html" className="btn btn-white !absolute 2xl:bottom-5 bottom-2.5 2xl:left-5 left-2.5 2xl:right-5 right-2.5 rounded-lg font-medium justify-center">
											<i className="feather icon-calendar mr-1.25 text-primary"></i>
											Book An appointment
										</a>
									</div>
									<div className="relative flex flex-col py-3.75 max-md:pb-0!">
										<div className="">
											<h3 className="xl:text-2xl text-xl">Laser Hair Removal</h3>
											<p className="lg:mb-7.5 mb-3.75 lg:text-lg text-base">If you’re not happy with shaving, tweezing, or waxing to remove unwanted hair, laser hair removal may be an option worth considering. Our lasers help remove hair from the face, leg, chin, back, arm, underarm, bikini line, and more.</p>
											<ul className="font-medium mb-7.5">
												<li className="w-full relative lg:p-1.25 p-1 lg:ps-7.5 ps-6.25 xl:text-base text-2sm before:absolute before:left-0 before:font-black before:content-['\e83f'] before:font-['feather'] before:size-4.5 before:leading-4.5 before:text-center before:text-xs before:text-white before:bg-primary before:rounded-full before:rounded-ee-none before:top-2">Precision</li>
												<li className="w-full relative lg:p-1.25 p-1 lg:ps-7.5 ps-6.25 xl:text-base text-2sm before:absolute before:left-0 before:font-black before:content-['\e83f'] before:font-['feather'] before:size-4.5 before:leading-4.5 before:text-center before:text-xs before:text-white before:bg-primary before:rounded-full before:rounded-ee-none before:top-2">Speed</li>
												<li className="w-full relative lg:p-1.25 p-1 lg:ps-7.5 ps-6.25 xl:text-base text-2sm before:absolute before:left-0 before:font-black before:content-['\e83f'] before:font-['feather'] before:size-4.5 before:leading-4.5 before:text-center before:text-xs before:text-white before:bg-primary before:rounded-full before:rounded-ee-none before:top-2">Predictability</li>
											</ul>
										</div>
										
									</div>
								</div>
							</div>
						</div>						 */}
						{/* <div className="!flex relative 2xl:flex-[0_0_120px] xl:flex-[0_0_100px] lg:flex-[0_0_80px] flex-[0_0_100%] !duration-500 bg-center mr-4.5 overflow-hidden 2xl:!w-30 xl:!w-25 lg:!w-20 !w-full gap-0 swiper-slide [.dz-flex-item.active]:bg-none 2xl:[.dz-flex-item.active]:!w-[calc(100%_-_(var(--service-count)_-_1)_*_140px)] 2xl:[.dz-flex-item.active]:flex-[0_0_calc(100%_-_(var(--service-count)_-_1)_*_140px)] xl:[.dz-flex-item.active]:!w-[calc(100%_-_(var(--service-count)_-_1)_*_120px)] xl:[.dz-flex-item.active]:flex-[0_0_calc(100%_-_(var(--service-count)_-_1)_*_120px)] lg:[.dz-flex-item.active]:!w-[calc(100%_-_(var(--service-count)_-_1)_*_100px)] lg:[.dz-flex-item.active]:flex-[0_0_calc(100%_-_(var(--service-count)_-_1)_*_100px)] dz-flex-item">
							<div className="2xl:pt-6.25 pt-3.75 2xl:pb-22.5 pb-20 text-center 2xl:min-h-125 min-h-110 flex flex-col justify-between items-center duration-200 opacity-100 visible w-full z-2 cursor-pointer rounded-xxl bg-blend-color-burn overflow-hidden relative 2xl:max-w-30 xl:max-w-25 max-w-20 bg-position-[center_top] [.swiper-slide.active_&]:invisible [.swiper-slide.active_&]:w-0 before:absolute 2xxl:before:text-7xl 2xl:before:text-5xxl before:text-4xxl before:leading-[1.2] before:font-bold before:text-white before:opacity-10 before:left-1/2 before:bottom-0 before:z-2 before:duration-500 before:-translate-x-1/2 before:![content:'0'_counter(counter-item)] before:[counter-increment:counter-item] after:absolute after:top-0 after:left-0 after:size-full after:bg-secondary after:opacity-70 after:rounded-xxl max-lg:after:hidden max-lg:before:hidden max-lg:hidden bg-[url(../../skincare/images/services/middle/img2.webp)]">
								<a href="service-detail.html" className="btn btn-square btn-white shadow-btn [writing-mode:tb-rl] !rounded-5xl relative z-1 2xl:!size-15 2xl:!min-w-15 !size-11.25 !min-w-11.25 text-2xl">
									<i className="feather icon-arrow-up-right"></i>
								</a>
								<h3 className="text-white font-normal 2xl:text-2xl text-xl [writing-mode:vertical-rl] rotate-180 relative z-1">Dermatologic Surgery</h3>
							</div>
							<div className="rounded-2xl opacity-100 duration-500 h-full overflow-hidden z-1 flex bg-white w-[inherit] flex-1 [.swiper-slide.active_&]:w-full before:text-[150px] before:leading-normal before:font-semibold before:text-secondary before:opacity-5 before:absolute before:right-3.75 before:top-3.75 before:z-1 before:duration-500 before:[content:'0'_counter(counter-item)]">
								<div className="flex 2xl:gap-7.5 md:gap-5 gap-2.5 2xl:p-7.5 p-5 2xl:min-w-187.5 lg:min-w-150 min-w-full max-md:flex-col">
									<div className="flex xl:w-75 xl:h-110 xl:min-w-75 md:w-62.5 md:min-w-62.5 md:h-100 sm:h-87.5 h-70 w-full min-w-full relative overflow-hidden">
										<img src="images/services/middle/img2.webp" alt="Dermatologic surgery service image" className="size-full object-cover rounded-xxl"/>
										<a href="appointment.html" className="btn btn-white !absolute 2xl:bottom-5 bottom-2.5 2xl:left-5 left-2.5 2xl:right-5 right-2.5 rounded-lg font-medium justify-center">
											<i className="feather icon-calendar mr-1.25 text-primary"></i>
											Book An appointment
										</a>
									</div>
									<div className="relative flex flex-col py-3.75 max-md:!pb-0">
										<div className="">
											<h3 className="xl:text-2xl text-xl">Dermatologic Surgery</h3>
											<p className="lg:mb-7.5 mb-3.75 lg:text-lg text-base">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
											<ul className="font-medium mb-7.5">
												<li className="w-full relative lg:p-1.25 p-1 lg:ps-7.5 ps-6.25 xl:text-base text-2sm before:absolute before:left-0 before:font-black before:content-['\e83f'] before:font-['feather'] before:size-4.5 before:leading-4.5 before:text-center before:text-xs before:text-white before:bg-primary before:rounded-full before:rounded-ee-none before:top-2">Excellent Laporatery</li>
												<li className="w-full relative lg:p-1.25 p-1 lg:ps-7.5 ps-6.25 xl:text-base text-2sm before:absolute before:left-0 before:font-black before:content-['\e83f'] before:font-['feather'] before:size-4.5 before:leading-4.5 before:text-center before:text-xs before:text-white before:bg-primary before:rounded-full before:rounded-ee-none before:top-2">World Class Infrastructure</li>
												<li className="w-full relative lg:p-1.25 p-1 lg:ps-7.5 ps-6.25 xl:text-base text-2sm before:absolute before:left-0 before:font-black before:content-['\e83f'] before:font-['feather'] before:size-4.5 before:leading-4.5 before:text-center before:text-xs before:text-white before:bg-primary before:rounded-full before:rounded-ee-none before:top-2">Health Checkups</li>
											</ul>
										</div>
										<div className="mt-auto">
											<div className="flex justify-between items-center">
												<div className="flex items-center gap-3">
													<div className="size-15 min-w-15">
														<img src="images/avatar/middle/avatar1.webp" alt="Service provider profile image" className="size-full object-cover rounded-full"/>
													</div>
													<div className="">
														<h6 className="text-lg mb-0">Nashid Martines</h6>
														<p className="text-sm font-medium text-primary mb-0">Cardiac Surgery</p>
													</div>
												</div>
												<a href="service-detail.html" className="btn btn-square btn-primary !rounded-full 2xl:!size-15 2xl:!min-w-15 !size-11.25 !min-w-11.25 text-2xl">
													<i className="feather icon-arrow-up-right"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>						
						<div className="!flex relative 2xl:flex-[0_0_120px] xl:flex-[0_0_100px] lg:flex-[0_0_80px] flex-[0_0_100%] !duration-500 bg-center mr-4.5 overflow-hidden 2xl:!w-30 xl:!w-25 lg:!w-20 !w-full gap-0 swiper-slide [.dz-flex-item.active]:bg-none 2xl:[.dz-flex-item.active]:!w-[calc(100%_-_(var(--service-count)_-_1)_*_140px)] 2xl:[.dz-flex-item.active]:flex-[0_0_calc(100%_-_(var(--service-count)_-_1)_*_140px)] xl:[.dz-flex-item.active]:!w-[calc(100%_-_(var(--service-count)_-_1)_*_120px)] xl:[.dz-flex-item.active]:flex-[0_0_calc(100%_-_(var(--service-count)_-_1)_*_120px)] lg:[.dz-flex-item.active]:!w-[calc(100%_-_(var(--service-count)_-_1)_*_100px)] lg:[.dz-flex-item.active]:flex-[0_0_calc(100%_-_(var(--service-count)_-_1)_*_100px)] dz-flex-item">
							<div className="2xl:pt-6.25 pt-3.75 2xl:pb-22.5 pb-20 text-center 2xl:min-h-125 min-h-110 flex flex-col justify-between items-center duration-200 opacity-100 visible w-full z-2 cursor-pointer rounded-xxl bg-blend-color-burn overflow-hidden relative 2xl:max-w-30 xl:max-w-25 max-w-20 bg-position-[center_top] [.swiper-slide.active_&]:invisible [.swiper-slide.active_&]:w-0 before:absolute 2xxl:before:text-7xl 2xl:before:text-5xxl before:text-4xxl before:leading-[1.2] before:font-bold before:text-white before:opacity-10 before:left-1/2 before:bottom-0 before:z-2 before:duration-500 before:-translate-x-1/2 before:![content:'0'_counter(counter-item)] before:[counter-increment:counter-item] after:absolute after:top-0 after:left-0 after:size-full after:bg-secondary after:opacity-70 after:rounded-xxl max-lg:after:hidden max-lg:before:hidden max-lg:hidden bg-[url(../../skincare/images/services/middle/img3.webp)]">
								<a href="service-detail.html" className="btn btn-square btn-white shadow-btn [writing-mode:tb-rl] !rounded-5xl relative z-1 2xl:!size-15 2xl:!min-w-15 !size-11.25 !min-w-11.25 text-2xl">
									<i className="feather icon-arrow-up-right"></i>
								</a>
								<h3 className="text-white font-normal 2xl:text-2xl text-xl [writing-mode:vertical-rl] rotate-180 relative z-1">Earlobe Repair</h3>
							</div>
							<div className="rounded-2xl opacity-100 duration-500 h-full overflow-hidden z-1 flex bg-white w-[inherit] flex-1 [.swiper-slide.active_&]:w-full before:text-[150px] before:leading-normal before:font-semibold before:text-secondary before:opacity-5 before:absolute before:right-3.75 before:top-3.75 before:z-1 before:duration-500 before:[content:'0'_counter(counter-item)]">
								<div className="flex 2xl:gap-7.5 md:gap-5 gap-2.5 2xl:p-7.5 p-5 2xl:min-w-187.5 lg:min-w-150 min-w-full max-md:flex-col">
									<div className="flex xl:w-75 xl:h-110 xl:min-w-75 md:w-62.5 md:min-w-62.5 md:h-100 sm:h-87.5 h-70 w-full min-w-full relative overflow-hidden">
										<img src="images/services/middle/img3.webp" alt="Earlobe repair service image" className="size-full object-cover rounded-xxl"/>
										<a href="appointment.html" className="btn btn-white !absolute 2xl:bottom-5 bottom-2.5 2xl:left-5 left-2.5 2xl:right-5 right-2.5 rounded-lg font-medium justify-center">
											<i className="feather icon-calendar mr-1.25 text-primary"></i>
											Book An appointment
										</a>
									</div>
									<div className="relative flex flex-col py-3.75 max-md:!pb-0">
										<div className="">
											<h3 className="xl:text-2xl text-xl">Earlobe Repair</h3>
											<p className="lg:mb-7.5 mb-3.75 lg:text-lg text-base">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
											<ul className="font-medium mb-7.5">
												<li className="w-full relative lg:p-1.25 p-1 lg:ps-7.5 ps-6.25 xl:text-base text-2sm before:absolute before:left-0 before:font-black before:content-['\e83f'] before:font-['feather'] before:size-4.5 before:leading-4.5 before:text-center before:text-xs before:text-white before:bg-primary before:rounded-full before:rounded-ee-none before:top-2">Excellent Laporatery</li>
												<li className="w-full relative lg:p-1.25 p-1 lg:ps-7.5 ps-6.25 xl:text-base text-2sm before:absolute before:left-0 before:font-black before:content-['\e83f'] before:font-['feather'] before:size-4.5 before:leading-4.5 before:text-center before:text-xs before:text-white before:bg-primary before:rounded-full before:rounded-ee-none before:top-2">World Class Infrastructure</li>
												<li className="w-full relative lg:p-1.25 p-1 lg:ps-7.5 ps-6.25 xl:text-base text-2sm before:absolute before:left-0 before:font-black before:content-['\e83f'] before:font-['feather'] before:size-4.5 before:leading-4.5 before:text-center before:text-xs before:text-white before:bg-primary before:rounded-full before:rounded-ee-none before:top-2">Health Checkups</li>
											</ul>
										</div>
										<div className="mt-auto">
											<div className="flex justify-between items-center">
												<div className="flex items-center gap-3">
													<div className="size-15 min-w-15">
														<img src="images/avatar/middle/avatar1.webp" alt="Service provider profile image" className="size-full object-cover rounded-full"/>
													</div>
													<div className="">
														<h6 className="text-lg mb-0">Nashid Martines</h6>
														<p className="text-sm font-medium text-primary mb-0">Cardiac Surgery</p>
													</div>
												</div>
												<a href="service-detail.html" className="btn btn-square btn-primary !rounded-full 2xl:!size-15 2xl:!min-w-15 !size-11.25 !min-w-11.25 text-2xl">
													<i className="feather icon-arrow-up-right"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>						
						<div className="!flex relative 2xl:flex-[0_0_120px] xl:flex-[0_0_100px] lg:flex-[0_0_80px] flex-[0_0_100%] !duration-500 bg-center mr-4.5 overflow-hidden 2xl:!w-30 xl:!w-25 lg:!w-20 !w-full gap-0 swiper-slide [.dz-flex-item.active]:bg-none 2xl:[.dz-flex-item.active]:!w-[calc(100%_-_(var(--service-count)_-_1)_*_140px)] 2xl:[.dz-flex-item.active]:flex-[0_0_calc(100%_-_(var(--service-count)_-_1)_*_140px)] xl:[.dz-flex-item.active]:!w-[calc(100%_-_(var(--service-count)_-_1)_*_120px)] xl:[.dz-flex-item.active]:flex-[0_0_calc(100%_-_(var(--service-count)_-_1)_*_120px)] lg:[.dz-flex-item.active]:!w-[calc(100%_-_(var(--service-count)_-_1)_*_100px)] lg:[.dz-flex-item.active]:flex-[0_0_calc(100%_-_(var(--service-count)_-_1)_*_100px)] dz-flex-item">
							<div className="2xl:pt-6.25 pt-3.75 2xl:pb-22.5 pb-20 text-center 2xl:min-h-125 min-h-110 flex flex-col justify-between items-center duration-200 opacity-100 visible w-full z-2 cursor-pointer rounded-xxl bg-blend-color-burn overflow-hidden relative 2xl:max-w-30 xl:max-w-25 max-w-20 bg-position-[center_top] [.swiper-slide.active_&]:invisible [.swiper-slide.active_&]:w-0 before:absolute 2xxl:before:text-7xl 2xl:before:text-5xxl before:text-4xxl before:leading-[1.2] before:font-bold before:text-white before:opacity-10 before:left-1/2 before:bottom-0 before:z-2 before:duration-500 before:-translate-x-1/2 before:![content:'0'_counter(counter-item)] before:[counter-increment:counter-item] after:absolute after:top-0 after:left-0 after:size-full after:bg-secondary after:opacity-70 after:rounded-xxl max-lg:after:hidden max-lg:before:hidden max-lg:hidden bg-[url(../../skincare/images/services/middle/img4.webp)]">
								<a href="service-detail.html" className="btn btn-square btn-white shadow-btn [writing-mode:tb-rl] !rounded-5xl relative z-1 2xl:!size-15 2xl:!min-w-15 !size-11.25 !min-w-11.25 text-2xl">
									<i className="feather icon-arrow-up-right"></i>
								</a>
								<h3 className="text-white font-normal 2xl:text-2xl text-xl [writing-mode:vertical-rl] rotate-180 relative z-1">Laser Resurfacing</h3>
							</div>
							<div className="rounded-2xl opacity-100 duration-500 h-full overflow-hidden z-1 flex bg-white w-[inherit] flex-1 [.swiper-slide.active_&]:w-full before:text-[150px] before:leading-normal before:font-semibold before:text-secondary before:opacity-5 before:absolute before:right-3.75 before:top-3.75 before:z-1 before:duration-500 before:[content:'0'_counter(counter-item)]">
								<div className="flex 2xl:gap-7.5 md:gap-5 gap-2.5 2xl:p-7.5 p-5 2xl:min-w-187.5 lg:min-w-150 min-w-full max-md:flex-col">
									<div className="flex xl:w-75 xl:h-110 xl:min-w-75 md:w-62.5 md:min-w-62.5 md:h-100 sm:h-87.5 h-70 w-full min-w-full relative overflow-hidden">
										<img src="images/services/middle/img4.webp" alt="Laser resurfacing service image" className="size-full object-cover rounded-xxl"/>
										<a href="appointment.html" className="btn btn-white !absolute 2xl:bottom-5 bottom-2.5 2xl:left-5 left-2.5 2xl:right-5 right-2.5 rounded-lg font-medium justify-center">
											<i className="feather icon-calendar mr-1.25 text-primary"></i>
											Book An appointment
										</a>
									</div>
									<div className="relative flex flex-col py-3.75 max-md:!pb-0">
										<div className="">
											<h3 className="xl:text-2xl text-xl">Laser Resurfacing</h3>
											<p className="lg:mb-7.5 mb-3.75 lg:text-lg text-base">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
											<ul className="font-medium mb-7.5">
												<li className="w-full relative lg:p-1.25 p-1 lg:ps-7.5 ps-6.25 xl:text-base text-2sm before:absolute before:left-0 before:font-black before:content-['\e83f'] before:font-['feather'] before:size-4.5 before:leading-4.5 before:text-center before:text-xs before:text-white before:bg-primary before:rounded-full before:rounded-ee-none before:top-2">Excellent Laporatery</li>
												<li className="w-full relative lg:p-1.25 p-1 lg:ps-7.5 ps-6.25 xl:text-base text-2sm before:absolute before:left-0 before:font-black before:content-['\e83f'] before:font-['feather'] before:size-4.5 before:leading-4.5 before:text-center before:text-xs before:text-white before:bg-primary before:rounded-full before:rounded-ee-none before:top-2">World Class Infrastructure</li>
												<li className="w-full relative lg:p-1.25 p-1 lg:ps-7.5 ps-6.25 xl:text-base text-2sm before:absolute before:left-0 before:font-black before:content-['\e83f'] before:font-['feather'] before:size-4.5 before:leading-4.5 before:text-center before:text-xs before:text-white before:bg-primary before:rounded-full before:rounded-ee-none before:top-2">Health Checkups</li>
											</ul>
										</div>
										<div className="mt-auto">
											<div className="flex justify-between items-center">
												<div className="flex items-center gap-3">
													<div className="size-15 min-w-15">
														<img src="images/avatar/middle/avatar1.webp" alt="Service provider profile image" className="size-full object-cover rounded-full"/>
													</div>
													<div className="">
														<h6 className="text-lg mb-0">Nashid Martines</h6>
														<p className="text-sm font-medium text-primary mb-0">Cardiac Surgery</p>
													</div>
												</div>
												<a href="service-detail.html" className="btn btn-square btn-primary !rounded-full 2xl:!size-15 2xl:!min-w-15 !size-11.25 !min-w-11.25 text-2xl">
													<i className="feather icon-arrow-up-right"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>						
						<div className="!flex relative 2xl:flex-[0_0_120px] xl:flex-[0_0_100px] lg:flex-[0_0_80px] flex-[0_0_100%] !duration-500 bg-center mr-4.5 overflow-hidden 2xl:!w-30 xl:!w-25 lg:!w-20 !w-full gap-0 swiper-slide [.dz-flex-item.active]:bg-none 2xl:[.dz-flex-item.active]:!w-[calc(100%_-_(var(--service-count)_-_1)_*_140px)] 2xl:[.dz-flex-item.active]:flex-[0_0_calc(100%_-_(var(--service-count)_-_1)_*_140px)] xl:[.dz-flex-item.active]:!w-[calc(100%_-_(var(--service-count)_-_1)_*_120px)] xl:[.dz-flex-item.active]:flex-[0_0_calc(100%_-_(var(--service-count)_-_1)_*_120px)] lg:[.dz-flex-item.active]:!w-[calc(100%_-_(var(--service-count)_-_1)_*_100px)] lg:[.dz-flex-item.active]:flex-[0_0_calc(100%_-_(var(--service-count)_-_1)_*_100px)] dz-flex-item">
							<div className="2xl:pt-6.25 pt-3.75 2xl:pb-22.5 pb-20 text-center 2xl:min-h-125 min-h-110 flex flex-col justify-between items-center duration-200 opacity-100 visible w-full z-2 cursor-pointer rounded-xxl bg-blend-color-burn overflow-hidden relative 2xl:max-w-30 xl:max-w-25 max-w-20 bg-position-[center_top] [.swiper-slide.active_&]:invisible [.swiper-slide.active_&]:w-0 before:absolute 2xxl:before:text-7xl 2xl:before:text-5xxl before:text-4xxl before:leading-[1.2] before:font-bold before:text-white before:opacity-10 before:left-1/2 before:bottom-0 before:z-2 before:duration-500 before:-translate-x-1/2 before:![content:'0'_counter(counter-item)] before:[counter-increment:counter-item] after:absolute after:top-0 after:left-0 after:size-full after:bg-secondary after:opacity-70 after:rounded-xxl max-lg:after:hidden max-lg:before:hidden max-lg:hidden bg-[url(../../skincare/images/services/middle/img5.webp)]">
								<a href="service-detail.html" className="btn btn-square btn-white shadow-btn [writing-mode:tb-rl] !rounded-5xl relative z-1 2xl:!size-15 2xl:!min-w-15 !size-11.25 !min-w-11.25 text-2xl">
									<i className="feather icon-arrow-up-right"></i>
								</a>
								<h3 className="text-white font-normal 2xl:text-2xl text-xl [writing-mode:vertical-rl] rotate-180 relative z-1">Anti Aging</h3>
							</div>
							<div className="rounded-2xl opacity-100 duration-500 h-full overflow-hidden z-1 flex bg-white w-[inherit] flex-1 [.swiper-slide.active_&]:w-full before:text-[150px] before:leading-normal before:font-semibold before:text-secondary before:opacity-5 before:absolute before:right-3.75 before:top-3.75 before:z-1 before:duration-500 before:[content:'0'_counter(counter-item)]">
								<div className="flex 2xl:gap-7.5 md:gap-5 gap-2.5 2xl:p-7.5 p-5 2xl:min-w-187.5 lg:min-w-150 min-w-full max-md:flex-col">
									<div className="flex xl:w-75 xl:h-110 xl:min-w-75 md:w-62.5 md:min-w-62.5 md:h-100 sm:h-87.5 h-70 w-full min-w-full relative overflow-hidden">
										<img src="images/services/middle/img5.webp" alt="Anti-aging service image" className="size-full object-cover rounded-xxl"/>
										<a href="appointment.html" className="btn btn-white !absolute 2xl:bottom-5 bottom-2.5 2xl:left-5 left-2.5 2xl:right-5 right-2.5 rounded-lg font-medium justify-center">
											<i className="feather icon-calendar mr-1.25 text-primary"></i>
											Book An appointment
										</a>
									</div>
									<div className="relative flex flex-col py-3.75 max-md:!pb-0">
										<div className="">
											<h3 className="xl:text-2xl text-xl">Anti Aging</h3>
											<p className="lg:mb-7.5 mb-3.75 lg:text-lg text-base">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
											<ul className="font-medium mb-7.5">
												<li className="w-full relative lg:p-1.25 p-1 lg:ps-7.5 ps-6.25 xl:text-base text-2sm before:absolute before:left-0 before:font-black before:content-['\e83f'] before:font-['feather'] before:size-4.5 before:leading-4.5 before:text-center before:text-xs before:text-white before:bg-primary before:rounded-full before:rounded-ee-none before:top-2">Excellent Laporatery</li>
												<li className="w-full relative lg:p-1.25 p-1 lg:ps-7.5 ps-6.25 xl:text-base text-2sm before:absolute before:left-0 before:font-black before:content-['\e83f'] before:font-['feather'] before:size-4.5 before:leading-4.5 before:text-center before:text-xs before:text-white before:bg-primary before:rounded-full before:rounded-ee-none before:top-2">World Class Infrastructure</li>
												<li className="w-full relative lg:p-1.25 p-1 lg:ps-7.5 ps-6.25 xl:text-base text-2sm before:absolute before:left-0 before:font-black before:content-['\e83f'] before:font-['feather'] before:size-4.5 before:leading-4.5 before:text-center before:text-xs before:text-white before:bg-primary before:rounded-full before:rounded-ee-none before:top-2">Health Checkups</li>
											</ul>
										</div>
										<div className="mt-auto">
											<div className="flex justify-between items-center">
												<div className="flex items-center gap-3">
													<div className="size-15 min-w-15">
														<img src="images/avatar/middle/avatar1.webp" alt="Service provider profile image" className="size-full object-cover rounded-full"/>
													</div>
													<div className="">
														<h6 className="text-lg mb-0">Nashid Martines</h6>
														<p className="text-sm font-medium text-primary mb-0">Cardiac Surgery</p>
													</div>
												</div>
												<a href="service-detail.html" className="btn btn-square btn-primary !rounded-full 2xl:!size-15 2xl:!min-w-15 !size-11.25 !min-w-11.25 text-2xl">
													<i className="feather icon-arrow-up-right"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>						 */}
						
					{/* </div> */}
				</div>
				<div className="inline-block mb-2.5 mt-2 relative w-full text-center after:border-b after:border-black/10 after:w-full after:absolute after:left-0 after:top-1/2 after:right-0 after:-translate-y-1/2">
					<a href="services.html" className="btn font-medium text-base border !border-black/10 !rounded-5xl py-3 px-7.5 text-secondary bg-light z-1 relative hover:bg-primary hover:text-white">View All Services</a>
				</div>
			</div>
		</section>
			</main>
		</div>
	</div>
	
    </Layout>
);

  
};
export default HomePage
