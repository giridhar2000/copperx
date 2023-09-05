import React from 'react'
import "../Home/Home.css"
import banner from "../../Assets/img/home-banner.png"
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

export default function Home() {
    const currency1 = ["BTC", "SOLANA", "MATIC", "BRIDGE", "GATECODE-PAY", "ETH", "POLYGON", "BTC", "SOLANA", "MATIC", "BRIDGE", "GATECODE-PAY", "ETH", "POLYGON"]
    const currency2 = ["USDT", "CROSS CHAIN", "SOL", "BRIDGE", "USDC", "ETHEREUM", "COINBASE PAY", "USDT", "CROSS CHAIN", "SOL", "BRIDGE", "USDC", "ETHEREUM", "COINBASE PAY"]
    const currency3 = ["BINANCE SMART CHAIN", "BNB", "BUSD", "BINANCE PAY", "AUTO SWAP", "DAI", "BINANCE SMART CHAIN", "BNB", "BUSD", "BINANCE PAY", "AUTO SWAP", "DAI"]

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
                <Cards bgImg={frame1} img={paymentLink} cardTitle={"Payment Link"} cardDesc={'The smart no-code way to get paid for your goods and services.'} link={"Live"} />
                <Cards bgImg={frame2} img={checkout} cardTitle={"Checkout"} cardDesc={'Optimize your checkout and increase conversions with our hosted payment page, tailored for success.'} link={"Live"} />
                <Cards bgImg={frame3} img={invoicing} cardTitle={"Invoicing"} cardDesc={'Create & send invoice to your customers in an organized way.'} link={"Live"} />
                <Cards bgImg={frame4} img={recurring} cardTitle={"Recurring Billing"} cardDesc={'Now accept subscription payments on blockchain without writing smart contracts.'} link={"Live"} />
                <Cards bgImg={frame1} img={payouts} cardTitle={"Payouts"} cardDesc={'Perfect solution for your marketplace, platform or sending payouts across the world.'} link={"Live"} />
                <div className='next-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" className="w-5 h-5 group-active:translate-x-2 transition-all duration-200 ease-linear">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />

                    </svg>
                </div>


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
                <div className='wh'>
                    <img style={{ width: "25%" }} src={multinetwork} alt="mutinetwork-img" />
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

        </div>
    )
}
