import Image from 'next/image'
import css from '../styles/Hero.module.css'
import Cherry from '../assets/Cherry.png'
import {UilPhone} from '@iconscout/react-unicons'
import Pizza1 from '../assets/p1.jpg'
import HeroImage from '../assets/HeroImage.png'

export default function Hero() {
    return (
        <div className={css.container}>
            <div className={css.left}>

                <div className={css.cherryDiv}>
                    <span>More than Faster</span>
                    <Image src={Cherry} alt='' width={40} height={25}></Image>
                </div>

                <div className={css.heroText}>
                    <span>Be The Fastest</span>
                    <span>In Delivering</span>
                    <span>
                        Your <span style={{ color: "var(--themeRed" }}>Pizza</span>
                    </span>
                </div>

                <span className={css.miniText}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                </span>

                <button className={`btn ${css.btn}`}>
                    Get Started
                </button>
            </div>


            <div className={css.right}>
                <div className={css.imageContainer}>
                    <Image src={HeroImage} alt='' layout='intrinsic'></Image>
                </div>

                <div className={css.ContactUs}>
                    <span>Contact us</span>
                    <div>
                        <UilPhone color="white"></UilPhone>
                    </div>
                </div>

                <div className={css.Pizza}>
                    <div>
                        <Image src={Pizza1} alt='' objectFit='cover' layout='intrinsic'></Image>
                    </div>

                    <div className={css.details}>
                        <span>Italian Pizza</span>
                        <span> <span style={{color: "var(--themeRed)"}}>$</span> 7.49</span>
                    </div>
                </div>
            </div>
        </div>
    )
}