import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import CertificateImage from '../public/components/certificate-image'
import Header from '../public/components/header'

export default function Home() {
  const imageList = [
    {
      localSrc: "/src/img/kotlin.svg",
      remoteSrc: "#"
    },
    {
      localSrc: "/src/img/solid.svg",
      remoteSrc: "#"
    },
    {
      localSrc: "/src/img/dart.svg",
      remoteSrc: "#"
    }
  ]

  const [name, setName] = useState();
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('http://localhost:3000/api/profile')
      .then(response => response.json())
      .then(data => {
        setName(data.name)
        setAvatar(data.avatar)
      });
  }, []);

  return (
    <>
       <Head>
          <meta charset="UTF-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Biodata</title>
       </Head>
       <Header/>
      <section id="home" className="home-section">
          <div className="container">
              <div className="home-section2">
                  <div className="home-section3">
                      <h1 className="greet">Hi Guys! 👋, <span
                              className="greet2">I am {name}</span>
                      </h1>
                      <h2 className="h2-greet">Informathic College Student </h2>
                      <p className="p-greet">Ahmad Dahlan University, Yogyakarta</p>
                      <a href="#contact"
                          className="greet-contact">Contact
                          Me </a>
                  </div>
                  <div className="img-main">
                      <div className="img-second">
                          {avatar && (<Image src={avatar} alt="Salih Arya Gumilang" className="img-third" width={1920} height={1371}/>)}
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section id="about" className="about-section">
        <div className="container">
            <div className="about-section2">
                <div className="about-section3">
                    <h4 className="about-h4">About Me</h4>
                    <h2 className="about-h2">You can call me arya!</h2>
                    <p className="about-p">Hello, my name is {name}. I was born in Surakarta, January 2001. I&apos;m currently studying at UAD Yogyakarta
                    majoring in Informatics Engineering</p>
                </div>
                <div className="friend-main">
                    <h3 className="friend-h3">Let&apos;s be friend</h3>
                    <p className="friend-p">If you want to know more, please click social media links below</p>
                    <div className="social-media">
                        <a href="https://www.linkedin.com/in/aryagumilang" target="_blank" className="linkedin-icon">
                            <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <title>LinkedIn</title>
                                <path
                                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <a href="https://www.facebook.com/arya2001/" target="_blank" className="fb-icon">
                            <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <title>Facebook</title>
                                <path
                                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/saliharya/" target="_blank" className="ig-icon">
                            <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <title>Instagram</title>
                                <path
                                    d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section id="education" className="education-main">
        <div className="container">
            <div className="education-second">
                <div className="education-third">
                    <h4 className="education-h4">Education</h4>
                    <h2 className="education-h2">Recent Education</h2>
                    <p className="education-p">Now I&apos;m studying at UAD Yogyakarta majoring in Informatics Engineering. Why did I choose this major? Because I aspire to
                    be a good programmer, especially as a Back-End Developer.</p>
                </div>
            </div>
            <div className="education1">
                <div className="education2">
                    <div className="education3">
                        <Image src="/src/img/UAD.png" alt="UAD Yogyakarta" width={100} height={100}/>
                    </div>
                    <h3 className="education-h3">Ahmad Dahlan University, Yogyakarta</h3>
                    <p className="education-p2">Bachelor of Information Technology</p>
                </div>
                <div className="education2">
                    <div className="education3">
                        <Image src="/src/img/SMTI.png" alt="SMK SMTI Yogyakarta" width={100} height={100}/>
                    </div>
                    <h3 className="education-h3">SMK SMTI, Yogyakarta</h3>
                    <p className="education-p2">Field of Study in Industrial Chemistry</p>
                </div>
            </div>
        </div>
      </section>
      <section id="certificates" className="certificate-section">
        <div className="container">
            <div className="certificate-detail-main">
                <div className="certificate-detail-second">
                    <h4 className="certificate-detail-h4">Course</h4>
                    <h2 className="certificate-detail-h2">Certificate</h2>
                    <p className="certificate-detail-p">These are some online courses I have completed</p>
                </div>

            </div>
            <div className="svg-certificate">
                <div className="svg-certificate-second">
                    {imageList.map((image) => 
                      <CertificateImage key={image.localSrc} src={image.localSrc} href={image.remoteSrc}/>
                    )}
                </div>
            </div>
        </div>
      </section>
      <section id="contact" className="contact-section">
        <div className="container">
            <div className="contact-section-main">
                <div className="contact-section-second">
                    <h4 className="contact-section-h4">Contact</h4>
                    <h2 className="contact-section-h2">Contact Me</h2>
                        <p className="contact-section-p">If you want to tell me something, please contact me 😊</p>
                </div>
            </div>
            <form>
                <div className="form-main">
                    <div className="form-item">
                        <label htmlFor="name" className="form-label-style">Name</label>
                        <input type="text" id="name"
                            className="form-item-style"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="Email" className="form-label-style">Email</label>
                        <input type="email" id="email"
                            className="form-item-style"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="message" className="form-label-style">Message</label>
                        <textarea type="text" id="message"
                            className="text-area-style"></textarea>
                    </div>
                    <div className="form-button">
                        <button
                            className="button-text">
                            Send
                        </button>
                    </div>
                </div>
            </form>
        </div>
      </section>
       <footer className="footer-main">
        <div className="container">
            <div className="icon">
                <div className="icon-second">
                    <a href="https://www.linkedin.com/in/aryagumilang" target="_blank"
                        className="svg-linkedin">
                        <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <title>LinkedIn</title>
                            <path
                                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>
                    <a href="https://www.facebook.com/arya2001/" target="_blank"
                        className="svg-fb">
                        <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <title>Facebook</title>
                            <path
                                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/saliharya/" target="_blank"
                        className="svg-ig">
                        <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <title>Instagram</title>
                            <path
                                d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                        </svg>
                    </a>
                </div>
                <p className="copyright">When You Stop Learning, You Stop Growing.
                    Created With ❤️ <a href="https://www.instagram.com/saliharya/" target="_blank"
                        className="copyright-name">Salih Arya Gumilang</a></p>
            </div>
        </div>
     </footer>
    </>
  )
}
