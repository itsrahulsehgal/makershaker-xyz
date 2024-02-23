import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
  <div className="w-embed">
  </div>
  <div className="content">
    <div
      data-animation="default"
      data-collapse="medium"
      data-duration={400}
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="navbar w-nav"
    >
      <div className="bottom-bg-block" />
      <div className="container w-container">
        <div className="nav-row">
          <div className="nav-col _1">
            <a
              href="./"
              aria-current="page"
              className="logo-link w-inline-block w--current"
            >
              <img
                src="https://uploads-ssl.webflow.com/62f8f19040ed720b7c4501d2/62fa49fba3e05d7f037d9e24_logotype2.svg"
                loading="lazy"
                alt=""
              />
            </a>
          </div>
          <div className="nav-col _2">
            <nav role="navigation" className="nav-menu w-nav-menu">
              <div className="navlinks-row">
                <a
                  href="index.html#about"
                  className="nav-link m_line w-nav-link"
                >
                  About
                </a>
                <a
                  href="index.html#shaker"
                  className="nav-link m_line w-nav-link"
                >
                  Borrow
                </a>
                <a href="index.html#maker" className="nav-link w-nav-link">
                  Lend
                </a>
              </div>
              <div className="nav-shadow" />
            </nav>
          </div>
          <div className="nav-col _3">
            <a href="index.html#join" className="button w-button">
              Join now
            </a>
          </div>
          <div className="menu-button w-nav-button">
            <div className="hide" />
          </div>
        </div>
      </div>
    </div>
    <div className="section _1s wf-section">
      <div className="container rel w-container">
        <img
          src="https://uploads-ssl.webflow.com/62f8f19040ed720b7c4501d2/62f99b06161d3abf7f5e4a0a_img1.png"
          loading="eager"
          width={409}
          alt=""
          className="img1 _1"
        />
        <img
          src="https://uploads-ssl.webflow.com/62f8f19040ed720b7c4501d2/62f99af7fd7b9973d65243b2_img2.png"
          loading="eager"
          width={621}
          srcSet="https://uploads-ssl.webflow.com/62f8f19040ed720b7c4501d2/62f99af7fd7b9973d65243b2_img2-p-500.png 500w, https://uploads-ssl.webflow.com/62f8f19040ed720b7c4501d2/62f99af7fd7b9973d65243b2_img2.png 1240w"
          sizes="(max-width: 767px) 100vw, (max-width: 991px) 415px, 54vw"
          alt=""
          className="img1 _2"
        />
        <img
          src="https://uploads-ssl.webflow.com/62f8f19040ed720b7c4501d2/62f99aeec55f635499298478_img3.png"
          loading="eager"
          width={456}
          alt=""
          className="img1 _3"
        />
        <img
          src="https://uploads-ssl.webflow.com/62f8f19040ed720b7c4501d2/62f99ae5b83f2dd77688935a_img4.png"
          loading="eager"
          width={482}
          alt=""
          className="img1 _4"
        />
        <img
          src="https://uploads-ssl.webflow.com/62f8f19040ed720b7c4501d2/62f99b0f094f86e7810b17f4_img5.png"
          loading="eager"
          width={401}
          alt=""
          className="img1 _5"
        />
        <div className="center-block _1">
          <div className="block1">
            <h1 className="h1">
              Unlocking equity for the next wave of NFT users
            </h1>
          </div>
          <div className="text1">
            A community platform for Makers to lend and Shakers to borrow
          </div>
          <a href="index.html#join" className="border-button w-button">
            Join now
          </a>
        </div>
      </div>
    </div>
    <div className="section _2s wf-section">
      <div className="container w-container">
        <div id="about" className="row1">
          <div className="col1 _1">
            <h5 className="h5 _1">
              It’s all about<span className="span1">Community</span>
            </h5>
          </div>
          <div className="col1">
            <h5 className="h5 reg">
              We are a financing platform for people. We appraise NFTs and
              borrowers. Providing and facilitating liquidity on fair terms so
              that value held in NFTs can be unlocked.
            </h5>
            <div className="row2">
              <div className="col2">
                <div>
                  <span className="span2">Makers</span> (community members)
                  provide liquidity on the same terms as us to vaults.
                </div>
              </div>
              <div className="col2">
                <div>
                  <span className="span2">Shakers</span> borrow on agreed terms
                  with market leading arrangements that are fair to the borrower
                  in event of non payment.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section _3s wf-section">
      <div className="container w-container">
        <div id="shaker" className="row3">
          <div className="col3 _1">
            <img
              src="https://uploads-ssl.webflow.com/62f8f19040ed720b7c4501d2/62f99bc40c74fd199abccb5d_img6.png"
              loading="lazy"
              width={563}
              srcSet="https://uploads-ssl.webflow.com/62f8f19040ed720b7c4501d2/62f99bc40c74fd199abccb5d_img6-p-500.png 500w, https://uploads-ssl.webflow.com/62f8f19040ed720b7c4501d2/62f99bc40c74fd199abccb5d_img6.png 1124w"
              sizes="(max-width: 767px) 297.7609558105469px, (max-width: 991px) 421.82763671875px, 41vw"
              alt=""
              className="img2 _1"
            />
          </div>
          <div className="col3">
            <div className="row4">
              <h2 className="h2">Shaker</h2>
              <div className="text2">Borrower*</div>
            </div>
            <div className="m-div1">
              <div className="t28 mb54">
                Clear Pricing.{" "}
                <span className="grey">Fast terms backed by us</span>
              </div>
              <div className="t28 mb54">
                Aligned Fees.{" "}
                <span className="grey">
                  No upfront. We charge the Makers a % fee
                </span>
              </div>
              <div className="t28">
                Catch you if you fall.{" "}
                <span className="grey">
                  Loan extensions and surplus returned
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id="maker" className="row3 _2">
          <div className="col3 _1 c2">
            <img
              src="https://uploads-ssl.webflow.com/62f8f19040ed720b7c4501d2/62f99bd33f7a58c51f61fb2a_img7.png"
              loading="lazy"
              width={589}
              srcSet="https://uploads-ssl.webflow.com/62f8f19040ed720b7c4501d2/62f99bd33f7a58c51f61fb2a_img7-p-500.png 500w, https://uploads-ssl.webflow.com/62f8f19040ed720b7c4501d2/62f99bd33f7a58c51f61fb2a_img7.png 1176w"
              sizes="(max-width: 767px) 249px, (max-width: 991px) 355px, 47vw"
              alt=""
              className="img2 _2"
            />
          </div>
          <div className="col3 c1">
            <div className="row4">
              <h2 className="h2">Maker</h2>
              <div className="text2">Liquidity Provider*</div>
            </div>
            <div className="m-div1 _2">
              <div className="t28 mb54">
                High quality borrowers.{" "}
                <span className="grey">
                  We focus on&nbsp;the borrower to deliver better outcomes
                </span>
              </div>
              <div className="t28">
                Clearly defined terms.{" "}
                <span className="grey">
                  Each vault has clear collateral, pricing and duration
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="join" className="section _4s wf-section">
      <div className="container _1360 w-container">
        <div className="form-div">
          <div className="form-slider">
            <div className="form-slide1">
              <div className="slide-block">
                <div className="h1-text">Pick your role</div>
                <div className="slide-btns-row">
                  <div className="slide-btn-col">
                    <a
                      data-w-id="6ac94c92-90e5-2cca-9644-c2907d696d81"
                      href="index.html#"
                      className="button sl w-button"
                    >
                      Shaker
                    </a>
                  </div>
                  <div className="slide-btn-col">
                    <a
                      data-w-id="980548b0-f248-b543-d904-142a49b75d28"
                      href="index.html#"
                      className="button sl w-button"
                    >
                      Maker
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "none" }} className="form-slide2_1">
              <div className="form-block w-form">
                <form
                  id="wf-form-Shaker-Form"
                  name="wf-form-Shaker-Form"
                  data-name="Shaker Form"
                  method="get"
                >
                  <div className="slide-block s1">
                    <div className="slide-heading-2">
                      What level of financing might you be interested in
                      obtaining?
                    </div>
                    <div className="slide-btns-row">
                      <div className="slide-btn-col">
                        <label className="radio-button-field w-radio">
                          <div className="w-form-formradioinput w-form-formradioinput--inputType-custom hide w-radio-input" />
                          <input
                            type="radio"
                            name="Shaker---Level-of-financing"
                            id="25-ETH"
                            defaultValue="<25 ETH"
                            data-name="Shaker - Level of financing"
                            required=""
                            style={{
                              opacity: 0,
                              position: "absolute",
                              zIndex: -1
                            }}
                          />
                          <span
                            data-w-id="efa33dc8-745d-4932-2bfe-f05a198b1c05"
                            className="button sl radio w-form-label"
                            htmlFor="25-ETH"
                          >
                            &lt;25 ETH
                          </span>
                        </label>
                      </div>
                      <div className="slide-btn-col">
                        <label className="radio-button-field w-radio">
                          <div className="w-form-formradioinput w-form-formradioinput--inputType-custom hide w-radio-input" />
                          <input
                            type="radio"
                            name="Shaker---Level-of-financing"
                            id="25-50-ETH"
                            defaultValue="25-50 ETH"
                            data-name="Shaker - Level of financing"
                            required=""
                            style={{
                              opacity: 0,
                              position: "absolute",
                              zIndex: -1
                            }}
                          />
                          <span
                            data-w-id="91649dc8-4190-cddd-83e7-3a1c54b67adc"
                            className="button sl radio w-form-label"
                            htmlFor="25-50-ETH"
                          >
                            25-50 ETH
                          </span>
                        </label>
                      </div>
                      <div className="slide-btn-col">
                        <label className="radio-button-field w-radio">
                          <div className="w-form-formradioinput w-form-formradioinput--inputType-custom hide w-radio-input" />
                          <input
                            type="radio"
                            name="Shaker---Level-of-financing"
                            id="50-ETH"
                            defaultValue=">50 ETH"
                            data-name="Shaker - Level of financing"
                            required=""
                            style={{
                              opacity: 0,
                              position: "absolute",
                              zIndex: -1
                            }}
                          />
                          <span
                            data-w-id="e0d694f3-4c68-7441-e3ad-f7dcc8dfbc56"
                            className="button sl radio w-form-label"
                            htmlFor="50-ETH"
                          >
                            &gt;50 ETH
                          </span>
                        </label>
                      </div>
                    </div>
                    <a
                      data-w-id="7ce6b1ef-299f-03b7-eff0-bbf5610143d5"
                      href="index.html#"
                      className="arrow-back w-inline-block"
                    >
                      <div className="svg w-embed">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.9461 13.5422C16.7556 14.312 16.8103 15.6169 16.0682 16.4567L10.5081 22.7497H42.0117C43.1098 22.7497 44 23.6732 44 24.8125C44 25.9517 43.1098 26.8753 42.0117 26.8753H11.1312L15.94 31.4108C16.7526 32.1772 16.8124 33.4818 16.0738 34.3248C15.3351 35.1678 14.0776 35.2299 13.2651 34.4635L4.65082 26.3388C4.25958 25.9698 4.02612 25.4543 4.00206 24.9063C3.978 24.3583 4.16532 23.823 4.52261 23.4186L13.1369 13.6689C13.8789 12.8291 15.1366 12.7724 15.9461 13.5422Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div style={{ display: "none" }} className="slide-block s2">
                    <div className="slide-heading-2 _2">
                      Perfect! One last step. Capture your email.
                    </div>
                    <div className="slide-btns-row">
                      <div className="slide-btn-col">
                        <input
                          type="email"
                          className="text-field w-input"
                          maxLength={256}
                          name="Shaker---Email"
                          data-name="Shaker - Email"
                          placeholder="Email"
                          id="Shaker---Email"
                          required=""
                        />
                      </div>
                      <div className="slide-btn-col _2">
                        <input
                          type="submit"
                          defaultValue="Join"
                          data-wait=""
                          className="button sl w-button"
                        />
                      </div>
                    </div>
                    <a
                      data-w-id="67b87447-d1c2-4c8a-f5b4-e8d2e1f50be7"
                      href="index.html#"
                      className="arrow-back w-inline-block"
                    >
                      <div className="svg w-embed">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.9461 13.5422C16.7556 14.312 16.8103 15.6169 16.0682 16.4567L10.5081 22.7497H42.0117C43.1098 22.7497 44 23.6732 44 24.8125C44 25.9517 43.1098 26.8753 42.0117 26.8753H11.1312L15.94 31.4108C16.7526 32.1772 16.8124 33.4818 16.0738 34.3248C15.3351 35.1678 14.0776 35.2299 13.2651 34.4635L4.65082 26.3388C4.25958 25.9698 4.02612 25.4543 4.00206 24.9063C3.978 24.3583 4.16532 23.823 4.52261 23.4186L13.1369 13.6689C13.8789 12.8291 15.1366 12.7724 15.9461 13.5422Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                </form>
                <div className="success-message w-form-done">
                  <div className="center-block">
                    <div className="slide-block scs">
                      <div className="slide-heading-3">Thank you!</div>
                      <div className="scs-text">
                        We really appreciate your time. We will get back to you
                        soon.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-form-fail">
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "none" }} className="form-slide2_2">
              <div className="form-block w-form">
                <form
                  id="wf-form-Maker-Form"
                  name="wf-form-Maker-Form"
                  data-name="Maker Form"
                  method="get"
                >
                  <div className="slide-block s1">
                    <div className="slide-heading-2">
                      What level of financing might you be interested in
                      providing?
                    </div>
                    <div className="slide-btns-row">
                      <div className="slide-btn-col">
                        <label className="radio-button-field w-radio">
                          <div className="w-form-formradioinput w-form-formradioinput--inputType-custom hide w-radio-input" />
                          <input
                            type="radio"
                            name="Maker---Level-of-financing"
                            id="50-ETH-2"
                            defaultValue="<50 ETH"
                            data-name="Maker - Level of financing"
                            required=""
                            style={{
                              opacity: 0,
                              position: "absolute",
                              zIndex: -1
                            }}
                          />
                          <span
                            data-w-id="08f0413b-be55-3571-f029-eff22fbfa531"
                            className="button sl radio w-form-label"
                            htmlFor="50-ETH-2"
                          >
                            &lt;50 ETH
                          </span>
                        </label>
                      </div>
                      <div className="slide-btn-col">
                        <label className="radio-button-field w-radio">
                          <div className="w-form-formradioinput w-form-formradioinput--inputType-custom hide w-radio-input" />
                          <input
                            type="radio"
                            name="Maker---Level-of-financing"
                            id="50-100-ETH"
                            defaultValue="50-100 ETH"
                            data-name="Maker - Level of financing"
                            required=""
                            style={{
                              opacity: 0,
                              position: "absolute",
                              zIndex: -1
                            }}
                          />
                          <span
                            data-w-id="08f0413b-be55-3571-f029-eff22fbfa536"
                            className="button sl radio w-form-label"
                            htmlFor="50-100-ETH"
                          >
                            50-100 ETH
                          </span>
                        </label>
                      </div>
                      <div className="slide-btn-col">
                        <label className="radio-button-field w-radio">
                          <div className="w-form-formradioinput w-form-formradioinput--inputType-custom hide w-radio-input" />
                          <input
                            type="radio"
                            name="Maker---Level-of-financing"
                            id="100-ETH"
                            defaultValue=">100 ETH"
                            data-name="Maker - Level of financing"
                            required=""
                            style={{
                              opacity: 0,
                              position: "absolute",
                              zIndex: -1
                            }}
                          />
                          <span
                            data-w-id="08f0413b-be55-3571-f029-eff22fbfa53b"
                            className="button sl radio w-form-label"
                            htmlFor="100-ETH"
                          >
                            &gt;100 ETH
                          </span>
                        </label>
                      </div>
                    </div>
                    <a
                      data-w-id="08f0413b-be55-3571-f029-eff22fbfa53d"
                      href="index.html#"
                      className="arrow-back w-inline-block"
                    >
                      <div className="svg w-embed">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.9461 13.5422C16.7556 14.312 16.8103 15.6169 16.0682 16.4567L10.5081 22.7497H42.0117C43.1098 22.7497 44 23.6732 44 24.8125C44 25.9517 43.1098 26.8753 42.0117 26.8753H11.1312L15.94 31.4108C16.7526 32.1772 16.8124 33.4818 16.0738 34.3248C15.3351 35.1678 14.0776 35.2299 13.2651 34.4635L4.65082 26.3388C4.25958 25.9698 4.02612 25.4543 4.00206 24.9063C3.978 24.3583 4.16532 23.823 4.52261 23.4186L13.1369 13.6689C13.8789 12.8291 15.1366 12.7724 15.9461 13.5422Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div style={{ display: "none" }} className="slide-block s2">
                    <div className="slide-heading-2 _2">
                      Perfect! One last step. Capture your email.
                    </div>
                    <div className="slide-btns-row">
                      <div className="slide-btn-col">
                        <input
                          type="email"
                          className="text-field w-input"
                          maxLength={256}
                          name="Maker-Email"
                          data-name="Maker Email"
                          placeholder="Email"
                          id="Maker-Email"
                          required=""
                        />
                      </div>
                      <div className="slide-btn-col _2">
                        <input
                          type="submit"
                          defaultValue="Join"
                          data-wait=""
                          className="button sl w-button"
                        />
                      </div>
                    </div>
                    <a
                      data-w-id="08f0413b-be55-3571-f029-eff22fbfa547"
                      href="index.html#"
                      className="arrow-back w-inline-block"
                    >
                      <div className="svg w-embed">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.9461 13.5422C16.7556 14.312 16.8103 15.6169 16.0682 16.4567L10.5081 22.7497H42.0117C43.1098 22.7497 44 23.6732 44 24.8125C44 25.9517 43.1098 26.8753 42.0117 26.8753H11.1312L15.94 31.4108C16.7526 32.1772 16.8124 33.4818 16.0738 34.3248C15.3351 35.1678 14.0776 35.2299 13.2651 34.4635L4.65082 26.3388C4.25958 25.9698 4.02612 25.4543 4.00206 24.9063C3.978 24.3583 4.16532 23.823 4.52261 23.4186L13.1369 13.6689C13.8789 12.8291 15.1366 12.7724 15.9461 13.5422Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                </form>
                <div className="success-message w-form-done">
                  <div className="center-block">
                    <div className="slide-block scs">
                      <div className="slide-heading-3">Thank you!</div>
                      <div className="scs-text">
                        We really appreciate your time. We will get back to you
                        soon.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-form-fail">
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="https://uploads-ssl.webflow.com/62f8f19040ed720b7c4501d2/62f9847647565c02c41fa45b_form-el1.svg"
            loading="eager"
            alt=""
            className="form-el _1"
          />
          <img
            src="https://uploads-ssl.webflow.com/62f8f19040ed720b7c4501d2/62f9848e2697066152d5ce7d_form-el2.svg"
            loading="eager"
            alt=""
            className="form-el _2"
          />
          <img
            src="https://uploads-ssl.webflow.com/62f8f19040ed720b7c4501d2/62f984ba430d26948f673922_form-el3.svg"
            loading="eager"
            alt=""
            className="form-el _3"
          />
        </div>
      </div>
    </div>
    <div className="section _5s wf-section">
      <div className="container w-container">
        <h2 className="h2 _2">
          The power of&nbsp;community, <span className="span3">fairness</span>{" "}
          and&nbsp;<span className="span4">trust</span>
        </h2>
        <div className="row5">
          <div className="col5 _1">
            <h5 className="h5 reg _2">
              We are moving to a world where the majority of&nbsp;assets are
              tokenized — physical, hybrid, virtual and human capital too.
              In&nbsp;short, a&nbsp;global tokenized economy.
            </h5>
          </div>
          <div className="col5">
            <div className="text3">
              At MakerShaker <span className="span2">we are creating</span>{" "}
              a&nbsp;financing platform focused on the community. One that
              provides liquidity in a fair way, directly and indirectly.
            </div>
            <div>
              <span className="span2">We believe</span> the community
              empowerment approach will help attract a new wave of NFT users.
              And liquidity should be available for the new wave of tokenized
              assets to stimulate stronger interest from the community.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    data-w-id="121f122b-1e7c-2e4d-776d-49f98bcfe920"
    className="sticky-track"
  >
    <div className="sticky-block">
      <div className="sticky-row">
        <div className="sticky-col _1">
          <div className="subtitle">Work in progress</div>
          <h5 className="h5 reg">
            We're still building out our product, but you can already get
            involved. Swipe left to see a roadmap of the fascinating journey
            we'll take together.
          </h5>
        </div>
        <div className="st-row">
          <div className="sticky-col">
            <div className="st-block">
              <div className="rel1">
                <div className="st-title">Initiation</div>
                <div>Launch &amp; build core community</div>
              </div>
              <img
                src="https://uploads-ssl.webflow.com/62f8f19040ed720b7c4501d2/62f98cd98b9dd60a7d239f00_st-el1.svg"
                loading="eager"
                alt=""
                className="st-el"
              />
            </div>
            <div className="st-date">Q3 2022</div>
          </div>
          <div className="sticky-col _2">
            <div className="st-block _2">
              <div className="rel1">
                <div className="st-title">Activation</div>
                <div>
                  Smart contract beta version launch &amp; 1st loans off
                  platform
                </div>
              </div>
              <img
                src="https://uploads-ssl.webflow.com/62f8f19040ed720b7c4501d2/62f98d1fc55f63759128a2e5_st-el2.svg"
                loading="eager"
                alt=""
                className="st-el _2"
              />
            </div>
            <div className="st-date _2">Q4 2022</div>
          </div>
          <div className="sticky-col _3">
            <div className="st-block _2">
              <div className="rel1">
                <div className="st-title">Exploration</div>
                <div>
                  Finalise V1 of RADP concept. Expand offering for Shakers &amp;
                  Makers
                </div>
              </div>
              <img
                src="https://uploads-ssl.webflow.com/62f8f19040ed720b7c4501d2/62f98d3895dcdd79473e4529_st-el3.svg"
                loading="eager"
                alt=""
                className="st-el _3"
              />
            </div>
            <div className="st-date _3">HI 2023</div>
          </div>
          <div className="sticky-col">
            <div className="st-block _3">
              <div className="rel1">
                <div className="st-title">Pioneering</div>
                <div>Beta versions of platform &amp; our RADP contract</div>
              </div>
              <img
                src="https://uploads-ssl.webflow.com/62f8f19040ed720b7c4501d2/62f98d5e8b9dd6881e23a503_st-el4.svg"
                loading="eager"
                alt=""
                className="st-el _4"
              />
            </div>
            <div className="st-date">Onwards</div>
          </div>
        </div>
        <div className="st_dots" />
      </div>
    </div>
  </div>
  <div className="content">
    <div className="section _6s wf-section">
      <div className="container w-container">
        <div className="center-block _2">
          <img
            src="https://uploads-ssl.webflow.com/62f8f19040ed720b7c4501d2/62f98f25430d26885467d4a3_comm.svg"
            loading="eager"
            alt=""
            className="comm d"
          />
          <img
            src="https://uploads-ssl.webflow.com/62f8f19040ed720b7c4501d2/62f9ae983280f277a0857ce6_comm_mob.png"
            loading="eager"
            alt=""
            className="comm m"
          />
        </div>
        <div className="t28 _2">
          The journey starts here. Follow us on Twitter or join our Discord if
          you are interested in helping unlock equity for the next wave of NFT
          users.
        </div>
        <div className="row6">
          <div className="col6 _1">
            <img
              src="https://uploads-ssl.webflow.com/62f8f19040ed720b7c4501d2/62f99bf2a3e05d67e3752f8a_img8.png"
              loading="lazy"
              width={776}
              srcSet="https://uploads-ssl.webflow.com/62f8f19040ed720b7c4501d2/62f99bf2a3e05d67e3752f8a_img8-p-500.png 500w, https://uploads-ssl.webflow.com/62f8f19040ed720b7c4501d2/62f99bf2a3e05d67e3752f8a_img8.png 1549w"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 488.9744873046875px, (max-width: 991px) 640px, 54vw"
              alt=""
              className="img8"
            />
          </div>
          <div className="col6 _2">
            <a
              href="https://discord.gg/43aaNQG8Ja"
              target="_blank"
              className="soc-btn _1 w-inline-block"
            >
              <div className="soc-ic">
                <div className="svg w-embed">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 44 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31.9295 30.9029C31.9295 30.9029 30.5961 29.321 29.4848 27.923C34.3372 26.5619 36.1892 23.5451 36.1892 23.5451C34.6706 24.5385 33.2259 25.2375 31.9295 25.7157C30.0775 26.4883 28.2995 27.0033 26.5586 27.2977C23.0026 27.9599 19.743 27.7759 16.9649 27.2609C14.8535 26.8562 13.0385 26.2675 11.5198 25.679C10.6679 25.3478 9.74183 24.9432 8.81581 24.4282C8.70468 24.3545 8.59355 24.3177 8.48244 24.2441C8.40835 24.2074 8.37131 24.1706 8.33428 24.1338C7.66753 23.7659 7.29711 23.5083 7.29711 23.5083C7.29711 23.5083 9.0751 26.4515 13.7793 27.8494C12.6681 29.2475 11.2976 30.9029 11.2976 30.9029C3.11146 30.6454 0 25.3111 0 25.3111C0 13.465 5.33393 3.86313 5.33393 3.86313C10.6679 -0.110061 15.7426 0.000305724 15.7426 0.000305724L16.1129 0.441771C9.4455 2.35479 6.37109 5.26112 6.37109 5.26112C6.37109 5.26112 7.18599 4.81964 8.55652 4.19424C12.5199 2.46516 15.6684 1.9869 16.9649 1.87653C17.1871 1.83975 17.3724 1.80295 17.5946 1.80295C19.8541 1.50865 22.4099 1.43507 25.077 1.72938C28.5957 2.13406 32.3741 3.16415 36.2263 5.26112C36.2263 5.26112 33.3001 2.50195 27.003 0.588927L27.5215 0.000305724C27.5215 0.000305724 32.5963 -0.110061 37.9301 3.86313C37.9301 3.86313 43.2641 13.465 43.2641 25.3111C43.2641 25.3111 40.1156 30.6454 31.9295 30.9029ZM14.7054 13.7225C12.594 13.7225 10.9272 15.5619 10.9272 17.8061C10.9272 20.0503 12.6311 21.8896 14.7054 21.8896C16.8168 21.8896 18.4835 20.0503 18.4835 17.8061C18.5206 15.5619 16.8168 13.7225 14.7054 13.7225ZM28.2254 13.7225C26.1141 13.7225 24.4472 15.5619 24.4472 17.8061C24.4472 20.0503 26.1512 21.8896 28.2254 21.8896C30.3368 21.8896 32.0036 20.0503 32.0036 17.8061C32.0036 15.5619 30.3368 13.7225 28.2254 13.7225Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <div>Join our Discord</div>
            </a>
            <a
              href="https://twitter.com/realMakerShaker"
              target="_blank"
              className="soc-btn w-inline-block"
            >
              <div className="soc-ic">
                <div className="svg w-embed">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 43 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M42.1814 0.0192996C40.3453 1.2896 38.3124 2.26117 36.161 2.8966C33.7957 0.229057 29.984 -0.706393 26.6166 0.55424C23.2492 1.81487 21.0424 5.00343 21.0907 8.53838V10.419C14.2471 10.593 7.76909 7.39492 3.83467 1.89989C3.83467 1.89989 -3.83467 18.8252 13.4214 26.3476C9.47265 28.9766 4.76872 30.2948 0 30.1088C17.256 39.5117 38.3467 30.1088 38.3467 8.48196C38.345 7.95813 38.2936 7.43559 38.1933 6.92107C40.1502 5.02824 41.5311 2.63842 42.1814 0.0192996Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <div>Follow us on&nbsp;Twitter</div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="section _7s wf-section">
      <div className="container _1360 w-container">
        <div className="rel">
          <div className="faq-block">
            <div className="faq-cont">
              <div className="h1-text _2">FAQ</div>
              <div id="accordion" className="accordion">
                <div className="dd active">
                  <div className="dd-toggle">
                    <div className="dd-col">
                      <h5 className="h5 reg fq">
                        What happens if I don’t repay on time?
                      </h5>
                    </div>
                    <div className="dd-cross">
                      <img
                        src="https://uploads-ssl.webflow.com/62f8f19040ed720b7c4501d2/62f994a3b83f2dd634882bad_plus.svg"
                        loading="lazy"
                        alt=""
                        className="plus"
                      />
                      <img
                        src="https://uploads-ssl.webflow.com/62f8f19040ed720b7c4501d2/62f994b018d02fd97e75e16f_minus.svg"
                        loading="lazy"
                        alt=""
                        className="minus"
                      />
                    </div>
                  </div>
                  <div className="dd-cont">
                    <div className="dd-text-block">
                      <div className="t28 _3">
                        Stuff happens! We want you to repay the loan on time,
                        but if you can not or do not want to – we will not take
                        your NFT immediately.
                        <br />
                        <br />
                        We will extend your loan by an agreed time frame and we
                        will return to you any surplus over what you owe and
                        what the NFT sells for in auction (if that becomes
                        necessary).
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dd">
                  <div className="dd-toggle">
                    <div className="dd-col">
                      <h5 className="h5 reg fq">
                        I’m interested in being a Maker, what is that exactly?
                      </h5>
                    </div>
                    <div className="dd-cross">
                      <img
                        src="https://uploads-ssl.webflow.com/62f8f19040ed720b7c4501d2/62f994a3b83f2dd634882bad_plus.svg"
                        loading="lazy"
                        alt=""
                        className="plus"
                      />
                      <img
                        src="https://uploads-ssl.webflow.com/62f8f19040ed720b7c4501d2/62f994b018d02fd97e75e16f_minus.svg"
                        loading="lazy"
                        alt=""
                        className="minus"
                      />
                    </div>
                  </div>
                  <div className="dd-cont">
                    <div className="dd-text-block">
                      <div className="t28 _3">
                        A Maker is a liquidity provider. A lender. We create
                        vaults for specific deals with clear terms. If you want
                        to provide liquidity alongside us then register below
                        and we will be in touch.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dd">
                  <div className="dd-toggle">
                    <div className="dd-col">
                      <h5 className="h5 reg fq">
                        How and when do MakerShaker earn?
                      </h5>
                    </div>
                    <div className="dd-cross">
                      <img
                        src="https://uploads-ssl.webflow.com/62f8f19040ed720b7c4501d2/62f994a3b83f2dd634882bad_plus.svg"
                        loading="lazy"
                        alt=""
                        className="plus"
                      />
                      <img
                        src="https://uploads-ssl.webflow.com/62f8f19040ed720b7c4501d2/62f994b018d02fd97e75e16f_minus.svg"
                        loading="lazy"
                        alt=""
                        className="minus"
                      />
                    </div>
                  </div>
                  <div className="dd-cont">
                    <div className="dd-text-block">
                      <div className="t28 _3">
                        We are lenders at heart. Key team members ran a
                        regulated lender for 7 years. We invest our own capital
                        alongside Makers and earn interest.
                        <br />
                        <br />
                        We also charge a fee to liquidity providers of each
                        vault, agreed in advance, but only due on repayment.
                        That fee ranges from 2-5% of the total interest charged
                        i.e. 95% of the interest goes to Makers.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dd last">
                  <div className="dd-toggle">
                    <div className="dd-col">
                      <h5 className="h5 reg fq">
                        How will community engagement be incentivised and
                        rewarded?
                      </h5>
                    </div>
                    <div className="dd-cross">
                      <img
                        src="https://uploads-ssl.webflow.com/62f8f19040ed720b7c4501d2/62f994a3b83f2dd634882bad_plus.svg"
                        loading="lazy"
                        alt=""
                        className="plus"
                      />
                      <img
                        src="https://uploads-ssl.webflow.com/62f8f19040ed720b7c4501d2/62f994b018d02fd97e75e16f_minus.svg"
                        loading="lazy"
                        alt=""
                        className="minus"
                      />
                    </div>
                  </div>
                  <div className="dd-cont">
                    <div className="dd-text-block">
                      <div className="t28 _3">
                        We don’t know yet, but we are genuine in our belief that
                        this is a fundamental aspect of our vision. We want to
                        hear from community members what they feel that should
                        look like in terms of <strong>roles</strong> and
                        rewards. <br />
                        <br />
                        We are very open. Whether that be direct financial
                        reward, priority, discounted terms or community
                        standing.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="https://uploads-ssl.webflow.com/62f8f19040ed720b7c4501d2/62f9966e18d02f676875f947_faq_el1.svg"
            loading="eager"
            alt=""
            className="faq-el _1"
          />
          <img
            src="https://uploads-ssl.webflow.com/62f8f19040ed720b7c4501d2/62f9967c750abd486ed80fd3_faq_el2.svg"
            loading="eager"
            alt=""
            className="faq-el _2"
          />
          <img
            src="https://uploads-ssl.webflow.com/62f8f19040ed720b7c4501d2/62f99685e0ceede6d59ecfe6_faq_el3.svg"
            loading="eager"
            alt=""
            className="faq-el _3"
          />
        </div>
      </div>
    </div>
    <div className="section footer wf-section">
      <div className="container w-container">
        <div className="ft-row _1">
          <div className="ft-col">
            <a
              href="index.html"
              aria-current="page"
              className="ft-logo w-inline-block w--current"
            >
              <img
                src="https://uploads-ssl.webflow.com/62f8f19040ed720b7c4501d2/62fa49b32697063ca6e08eb6_logotype.svg"
                loading="lazy"
                alt=""
              />
            </a>
          </div>
          <div className="ft-col _2">
            <div className="ft-soc-row">
              <a
                href="https://twitter.com/realMakerShaker"
                target="_blank"
                className="ft-soc-link w-inline-block"
              >
                <div className="svg w-embed">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="47.7737"
                      height="47.7737"
                      rx={8}
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M38.2202 13.6623C37.0319 14.4844 35.7162 15.1132 34.3238 15.5244C32.793 13.798 30.3262 13.1926 28.1468 14.0085C25.9675 14.8243 24.5393 16.8879 24.5705 19.1757V20.3928C20.1414 20.5055 15.949 18.4357 13.4027 14.8794C13.4027 14.8794 8.43915 25.8332 19.607 30.7016C17.0515 32.4031 14.0072 33.2562 10.9209 33.1358C22.0888 39.2213 35.7384 33.1358 35.7384 19.1392C35.7373 18.8002 35.704 18.462 35.6391 18.129C36.9056 16.904 37.7993 15.3573 38.2202 13.6623Z"
                      fill="#242D32"
                    />
                  </svg>
                </div>
              </a>
              <a
                href="https://discord.gg/43aaNQG8Ja"
                target="_blank"
                className="ft-soc-link w-inline-block"
              >
                <div className="svg w-embed">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.613281"
                      width="47.7737"
                      height="47.7737"
                      rx={8}
                      fill="white"
                    />
                    <path
                      d="M31.6644 34C31.6644 34 30.8014 32.9762 30.0822 32.0714C33.2226 31.1905 34.4212 29.2381 34.4212 29.2381C33.4384 29.881 32.5034 30.3334 31.6644 30.6429C30.4658 31.1429 29.3151 31.4762 28.1884 31.6667C25.887 32.0953 23.7774 31.9762 21.9795 31.6429C20.613 31.381 19.4384 31 18.4555 30.6191C17.9041 30.4048 17.3048 30.1429 16.7055 29.8096C16.6336 29.7619 16.5616 29.7381 16.4897 29.6905C16.4418 29.6667 16.4178 29.6429 16.3938 29.6191C15.9623 29.381 15.7226 29.2143 15.7226 29.2143C15.7226 29.2143 16.8733 31.1191 19.9178 32.0238C19.1986 32.9286 18.3116 34 18.3116 34C13.0137 33.8333 11 30.381 11 30.381C11 22.7144 14.452 16.5002 14.452 16.5002C17.9041 13.9288 21.1884 14.0002 21.1884 14.0002L21.4281 14.2859C17.113 15.524 15.1233 17.4049 15.1233 17.4049C15.1233 17.4049 15.6507 17.1192 16.5377 16.7145C19.1027 15.5954 21.1404 15.2859 21.9795 15.2145C22.1233 15.1907 22.2432 15.1668 22.387 15.1668C23.8493 14.9764 25.5034 14.9288 27.2295 15.1192C29.5068 15.3811 31.9521 16.0478 34.4452 17.4049C34.4452 17.4049 32.5514 15.6192 28.476 14.3811L28.8116 14.0002C28.8116 14.0002 32.0959 13.9288 35.5479 16.5002C35.5479 16.5002 39 22.7144 39 30.381C39 30.381 36.9623 33.8333 31.6644 34ZM20.5171 22.8811C19.1507 22.8811 18.0719 24.0715 18.0719 25.5239C18.0719 26.9763 19.1747 28.1667 20.5171 28.1667C21.8836 28.1667 22.9623 26.9763 22.9623 25.5239C22.9863 24.0715 21.8836 22.8811 20.5171 22.8811ZM29.2671 22.8811C27.9007 22.8811 26.8219 24.0715 26.8219 25.5239C26.8219 26.9763 27.9247 28.1667 29.2671 28.1667C30.6336 28.1667 31.7123 26.9763 31.7123 25.5239C31.7123 24.0715 30.6336 22.8811 29.2671 22.8811Z"
                      fill="#242D32"
                    />
                  </svg>
                </div>
              </a>
              <a
                href="http://www.linkedin.com/company/MakerShaker"
                target="_blank"
                className="ft-soc-link w-inline-block"
              >
                <div className="svg w-embed">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.226562"
                      width="47.7737"
                      height="47.7737"
                      rx={8}
                      fill="white"
                    />
                    <path
                      d="M18.3535 17.3988H13.7362C13.5313 17.3988 13.3652 17.5649 13.3652 17.7698V32.6031C13.3652 32.8081 13.5313 32.9741 13.7362 32.9741H18.3535C18.5584 32.9741 18.7245 32.8081 18.7245 32.6031V17.7698C18.7245 17.5649 18.5584 17.3988 18.3535 17.3988Z"
                      fill="#242D32"
                    />
                    <path
                      d="M16.0468 10.0251C14.3668 10.0251 13 11.3905 13 13.0686C13 14.7476 14.3668 16.1134 16.0468 16.1134C17.7255 16.1134 19.0912 14.7475 19.0912 13.0686C19.0913 11.3905 17.7255 10.0251 16.0468 10.0251Z"
                      fill="#242D32"
                    />
                    <path
                      d="M30.0976 17.0303C28.2431 17.0303 26.8722 17.8275 26.0407 18.7333V17.7699C26.0407 17.5651 25.8747 17.3989 25.6698 17.3989H21.2479C21.043 17.3989 20.877 17.5651 20.877 17.7699V32.6033C20.877 32.8082 21.043 32.9742 21.2479 32.9742H25.8551C26.06 32.9742 26.2261 32.8082 26.2261 32.6033V25.2642C26.2261 22.7911 26.8978 21.8276 28.6218 21.8276C30.4993 21.8276 30.6485 23.3722 30.6485 25.3914V32.6033C30.6485 32.8083 30.8146 32.9743 31.0195 32.9743H35.6284C35.8333 32.9743 35.9994 32.8083 35.9994 32.6033V24.467C35.9994 20.7896 35.2982 17.0303 30.0976 17.0303Z"
                      fill="#242D32"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="ft-row">
          <div className="ft-col">
            <div className="ft-text">Copyright 2022. MakerShaker</div>
          </div>
          <div className="ft-col _2">
            <div className="ft-text">
              <a href="policy" className="ft-text">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="cookie_notification" className="bottom__cookie-block">
    <div className="ck-text">
      We use cookies to personalize content, ads and analyze site traffic.
    </div>
    <a href="index.html#" className="button cookie_accept w-button">
      Accept
    </a>
  </div>
  {/*[if lte IE 9]><![endif]*/}
  {/* Slick slider */}
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
  />
  {/* Cookie */}
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n      .show_block {\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        display: flex;\n      }\n    "
    }}
  />
  {/* FAQ */}
</>

  )
}

export default App
