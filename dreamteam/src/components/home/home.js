import React from 'react'
import './home.css'
import Mt4Video from "../mt4Video";
import ForexVideo from "../forexVideo";

export default function home() {
    return (
        <div className="homeBody">
            <section className="headerSection">
                <h1>Dream Team Trading</h1>
                <button className="paypalButton">Join The Dream Team!</button>
            </section>



            <section className="aboutSection">
                <div>
                    <h3>What Is Forex?</h3>
                    <p>Forex is a portmanteau of foreign currency and exchange. Foreign exchange is the process of changing one currency into another currency for a variety of reasons, usually for commerce, trading, or tourism. According to a 2019 triennial report from the Bank for International Settlements (a global bank for national central banks), the daily trading volume for forex reached $6.6 trillion in April 2019.</p>
                </div>
                <ForexVideo embedId="dQw4w9WgXcQ" />
            </section>

            <hr></hr>

            <section className="mt4Section">
                <div>
                <h3>How to place trades on MT4</h3>
                    <p>The simplest way to open a trade in MetaTrader 4 is to use the 'Order' window and then place an instant order on the market. Select the currency pair of your choice by clicking on the 'Window' tab at the top of the MT4 platform, and then select 'New Window'.</p>
                </div>
                <Mt4Video embedId="dQw4w9WgXcQ" />
            </section>

            <hr></hr>

            <section className="disclaimerSection">
                <h2>Risk Disclaimer</h2>
                <div>
                    <p>Trading foreign exchange on margin carries a high level of risk, and may not be suitable for all investors. Before deciding to trade foreign exchange you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility exists that you could sustain a loss of some or all of your initial investment and therefore you should not invest money that you cannot afford to lose. You should be aware of all the risks associated with foreign exchange trading, and seek advice from an independent financial advisor if you have any doubts.</p>
                </div>
            </section>

            <section className="footerSection">
                <h2>Footer - Email - OtherLink - Phonenumber - Stuff</h2>
            </section>


        </div>
    )
}
