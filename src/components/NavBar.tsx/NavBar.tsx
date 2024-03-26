// import NavMenu from '../NavMenu/NavMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone as phone } from '@fortawesome/free-solid-svg-icons';
import {faMagnifyingGlass as magnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {faUser as user} from '@fortawesome/free-solid-svg-icons'
import {faBars as bars} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';
// import WaveAnimation from '../WaveAnimation/WaveAnimation';

function NavBar() {
    return(
        <div className="banner">

            <div className="phone">
                <div className="centerFlex">
                    <div className="centered textAlignCenter">
                        <Image className="logo" width={200} height={100} alt='BAIM logo' src='/logo.jpg' />
                        <p className="white larger"> +994-55-529-29-66</p>
                    </div>

                    <div className="whiteAndCyan search">
                        <input type="text" placeholder="Поиск" />
                        <span className="white"><FontAwesomeIcon className="fa-solid fa-magnifying-glass" icon={magnifyingGlass} /></span>
                    </div>
                </div>

                <div className="row">
                    <button className="whiteBtn menu">
                    <FontAwesomeIcon className="fa-solid fa-bars" icon={bars} />
                    </button>
                    <button className="whiteBtn cabinet"><FontAwesomeIcon className="fa-solid fa-user" icon={user} /></button>
                </div>
            </div>

            <div className="wave">
                <div className="center circle"></div>
                <div className="rect"></div>
                <div className="smooth"></div>
                <button className="btn circle"><FontAwesomeIcon style={{fontSize: '1rem'}} className="fa-solid fa-phone m" icon={phone} /></button>
                <div className="left circle"></div>
                <div className="right circle"></div>
            </div>
            {/* <div className="box">
                <div className='w one'></div>
                <div className='w two'></div>
                <div className='w three'></div>
            </div> */}

            
    
            {/* <div className="call">
                <div className="arrow"><i className="fa-solid fa-caret-left"></i></div>
                <img className="callingBigScreen" src="./BA.png" />
                <img className="callingSmallScreen" src="./BAA (2).png" />
                <div className="arrow"><i className="fa-solid fa-caret-right"></i></div>
            </div>  */}
    

            <div className="pcAndTablet">
                <div className="row">
                    <div className="column">
                        <div>
                        <Image className="logo" width={200} height={100} alt='BAIM logo' src='/logo.jpg' />
                            <p className="white larger"> +994-55-529-29-66</p>
                        </div> 
                        <button className="whiteAndCyan menu">
                        <span>Menu</span>
                        <span className="white"><FontAwesomeIcon className="fa-solid fa-bars" icon={bars} /></span>
                    </button>
                    </div>
                    <div className="row">
                        <div className="whiteAndCyan search">
                            <input type="text" placeholder="Поиск" />
                            <span className="white"><FontAwesomeIcon className="fa-solid fa-magnifying-glass" icon={magnifyingGlass} /></span>
                        </div>
                        <button className="whiteBtn cabinet">Личный кабинет</button>
                    </div>
                </div>
            </div>

            <div className="miniTablet">
                <div className="row">
                    <div className="centered textAlignCenter">
                        <Image className="logo" width={200} height={100} alt='BAIM logo' src='/logo.jpg' />
                        <p className="white larger"> +994-55-529-29-66</p>
                    </div>

                    <div className="whiteAndCyan search">
                        <input type="text" placeholder="Поиск" />
                        <span className="white"><FontAwesomeIcon className="fa-solid fa-magnifying-glass" icon={magnifyingGlass} /></span>
                    </div>
                </div>

                <div className="row">
                    <button className="whiteAndCyan menu">
                        <span>Menu</span>
                        <span className="white"><FontAwesomeIcon className="fa-solid fa-bars" icon={bars} /></span>
                    </button>
                    <button className="whiteBtn cabinet">Личный кабинет</button>
                </div>
            </div>
        </div>  
    )
}

export default NavBar;