// header sections starts here

const ElHeader = document.getElementById("header");
ElHeader.innerHTML = `
<div class="header-body border-0">
					<div class="header-container container">
						<div class="header-row">
							<div class="header-column">
								<div class="header-row">
									<div class="header-logo ">
										<img class="logo" alt="SECON Logo" width="80" height="68" src="img/SECONlogo.png">
										<a href="index.html">
											<img class="logo-sticky" alt="SECON Logo" width="80" height="68" src="img/SECONlogo.png">
										</a>
									</div>
								</div>
							</div>
							<div class="header-column justify-content-end">
								<div class="header-row">
									<div class="header-nav header-nav-links order-3 order-lg-1">
										<div class="header-nav-main header-nav-main-square header-nav-main-text-capitalize header-nav-main-effect-1 header-nav-main-sub-effect-1">
											<nav class="collapse px-3-5">
												<ul class="nav nav-pills" id="mainNav">
													<li>
														<a id="headerLinkHome" class="nav-link " href="index.html">
															Home
														</a>
													</li>
													<li>
														<a  id="headerLinkAboutUs"  class="nav-link" href="about-us.html">
															About Us
														</a>
													</li>
													<li class="dropdown">
														<a id="headerLinkServices"  class="nav-link dropdown-toggle" href="services.html">
															Services
														</a>
														<ul class="dropdown-menu">
															<li><a class="dropdown-item" href="service-detail.html">Marbels</a></li>
															<li><a class="dropdown-item" href="service-detail.html">General Construction</a></li>
															<li><a class="dropdown-item" href="service-detail.html">Plumbing</a></li>
															<li><a class="dropdown-item" href="service-detail.html">Painting</a></li>
														</ul>
													</li>
													<li>
														<a id="headerLinkProjects"  class="nav-link" href="projects.html">
															Projects
														</a>
													</li>
													<li>
														<a id="headerLinkGallery"  class="nav-link" href="gallery.html">
															Gallery 
														</a>
													</li>
													<li>
														<a id="headerLinkContactUs"  class="nav-link" href="contact.html">
															Contact us
														</a>
													</li>
												</ul>
											</nav>
										</div>
										<button class="btn header-btn-collapse-nav" data-bs-toggle="collapse" data-bs-target=".header-nav-main nav">
											<i class="fas fa-bars"></i>
										</button>
									</div>
									<div class="header-nav-features header-nav-features-no-border header-nav-features-lg-show-border d-none d-sm-flex ms-3 order-1 order-lg-2">
										<ul class="header-social-icons social-icons d-none d-sm-block social-icons-clean social-icons-medium ms-0">
											<li class="social-icons-facebook"><a href="http://www.facebook.com/" target="_blank" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
											<li class="social-icons-twitter"><a href="http://www.twitter.com/" target="_blank" title="Twitter"><i class="fab fa-twitter"></i></a></li>
											<li class="social-icons-linkedin"><a href="http://www.linkedin.com/" target="_blank" title="Linkedin"><i class="fab fa-linkedin-in"></i></a></li>
										</ul>
									</div>
								
								</div>
							</div>
						</div>
					</div>
				</div>

`;
// Header section ends Here

// Footer section starts here

const Elfooter = document.getElementById("footer");
Elfooter.innerHTML = `
<div class="container pt-5">
					<div class="row pt-4 mb-5 gy-4">
						<div class="col-lg-2 align-self-center">
							<a href="index.html">
								<img alt="Porto" class="img-fluid logo" width="123" height="48" src="img/SECONlogo.png">
							</a>
						</div>
						<div class="col-lg-4 offset-lg-1">
							<h4 class="text-color-dark font-weight-bold mb-4-5">Quick Links</h4>
							<ul class="list list-unstyled columns-lg-2">
								<li>
									<a href="index.html" class="text-color-hover-primary">
										Home
									</a>
								</li>
								<li>
									<a href="about-us.html" class="text-color-hover-primary">
										Company
									</a>
								</li>
								<li>
									<a href="services.html" class="text-color-hover-primary">
										Services
									</a>
								</li>
								<li>
									<a href="projects.html" class="text-color-hover-primary">
										Projects
									</a>
								</li>
								<li>
									<a href="gallery.html" class="text-color-hover-primary">
										Gallery
									</a>
								</li>
								<li>
									<a href="contact.html" class="text-color-hover-primary">
										Contact Us
									</a>
								</li>
							</ul>
						</div>
						<div class="col-lg-5">
							<h4 class="text-color-dark font-weight-bold mb-4-5">Newsletter</h4>
							<div class="newsletter">
								<div class="alert alert-success d-none" id="newsletterSuccess">
									<strong>Success!</strong> You've been added to our email list.
								</div>
								<div class="alert alert-danger d-none" id="newsletterError"></div>
								<form id="newsletterForm" action="php/newsletter-subscribe.php" method="POST" class="mb-4-5">
									<div class="input-group">
										<input class="form-control border-0" placeholder="Email Address..." name="newsletterEmail" id="newsletterEmail" type="email">
										<button class="btn btn-primary px-3" type="submit">
											<img width="27" height="27" src="img/demos/construction/icons/arrow-right.svg" alt="" data-icon data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-light'}" style="width: 27px;" />
										</button>
									</div>
								</form>
							</div>
							<ul class="list list-unstyled list-inline">
								<li class="list-inline-item d-inline-flex align-items-center">
									<img width="23" height="23" src="img/demos/construction/icons/phone.svg" alt="" data-icon data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-dark'}" />
									<a href="tel:0123456789" class="text-decoration-none text-color-dark text-color-hover-primary font-weight-normal text-3-5 ms-2">03450000800</a>
								</li>
								<li class="list-inline-item d-inline-flex align-items-center ms-0 ms-sm-4 ms-lg-1 ms-xl-4">
									<img width="23" height="23" src="img/demos/construction/icons/email.svg" alt="" data-icon data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-dark'}" />
									<a href="mailto:info@seconservices.com" class="text-decoration-none text-color-dark text-color-hover-primary font-weight-normal text-3-5 ms-2">info@seconservices.com</a>
								</li>
							</ul>
						</div>
					</div>

					<hr>

					<div class="footer-copyright bg-transparent pb-5 mt-5-5">
						<div class="row pb-5">
							<div class="col text-center mb-5">
								<p class="text-color-grey text-3 mb-3">SECON Construction © 2022. All Rights Reserved. </p>
								<ul class="footer-social-icons social-icons social-icons-clean social-icons-medium mb-5">
									<li class="social-icons-instagram">
										<a href="http://www.instagram.com/" target="_blank" title="Instagram"><i class="fab fa-instagram text-4"></i></a>
									</li>
									<li class="social-icons-twitter">
										<a href="http://www.twitter.com/" target="_blank" title="Twitter"><i class="fab fa-twitter text-4"></i></a>
									</li>
									<li class="social-icons-facebook">
										<a href="http://www.facebook.com/" target="_blank" title="Facebook"><i class="fab fa-facebook-f text-4"></i></a>
									</li>
								</ul>
							</div>
						</div>
					</div>

				</div>
				<div class="position-absolute left-100pct transform3dx-n50 top-0 d-none d-lg-block">
					<div class="appear-animation" data-appear-animation="fadeInLeftShorterPlus" data-appear-animation-delay="1000" data-appear-animation-duration="1500ms">
						<div class="custom-square-1 custom-square-1-big bg-dark mt-0 mb-5 me-5"></div>
					</div>
				</div>
`;

// Footer section ends  here
