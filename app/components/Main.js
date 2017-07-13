//index code to be moved here


var React = require("react");

//create component 
var Main = React.createClass({

	render: function(){

		return(

		<div className = "main-container">

		<div className="fh5co-loader"></div>
		
		<div id="page">
		 <nav className="fh5co-nav" role="navigation">
	            <div className="container">
	                <div className="row">
	                    <div className="col-xs-12 text-center logo-wrap">
	                        <div id="fh5co-logo"><a href="index.html">CityScoop<span>.</span></a></div>
	                    </div>
	                    <div className="col-xs-12 text-center menu-1 menu-wrap">
	                        <ul>
	                            <li Name="active"><a href="index.html">Home</a></li>
	                            <li className="has-dropdown">
	                                <a href="gallery.html">Cities</a>
	                                <ul className="dropdown">
	                                    <li><a href="#">Events</a></li>
	                                    <li><a href="#">Food</a></li>
	                                    <li><a href="#">Coffees</a></li>
	                                </ul>
	                            </li>
	                            <li><a href="menu.html">City Sample</a></li>
	                            <li><a href="about.html">About Us</a></li>
	                            <li><a href="contact.html">Favorites</a></li>
	                        </ul>
	                    </div>
	                </div>
	            </div>
	            
	        </nav>
	<header id="fh5co-header" className="fh5co-cover js-fullheight" role="banner" style={{background-image: url(images/background_1.jpg);" data-stellar-background-ratio="0.5"}}
	            <div Name="overlay"></div>
	            <div className="container">
	                <div className="row">
	                    <div className="col-md-12 text-center">
	                        <div className="display-t js-fullheight">
	                            <div className="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
	                                <h1>A <em>community-sourced</em> travel guide,<br> Right at your fingertips</br></h1>
	                                <button className="btn btn-6 btn-6d">Start exploring</button>
	                                <button className="btn btn-6 btn-6d">Sign Up / Login</button>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </header>

	   	<div id="fh5co-gallery" className="fh5co-section">
			<div className="container">
				<div className="row">
					<div className="col-md-12 fh5co-heading animate-box">
						<h2>Our Gallery</h2>
						<div className="row">
							<div className="col-md-6">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ab debitis sit itaque totam, a maiores nihil, nulla magnam porro minima officiis! Doloribus aliquam voluptates corporis et tempora consequuntur ipsam, itaque, nesciunt similique commodi omnis. Ad magni perspiciatis, voluptatum repellat.</p>
							</div>
						</div>
					</div>

					<div className="col-md-3 col-sm-3 fh5co-gallery_item">
					<a href="maldives.html">
						<div className="fh5co-bg-img" style="background-image: url(images/background_1.jpg);"></div>
					</a>
					<a href="paris">
						<div className="fh5co-bg-img" style="background-image: url(images/background_2.jpg);" data-trigger="zoomerang" href="/paris"></div>
					</a>
					</div>
					<div className="col-md-6 col-sm-6 fh5co-gallery_item">
						<div Name="fh5co-bg-img fh5co-gallery_big" style="background-image: url(images/background_3.jpg);" data-trigger="zoomerang"></div>
					</div>
					<div className="col-md-3 col-sm-3 fh5co-gallery_item">
						<div className="fh5co-bg-img" style="background-image: url(images/background_4.jpg);" data-trigger="zoomerang"></div>
						<div className="fh5co-bg-img" style="background-image: url(images/backgrounD_5.jpg);" data-trigger="zoomerang"></div>
					</div>

					<div className="col-md-3 col-sm-3 fh5co-gallery_item">
						<div className="fh5co-bg-img" style="background-image: url(images/background_6.jpg);" data-trigger="zoomerang"></div>
						<div className="fh5co-bg-img" style="background-image: url(images/gallery_6.jpeg);" data-trigger="zoomerang"></div>
					</div>
					<div className="col-md-3 col-sm-3 fh5co-gallery_item">
						<div className="fh5co-bg-img" style="background-image: url(images/gallery_7.jpeg);" data-trigger="zoomerang"></div>
						<div className="fh5co-bg-img" style="background-image: url(images/gallery_8.jpeg);" data-trigger="zoomerang"></div>
					</div>
					<div className="col-md-6 col-sm-6 fh5co-gallery_item">
						<div className="fh5co-bg-img fh5co-gallery_big" style="background-image: url(images/gallery_9.jpeg);" data-trigger="zoomerang"></div>
					</div>

					<div className="col-md-3 col-sm-3 fh5co-gallery_item">
						<div className="fh5co-bg-img" style="background-image: url(images/gallery_1.jpeg);" data-trigger="zoomerang"></div>
						<div className="fh5co-bg-img" style="background-image: url(images/gallery_2.jpeg);" data-trigger="zoomerang"></div>
					</div>
					<div className="col-md-6 col-sm-6 fh5co-gallery_item">
						<div className="fh5co-bg-img fh5co-gallery_big" style="background-image: url(images/gallery_8.jpeg);" data-trigger="zoomerang"></div>
					</div>
					<div className="col-md-3 col-sm-3 fh5co-gallery_item">
						<div className="fh5co-bg-img" style="background-image: url(images/gallery_4.jpeg);" data-trigger="zoomerang"></div>
						<div className="fh5co-bg-img" style="background-image: url(images/gallery_5.jpeg);" data-trigger="zoomerang"></div>
					</div>

					<div className="col-md-3 col-sm-3 fh5co-gallery_item">
						<div className="fh5co-bg-img" style="background-image: url(images/gallery_5.jpeg);" data-trigger="zoomerang"></div>
						<div className="fh5co-bg-img" style="background-image: url(images/gallery_6.jpeg);" data-trigger="zoomerang"></div>
					</div>
					<div className="col-md-3 col-sm-3 fh5co-gallery_item">
						<div className="fh5co-bg-img" style="background-image: url(images/gallery_7.jpeg);" data-trigger="zoomerang"></div>
						<div className="fh5co-bg-img" style="background-image: url(images/gallery_8.jpeg);" data-trigger="zoomerang"></div>
					</div>
					<div className="col-md-6 col-sm-6 fh5co-gallery_item">
						<div className="fh5co-bg-img fh5co-gallery_big" style="background-image: url(images/gallery_9.jpeg);" data-trigger="zoomerang"></div>
					</div>
				</div>
			</div>
		</div>
		<div id="fh5co-about" className="fh5co-section">
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-md-pull-4 img-wrap animate-box" data-animate-effect="fadeInLeft">
						<img src="images/hero_1.jpeg" alt="Free Restaurant Bootstrap Website Template by FreeHTML5.co"></img>
					</div>
					<div className="col-md-5 col-md-push-1 animate-box">
						<div className="section-heading">
							<h2>The Restaurant</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae neque quisquam at deserunt ab praesentium architecto tempore saepe animi voluptatem molestias, eveniet aut laudantium alias, laboriosam excepturi, et numquam? Atque tempore iure tenetur perspiciatis, aliquam, asperiores aut odio accusamus, unde libero dignissimos quod aliquid neque et illo vero nesciunt. Sunt!</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam iure reprehenderit nihil nobis laboriosam beatae assumenda tempore, magni ducimus abentey.</p>
							<p><a href="#" className="btn btn-primary btn-outline">Our History</a></p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div id="fh5co-featured-menu" className="fh5co-section">
			<div className="container">
				<div className="row">
					<div className="col-md-12 fh5co-heading animate-box">
						<h2>Today's Menu</h2>
						<div className="row">
							<div className="col-md-6">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ab debitis sit itaque totam, a maiores nihil, nulla magnam porro minima officiis! Doloribus aliquam voluptates corporis et tempora consequuntur ipsam, itaque, nesciunt similique commodi omnis. Ad magni perspiciatis, voluptatum repellat.</p>
							</div>
						</div>
					</div>
					
					<div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap animate-box">
						<div className="fh5co-item">
							<img src="images/gallery_9.jpeg" className="img-responsive" alt="Free Restaurant Bootstrap Website Template by FreeHTML5.co">
							<h3>Bake Potato Pizza</h3>
							<span className="fh5co-price">$20<sup>.50</sup></span>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nihil cupiditate ut vero alias quaerat inventore molestias vel suscipit explicabo.</p>
						</img></div>
					</div>
					<div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap animate-box">
						<div className="fh5co-item margin_top">
							<img src="images/gallery_8.jpeg" className="img-responsive" alt="Free Restaurant Bootstrap Website Template by FreeHTML5.co">
							<h3>Salted Fried Chicken</h3>
							<span className="fh5co-price">$19<sup>.00</sup></span>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nihil cupiditate ut vero alias quaerat inventore molestias vel suscipit explicabo.</p>
						</img></div>
					</div>
					<div Name="clearfix visible-sm-block visible-xs-block"></div>
					<div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap animate-box">
						<div className="fh5co-item">
							<img src="images/gallery_7.jpeg" className="img-responsive" alt="Free Restaurant Bootstrap Website Template by FreeHTML5.co">
							<h3>Italian Sauce Mushroom</h3>
							<span className="fh5co-price">$17<sup>.99</sup></span>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nihil cupiditate ut vero alias quaerat inventore molestias vel suscipit explicabo.</p>
						</img></div>
					</div>
					<div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap animate-box">
						<div className="fh5co-item margin_top">
							<img src="images/gallery_6.jpeg" className="img-responsive" alt="Free Restaurant Bootstrap Website Template by FreeHTML5.co">
							<h3>Fried Potato w/ Garlic</h3>
							<span className="fh5co-price">$22<sup>.50</sup></span>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nihil cupiditate ut vero alias quaerat inventore molestias vel suscipit explicabo.</p>
						</img></div>
					</div>
				</div>
			</div>
		</div>

		<div id="fh5co-featured-testimony" Name="fh5co-section">
			<div className="container">
				<div className="row">
					<div className="col-md-12 fh5co-heading animate-box">
						<h2>Testimony</h2>
						<div className="row">
							<div className="col-md-6">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ab debitis sit itaque totam, a maiores nihil, nulla magnam porro minima officiis! Doloribus aliquam voluptates corporis et tempora consequuntur ipsam, itaque, nesciunt similique commodi omnis.</p>
							</div>
						</div>
					</div>

					<div className="col-md-5 animate-box img-to-responsive animate-box" data-animate-effect="fadeInLeft">
							<img src="images/person_1.jpg" alt=""></img>
					</div>
					<div className="col-md-7 animate-box" data-animate-effect="fadeInRight">
						<blockquote>
							<p> &ldquo; Quantum ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ab debitis sit itaque totam, a maiores nihil, nulla magnam porro minima officiis! Doloribus aliquam voluptates corporis et tempora consequuntur ipsam. &rdquo;</p>
							<p className="author"><cite>&mdash; Jane Smith</cite></p>
						</blockquote>
					</div>
				</div>
			</div>
		</div>

		<div id="fh5co-slider" Name="fh5co-section animate-box">
			<div className="container">
				<div className="row">
					<div className="col-md-6 animate-box">
						<div className="fh5co-heading">
							<h2>Our Best <em>&amp;</em> Unique Menu</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ab debitis sit itaque totam, a maiores nihil, nulla magnam porro minima officiis!</p>
						</div>
					</div>
					<div Name="col-md-6 col-md-push-1 animate-box">
						<aside id="fh5co-slider-wrwap">
						<div className="flexslider">
							<ul className="slides">
						   	<li style="background-image: url(images/gallery_7.jpeg);">
						   		<div className="overlay-gradient"></div>
						   		<div className="container-fluid">
						   			<div className="row">
							   			<div className="col-md-12 col-md-offset-0 col-md-pull-10 slider-text slider-text-bg">
							   				<div className="slider-text-inner">
							   					<div className="desc">
														<h2>Crab <em>with</em> Curry Sources</h2>
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt eveniet quae, numquam magnam doloribus eligendi ratione rem, consequatur quos natus voluptates est totam magni! Nobis a temporibus, ipsum repudiandae dolorum.</p>
														<p><a href="#" className="btn btn-primary btn-outline">Learn More</a></p>
							   					</div>
							   				</div>
							   			</div>
							   		</div>
						   		</div>
						   	</li>
						   	<li style="background-image: url(images/gallery_6.jpeg);">
						   		<div Name="overlay-gradient"></div>
						   		<div className="container-fluid">
						   			<div className="row">
							   			<div className="col-md-12 col-md-offset-0 col-md-pull-10 slider-text slider-text-bg">
							   				<div className="slider-text-inner">
							   					<div className="desc">
														<h2>Tuna <em>&amp;</em> Roast Beef</h2>
														<p>Ink is a free html5 bootstrap and a multi-purpose template perfect for any type of websites. A combination of a minimal and modern design template. The features are big slider on homepage, smooth animation, product listing and many more</p>
														<p><a href="#" className="btn btn-primary btn-outline">Learn More</a></p>
							   					</div>
							   				</div>
							   			</div>
							   		</div>
						   		</div>
						   	</li>
						   	<li style="background-image: url(images/gallery_5.jpeg);">
						   		<div className="overlay-gradient"></div>
						   		<div className="container-fluid">
						   			<div className="row">
							   			<div className="col-md-12 col-md-offset-0 col-md-pull-10 slider-text slider-text-bg">
							   				<div className="slider-text-inner">
							   					<div className="desc">
														<h2>Egg <em>with</em> Mushroom</h2>
														<p>Ink is a free html5 bootstrap and a multi-purpose template perfect for any type of websites. A combination of a minimal and modern design template. The features are big slider on homepage, smooth animation, product listing and many more</p>
														<p><a href="#" className="btn btn-primary btn-outline">Learn More</a></p>
							   					</div>
							   				</div>
							   			</div>
							   		</div>
						   		</div>
						   	</li>		   	
						  	</ul>
					  	</div>
					</aside>
					</div>
				</div>
			</div>
		</div>

		<div id="fh5co-blog" className="fh5co-section">
			<div Name="container">
				<div Name="row animate-box">
					<div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
						<h2>Events</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, consequatur. Aliquam quaerat pariatur repellendus veniam nemo, saepe, culpa eius aspernatur cumque suscipit quae nobis illo tempora. Eum veniam necessitatibus, blanditiis facilis quidem dolore! Dolorem, molestiae.</p>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4">
						<div className="fh5co-blog animate-box">
							<a href="#" className="blog-bg" style="background-image: url(images/gallery_1.jpeg);"></a>
							<div className="blog-text">
								<span className="posted_on">Feb. 15th 2016</span>
								<h3><a href="#">Photoshoot On The Street</a></h3>
								<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
								<ul className="stuff">
									<li><i className="icon-heart2"></i>1.2K</li>
									<li><i className="icon-eye2"></i>2K</li>
									<li><a href="#">Read More<i className="icon-arrow-right22"></i></a></li>
								</ul>
							</div> 
						</div>
					</div>
					<div Name="col-md-4">
						<div className="fh5co-blog animate-box">
							<a href="#" className="blog-bg" style="background-image: url(images/gallery_2.jpeg);"></a>
							<div className="blog-text">
								<span className="posted_on">Feb. 15th 2016</span>
								<h3><a href="#">Surfing at Philippines</a></h3>
								<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
								<ul className="stuff">
									<li><i className="icon-heart2"></i>1.2K</li>
									<li><i className="icon-eye2"></i>2K</li>
									<li><a href="#">Read More<i className="icon-arrow-right22"></i></a></li>
								</ul>
							</div> 
						</div>
					</div>
					<div className="col-md-4">
						<div className="fh5co-blog animate-box">
							<a href="#" className="blog-bg" style="background-image: url(images/gallery_3.jpeg);"></a>
							<div className="blog-text">
								<span className="posted_on">Feb. 15th 2016</span>
								<h3><a href="#">Focus On Uderwater</a></h3>
								<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
								<ul className="stuff">
									<li><i className="icon-heart2"></i>1.2K</li>
									<li><i className="icon-eye2"></i>2K</li>
									<li><a href="#">Read More<i class="icon-arrow-right22"></i></a></li>
								</ul>
							</div> 
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div id="fh5co-started" className="fh5co-section animate-box" style="background-image: url(images/hero_1.jpeg);" data-stellar-background-ratio="0.5">
			<div className="overlay"></div>
			<div className="container">
				<div class="row animate-box">
					<div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
						<h2>Book a Table</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae enim quae vitae cupiditate, sequi quam ea id dolor reiciendis consectetur repudiandae. Rem quam, repellendus veniam ipsa fuga maxime odio? Eaque!</p>
						<p><a href="reservation.html" className="btn btn-primary btn-outline">Book Now</a></p>
					</div>
				</div>
			</div>
		</div>

		<footer id="fh5co-footer" role="contentinfo" className="fh5co-section">
			<div className="container">
				<div className="row row-pb-md">
					<div className="col-md-4 fh5co-widget">
						<h4>Tasty</h4>
						<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
					</div>
					<div className="col-md-2 col-md-push-1 fh5co-widget">
						<h4>Links</h4>
						<ul className="fh5co-footer-links">
							<li><a href="#">Home</a></li>
							<li><a href="#">About</a></li>
							<li><a href="#">Menu</a></li>
							<li><a href="#">Gallery</a></li>
						</ul>
					</div>

					<div className="col-md-2 col-md-push-1 fh5co-widget">
						<h4>Categories</h4>
						<ul className="fh5co-footer-links">
							<li><a href="#">Landing Page</a></li>
							<li><a href="#">Real Estate</a></li>
							<li><a href="#">Personal</a></li>
							<li><a href="#">Business</a></li>
							<li><a href="#">e-Commerce</a></li>
						</ul>
					</div>

					<div className="col-md-4 col-md-push-1 fh5co-widget">
						<h4>Contact Information</h4>
						<ul className="fh5co-footer-links">
							<li>198 West 21th Street, <br></br> Suite 721 New York NY 10016</li>
							<li><a href="mailto:info@yoursite.com">info@yoursite.com</a></li>
						</ul>
					</div>

				</div>

				<div Name="row copyright">
					<div className="col-md-12 text-center">
						<p>
							<small className="block">&copy; 2016 Free HTML5. All Rights Reserved.</small> 
						</p>
						<p>
							<ul className="fh5co-social-icons">
								<li><a href="#"><i className="icon-twitter2"></i></a></li>
								<li><a href="#"><i className="icon-facebook2"></i></a></li>
								<li><a href="#"><i className="icon-linkedin2"></i></a></li>
								<li><a href="#"><i className="icon-dribbble2"></i></a></li>
							</ul>
						</p>
					</div>
				</div>

			</div>
		</footer>
		</div>

		<div Name="gototop js-top">
			<a href="#" className="js-gotop"><i className="icon-arrow-up22"></i></a>
		</div>

		</div>
		)


	}


});

module.exports = Main;
