import React from "react";
import databiz_svg from "../../images/client-databiz.svg";
import audiophile_svg from "../../images/client-audiophile.svg";
import maker_svg from "../../images/client-maker.svg";
import meet_svg from "../../images/client-meet.svg";
import background_png from '../../images/image-hero-mobile.png'
import css from './main-mobile.module.css'

export const Main = () => {
    return(
        <main>
            <img src={background_png} className={css["background"]} alt="" />
            <section>
            <h2>Make remote work</h2>
            <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
            <button>Learn more</button>
            </section>
            <footer>
            <img src={databiz_svg} alt="" />
            <img src={audiophile_svg} alt="" />
            <img src={meet_svg} alt="" />
            <img src={maker_svg} alt="" />
            </footer>
        </main>
    )
}