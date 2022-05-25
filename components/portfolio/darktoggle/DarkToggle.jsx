import styles from '../../../styles/DarkToggle.module.scss';

import {BsSun} from 'react-icons/bs';
import {BsMoonStars} from 'react-icons/bs';
import { useState } from 'react';

const DarkToggle = () => {
    if(typeof window !=='undefined'){
        const [light,setLight]=useState(localStorage.theme==='light'?'light':'dark');
        const switchTheme=()=>{
            if(light==='light'){
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            }else{
                document.documentElement.setAttribute('data-theme', '');
                localStorage.setItem('theme', 'dark');
            };
        };
        switchTheme();
        const toggleSwitch=(e=>{
            setLight(light==='light'?'dark':'light');
            switchTheme();
        });
        return (
            <div className={styles.dark__toggle}>
                <span id='icon'>            
                    <label className={styles.switch}>
                        <input type="checkbox" checked={typeof window !== 'undefined' ?(localStorage.theme==='light'?true:false):false} onChange={toggleSwitch}/>
                        <div className={`${styles.slider} ${styles.round}`}>{light==='light'?<BsSun className={`${styles['mode-icon']} ${styles['mode-light']}`}/>:<BsMoonStars className={styles['mode-icon']}/>}</div>
                    </label>
                </span>
            </div>
        );
    };
    return null;
};

export default DarkToggle;