import React, { useEffect, useState } from "react";
import databiz_svg from "../../images/client-databiz.svg";
import audiophile_svg from "../../images/client-audiophile.svg";
import maker_svg from "../../images/client-maker.svg";
import meet_svg from "../../images/client-meet.svg";
import css from './main-mobile.module.css'
import backgroundMobile from '../../images/image-hero-mobile.png'
import backgroundDesktop from '../../images/image-hero-desktop.png'

export const Main = () => {

    const [mobileDevice, changeToMobile] = useState(null)

    function handleResize(){
        if(window.innerWidth >= 767){
            changeToMobile(false)
        } else{
            changeToMobile(true)
        }
    }

    // Не работает динамическая смена картинки, подправить
    useEffect(()=>{
        window.addEventListener("resize", handleResize)
    }, [])

    return(
        <main>
            <div className={css["background"]}>
               {mobileDevice ? <img id="mobile" src={backgroundMobile} alt="" /> : <img id="desktop" src={backgroundDesktop} alt="" /> }
            </div>
            <section>
                <h2>Make remote work</h2>
                <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                <button >Learn more</button>
                <footer>
                    <img src={databiz_svg} alt="" />
                    <img src={audiophile_svg} alt="" />
                    <img src={meet_svg} alt="" />
                    <img src={maker_svg} alt="" />
                </footer>
            </section>
        </main>
    )
}