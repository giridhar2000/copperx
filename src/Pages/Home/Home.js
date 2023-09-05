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

export default function Home() {
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
                        <b><p style={{color: "#4C63ED", fontWeight: 700}}>ONE API - MANY FEATURES</p></b>
                        <h1 style={{margin: 0}}>Everything you need to run & grow your business</h1>
                        </div>
                        <p className='features-head-right'>Whether you run a SaaS, E-commerce Store, Marketplace, or any other business, Copperx gives you the freedom to accept crypto payments or generate payment links and invoices, tailored to your specific payment needs.</p>
                        
                    </div>
                </div>
            </div>
            
            <div className='carousal'>
                <Cards bgImg={frame1} img={paymentLink} cardTitle={"Payment Link"} cardDesc={'The smart no-code way to get paid for your goods and services.'}  link={"Live"} />
                <Cards bgImg={frame2} img={checkout} cardTitle={"Checkout"} cardDesc={'Optimize your checkout and increase conversions with our hosted payment page, tailored for success.'}  link={"Live"} />
                <Cards bgImg={frame3} img={invoicing} cardTitle={"Invoicing"} cardDesc={'Create & send invoice to your customers in an organized way.'}  link={"Live"} />
                <Cards bgImg={frame4} img={recurring} cardTitle={"Recurring Billing"} cardDesc={'Now accept subscription payments on blockchain without writing smart contracts.'}  link={"Live"} />
                <Cards bgImg={frame1} img={payouts} cardTitle={"Payouts"} cardDesc={'Perfect solution for your marketplace, platform or sending payouts across the world.'}  link={"Live"} />
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
        </div>
    )
}