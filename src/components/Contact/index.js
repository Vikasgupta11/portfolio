import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect ,useRef} from 'react'
import emailjs from '@emailjs/browser'; 
const Contact = () => {
  const [letterClass, setletterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setletterClass('text-animate-hover')
    }, 1000)
  })
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rn6qwqk', 'template_p02yy0e', form.current, 'me5mRXIcUt9LYa61o')
      .then((result) => {
          // console.log(result.text);
          alert("Mail sent SucessFully");
          window.location.reload(false);
      }, (error) => {
alert("Emial Sent Failed");
          // console.log(error.text);
      });
  };
  

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>                                                                                
            <AnimatedLetters                                              
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            I am interested in freelance oppotinities - especially ambitious or{' '}
            <br />
            large projects. However , if you have other request or question,{' '}
            <br />
            don't hesitate to contact me using below form either.
            <br />
          </p>

          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="from_name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="reply_to"
                    placeholder="Email"
                    required
                  />
                </li>

                <li>
                  <input type="text"  placeholder='Subject' name='subject'/>
                </li>
                <li>
                  <textarea name="message" placeholder="Message" ></textarea>
                </li>
                <li>
                  <input type="submit"  className='flat-button'/>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default Contact
