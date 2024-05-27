import Image from 'next/image'
import css from '../styles/Hero.module.css'
import Cherry from '../assets/Cherry.png'
export default function Hero() {
    return(
        <div className='css.container'>
            
            <div className={css.container}>
                <div className={css.cherryDiv}>
                    <span>More than Faster</span>
                    <Image src={Cherry} alt='' width={40} height={25}></Image>
                </div>
            </div>

            <div className={css.rightSide}>
                21
            </div>
        </div>
    )
}