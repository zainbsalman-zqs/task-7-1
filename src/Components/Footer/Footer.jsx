import './Footer.css';
import { IoLocationSharp } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";
import { MdAddIcCall } from "react-icons/md";
import Imgfooter from "../../assets/V7-task/footerThumb1_1.webp"
import Imgfooter2 from "../../assets/V7-task/footerThumb1_2.webp"

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import heroImg from '../../assets/V7-task/logo.svg';
function Footer() {
    const card = [
        {
            icon: <IoLocationSharp />,
            title: 'Address',
            description: '4648 Rocky Road Philadelphia PA'
        },
        {
            icon: <MdMarkEmailRead />,
            title: 'SendEmail',
            description: 'info@exmple.com'
        },
        {
            icon: <MdAddIcCall />,
            title: 'Call Emergency',
            description: '+88 0123 654 99'
        }
    ];
    return (
        <footer>
            <div className='zq-cardfooter'>
                {card.map((item, index) => (
                    <div key={index} className="zq-cardfooter-item">
                        <div className='zq-iconcardfooter'>{item.icon}</div>
                        <div className="zq-textcardfooter">
                            <h3 className='zq-titlecardfooter'>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>

                ))}
            </div>
            <div className='zq-itemfooter'>
                <div className='dscrptin-zq'>
                    <img className='Img footer' src={heroImg} alt="Img footer " />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident earum a neque vel corrupti obcaecati reiciendis facere, ullam,</p>
                    <ul className='media'>
                        <li><a href='#'><FaFacebookF /></a></li>
                        <li><a href='#'><FaTwitter /></a></li>
                        <li><a href='#'><FaYoutube /></a></li>
                        <li><a href='#'><FaInstagram /></a></li>
                    </ul>
                </div>
                <div>
                    <h5>Quick Liks</h5>
                    <ul className='Quick'>
                        <li>ExtechAbout</li>
                        <li>OurServices</li>
                        <li>OurBlogs</li>
                        <li>FAQ'S</li>
                        <li>ContactUs</li>
                    </ul>
                </div>
                <div className='Recent'>
                    <h5>Recent Posts</h5>
                    <ul>
                        <li>
                            <img className='Imgfooter2' src={Imgfooter2} alt="Post 1" />
                            <div className='date-p'><span className='date'>19th April, 2024</span>
                                <p>Top 5 Most Famous Technology Trends in 2024</p></div>
                        </li>
                        <li>
                            <img src={Imgfooter} alt="Post 2" />
                            <div className='date-p'> <span className='date'>20th June, 2024</span>
                                <p>The Surfing Man Will Blow Your Mind</p></div>
                        </li>
                    </ul>

                </div>
                <div>
                    <h5>Contact Us</h5>

                    <p> <MdMarkEmailRead />info@example.com</p>
                    <p><MdAddIcCall />+208-6666-0112</p>
                    <form >
                        <input type="email" placeholder="Your email address" />
                        <label>
                            <div> <input type="checkbox" /> I agree to the <a href="#">privacy policy</a></div>
                        </label>
                    </form>
                </div>
            </div>

        </footer>
    )
}

export default Footer
