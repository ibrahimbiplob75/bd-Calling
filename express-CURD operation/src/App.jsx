import logo from "../src/assets/images/image_7.png";

function App() {
  return (
    <div>
      
      <div >
        <div>
          <main>
            {/* <div className="has-smooth" id="has_smooth" />
            <div />
            <div className="cursor" id="team_cursor">
              Drag
            </div> */}
            {/* <div className="preloader">
              <div className="loading">
                <div className="bar bar1" />
                <div className="bar bar2" />
                <div className="bar bar3" />
                <div className="bar bar4" />
                <div className="bar bar5" />
                <div className="bar bar6" />
                <div className="bar bar7" />
                <div className="bar bar8" />
              </div>
            </div> */}
            <div className="cursor1" />
            <div className="cursor2" />
            <div className="switcher__area">
              <div className="switcher__icon">
                <button id="switcher_open">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="gear"
                    className="svg-inline--fa fa-gear "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  ></svg>
                </button>
                <button id="switcher_close">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="xmark"
                    className="svg-inline--fa fa-xmark "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  ></svg>
                </button>
              </div>
              <div className="switcher__items">
                <div className="switcher__item">
                  <div className="switch__title-wrap">
                    <h2 className="switcher__title">Cursor</h2>
                  </div>
                  <div className="switcher__btn">
                    <select name="cursor-style" id="cursor_style">
                      <option value={1}>default</option>
                      <option value={2} selected>
                        animated
                      </option>
                    </select>
                  </div>
                </div>
                <div className="switcher__item">
                  <div className="switch__title-wrap">
                    <h2 className="switcher__title">mode</h2>
                  </div>
                  <div className="switcher__btn mode-type wc-col-2">
                    <button className="active">light</button>
                    <button className>dark</button>
                  </div>
                </div>
              </div>
            </div>
            <button id="scroll_top" className="scroll-top">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-up"
                className="svg-inline--fa fa-arrow-up "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path fill="currentColor" />
              </svg>
            </button>

            <div className="offcanvas__area">
              <div className="offcanvas__body">
                <div className="offcanvas__left">
                  <div className="offcanvas__logo">
                    <a href="#">
                      <img
                        alt="Offcanvas Logo main"
                        // width={100}
                        // height={33}
                        // style={{
                        //   color: "transparent",
                        //   width: "auto",
                        //   height: "auto",
                        // }}
                        src={logo} // Use the imported logo variable
                      />
                    </a>
                  </div>
                  <div className="offcanvas__social">
                    <h3 className="social-title">Follow Us</h3>
                    <ul>
                      <li>
                        <a href="#">Dribbble</a>
                      </li>
                      <li>
                        <a href="#">Behance</a>
                      </li>
                      <li>
                        <a href="#">Instagram</a>
                      </li>
                      <li>
                        <a href="#">Facebook</a>
                      </li>
                      <li>
                        <a href="#">Twitter</a>
                      </li>
                      <li>
                        <a href="#">YouTube</a>
                      </li>
                    </ul>
                  </div>
                  <div className="offcanvas__links">
                    <ul>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">contact</a>
                      </li>
                      <li>
                        <a href="#">Career</a>
                      </li>
                      <li>
                        <a href="#">blog</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="offcanvas__mid">
                  <div className="offcanvas__menu-wrapper">
                    <nav className="offcanvas__menu">
                      <ul className="menu-anim title">
                        <li>
                          <div className="header_title">
                            <a href="/">HOME</a>
                            <div className="accordian-btn">
                              <a>+</a>
                            </div>
                          </div>
                          <ul className="sub_title" style={{ display: "none" }}>
                            <li>
                              <a href="/">Digital Maketing</a>
                            </li>
                            <li>
                              <a href="#">Digital Maketing dark</a>
                            </li>
                            <li>
                              <a href="#">Design Studio </a>
                            </li>
                            <li>
                              <a href="#">Design Studio dark</a>
                            </li>
                            <li>
                              <a href="#">Digital Agency</a>
                            </li>
                            <li>
                              <a href="#">Digital Agency dark</a>
                            </li>
                            <li>
                              <a href="#">creative Agency</a>
                            </li>
                            <li>
                              <a href="#">creative Agency dark</a>
                            </li>
                            <li>
                              <a href="#">Startup Agency</a>
                            </li>
                            <li>
                              <a href="#">Startup Agency dark</a>
                            </li>
                            <li>
                              <a href="#">modern agency</a>
                            </li>
                            <li>
                              <a href="#">modern agency dark</a>
                            </li>
                            <li>
                              <a href="#">personal Portfolio</a>
                            </li>
                            <li>
                              <a href="#">personal Portfolio dark</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div className="header_title">
                            <a href="#">ABOUT</a>
                          </div>
                        </li>
                        <li>
                          <div className="header_title d-flex">
                            <a href="#">SERVICE</a>
                            <div className="accordian-btn">
                              <a>+</a>
                            </div>
                          </div>
                          <ul className="sub_title" style={{ display: "none" }}>
                            <li>
                              <a href="#">service</a>
                            </li>
                            <li>
                              <a href="#">service dark</a>
                            </li>
                            <li>
                              <a href="#">service v2</a>
                            </li>
                            <li>
                              <a href="#">service v2 dark</a>
                            </li>
                            <li>
                              <a href="#">service v3</a>
                            </li>
                            <li>
                              <a href="#">service v3 dark</a>
                            </li>
                            <li>
                              <a href="#">service v4</a>
                            </li>
                            <li>
                              <a href="#">service v4 dark</a>
                            </li>
                            <li>
                              <a href="#">service v5</a>
                            </li>
                            <li>
                              <a href="#">service v5 dark</a>
                            </li>
                            <li>
                              <a href="#">service v6</a>
                            </li>
                            <li>
                              <a href="#">service v6 dark</a>
                            </li>
                            <li>
                              <a href="#">service details</a>
                            </li>
                            <li>
                              <a href="#">service details dark</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div className="header_title d-flex">
                            <a href="#">PAGES</a>
                            <div className="accordian-btn">
                              <a>+</a>
                            </div>
                          </div>
                          <ul className="sub_title" style={{ display: "none" }}>
                            <li className="sub_header_title">
                              <div className="d-flex justify-content-between">
                                <a href="#">Service</a>
                                <div className="sub-accordian-btn">
                                  <a>+</a>
                                </div>
                              </div>
                              <ul
                                className="sub_title_2"
                                style={{ display: "none" }}
                              >
                                <li>
                                  <a href="#">service</a>
                                </li>
                                <li>
                                  <a href="#">service dark</a>
                                </li>
                                <li>
                                  <a href="#">service v2</a>
                                </li>
                                <li>
                                  <a href="#">service v2 dark</a>
                                </li>
                                <li>
                                  <a href="#">service v3</a>
                                </li>
                                <li>
                                  <a href="#">service v3 dark</a>
                                </li>
                                <li>
                                  <a href="#">service v4</a>
                                </li>
                                <li>
                                  <a href="#">service v4 dark</a>
                                </li>
                                <li>
                                  <a href="#">service v5</a>
                                </li>
                                <li>
                                  <a href="#">service v5 dark</a>
                                </li>
                                <li>
                                  <a href="#">service v6</a>
                                </li>
                                <li>
                                  <a href="#">service v6 dark</a>
                                </li>
                                <li>
                                  <a href="#">service details</a>
                                </li>
                                <li>
                                  <a href="#">service details dark</a>
                                </li>
                              </ul>
                            </li>
                            <li className="sub_header_title">
                              <div className="d-flex justify-content-between">
                                <a href="#">Portfolio</a>
                                <div className="sub-accordian-btn">
                                  <a>+</a>
                                </div>
                              </div>
                              <ul
                                className="sub_title_2"
                                style={{ display: "none" }}
                              >
                                <li>
                                  <a href="#">portfolio</a>
                                </li>
                                <li>
                                  <a href="#">portfolio dark</a>
                                </li>
                                <li>
                                  <a href="#">portfolio v2</a>
                                </li>
                                <li>
                                  <a href="#">portfolio v2 dark</a>
                                </li>
                                <li>
                                  <a href="#">portfolio v3</a>
                                </li>
                                <li>
                                  <a href="#">portfolio v3 dark</a>
                                </li>
                                <li>
                                  <a href="#">portfolio v4</a>
                                </li>
                                <li>
                                  <a href="#">portfolio v4 dark</a>
                                </li>
                                <li>
                                  <a href="#">portfolio v5</a>
                                </li>
                                <li>
                                  <a href="#">portfolio v5 dark</a>
                                </li>
                                <li>
                                  <a href="#">portfolio details</a>
                                </li>
                                <li>
                                  <a href="#">portfolio details dark</a>
                                </li>
                              </ul>
                            </li>
                            <li className="sub_header_title">
                              <div className="d-flex justify-content-between">
                                <a href="/team">team</a>
                                <div className="sub-accordian-btn">
                                  <a>+</a>
                                </div>
                              </div>
                              <ul
                                className="sub_title_2"
                                style={{ display: "none" }}
                              >
                                <li>
                                  <a href="#">Team</a>
                                </li>
                                <li>
                                  <a href="#">Team dark</a>
                                </li>
                                <li>
                                  <a href="#">Team Details</a>
                                </li>
                                <li>
                                  <a href="#">Team Details dark</a>
                                </li>
                                <li>
                                  <a href="#">career</a>
                                </li>
                                <li>
                                  <a href="#">career dark</a>
                                </li>
                                <li>
                                  <a href="#">job details</a>
                                </li>
                                <li>
                                  <a href="#">job details dark</a>
                                </li>
                              </ul>
                            </li>
                            <li className="sub_header_title">
                              <div className="d-flex justify-content-between">
                                <a href="/blog">blog</a>
                                <div className="sub-accordian-btn">
                                  <a>+</a>
                                </div>
                              </div>
                              <ul
                                className="sub_title_2"
                                style={{ display: "none" }}
                              >
                                <li>
                                  <a href="#">blog</a>
                                </li>
                                <li>
                                  <a href="#">blog dark</a>
                                </li>
                                <li>
                                  <a href="#">blog V2</a>
                                </li>
                                <li>
                                  <a href="#">blog v2 dark</a>
                                </li>
                                <li>
                                  <a href="#">category</a>
                                </li>
                                <li>
                                  <a href="#">category dark</a>
                                </li>
                                <li>
                                  <a href="#">blog details</a>
                                </li>
                                <li>
                                  <a href="#">blog details dark</a>
                                </li>
                              </ul>
                            </li>
                            <li className="sub_header_title">
                              <div className="d-flex justify-content-between">
                                <a href="#">Others</a>
                                <div className="sub-accordian-btn">
                                  <a>+</a>
                                </div>
                              </div>
                              <ul
                                className="sub_title_2"
                                style={{ display: "none" }}
                              >
                                <li>
                                  <a href="#">about</a>
                                </li>
                                <li>
                                  <a href="#">about dark</a>
                                </li>
                                <li>
                                  <a href="#">FAQs</a>
                                </li>
                                <li>
                                  <a href="#">FAQs dark</a>
                                </li>
                                <li>
                                  <a href="#">contact</a>
                                </li>
                                <li>
                                  <a href="#">contact dark</a>
                                </li>
                                <li>
                                  <a href="#">404</a>
                                </li>
                                <li>
                                  <a href="#">404 dark</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div className="header_title">
                            <a href="#">BLOG</a>
                            <div className="accordian-btn">
                              <a>+</a>
                            </div>
                          </div>
                          <ul className="sub_title" style={{ display: "none" }}>
                            <li>
                              <a href="#">blog</a>
                            </li>
                            <li>
                              <a href="#">blog dark</a>
                            </li>
                            <li>
                              <a href="#">blog v2</a>
                            </li>
                            <li>
                              <a href="#">blog v2 dark</a>
                            </li>
                            <li>
                              <a href="#">blog details</a>
                            </li>
                            <li>
                              <a href="#">blog details dark</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div className="header_title">
                            <a href="#">CONTACT</a>
                          </div>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="offcanvas__right">
                  <div className="offcanvas__search">
                    <form action="#">
                      <input
                        type="text"
                        name="search"
                        placeholder="Search keyword"
                      />
                      <button>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="magnifying-glass"
                          className="svg-inline--fa fa-magnifying-glass "
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                          />
                        </svg>
                      </button>
                    </form>
                  </div>
                  <div className="offcanvas__contact">
                    <h3>Get in touch</h3>
                    <ul>
                      <li>
                        <a href="tel:02094980547">+(02) - 094 980 547</a>
                      </li>
                      <li>
                        <a href="mailto:info@extradesign.com">
                          info@extradesign.com
                        </a>
                      </li>
                      <li>230 Norman Street New York, QC (USA) H8R 1A1</li>
                    </ul>
                  </div>
                  <img
                    alt="shape"
                    width={189}
                    height={94}
                    decoding="async"
                    data-nimg={1}
                    className="shape-1"
                    style={{
                      color: "transparent",
                      width: "auto",
                      height: "auto",
                    }}
                    srcSet="image_26 1x, image_5 2x"
                    src="/images/image_5.png"
                  />
                  <img
                    alt="shape"
                    width={81}
                    height={80}
                    decoding="async"
                    data-nimg={1}
                    className="shape-2"
                    style={{
                      color: "transparent",
                      width: "auto",
                      height: "auto",
                    }}
                    srcSet="image_32 1x, image_8 2x"
                    src="/images/image_8.png"
                  />
                </div>
                <div className="offcanvas__close">
                  <button type="button">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="xmark"
                      className="svg-inline--fa fa-xmark "
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path
                        fill="currentColor"
                        d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div id="smooth-wrapper">
              <div id="smooth-content">
                <section className="hero__area-3">
                  <div className="container">
                    <div className="row">
                      <div className="col-xxl-12">
                        <div className="hero__inner-3">
                          <div className="sec-title-wrapper">
                            <h2 className="sec-sub-title">Digital</h2>
                            <h3 className="sec-title title-left">Mark</h3>
                            <h3 className="sec-title title-right">eting</h3>
                          </div>
                          <div className="hero__text-3">
                            <p className="hero__text-animation">
                              Static and dynamic secure code review can prevent
                              a day before your product is even released. We can
                              integrate with your dev environment
                            </p>
                          </div>
                          <div className="scroll-down">
                            <button>
                              <img
                                alt="arrow icon"
                                width={17}
                                height={28}
                                decoding="async"
                                data-nimg={1}
                                style={{
                                  color: "transparent",
                                  width: "auto",
                                  height: "auto",
                                }}
                                srcSet="image_48 1x, image_4 2x"
                                src="image_4.png"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wrapper">
                    <div className="video-info">
                      <div className="video-intro">
                        <input id="video_check" type="checkbox" />
                        <div className="intro-title">
                          <h4 className="video-title">
                            Watch <span>video intro</span>
                          </h4>
                          <h4 className="video-title close-video-title">
                            Close <span>video intro</span>
                          </h4>
                        </div>
                        <div className="video">
                          <video
                            src="media/hero-3.mp4"
                            loop
                            muted
                            autoPlay
                            playsInline
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hero3-img-ani">
                    <img
                      alt="Hero Image"
                      width={1195}
                      height={350}
                      decoding="async"
                      data-nimg={1}
                      className="hero3-img"
                      style={{ color: "transparent", height: "auto" }}
                      srcSet="image_45 1x, image_18 2x"
                      src="image_18"
                    />
                  </div>
                </section>
                <section className="brand__area">
                  <div className="container pt-140 pb-140">
                    <div className="row">
                      <div className="col-xxl-12">
                        <h2 className="brand__title-3 title-anim">
                          We worked with global largest brands
                        </h2>
                        <div className="brand__list-3">
                          <div className="brand__item-2 fade_bottom">
                            <img
                              alt="Brand Logo"
                              width={97}
                              height={67}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="image_44 1x, image 2x"
                              src="image"
                            />
                          </div>
                          <div className="brand__item-2 fade_bottom">
                            <img
                              alt="Brand Logo"
                              width={85}
                              height={67}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="image_31 1x, image_11 2x"
                              src="image_11"
                            />
                          </div>
                          <div className="brand__item-2 fade_bottom">
                            <img
                              alt="Brand Logo"
                              width={114}
                              height={64}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="image_40 1x, image_1 2x"
                              src="image_1"
                            />
                          </div>
                          <div className="brand__item-2 fade_bottom">
                            <img
                              alt="Brand Logo"
                              width={82}
                              height={70}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="image_43 1x, image_10 2x"
                              src="image_10"
                            />
                          </div>
                          <div className="brand__item-2 fade_bottom">
                            <img
                              alt="Brand Logo"
                              width={115}
                              height={67}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="image_42 1x, image_2 2x"
                              src="image_2"
                            />
                          </div>
                          <div className="brand__item-2 fade_bottom">
                            <img
                              alt="Brand Logo"
                              width={121}
                              height={63}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="image_41 1x, image_16 2x"
                              src="image_16"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="about__area-3">
                  <div className="container pt-140 pb-110">
                    <div className="row">
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                        <div className="about__img-3">
                          <img
                            alt="About Thumbnail"
                            data-speed="auto"
                            width={550}
                            height={765}
                            decoding="async"
                            data-nimg={1}
                            className="smootherReset768"
                            style={{
                              color: "transparent",
                              width: "auto",
                              height: "auto",
                            }}
                            srcSet="image_39 1x, image_3 2x"
                            src="image_3"
                          />
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                        <div className="sec-title-wrapper">
                          <h2 className="sec-sub-title title-anim">
                            Who We Are
                          </h2>
                          <h3 className="sec-title title-anim">
                            We are leading digital marketing agency.
                          </h3>
                        </div>
                        <div className="sec-text-wrapper">
                          <div className="sec-text text-anim">
                            <p>
                              We’re a team of strategic mdigital marketing
                              working globally with largest brands, We believe
                              that progress only happens when you refused to
                              play things safe. We combine ideas and behaviors,
                              and insights with design, technological data to
                              produce brand experiences that customers love our
                              services.
                            </p>
                            <div className="btn_wrapper">
                              <a
                                className="wc-btn-light btn-hover btn-item"
                                href="/about"
                              >
                                <span /> Explore Us
                                {/* */}
                                <i className="fa-solid fa-arrow-right" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="service__area-3 pb-150">
                  <div className="container">
                    <div className="row">
                      <div className="col-xxl-12">
                        <div className="sec-title-wrapper pt-130 text-anim">
                          <h2 className="sec-sub-title title-anim">Services</h2>
                          <h3 className="sec-title title-anim">
                            Our marketing <br /> Services{" "}
                          </h3>
                          <p>
                            Consumers today rely heavily on digital means to
                            research products. We research a brand of bldend
                            engaging with it, according to the meanwhile, 51% of
                            consumers say they use Google to research products
                            before buying.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xx-12">
                        <div className="service__list-3">
                          <div className="service__item-3 service_animation">
                            <h3>
                              <a
                                className="service__title-3"
                                href="/service-details"
                              >
                                Search Engine <br />
                                Optimization{" "}
                              </a>
                            </h3>
                            <div className="service__content-3">
                              <p>
                                We help brands stand out through aweful, elegant
                                visual design. Our design mainly philosophy.
                              </p>
                              <ul className>
                                <li>+ Logo Design</li>
                                <li>+ Advertisement</li>
                                <li>+ Promotion</li>
                              </ul>
                            </div>
                            <div className="service__btn-3">
                              <div className="btn_wrapper">
                                <a
                                  className="wc-btn-black btn-hover btn-item"
                                  href="/service-details"
                                >
                                  <span /> Details{" "}
                                  <i className="fa-solid fa-arrow-right" />
                                </a>
                              </div>
                            </div>
                            <div className="service__hover-3" style={{}} />
                          </div>
                          <div className="service__item-3 service_animation">
                            <h3>
                              <a
                                className="service__title-3 "
                                href="/service-details"
                              >
                                Email <br />
                                Marketing{" "}
                              </a>
                            </h3>
                            <div className="service__content-3">
                              <p>
                                We help brands stand out through aweful, elegant
                                visual design. Our design mainly philosophy.
                              </p>
                              <ul className>
                                <li>+ Logo Design</li>
                                <li>+ Advertisement</li>
                                <li>+ Promotion</li>
                              </ul>
                            </div>
                            <div className="service__btn-3">
                              <div className="btn_wrapper">
                                <a
                                  className="wc-btn-black btn-hover btn-item"
                                  href="/service-details"
                                >
                                  <span /> Details{" "}
                                  <i className="fa-solid fa-arrow-right" />
                                </a>
                              </div>
                            </div>
                            <div className="service__hover-3" style={{}} />
                          </div>
                          <div className="service__item-3 service_animation">
                            <h3 className>
                              <a
                                className="service__title-3"
                                href="/service-details"
                              >
                                COntent <br />
                                Marketing{" "}
                              </a>
                            </h3>
                            <div className="service__content-3">
                              <p>
                                We help brands stand out through aweful, elegant
                                visual design. Our design mainly philosophy.
                              </p>
                              <ul className>
                                <li>+ Logo Design</li>
                                <li>+ Advertisement</li>
                                <li>+ Promotion</li>
                              </ul>
                            </div>
                            <div className="service__btn-3">
                              <div className="btn_wrapper">
                                <a
                                  className="wc-btn-black btn-hover btn-item"
                                  href="/service-details"
                                >
                                  <span /> Details{" "}
                                  <i className="fa-solid fa-arrow-right" />
                                </a>
                              </div>
                            </div>
                            <div className="service__hover-3" style={{}} />
                          </div>
                          <div className="service__item-3 service_animation">
                            <h3 className>
                              <a
                                className="service__title-3"
                                href="/service-details"
                              >
                                Social <br />
                                Marketing{" "}
                              </a>
                            </h3>
                            <div className="service__content-3">
                              <p>
                                We help brands stand out through aweful, elegant
                                visual design. Our design mainly philosophy.
                              </p>
                              <ul className>
                                <li>+ Logo Design</li>
                                <li>+ Advertisement</li>
                                <li>+ Promotion</li>
                              </ul>
                            </div>
                            <div className="service__btn-3">
                              <div className="btn_wrapper">
                                <a
                                  className="wc-btn-black btn-hover btn-item"
                                  href="/service-details"
                                >
                                  <span /> Details{" "}
                                  <i className="fa-solid fa-arrow-right" />
                                </a>
                              </div>
                            </div>
                            <div className="service__hover-3" style={{}} />
                          </div>
                          <div className="service3__img-wrap">
                            <div className="service3__img" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="portfolio__area-3">
                  <div className="container pt-100 pb-150">
                    <div className="row">
                      <div className="col-xxl-12">
                        <div className="sec-title-wrapper">
                          <h2 className="sec-sub-title title-anim">
                            Featured <br />
                            Work{" "}
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xxl-12 portfolio__slider-3">
                        <div className="swiper">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="portfolio__slide-3">
                                <a href="/service-details">
                                  <h3 className="portfolio__title-3">
                                    Benjon <span>Website</span> 2012{" "}
                                  </h3>
                                  <img
                                    alt="Portfolio Image"
                                    width={550}
                                    height={670}
                                    decoding="async"
                                    data-nimg={1}
                                    style={{
                                      color: "transparent",
                                      height: "auto",
                                    }}
                                    srcSet="image_37 1x, image_13 2x"
                                    src="image_13"
                                  />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="portfolio__slide-3">
                                <a href="/service-details">
                                  <h3 className="portfolio__title-3">
                                    Benjon <span>Website</span> 2012{" "}
                                  </h3>
                                  <img
                                    alt="Portfolio Image"
                                    width={550}
                                    height={670}
                                    decoding="async"
                                    data-nimg={1}
                                    style={{
                                      color: "transparent",
                                      height: "auto",
                                    }}
                                    srcSet="image_38 1x, image_12 2x"
                                    src="image_12"
                                  />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="portfolio__slide-3">
                                <a href="/service-details">
                                  <h3 className="portfolio__title-3">
                                    Benjon <span>Website</span> 2012{" "}
                                  </h3>
                                  <img
                                    alt="Portfolio Image"
                                    width={550}
                                    height={670}
                                    decoding="async"
                                    data-nimg={1}
                                    style={{
                                      color: "transparent",
                                      height: "auto",
                                    }}
                                    srcSet="image_33 1x, image_15 2x"
                                    src="image_15"
                                  />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="portfolio__slide-3">
                                <a href="/service-details">
                                  <h3 className="portfolio__title-3">
                                    Benjon <span>Website</span> 2012{" "}
                                  </h3>
                                  <img
                                    alt="Portfolio Image"
                                    width={550}
                                    height={670}
                                    decoding="async"
                                    data-nimg={1}
                                    style={{
                                      color: "transparent",
                                      height: "auto",
                                    }}
                                    srcSet="image_35 1x, image_6 2x"
                                    src="image_6"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-pagination" />
                          <div className="swiper-btn">
                            <div
                              style={{ cursor: "pointer" }}
                              className="pp-prev"
                            >
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="arrow-left"
                                className="svg-inline--fa fa-arrow-left "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
                                />
                              </svg>
                            </div>
                            <div
                              style={{ cursor: "pointer" }}
                              className="pp-next"
                            >
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="arrow-right"
                                className="svg-inline--fa fa-arrow-right "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="testimonial__area-3">
                  <div className="container">
                    <div className="row">
                      <div className="col-xxl-12">
                        <div>
                          <div className="swiper testimonial__slider-3">
                            <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                <div className="testimonial__slide-3">
                                  <p>
                                    When we talk about Alts, we do not mean a
                                    typical business partner, but rather a team
                                    that collaborates with us daily, always
                                    there for us when we encounter difficulties
                                    and celebrate achievements. We see in Alts
                                    our best ally for success!
                                  </p>
                                  <h2 className="client__name-3">
                                    Maria D. Halk
                                  </h2>
                                  <h3 className="client__role-3">
                                    Managing Director
                                  </h3>
                                </div>
                              </div>
                              <div className="swiper-slide">
                                <div className="testimonial__slide-3">
                                  <p>
                                    When we talk about Alts, we do not mean a
                                    typical business partner, but rather a team
                                    that collaborates with us daily, always
                                    there for us when we encounter difficulties
                                    and celebrate achievements. We see in Alts
                                    our best ally for success!
                                  </p>
                                  <h2 className="client__name-3">
                                    Maria D. Halk
                                  </h2>
                                  <h3 className="client__role-3">
                                    Managing Director
                                  </h3>
                                </div>
                              </div>
                              <div className="swiper-slide">
                                <div className="testimonial__slide-3">
                                  <p>
                                    When we talk about Alts, we do not mean a
                                    typical business partner, but rather a team
                                    that collaborates with us daily, always
                                    there for us when we encounter difficulties
                                    and celebrate achievements. We see in Alts
                                    our best ally for success!
                                  </p>
                                  <h2 className="client__name-3">
                                    Maria D. Halk
                                  </h2>
                                  <h3 className="client__role-3">
                                    Managing Director
                                  </h3>
                                </div>
                              </div>
                              <div className="swiper-slide">
                                <div className="testimonial__slide-3">
                                  <p>
                                    When we talk about Alts, we do not mean a
                                    typical business partner, but rather a team
                                    that collaborates with us daily, always
                                    there for us when we encounter difficulties
                                    and celebrate achievements. We see in Alts
                                    our best ally for success!
                                  </p>
                                  <h2 className="client__name-3">
                                    Maria D. Halk
                                  </h2>
                                  <h3 className="client__role-3">
                                    Managing Director
                                  </h3>
                                </div>
                              </div>
                              <div className="swiper-slide">
                                <div className="testimonial__slide-3">
                                  <p>
                                    When we talk about Alts, we do not mean a
                                    typical business partner, but rather a team
                                    that collaborates with us daily, always
                                    there for us when we encounter difficulties
                                    and celebrate achievements. We see in Alts
                                    our best ally for success!
                                  </p>
                                  <h2 className="client__name-3">
                                    Maria D. Halk
                                  </h2>
                                  <h3 className="client__role-3">
                                    Managing Director
                                  </h3>
                                </div>
                              </div>
                            </div>
                            <div
                              style={{ cursor: "pointer" }}
                              className="next-button swipper-btn"
                            >
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="arrow-left"
                                className="svg-inline--fa fa-arrow-left "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
                                />
                              </svg>
                            </div>
                            <div
                              style={{ cursor: "pointer" }}
                              className="prev-button swipper-btn"
                            >
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="arrow-right"
                                className="svg-inline--fa fa-arrow-right "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial__images-3 animation_image_zoom">
                    <img
                      alt="testimonial Image"
                      width={170}
                      height={200}
                      decoding="async"
                      data-nimg={1}
                      className="testimonial3__img"
                      style={{ color: "transparent" }}
                      srcSet="image_28 1x, image_17 2x"
                      src="image_17"
                    />
                    <img
                      alt="testimonial Image"
                      width={90}
                      height={100}
                      decoding="async"
                      data-nimg={1}
                      className="testimonial3__img-2"
                      style={{ color: "transparent" }}
                      srcSet="image_46 1x, image_14 2x"
                      src="image_14"
                    />
                    <img
                      alt="testimonial Image"
                      width={110}
                      height={130}
                      decoding="async"
                      data-nimg={1}
                      className="testimonial3__img-3"
                      style={{ color: "transparent" }}
                      srcSet="image_30 1x, image_21 2x"
                      src="image_21"
                    />
                    <img
                      alt="testimonial Image"
                      width={330}
                      height={430}
                      decoding="async"
                      data-nimg={1}
                      className="testimonial3__img-4"
                      style={{ color: "transparent" }}
                      srcSet="image_25 1x, image_20 2x"
                      src="image_20"
                    />
                    <img
                      alt="testimonial Image"
                      width={245}
                      height={278}
                      decoding="async"
                      data-nimg={1}
                      className="testimonial3__img-5"
                      style={{ color: "transparent" }}
                      srcSet="image_29 1x, image_19 2x"
                      src="image_19"
                    />
                    <img
                      alt="testimonial Image"
                      width={140}
                      height={160}
                      decoding="async"
                      data-nimg={1}
                      className="testimonial3__img-6"
                      style={{ color: "transparent" }}
                      srcSet="image_27 1x, image_9 2x"
                      src="image_9"
                    />
                  </div>
                </section>
                <section className="workflow__area-3">
                  <div className="workflow__wrapper-3">
                    <div className="choose-wrapper wf_panel">
                      <div className="container">
                        <div className="row">
                          <div className="col-xxl-12">
                            <div className="choose-title-wrapper">
                              <h2 className="choose-title title-anim">
                                why <br /> choose us{" "}
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="research__area wf_panel pt-150">
                      <div className="container inner_content">
                        <div className="row">
                          <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="sec-title-wrapper">
                              <h2 className="sec-sub-title">
                                why <br />
                                choose us{" "}
                              </h2>
                              <h3 className="sec-title">
                                Keword,Research Strategy, Survey, &amp;
                                Analytics
                              </h3>
                              <p>
                                Attention, we take out our round glasses and our
                                sweater with elbow patches to go back to the
                                origins of the user experience: the first
                                mention of the user and its importance was born
                                in the
                              </p>
                            </div>
                            <ul className="research__tools">
                              <li>
                                <a href="#">Google</a>
                              </li>
                              <li>
                                <a href="#">pinterest</a>
                              </li>
                              <li>
                                <a href="#">Instagram</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="research__list">
                              <div className="research__item">
                                <div className="research__number">
                                  <span>60%</span>
                                </div>
                                <div className="research__info">
                                  <h4 className="research__title">Strategy</h4>
                                  <p>
                                    Your marketing strategy optimizing
                                    performances doesn’t have to be a guessing
                                    game.
                                  </p>
                                </div>
                              </div>
                              <div className="research__item">
                                <div className="research__number">
                                  <span>95%</span>
                                </div>
                                <div className="research__info">
                                  <h4 className="research__title">Audience</h4>
                                  <p>
                                    Your marketing strategy optimizing
                                    performances doesn’t have to be a guessing
                                    game.
                                  </p>
                                </div>
                              </div>
                              <div className="research__item">
                                <div className="research__number">
                                  <span>70%</span>
                                </div>
                                <div className="research__info">
                                  <h4 className="research__title">Keyword</h4>
                                  <p>
                                    Your marketing strategy optimizing
                                    performances doesn’t have to be a guessing
                                    game.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="counter__area-3 wf_panel">
                      <div className="container">
                        <div className="row">
                          <div className="col-xxl-12">
                            <div className="sec-title-wrapper">
                              <h2 className="sec-sub-title">
                                Why <br />
                                Choose Us{" "}
                              </h2>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                            <div className="counter__wrapper-3">
                              <div className="counter__item-3">
                                <h2 className="counter__number count1">25k</h2>
                                <p>
                                  Project <br />
                                  completed{" "}
                                </p>
                              </div>
                              <div className="counter__item-3">
                                <h2 className="counter__number count2">8k</h2>
                                <p>
                                  Happy <br />
                                  customers{" "}
                                </p>
                              </div>
                              <div className="counter__item-3">
                                <h2 className="counter__number count3">15</h2>
                                <p>
                                  Years <br />
                                  experiences{" "}
                                </p>
                              </div>
                              <div className="counter__item-3">
                                <h2 className="counter__number count4">98</h2>
                                <p>
                                  Awards <br />
                                  achievement{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                            <div className="counter__img-3">
                              <img
                                alt="Counter Image"
                                width={717}
                                height={670}
                                decoding="async"
                                data-nimg={1}
                                style={{
                                  color: "transparent",
                                  width: "100%",
                                  height: "auto",
                                }}
                                srcSet="image_49 1x, image_23 2x"
                                src="image_23"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cta__area-3 wf_panel">
                      <div className="container pt-150 pb-150">
                        <div className="row">
                          <div className="col-xxl-12">
                            <div className="cta__content-3">
                              <p className="cta__sub-title-2">
                                Have you project in mind?
                              </p>
                              <h2 className="cta__title-2">
                                Let’s make something great together!
                              </h2>
                              <div className="btn_wrapper">
                                <a
                                  className="wc-btn-black btn-hover btn-item"
                                  href="/contact"
                                >
                                  <span />
                                  Contact <br />
                                  with us{" "}
                                  <i className="fa-solid fa-arrow-right" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="price__area pt-130 pb-140">
                  <div className="container">
                    <div className="row">
                      <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="sec-title-wrapper">
                          <h2 className="sec-sub-title title-anim">
                            Pricing Table
                          </h2>
                          <h3 className="sec-title title-anim">
                            Be kind to your <br />
                            mind{" "}
                          </h3>
                        </div>
                        <div className="faq__list-3">
                          <div className="accordion accordion">
                            <div className="accordion-item accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  type="button"
                                  aria-expanded="true"
                                  className="accordion-button"
                                >
                                  Design should enrich our day
                                </button>
                              </h2>
                              <div className="accordion-collapse collapse show">
                                <div className="accordion-body">
                                  <div>
                                    <p>
                                      Our design services starts and ends with a
                                      best-in-class experience strategy that
                                      builds brands. Through a process of
                                      iteration and prototyping design
                                      interfaces that bring joy to people
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  type="button"
                                  aria-expanded="false"
                                  className="accordion-button collapsed"
                                >
                                  Bring their individual experience and creative
                                </button>
                              </h2>
                              <div className="accordion-collapse collapse">
                                <div className="accordion-body">
                                  <div>
                                    <p>
                                      This is the second `$
                                      {/* */}items
                                      {/* */}` accordion body. It is hidden by
                                      default, until the collapse plugin adds
                                      the appropriate classes that we use to
                                      style each element. These classes.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  type="button"
                                  aria-expanded="false"
                                  className="accordion-button collapsed"
                                >
                                  Human centred design to challenges
                                </button>
                              </h2>
                              <div className="accordion-collapse collapse">
                                <div className="accordion-body">
                                  <div>
                                    <p>
                                      Our design services starts and ends with a
                                      best-in-class experience strategy that
                                      builds brands. Through a process of
                                      iteration and prototyping design
                                      interfaces that bring joy to people
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  type="button"
                                  aria-expanded="false"
                                  className="accordion-button collapsed"
                                >
                                  Design should enrich our day
                                </button>
                              </h2>
                              <div className="accordion-collapse collapse">
                                <div className="accordion-body">
                                  <div>
                                    <p>
                                      Our design services starts and ends with a
                                      best-in-class experience strategy that
                                      builds brands. Through a process of
                                      iteration and prototyping design
                                      interfaces that bring joy to people
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  type="button"
                                  aria-expanded="false"
                                  className="accordion-button collapsed"
                                >
                                  Developing core web applications
                                </button>
                              </h2>
                              <div className="accordion-collapse collapse">
                                <div className="accordion-body">
                                  <div>
                                    <p>
                                      Our design services starts and ends with a
                                      best-in-class experience strategy that
                                      builds brands. Through a process of
                                      iteration and prototyping design
                                      interfaces that bring joy to people
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="price__table">
                          <div className="price__item animation_from_bottom">
                            <div className="price__icon">
                              <span>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="check"
                                  className="svg-inline--fa fa-check "
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 448 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="price__info">
                              <h2 className="price__type">Yearly</h2>
                              <h3 className="price__title">14 days free</h3>
                              <p>
                                Subscription fee is $129.99 USD and
                                automatically renews each year.
                              </p>
                            </div>
                            <div className="price__amount">
                              <h4 className="best-value">Best Value</h4>
                              <p>
                                $129 <span> .99</span>
                              </p>
                            </div>
                          </div>
                          <div className="price__item animation_from_top">
                            <div className="price__icon">
                              <span>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="check"
                                  className="svg-inline--fa fa-check "
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 448 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="price__info">
                              <h2 className="price__type">Monthly</h2>
                              <h3 className="price__title">7 days free</h3>
                              <p>
                                Subscription fee is $12.99 USD and automatically
                                renews each year.
                              </p>
                            </div>
                            <div className="price__amount">
                              <p>
                                $12 <span> .99</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="price__btn btn_wrapper">
                          <a
                            className="wc-btn-black btn-hover btn-item"
                            href="/contact"
                          >
                            <span /> Try it <br />
                            Free Now <i className="fa-solid fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="blog__area-3 pb-140 blog__animation">
                  <div className="container">
                    <div className="row ">
                      <div className="col-xxl-12">
                        <div className="sec-title-wrapper text-anim pt-130">
                          <h2 className="sec-sub-title">Recent Blog</h2>
                          <h3 className="sec-title title-anim">
                            Read Updated <br />
                            Journal{" "}
                          </h3>
                          <p>
                            Read our blog and try to see everything from every
                            perspective. Our passion lies in making everything
                            accessible and aesthetic for everyone.
                            {/* */}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <article className="blog__item-3">
                          <div className="blog__img-wrapper-3">
                            <a href="/blog-details">
                              <div className="img-box">
                                <img
                                  alt="Blog Thumbnail"
                                  width={330}
                                  height={450}
                                  decoding="async"
                                  data-nimg={1}
                                  className="image-box__item"
                                  style={{
                                    color: "transparent",
                                    width: "auto",
                                    height: "auto",
                                  }}
                                  srcSet="image_47 1x, image_22 2x"
                                  src="image_22"
                                />
                                <img
                                  alt="Blog Thumbnail"
                                  width={330}
                                  height={450}
                                  decoding="async"
                                  data-nimg={1}
                                  className="image-box__item"
                                  style={{
                                    color: "transparent",
                                    width: "auto",
                                    height: "auto",
                                  }}
                                  srcSet="image_47 1x, image_22 2x"
                                  src="image_22"
                                />
                              </div>
                            </a>
                          </div>
                          <div className="blog__info-3">
                            <h4 className="blog__meta">
                              <a href="/category">UI Design</a> . 02 May 2019
                            </h4>
                            <h5>
                              <a className="blog__title-3" href="/blog-details">
                                How to bring fold to your startup company with
                                Axtra
                              </a>
                            </h5>
                            <a className="blog__btn" href="/blog-details">
                              Read More
                              {/* */}
                              <span>
                                <i className="fa-solid fa-arrow-right" />
                              </span>
                            </a>
                          </div>
                        </article>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <article className="blog__item-3">
                          <div className="blog__img-wrapper-3">
                            <a href="/blog-details">
                              <div className="img-box">
                                <img
                                  alt="Blog Thumbnail"
                                  width={330}
                                  height={450}
                                  decoding="async"
                                  data-nimg={1}
                                  className="image-box__item"
                                  style={{
                                    color: "transparent",
                                    width: "auto",
                                    height: "auto",
                                  }}
                                  srcSet="image_34 1x, image_24 2x"
                                  src="image_24"
                                />
                                <img
                                  alt="Blog Thumbnail"
                                  width={330}
                                  height={450}
                                  decoding="async"
                                  data-nimg={1}
                                  className="image-box__item"
                                  style={{
                                    color: "transparent",
                                    width: "auto",
                                    height: "auto",
                                  }}
                                  srcSet="image_34 1x, image_24 2x"
                                  src="image_24"
                                />
                              </div>
                            </a>
                          </div>
                          <div className="blog__info-3">
                            <h4 className="blog__meta">
                              <a href="/category">UI Design</a> . 02 May 2019
                            </h4>
                            <h5>
                              <a className="blog__title-3" href="/blog-details">
                                How to manage a talented and successful design
                                team
                              </a>
                            </h5>
                            <a className="blog__btn" href="/blog-details">
                              Read More
                              {/* */}
                              <span>
                                <i className="fa-solid fa-arrow-right" />
                              </span>
                            </a>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </section>
                <footer className="footer__area-3">
                  <div className="footer__top-3">
                    <div className="footer__top-wrapper-3">
                      <div className="footer__logo-3 pt-120">
                        <img
                          alt="Footer Logo"
                          width={100}
                          height={33}
                          decoding="async"
                          data-nimg={1}
                          style={{
                            color: "transparent",
                            width: "auto",
                            height: "auto",
                          }}
                          srcSet="image_36 1x, image_7 2x"
                          src="image_7"
                        />
                        <p>
                          When do they work well, and when do they on us and
                          finally, when do we actually need how can we avoid
                          them.
                        </p>
                      </div>
                      <div className="footer__social-3">
                        <ul>
                          <li>
                            <a href="#">facebook</a>
                          </li>
                          <li>
                            <a href="#">Twitter</a>
                          </li>
                          <li>
                            <a href="#">Linkedin</a>
                          </li>
                          <li>
                            <a href="#">Instagram</a>
                          </li>
                        </ul>
                      </div>
                      <div className="footer__contact-3">
                        <a className="end" href="/contact">
                          Let’s talk
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="footer__btm-3">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4">
                          <div className="footer__copyright-3">
                            <p>
                              © 2022 - 2025 | Alrights reserved by
                              {/* */}
                              <a href="https://wealcoder.com/">Wealcoder</a>
                            </p>
                          </div>
                        </div>
                        <div className="col-xxl-8 col-xl-8 col-lg-8">
                          <div className="footer__nav-2">
                            <ul className="footer-menu-2 menu-anim">
                              <li>
                                <a href="/about">about us</a>
                              </li>
                              <li>
                                <a href="/contact">contact</a>
                              </li>
                              <li>
                                <a href="/career">Career</a>
                              </li>
                              <li>
                                <a href="/faq">FAQs</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
