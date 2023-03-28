import './inovacije.css';
import vatra from '../../components/header/assets/fire.png'
import gas from '../../components/header/assets/plin.png'
import oluja from '../../components/header/assets/thunder.gif'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { useState } from 'react';


const Inovacije = () => {
    var senzorTemp = Math.floor(Math.random() * (50 - (-10) + 1)) + 0;
    const handleTemp=()=>{
        if(senzorTemp>30){
            return "OPENED"
        }
            return "CLOSED"
            
    }

    var senzorPlin = Math.floor(Math.random() * (100 - 0 -5)) +0;
    const handleProzor=()=>{
        if(senzorPlin<50){
            return "CLOSED"
        }
            return "OPENED"
            
    }

    var stormAlert = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    const handleStorm=()=>{
        if(stormAlert==1){
            return "CLOSED"
        }
            return "OPENED"
            
    }
    return (

        <div className='wrapper'>
            
            <div className="fireP">
                <div className="fireS">
                    <img src={gas} />
                </div>
                <div className="fireParentText">

                    <div className="gornji">
                        <h1> Toxins </h1>
                        <p>An estimated 2.7 million homes across the UK are at risk from dangerous gas appliances</p>
                        <p>17000 emergency department visits for non-fire carbon monoxide-related injuries in the US in 2019.
                        Gas ranges and ovens were the source of 56%of non-fire carbon monoxide deaths in homes from 2010 to 2015.</p>
                    </div>
                    <div className="donji">
                        <div className="lijevi">
                            <h1>  {senzorPlin} %</h1>
                        </div>
                        <div className="desni">
                            <h1>{handleProzor()}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fireP">
                <div className="fireParentText">

                    <div className="gornji">
                        <h1> Thunderstorm</h1>
                        <p>Extreme weather events such as storms, hurricanes, kand tornadoes can cause significant damage to homes and property, as well as pose a threat to personal safety.</p>
                        
                        <p>After a storm or extreme weather event, homeowners should assess the damage to their property and prioritize safety, sucj as turning off electricity and gas id necessary, and contacting professionals for repairs and assistance</p>


                    </div>
                    <div className="donji">
                        <div className="lijevi">
                            <h1> {(stormAlert==0) ? 'No storm' : 'Storm'}</h1>

                        </div>
                        <div className="desni">
                        <h1>{handleStorm()}</h1>

                        </div>
                    </div>
                </div>

                <div className="fireS">
                    <img src={oluja} />
                </div>
            </div>

            <div className="fireP">

                <div className="fireS">
                    <img src={vatra} />
                </div>
                <div className="fireParentText">

                    <div className="gornji">
                        <h1>Extreme Temperature</h1>
                        <p>House fires can be devastating and pose a significant risk to personal safety and property damage.</p>
                        <p>US fire departments responded to an estimated average of 354400 home structure fires per year from 2014-2018.High temperatures can lead to heat-related illnesses, such as heat stroke, dehydrataion, and heat exhaustion. They were responsible for 9000 deaths worldwide in 2015.</p>

                    </div>
                    <div className="donji">
                    <div className="lijevi">
                            <h1>  {senzorTemp} %</h1>
                        </div>
                        <div className="desni">
                            <h1>{handleTemp()}</h1>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>


    );
}

export default Inovacije;