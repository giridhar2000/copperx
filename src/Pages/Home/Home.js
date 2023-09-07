import React, { useEffect } from 'react'
import "../Home/Home.css"
import banner from "../../Assets/img/HOM LP.png"
import coincards from "../../Assets/img/coin-cards.svg"
import chainstack from "../../Assets/img/chainstack.png"
import jupiter from "../../Assets/img/jupiter.svg"
import web3 from "../../Assets/img/web3conf.png"
import krater from "../../Assets/img/krater.png"
import spacekayak from "../../Assets/img/spacekayak.svg"
import ethbali from "../../Assets/img/eth-bali.svg"
import frame1 from "../../Assets/img/frame1.png"
import paymentLink from "../../Assets/img/payment-link.png"
import Cards from '../../Components/Cards/Cards'
import frame2 from "../../Assets/img/frame-2.png"
import checkout from '../../Assets/img/checkout.png'
import frame3 from "../../Assets/img/frame-3.png"
import frame4 from "../../Assets/img/frame-4.png"
import invoicing from "../../Assets/img/invoicing.png"
import payouts from "../../Assets/img/payouts.png"
import recurring from '../../Assets/img/recurring.png'
import image from "../../Assets/img/image.png"
import Currencies from '../../Components/Currencies/Currencies'
import Marquee from "react-fast-marquee";
import multinetwork from "../../Assets/img/multinetwork.svg"
import multitoken from "../../Assets/img/multitoken.svg"
import sdks from "../../Assets/img/sdks.svg"
import paymentDone from "../../Assets/img/payment-done.svg"
import accounting from "../../Assets/img/accounting.svg"
import support from "../../Assets/img/support.svg"
import fraud from "../../Assets/img/fraud.svg"
import Party from "../../Assets/img/3rd-party.svg"
import customer from "../../Assets/img/customer.svg"
import IS from "../../Assets/img/instant-settlement.svg"
import NC from "../../Assets/img/no-chargeback.svg"
import GG from "../../Assets/img/go-global.svg"
import LF from "../../Assets/img/low-fees.svg"
import logoImg from "../../Assets/img/logoImg.png"
import globe from "../../Assets/img/globe.png"
import tele from "../../Assets/img/telegram-black.svg"
import team from "../../Assets/img/team.svg"
import { Carousel } from '@trendyol-js/react-carousel';
import leftArrow from "../../Assets/img/arrow.png"
import LeftArrow from '../../Components/LeftArrow/LeftArrow'
import RightArrow from '../../Components/RightArrow/RightArrow'


export default function Home() {
    const currency1 = ["BTC", "SOLANA", "MATIC", "BRIDGE", "GATECODE-PAY", "ETH", "POLYGON", "BTC", "SOLANA", "MATIC", "BRIDGE", "GATECODE-PAY", "ETH", "POLYGON"]
    const currency2 = ["USDT", "CROSS CHAIN", "SOL", "BRIDGE", "USDC", "ETHEREUM", "COINBASE PAY", "USDT", "CROSS CHAIN", "SOL", "BRIDGE", "USDC", "ETHEREUM", "COINBASE PAY"]
    const currency3 = ["BINANCE SMART CHAIN", "BNB", "BUSD", "BINANCE PAY", "AUTO SWAP", "DAI", "BINANCE SMART CHAIN", "BNB", "BUSD", "BINANCE PAY", "AUTO SWAP", "DAI"]
        // let btn = document.getElementsByClassName("styles-module_carousel-arrow__26sRw")
        // let type = btn.getAttribute("data-direction");
        // if (type === "right") {
        //     btn.style.webkitTransform = 'rotate(' + 180 + 'deg)';
        // }

    return (
        <div className='home'>
            <div className='home-container center'>
                <h1 className='center'>Simplified payments for web3 companies</h1>
                <p>Accept crypto and fiat payments seamlessly. Get instant settlements, send payouts and manage your payments with a unified dashboard and programmable API.</p>
                <div className='btns hc-btns'>
                    <button className='gs-btn'>Get Started</button>
                    <button className='login-btn'>Developer Docs</button>
                </div>

            </div>
            <div className='home-banner center'>
                <img src={banner} alt='home-banner' />

            </div>
            <hr />
            <div className='partners center'>
                <p>Trusted by beloved Partners and Customers</p>
                <div className='partners-img'>
                    <img src={coincards} alt='coincards-img' />
                    <img src={chainstack} alt='coincards-img' />
                    <img src={jupiter} alt='coincards-img' />
                    <img src={web3} alt='coincards-img' style={{ width: "7%" }} />
                    <img src={krater} alt='coincards-img' />
                    <img src={spacekayak} alt='coincards-img' />
                    <img src={ethbali} alt='coincards-img' style={{ width: "5%" }} />
                </div>
            </div>
            <hr />

            <div className='features'>
                <div className='features-body'>
                    <div className='features-head'>
                        <div className='features-head-left'>
                            <b><p style={{ color: "#4C63ED", fontWeight: 700 }}>ONE API - MANY FEATURES</p></b>
                            <h1 style={{ margin: 0 }}>Everything you need to run & grow your business</h1>
                        </div>
                        <p className='features-head-right'>Whether you run a SaaS, E-commerce Store, Marketplace, or any other business, Copperx gives you the freedom to accept crypto payments or generate payment links and invoices, tailored to your specific payment needs.</p>

                    </div>
                </div>
            </div>

            <div className='carousal'>
                <Carousel show={3.5} slide={2} leftArrow={<LeftArrow />} rightArrow={<RightArrow />}>

                    <Cards bgImg={frame1} img={paymentLink} cardTitle={"Payment Link"} cardDesc={'The smart no-code way to get paid for your goods and services.'} link={"Live"} />
                    <Cards bgImg={frame2} img={checkout} cardTitle={"Checkout"} cardDesc={'Optimize your checkout and increase conversions with our hosted payment page, tailored for success.'} link={"Live"} />
                    <Cards bgImg={frame3} img={invoicing} cardTitle={"Invoicing"} cardDesc={'Create & send invoice to your customers in an organized way.'} link={"Live"} />
                    <Cards bgImg={frame4} img={recurring} cardTitle={"Recurring Billing"} cardDesc={'Now accept subscription payments on blockchain without writing smart contracts.'} link={"Live"} />
                    <Cards bgImg={frame1} img={payouts} cardTitle={"Payouts"} cardDesc={'Perfect solution for your marketplace, platform or sending payouts across the world.'} link={"Live"} />
                </Carousel>


            </div>
            <div className='usecase'>
                <div className='usecase-text'>
                    <h2>Have a special use case?</h2>
                    <p>We're experts at meeting niche requirements, let's work together to make it happen.</p>
                </div>
                <button className='gs-btn'>Contact us</button>
            </div>

            <div className="devdocs">
                <div className='marq'>
                    <Marquee>
                        <Currencies currency={currency1} />
                    </Marquee>
                    <Marquee>
                        <Currencies currency={currency2} />
                    </Marquee>
                    <Marquee>
                        <Currencies currency={currency3} />
                    </Marquee>

                </div>
                <img src={image} alt='api-code-img' style={{ width: "45%", margin: "10rem 2rem auto" }} />
                <div className='devdocs-text'>
                    <p style={{ color: "#4C63ED" }}>DESIGNED FOR DEVELOPERS</p>
                    <h2>Powerful APIs for developers</h2>
                    <p className='desc'>Save 1000s of hours of development time spent in integrating multiple networks, tokens and wallets. Our One API is all you need to serve all your payment needs. Just create a Checkout Session and start accepting payments.</p>
                </div>

                <button className='docs-btn'>Developer docs</button>

            </div>

            <div className='webhooks'>
                <div className='wh-body'>
                    <div className='wh'>
                        <img src={multinetwork} alt="mutinetwork-img" />
                        <h2>Support Multiple Networks</h2>
                        <p style={{ margin: 0 }}>In-built support for Ethereum, Polygon, Solana and Binance Smart Chain</p>
                    </div>
                    <div className='wh'>
                        <div>
                            <img src={multitoken} alt="multitoken-img" />
                            <h2>Support Multiple Tokens</h2>
                            <p>Accept payments in BTC, ETH, USDC, EURC, USDT, DAI, SOL and more</p>
                        </div>
                    </div>
                    <div className='wh'>
                        <div>
                            <img src={sdks} alt="multitoken-img" />
                            <h2>APIs & Integrations</h2>
                            <p>Ready to use examples, Developer Docs, and Sandbox Environment to get started.</p>
                        </div>
                    </div>
                </div>

                <div className='usecase' style={{ backgroundColor: "rgb(30,35,46)", marginBottom: "5vh", padding: 0 }}>
                    <div className='usecase-text' style={{ paddingLeft: "5vh" }}>
                        <h2 style={{ margin: 0 }}>Webhooks</h2>
                        <p style={{ color: "white" }}>Realtime updates for every event happening in your Copperx account</p>
                    </div>
                    <img src={paymentDone} alt='payment-img' />
                </div>
            </div>

            <div className='designed'>
                <div className='designed-text'>
                    <p style={{ color: "#4C63ED" }}>ONE API - MANY FEATURES</p>
                    <h2>Designed for the whole company in mind</h2>
                    <p className='desc'>Running a business requires powerful coordination across multiple teams. We have pre-build dashboards, reports, and integrations to cater needs of different teams.</p>
                </div>

                <div className='designed-imgs'>
                    <div className='di'>
                        <div>
                            <div className='di-img img1'>
                                <img src={accounting} alt='' />
                            </div>
                            <p>Ready for accounting</p>
                            <p className="di-desc">Generate reports for payment reconciliation and audit-ready financial statements.</p>
                        </div>
                    </div>
                    <div className='di'>
                        <div>
                            <div className='di-img img2'>
                                <img src={support} alt='' />
                            </div>
                            <p>Operations & Support</p>
                            <p className="di-desc">Our dashboard helps your team navigate situations and stay informed about what's happening.</p>
                        </div>
                    </div>
                    <div className='di'>
                        <div>
                            <div className='di-img img3'>
                                <img src={fraud} alt='' />
                            </div>
                            <p>AML & Fraud Detection</p>
                            <p className="di-desc">Real-time monitoring for AML to comply with local regulations.</p>
                        </div>
                    </div>
                    <div className='di'>
                        <div>
                            <div className='di-img img4'>
                                <img src={Party} alt='' />
                            </div>
                            <p>3rd Party Integrations</p>
                            <p className="di-desc">Use our powerful plugins for Shopify, WooCommerce, BigCommerce, and QuickBooks.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='global-buisness'>
                <div className='designed-text'>
                    <p style={{ color: "#4C63ED" }}>READY TO TAKE YOUR BUSINESS GLOBAL?</p>
                    <h2>Why you should accept crypto payments</h2>
                    <p className='desc'>Go global, grow your revenue, increase profit using the power of blockchain.</p>
                </div>

                <div className='gb-table'>
                    <div className='gb-row'>
                        <img src={customer} alt='' />
                        <img src={NC} alt='' />
                        <img src={GG} alt='' />
                        <img src={LF} alt='' />
                        <img src={IS} alt='' />
                    </div>
                    <div className='gb-row'>
                        <p className='gl-heading'>Access to new customer base</p>
                        <p className='gl-heading'>No Chargebacks</p>
                        <p className='gl-heading'>Go global from day one</p>
                        <p className='gl-heading'>Low fees</p>
                        <p className='gl-heading'>Instant Settlements</p>
                    </div>
                    <div className='gb-row'>
                        <p className='gl-desc'>Gain access to $1 Trillion+ crypto market and 420 million users</p>
                        <p className='gl-desc'>Receive funds in your wallets instantly using the power of blockchain</p>
                        <p className='gl-desc'>Anyone can transact with anybody across the world instantly without any intermediary</p>
                        <p className='gl-desc'>Increase your profit up to 25% due to extremely low fees</p>
                        <p className='gl-desc'>Crypto payments are irreversible by nature that eliminates fraud & chargebacks</p>
                    </div>

                </div>
            </div>

            <div className='payments'>
                <h1>Accept payments from anyone &<br /> anywhere</h1>
                <p>It's the right time to join the crypto revolution. Join Copperx Now!</p>
                <div className='btns'>
                    <button className='gs-btn'>Get Started</button>
                    <button className='login-btn'>Book a Demo</button>
                </div>
                <img src={globe} alt="" className='globe-img' />

            </div>

            <div className='footer'>
                <div className='hom-footer'>
                    <img src={logoImg} alt='logo-img' />
                    <h1 style={{ textAlign: "left" }}>Simplified Payments for Web3 Buisnesses.</h1>
                </div>

                <div className='footer-menus'>
                    <div className='ft footer-features'>
                        <h3>Features</h3>
                        <a href='/'>Payments Links</a>
                        <a href='/'>Recurring Billing</a>
                        <a href='/'>Integrations</a>
                    </div>

                    <div className='ft footer-usecase'>
                        <h3>Use-cases</h3>
                        <a href='/'>E-Commerce</a>
                        <a href='/'>Donation</a>
                        <a href='/'>Ticketing</a>
                    </div>

                    <div className='ft footer-comparison'>
                        <h3>Comparison</h3>
                        <a href='/'>vs Coinbase Commerce</a>
                        <a href='/'>vs BitPay</a>
                        <a href='/'>vs Request Finance</a>
                        <a href='/'>vs Loop Crypto</a>
                    </div>

                    <div className='ft footer-developers'>
                        <h3>Developers</h3>
                        <a href='/'>Payments Links</a>
                        <a href='/'>Recurring Billing</a>
                        <a href='/'>Integrations</a>
                    </div>

                    <div className='ft footer-resources'>
                        <h3>Resources</h3>
                        <a href='/'>Tutorials</a>
                        <a href='/'>Blog</a>
                        <a href='/'>Telegram community</a>
                    </div>

                    <div className='ft footer-about'>
                        <h3>About</h3>
                        <a href='/'>Brand kit</a>
                        <a href='/'>Change log</a>
                        <a href='/'>Contact us</a>
                        <a href='/'>Terms and condition</a>
                        <a href='/'>Privacy policy</a>
                    </div>
                </div>

                <div className='join'>
                    <div className='join-block'>
                        <h3>Join the community &rarr;</h3>
                        <img src={tele} alt="tele-img" />
                    </div>
                    <div className='join-block'>
                        <h3>Join the Team &rarr;</h3>
                        <img src={team} alt="team-img" />
                    </div>
                </div>

                <div className='ft social-media'>
                    <a href='/'>Twitter</a>
                    <a href='/'>Facebook</a>
                    <a href='/'>Instagram</a>
                    <a href='/'>Linkedin</a>
                    <a href='/'>Lenster</a>
                    <a href='/'>Youtube</a>
                    <a href='/'>Reddit</a>
                    <a href='/'>Telegram</a>
                </div>

                <div className='tech' style={{ textAlign: "left", margin: "1rem 10rem auto", color: "rgba(0,0,0,0.4", marginBottom: "5vh" }}>
                    <p>© 2023 Piers Technology</p>
                </div>

                <hr className='footer-hr'></hr>

                <div style={{ marginBottom: "4rem" }}></div>

            </div>

        </div>
    )
}
