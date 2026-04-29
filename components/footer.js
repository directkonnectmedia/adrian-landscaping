import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <div className="footer-container1">
        <footer className="footer-section">
          <div className="footer-container">
            <div className="footer-grid">
              <div className="footer-brand-col footer-column">
                <div className="footer-logo-wrapper">
                  <span aria-hidden="true" className="footer-logo-icon">
                    🌳
                  </span>
                  <span className="footer-logo-text">Adrian Landscaping</span>
                </div>
                <p className="footer-description">
                  Expert landscaping, yard maintenance, and full remodels
                  designed to transform your yard into a breathtaking oasis.
                  Crafted outdoor living, built to last.
                </p>
                <div className="footer-socials">
                  <a href="#">
                    <div aria-label="Facebook" className="footer-social-link">
                      <svg
                        fill="none"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2z"></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="Instagram" className="footer-social-link">
                      <svg
                        fill="none"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                          width="20"
                          height="20"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className="footer-column footer-links-col">
                <h3 className="footer-heading">Quick Links</h3>
                <ul className="footer-list">
                  <li className="footer-list-item">
                    <a href="#">
                      <div className="footer-link">
                        <span>Home</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#">
                      <div className="footer-link">
                        <span>Services</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#">
                      <div className="footer-link">
                        <span>Gallery</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#">
                      <div className="footer-link">
                        <span>Reviews</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#">
                      <div className="footer-link">
                        <span>Get a Quote</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-column footer-contact-col">
                <h3 className="footer-heading">Contact Us</h3>
                <ul className="footer-list">
                  <li className="footer-list-item">
                    <div className="footer-contact-item">
                      <div className="footer-contact-icon">
                        <svg
                          fill="none"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </div>
                      <a href="tel:4803636207">
                        <div className="footer-link">
                          <span>480-363-6207</span>
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="footer-list-item">
                    <div className="footer-contact-item">
                      <div className="footer-contact-icon">
                        <svg
                          fill="none"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="2"
                            y="4"
                            rx="2"
                            width="20"
                            height="16"
                          ></rect>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                      </div>
                      <a href="mailto:info@adrianlandscaping.com?subject=">
                        <div className="footer-link">
                          <span>info@adrianlandscaping.com</span>
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="footer-list-item">
                    <div className="footer-contact-item">
                      <div className="footer-contact-icon">
                        <svg
                          fill="none"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                          <circle r="3" cx="12" cy="10"></circle>
                        </svg>
                      </div>
                      <span className="footer-contact-text">
                        Serving Arizona &amp; Surrounding Areas
                      </span>
                    </div>
                  </li>
                </ul>
                <div className="footer-cta-wrapper">
                  <a href="#">
                    <div className="footer-btn btn-lg btn btn-secondary">
                      <span>Get a Quote</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-divider"></div>
              <div className="footer-bottom-content">
                <p className="footer-copyright">
                  &amp;copy; 2026 Adrian Landscaping. All Rights Reserved.
                </p>
                <div className="footer-legal">
                  <a href="#">
                    <div className="footer-legal-link">
                      <span>Privacy Policy</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer-legal-link">
                      <span>Terms of Service</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer-container2">
          <div className="footer-container3">
            <Script
              html={`<script defer data-name="footer-scroll-reveal">
(function(){
  const footerSection = document.querySelector(".footer-section")

  const observerOptions = {
    root: null,
    threshold: 0.1,
  }

  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible")
        footerObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  if (footerSection) {
    footerObserver.observe(footerSection)
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
          .footer-container2 {
            display: none;
          }
          .footer-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Footer
