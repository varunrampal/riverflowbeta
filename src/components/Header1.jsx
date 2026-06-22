import AboutSlider from "./AboutSlider";
import logo from "../assets/images/logo.png";

export default function Header1() {

	return (
		<>
			<header className="site-header sticky-header-wrapper !absolute top-0 left-0 w-full z-999 border-b border-black/10">
				<div className="main-bar relative xl:pl-20 lg:text-heading text-secondary w-full">
					<div className="container-fluid flex pl-[calc(80px_/_2)]">

						{/* <div className="border-r border-black/10 h-full w-20 min-w-20 flex justify-center items-center absolute left-0 top-0 max-xl:hidden">
				<button type="button" className="py-2.4 px-4 rounded-lg toggle-nav-btn" data-drawer="#offcanvas-right" data-drawer-placement="right">
					<span className="w-5 h-0.5 bg-secondary block duration-500"></span>
					<span className="w-4 my-1.25 h-0.5 bg-secondary block duration-500"></span>
					<span className="w-5 h-0.5 bg-secondary block duration-500"></span>
				</button>
			</div> */}
						<AboutSlider />
						{/* <!-- Website Logo --> */}
						<div className="relative flex flex-wrap items-start xl:w-41.25 w-33.75 sm:h-20 h-auto xl:me-7.5 me-2 logo-dark">
							<a href="index.html" className="block">
								<img
									src={logo}
									alt="Riverflow Laser & Skin Clinic logo"
									width="90"
									height="90"
									className="float-left rounded-full w-24 h-24 object-cover mr-4 mb-2"
								/>
							</a>

						</div>

						<button className="xmenu-toggler lg:hidden float-right sm:mt-4.5 sm:mb-4 sm:ml-7 my-2.5 ml-5 size-11 bg-secondary rounded-md relative cursor-pointer max-lg:order-1 max-md:ms-auto" type="button">
							<span className="block absolute left-2.5 h-0.5 rounded-px bg-white duration-300 top-3.25 w-5.5"></span>
							<span className="block absolute left-2.5 h-0.5 rounded-px bg-white duration-0 top-5.5 w-6.25"></span>
							<span className="block absolute left-2.5 h-0.5 rounded-px bg-white duration-300 top-8 w-4"></span>
						</button>
						<div className="lg:hidden fixed top-0 left-0 bg-black size-full duration-300 z-999 opacity-0 visible pointer-events-none menu-close fade-overlay"></div>
						<div className="flex lg:basis-auto lg:grow max-lg:flex-col justify-start font-title max-lg:fixed max-lg:h-screen max-lg:px-5 max-lg:top-0 max-lg:-left-75 max-lg:z-9999 max-lg:bg-white max-lg:w-72 max-lg:overflow-auto max-lg:duration-700 header-nav custom-scroll">
							<div className="flex  items-center relative z-9 py-6.25 lg:hidden w-33.75 h-15.25">
								<a href="index.html" className="table-cell align-middle">
									<img src={logo} alt="Riverflow Laser & Skin Clinic logo" className="object-contain duration-500" />

								</a>

							</div>
							<ul className="lg:flex flex-wrap navbar-nav">
								<li className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 group">
									<a className="lg:py-7 py-2 xl:px-4 lg:px-2 relative lg:inline-block block xl:text-lg text-2sm font-medium hover:text-primary after:ml-1 after:-mt-1 after:inline-block after:size-3 after:bg-starsvg max-lg:after:hidden" href="index.html">
										<span className="inline-block leading-7.5">Home</span>
									</a>
								</li>
								<li className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
									<a className="lg:py-7 py-2 xl:px-4 lg:px-2 relative lg:inline-block block xl:text-lg text-2sm font-medium hover:text-primary after:ml-1 after:-mt-1 after:inline-block after:size-3 after:bg-starsvg max-lg:after:hidden" href="javascript:void(0);">
										<span className="inline-block leading-7.5">Services</span>
										<i className="fas fa-chevron-right lg:!hidden !block size-7 !leading-7 text-center text-xs bg-secondary rounded text-white float-end"></i>
									</a>
									{/* <ul className="lg:absolute bg-white block lg:left-0 lg:py-5 max-lg:py-2.5 max-lg:border-t max-lg:border-gray-200 w-full lg:w-55 lg:opacity-0 lg:invisible lg:translate-y-10 z-10 mt-0 text-left duration-500 lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0 max-lg:hidden sub-menu">
										<li className="relative">
											<a className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary" href="about-us.html"><span>About Us</span></a>
										</li>
										<li className="relative">
											<a className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary" href="about-us-2.html"><span>About Us 2</span></a>
										</li>
										<li className="relative">
											<a className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary" href="appointment.html"><span>Appointment</span></a>
										</li>
										<li className="relative">
											<a className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary" href="pricing-table.html"><span>Pricing Table</span></a>
										</li>
										<li className="relative">
											<a className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary" href="testimonial.html"><span>Testimonial</span></a>
										</li>
										<li className="group/second relative sub-menu-down"><a className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary after:content-['\f054'] after:inline-block after:font-black after:font-['Font_Awesome_5_Free'] after:text-tiny after:float-right after:duration-500 max-lg:after:size-7 max-lg:after:leading-7 max-lg:after:text-center max-lg:after:text-xs max-lg:after:rounded max-lg:after:bg-secondary max-lg:after:text-white" href="javascript:void(0);"><span>Team</span></a>
											<ul className="bg-white lg:py-5 lg:w-55 2xl:left-55 lg:-left-55 lg:top-0 lg:absolute lg:opacity-0 lg:invisible lg:translate-y-10 z-10 mt-0 text-left duration-500 lg:group-hover/second:opacity-100 lg:group-hover/second:visible lg:group-hover/second:translate-y-0 max-lg:hidden max-lg:pl-5 sub-menu">
												<li className="relative">
													<a className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary" href="team.html"><span>Team</span></a>
												</li>
												<li className="relative">
													<a className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary" href="team-detail.html"><span>Team Detail</span></a>
												</li>
											</ul>
										</li>
										<li className="group/second relative sub-menu-down"><a className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary after:content-['\f054'] after:inline-block after:font-black after:font-['Font_Awesome_5_Free'] after:text-tiny after:float-right after:duration-500 max-lg:after:size-7 max-lg:after:leading-7 max-lg:after:text-center max-lg:after:text-xs max-lg:after:rounded max-lg:after:bg-secondary max-lg:after:text-white" href="javascript:void(0);"><span>Services</span></a>
											<ul className="bg-white lg:py-5 lg:w-55 2xl:left-55 lg:-left-55 lg:top-0 lg:absolute lg:opacity-0 lg:invisible lg:translate-y-10 z-10 mt-0 text-left duration-500 lg:group-hover/second:opacity-100 lg:group-hover/second:visible lg:group-hover/second:translate-y-0 max-lg:hidden max-lg:pl-5 sub-menu">
												<li className="relative">
													<a className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary" href="services.html"><span>Services</span></a>
												</li>
												<li className="relative">
													<a className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary" href="service-detail.html"><span>Services Detail</span></a>
												</li>
												<li className="relative">
													<a className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary" href="service-detail-2.html"><span>Services Detail 2</span></a>
												</li>
											</ul>
										</li>
										<li className="relative">
											<a className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary" href="faqs.html"><span>Faqs</span></a>
										</li>
										<li className="relative">
											<a className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary" href="error-404.html"><span>Error 404</span></a>
										</li>
										<li className="relative">
											<a className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary" href="coming-soon.html"><span>Coming Soon</span></a>
										</li>
										<li className="relative">
											<a className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary" href="under-construction.html"><span>Under Construction</span></a>
										</li>
									</ul> */}
								</li>
								<li className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
									<a className="lg:py-7 py-2 xl:px-4 lg:px-2 relative lg:inline-block block xl:text-lg text-2sm font-medium hover:text-primary after:ml-1 after:-mt-1 after:inline-block after:size-3 after:bg-starsvg max-lg:after:hidden" href="javascript:void(0);">
										<span className="inline-block leading-7.5">Our Team</span>
										<i className="fas fa-chevron-right lg:!hidden !block size-7 !leading-7 text-center text-xs bg-secondary rounded text-white float-end"></i>
									</a>
									{/* <ul className="lg:absolute bg-white block lg:left-0 lg:py-5 max-lg:py-2.5 max-lg:border-t max-lg:border-gray-200 w-full lg:w-55 lg:opacity-0 lg:invisible lg:translate-y-10 z-10 mt-0 text-left duration-500 lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0 max-lg:hidden mega-menu">
										<li className="relative">
											<a className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary" href="shop.html"><span>Shop</span></a>
										</li>
										<li className="relative">
											<a className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary" href="shop-details.html"><span>Shop Details</span></a>
										</li>
									</ul> */}
								</li>
								<li className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
									<a className="lg:py-7 py-2 xl:px-4 lg:px-2 relative lg:inline-block block xl:text-lg text-2sm font-medium hover:text-primary after:ml-1 after:-mt-1 after:inline-block after:size-3 after:bg-starsvg max-lg:after:hidden" href="javascript:void(0);">
										<span className="inline-block leading-7.5">Testimonials</span>
										<i className="fas fa-chevron-right lg:!hidden !block size-7 !leading-7 text-center text-xs bg-secondary rounded text-white float-end"></i>
									</a>
									{/* <ul className="lg:absolute bg-white block lg:left-0 lg:py-5 max-lg:py-2.5 max-lg:border-t max-lg:border-gray-200 w-full lg:w-55 lg:opacity-0 lg:invisible lg:translate-y-10 z-10 mt-0 text-left duration-500 lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0 max-lg:hidden sub-menu">
										<li className="relative">
											<a className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary" href="blog-grid.html"><span>Blog Grid</span></a>
										</li>
										<li className="relative">
											<a className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary" href="blog-list-sidebar.html"><span>Blog List Sidebar</span></a>
										</li>
										<li className="relative">
											<a className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary" href="blog-details.html"><span>Blog Details</span></a>
										</li>
										<li className="group/second relative sub-menu-down"><a className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary after:content-['\f054'] after:inline-block after:font-black after:font-['Font_Awesome_5_Free'] after:text-tiny after:float-right after:duration-500 max-lg:after:size-7 max-lg:after:leading-7 max-lg:after:text-center max-lg:after:text-xs max-lg:after:rounded max-lg:after:bg-secondary max-lg:after:text-white" href="javascript:void(0);"><span>Post Layout </span></a>
											<ul className="bg-white lg:py-5 lg:w-55 2xl:left-55 lg:-left-55 lg:top-0 lg:absolute lg:opacity-0 lg:invisible lg:translate-y-10 z-10 mt-0 text-left duration-500 lg:group-hover/second:opacity-100 lg:group-hover/second:visible lg:group-hover/second:translate-y-0 max-lg:hidden max-lg:pl-5 sub-menu">
												<li className="relative"><a className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary" href="standard-post.html"><span>Standard Post</span> </a></li>
												<li className="relative"><a className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary" href="gutenberg-post.html"><span>Gutenberg Post</span> </a></li>
												<li className="relative"><a className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary" href="corner-post.html"><span>Corner Post</span> </a></li>
												<li className="relative"><a className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary" href="header-image.html"><span>Header Image</span> </a></li>
												<li className="relative"><a className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary" href="post-gallery.html"><span> Post Gallery </span> </a></li>
												<li className="relative"><a className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary" href="link-post.html"><span>Link Post</span> </a></li>
												<li className="relative"><a className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary" href="video-post.html"><span>Video Post</span> </a></li>
												<li className="relative"><a className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary" href="audio-post.html"><span>Audio Post</span> </a></li>
												<li className="relative"><a className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary" href="post-slider.html"><span>Post Slider </span> </a></li>
											</ul>
										</li>
									</ul> */}
								</li>
									<li className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
									<a className="lg:py-7 py-2 xl:px-4 lg:px-2 relative lg:inline-block block xl:text-lg text-2sm font-medium hover:text-primary after:ml-1 after:-mt-1 after:inline-block after:size-3 after:bg-starsvg max-lg:after:hidden" href="javascript:void(0);">
										<span className="inline-block leading-7.5">FAQS</span>
										<i className="fas fa-chevron-right lg:!hidden !block size-7 !leading-7 text-center text-xs bg-secondary rounded text-white float-end"></i>
									</a>
									{/* <ul className="lg:absolute bg-white block lg:left-0 lg:py-5 max-lg:py-2.5 max-lg:border-t max-lg:border-gray-200 w-full lg:w-55 lg:opacity-0 lg:invisible lg:translate-y-10 z-10 mt-0 text-left duration-500 lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0 max-lg:hidden mega-menu">
										<li className="relative">
											<a className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary" href="contact-us.html"><span>Contact Us</span></a>
										</li>
										<li className="relative">
											<a className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary" href="contact-us-2.html"><span>Contact Us 2</span></a>
										</li>
									</ul> */}
								</li>
								<li className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
									<a className="lg:py-7 py-2 xl:px-4 lg:px-2 relative lg:inline-block block xl:text-lg text-2sm font-medium hover:text-primary after:ml-1 after:-mt-1 after:inline-block after:size-3 after:bg-starsvg max-lg:after:hidden" href="javascript:void(0);">
										<span className="inline-block leading-7.5">Contact Us</span>
										<i className="fas fa-chevron-right lg:!hidden !block size-7 !leading-7 text-center text-xs bg-secondary rounded text-white float-end"></i>
									</a>
									{/* <ul className="lg:absolute bg-white block lg:left-0 lg:py-5 max-lg:py-2.5 max-lg:border-t max-lg:border-gray-200 w-full lg:w-55 lg:opacity-0 lg:invisible lg:translate-y-10 z-10 mt-0 text-left duration-500 lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0 max-lg:hidden mega-menu">
										<li className="relative">
											<a className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary" href="contact-us.html"><span>Contact Us</span></a>
										</li>
										<li className="relative">
											<a className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary" href="contact-us-2.html"><span>Contact Us 2</span></a>
										</li>
									</ul> */}
								</li>
							</ul>
							{/* <div className="lg:hidden block max-lg:p-5 text-center mt-auto">
								<ul>
									<li className="inline-block mx-0.5">
										<a className="size-10 !leading-10 border border-black/10 text-center text-primary fab fa-facebook-f" target="_blank" href="https://www.facebook.com/dexignzone"></a>
									</li>
									<li className="inline-block mx-0.5">
										<a className="size-10 !leading-10 border border-black/10 text-center text-primary fab fa-twitter" target="_blank" href="https://twitter.com/dexignzones"></a>
									</li>
									<li className="inline-block mx-0.5">
										<a className="size-10 !leading-10 border border-black/10 text-center text-primary fab fa-linkedin-in" target="_blank" href="https://www.linkedin.com/showcase/3686700/admin/"></a>
									</li>
									<li className="inline-block mx-0.5">
										<a className="size-10 !leading-10 border border-black/10 text-center text-primary fab fa-instagram" target="_blank" href="https://www.instagram.com/dexignzone/"></a>
									</li>
								</ul>
							</div> */}
						</div>
						<div className="extra-nav flex items-center h-20 3xl:pl-7.5 ml-auto max-sm:w-full max-sm:bg-white max-sm:fixed max-sm:-bottom-20 max-sm:left-0 max-sm:px-5 max-sm:shadow-3 max-sm:h-15 max-sm:duration-500 [.extra-nav.active]:bottom-0">
							<div className="flex items-center w-full">
								<ul className="lg:ml-5 sm:ml-3.75 flex items-center gap-11.25 w-full justify-between">
									{/* <li className="inline-block">
										<a href="javascript:void(0);" className="min-w-10 flex align-center justify-center align-middle relative" data-drawer="#offcanvas-right-2" data-drawer-placement="right">
											<i className="feather icon-shopping-cart text-[32px]"></i>
											<span className="absolute -top-1 right-0.5 text-xs flex items-center justify-center min-h-4.5 min-w-4.5 font-semibold bg-white text-secondary rounded-full">5</span>
										</a>
									</li> */}
									<li className="2xxl:inline-flex items-center gap-3.75 hidden">
										<div className="widget-media">
											<i className="feather icon-phone-call dz-ring-effect text-3xxl inline-flex animate-dzRing"></i>
										</div>
										<div className="widget-content">
											<h6 className="text-primary text-sm font-normal mb-0">Contact us?</h6>
											<a href="tel:+11234567890" className="sm:text-lg text-base font-semibold text-secondary">604-621-8311</a>
										</div>
									</li>
									<li className="inline-block max-xl:hidden max-sm:!block">
										<a href="https://app.squareup.com/appointments/book/9qze62967coq3v/L0BCN9T6Y4JAQ/start" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-hover1 max-md:!text-sm max-md:!py-2.5 max-md:!px-4.5 max-md:!rounded-2lg">
											<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="btn-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M436 160H12c-6.627 0-12-5.373-12-12v-36c0-26.51 21.49-48 48-48h48V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h128V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h48c26.51 0 48 21.49 48 48v36c0 6.627-5.373 12-12 12zM12 192h424c6.627 0 12 5.373 12 12v260c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V204c0-6.627 5.373-12 12-12zm333.296 95.947l-28.169-28.398c-4.667-4.705-12.265-4.736-16.97-.068L194.12 364.665l-45.98-46.352c-4.667-4.705-12.266-4.736-16.971-.068l-28.397 28.17c-4.705 4.667-4.736 12.265-.068 16.97l82.601 83.269c4.667 4.705 12.265 4.736 16.97.068l142.953-141.805c4.705-4.667 4.736-12.265.068-16.97z"></path></svg> 	Book Now
										</a>


									</li>
								</ul>
							</div>
						</div>
						<div className="fixed -top-full left-0 size-full bg-black/80 z-999 flex items-center justify-center p-8 duration-500 xmenu-search" id="searchOverlay4">
							<form className="w-full" action="#">
								<div className="relative max-w-3xl w-3xl mx-auto">
									<input name="search" value="" type="text" className="h-14 py-4 px-5 border border-white/20 text-white w-full outline-none duration-300 focus:border-primary" placeholder="Type to search" />
									<button type="button" className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-10 flex items-center"><i className="fa fa-search text-base text-white"></i></button>
								</div>
								<button type="button" className="absolute right-8 top-8 text-white text-xl opacity-80 size-8 cursor-pointer search-remove"><i className="fa fa-close"></i></button>
							</form>
						</div>
					</div>
				</div>
			</header>
			{/* <div id="offcanvas-right" className="fixed top-0 right-0 z-9999999 h-screen overflow-y-auto transition-transform translate-x-full bg-white w-88 custom-scroll">
	<div className="flex items-center justify-between p-4">
		<button type="button" className="text-xl" data-drawer-hide="offcanvas-right">
			<i className="fa-solid fa-xmark"></i>
		</button>
	</div>
	<div className="p-7.5 grow overflow-y-auto">
		<div className="mb-8.75">
			<div className="w-40 mb-5">
				<a href="index.html"><img src="../skincare/images/logo.svg" alt="Riverflow Laser & Skin Clinic logo"/></a>
			</div>
			<p>ClinicMaster is a modern and responsive Tailwind HTML template designed for health and medical websites. Ideal for clinics, hospitals, and healthcare professionals seeking a professional online presence with an elegant and user-friendly design.</p>
		</div>

		<div className="mb-8.75">
			<div className="mb-3.75">
				<h4 className="text-xl mb-0">Contact Us</h4>
			</div>
			<ul className="list-check">
				<li className="relative p-1.25 ps-7.5 text-base before:absolute before:left-0 before:font-black before:content-['\f109'] before:font-['flaticon'] before:text-primary before:top-2">785 15h Street, Office 478 Berlin, De 81566</li>
				<li className="relative p-1.25 ps-7.5 text-base before:absolute before:left-0 before:font-black before:content-['\f109'] before:font-['flaticon'] before:text-primary before:top-2"><a href="mailto:email@domain.com" className="text-body">email@domain.com</a></li>
				<li className="relative p-1.25 ps-7.5 text-base before:absolute before:left-0 before:font-black before:content-['\f109'] before:font-['flaticon'] before:text-primary before:top-2"><a href="tel:+11234567890" className="text-body">+1 123 456 7890</a></li>
			</ul>
		</div>

		<div className="mb-8.75">
			<div className="mb-3.75">
				<h4 className="text-xl mb-0">Newsletter</h4>
			</div>
			<form className="dzSubscribe style-2" action="../assets/script/mailchimp.php" method="post">
				<div className="dzSubscribeMsg"></div>
				<div className="form-group">
					<div className="relative flex flex-wrap items-stretch w-full">
						<input name="dzEmail" required="required" type="email" className="relative flex-1 w-[1%] h-15 text-bodycolor border-b-2 border-[#DAE2F2] text-base pr-15 py-3.75 z-0 placeholder:text-bodycolor" placeholder="Your Email Address"/>
						<div className="absolute right-1.25 top-1/2 -translate-y-1/2 z-1">
							<button name="submit" value="Submit" type="submit" className="text-primary p-2 cursor-pointer">
								<i className="fa-solid fa-paper-plane"></i>
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
		
		<div className="mb-8.75">
			<div className="mb-3.75">
				<h4 className="text-xl mb-0">Follow Us</h4>
			</div>
			<div className="flex">
				<ul className="flex">
					<li className="inline-block mr-1.25">
						<a href="https://www.linkedin.com" target="_blank" className="size-11 leading-[44px] text-center text-sm block rounded-full bg-light text-primary hover:text-white hover:bg-primary">
							<i className="fa-brands fa-linkedin"></i>
						</a>
					</li>
					<li className="inline-block mr-1.25">
						<a href="https://www.instagram.com" target="_blank" className="size-11 leading-[44px] text-center text-sm block rounded-full bg-light text-primary hover:text-white hover:bg-primary">
							<i className="fa-brands fa-instagram"></i>
						</a>
					</li>
					<li className="inline-block mr-1.25">
						<a href="https://www.facebook.com" target="_blank" className="size-11 leading-[44px] text-center text-sm block rounded-full bg-light text-primary hover:text-white hover:bg-primary">
							<i className="fa-brands fa-facebook-f"></i>
						</a>
					</li>
					<li className="inline-block mr-1.25">
						<a href="https://twitter.com" target="_blank" className="size-11 leading-[44px] text-center text-sm block rounded-full bg-light text-primary hover:text-white hover:bg-primary">
							<i className="fa-brands fa-x-twitter"></i>
						</a>
					</li>
					<li className="inline-block mr-1.25">
						<a href="https://www.youtube.com" target="_blank" className="size-11 leading-[44px] text-center text-sm block rounded-full bg-light text-primary hover:text-white hover:bg-primary">
							<i className="fa-brands fa-youtube"></i>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
<div id="offcanvas-right-2" className="fixed top-0 right-0 z-9999999 h-screen overflow-y-auto transition-transform translate-x-full bg-bodybg sm:w-100 w-90 custom-scroll">
	<div className="flex items-center justify-between px-4 pt-2">
		<button type="button" className="text-xl" data-drawer-hide="offcanvas-right-2">
			<i className="fa-solid fa-xmark"></i>
		</button>
	</div>
	<div className="p-7.5 grow overflow-y-auto">
		<div className="sidebar-cart-wrapper">
			<h2 className="flex items-center gap-2.5 text-base border-b border-black/10 pb-2.5 mb-3.75">
				Shopping Cart
				<span className="py-1 font-semibold bg-primary text-white rounded-full text-[11px] size-5.75 min-w-5.75 min-h-5.75 uppercase text-center">3</span>
			</h2>
			<div className="flex flex-col min-h-[calc(100vh-47.5px)]">
				<ul className="sidebar-cart-list">
					<li className="py-5 border-b border-black/10">
						<div className="flex items-center justify-center">
							<div className="relative overflow-hidden size-20 min-w-20 rounded-2xl mr-4">
								<img src="images/shop/img1.webp" alt="Herbal skincare product in shopping cart"/>
							</div>
							<div className="mr-2.5 flex-1">
								<h3 className="font-semibold text-sm"><a href="shop-details.html">Herbal beauty</a></h3>
								<div className="flex items-center input-group">
									<div className="w-26.25 min-w-26.25 h-10.5 p-0.75 bg-white rounded-2lg flex items-stretch mr-2.5">
										<span className="flex gap-1 rounded-lg text-secondary bg-white p-1.5">
											<button type="button" value="-" data-field="quantity" className="button-minus cursor-pointer size-7.5 leading-6.75 text-center rounded-lg text-xs bg-light text-primary"><i className="fa-solid fa-minus"></i></button>
											<input type="number" step="1" value="1" name="quantity" className="touchspin h-7.5 w-5.5 leading-6.75 text-center outline-none"/>
											<button type="button" value="+" data-field="quantity" className="button-plus cursor-pointer size-7.5 leading-6.75 text-center rounded-lg text-xs bg-light text-primary"><i className="fa-solid fa-plus"></i></button>
										</span>
									</div>
									<h6 className="font-semibold text-sm mb-0">$50.00</h6>
								</div>
							</div>
							<a href="javascript:void(0);" className="size-7 flex items-center justify-center">
								<i className="feather icon-x text-primary"></i>
							</a>
						</div>
					</li>
					<li className="py-5 border-b border-black/10">
						<div className="flex items-center justify-center">
							<div className="relative overflow-hidden size-20 min-w-20 rounded-2xl mr-4">
								<img src="images/shop/img2.webp" alt="Green beauty skincare product in shopping cart"/>
							</div>
							<div className="mr-2.5 flex-1">
								<h3 className="font-semibold text-sm"><a href="shop-details.html">Green beauty</a></h3>
								<div className="flex items-center input-group">
									<div className="w-26.25 min-w-26.25 h-10.5 p-0.75 bg-white rounded-2lg flex items-stretch mr-2.5">
										<span className="flex gap-1 rounded-lg text-secondary bg-white p-1.5">
											<button type="button" value="-" data-field="quantity" className="button-minus cursor-pointer size-7.5 leading-6.75 text-center rounded-lg text-xs bg-light text-primary"><i className="fa-solid fa-minus"></i></button>
											<input type="number" step="1" value="1" name="quantity" className="touchspin h-7.5 w-5.5 leading-6.75 text-center outline-none"/>
											<button type="button" value="+" data-field="quantity" className="button-plus cursor-pointer size-7.5 leading-6.75 text-center rounded-lg text-xs bg-light text-primary"><i className="fa-solid fa-plus"></i></button>
										</span>
									</div>
									<h6 className="font-semibold text-sm mb-0">$50.00</h6>
								</div>
							</div>
							<a href="javascript:void(0);" className="size-7 flex items-center justify-center">
								<i className="feather icon-x text-primary"></i>
							</a>
						</div>
					</li>
					<li className="py-5 border-b border-black/10">
						<div className="flex items-center justify-center">
							<div className="relative overflow-hidden size-20 min-w-20 rounded-2xl mr-4">
								<img src="images/shop/img4.webp" alt="Sun care skincare product in shopping cart"/>
							</div>
							<div className="mr-2.5 flex-1">
								<h3 className="font-semibold text-sm"><a href="shop-details.html">Sun beauty</a></h3>
								<div className="flex items-center input-group">
									<div className="w-26.25 min-w-26.25 h-10.5 p-0.75 bg-white rounded-2lg flex items-stretch mr-2.5">
										<span className="flex gap-1 rounded-lg text-secondary bg-white p-1.5">
											<button type="button" value="-" data-field="quantity" className="button-minus cursor-pointer size-7.5 leading-6.75 text-center rounded-lg text-xs bg-light text-primary"><i className="fa-solid fa-minus"></i></button>
											<input type="number" step="1" value="1" name="quantity" className="touchspin h-7.5 w-5.5 leading-6.75 text-center outline-none"/>
											<button type="button" value="+" data-field="quantity" className="button-plus cursor-pointer size-7.5 leading-6.75 text-center rounded-lg text-xs bg-light text-primary"><i className="fa-solid fa-plus"></i></button>
										</span>
									</div>
									<h6 className="font-semibold text-sm mb-0">$50.00</h6>
								</div>
							</div>
							<a href="javascript:void(0);" className="size-7 flex items-center justify-center">
								<i className="feather icon-x text-primary"></i>
							</a>
						</div>
					</li>
				</ul>
				<div className="flex items-center justify-between py-4.5 mb-2.5">
					<h5 className="font-semibold text-lg mb-0">Subtotal:</h5>
					<h5 className="font-semibold text-lg mb-0">300.00$</h5>
				</div>
				<div className="mt-auto text-center">
					<a href="shop-checkout.html" className="btn btn-primary btn-hover1 mx-0.25">Checkout</a>
					<a href="shop-cart.html" className="btn btn-secondary btn-hover1 mx-0.25">View Cart</a>
				</div>
			</div>
		</div>
	</div>
</div> */}

		</>
	);
};
