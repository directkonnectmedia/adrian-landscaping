import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Navigation = (props) => {
  return (
    <>
      <div className="navigation-container1">
        <nav id="main-navigation" className="navigation-wrapper">
          <div className="navigation-container">
            <Link href="/">
              <a>
                <div className="navigation-logo-link">
                  <span className="navigation-logo-icon">🌳</span>
                  <span className="navigation-brand-name">
                    Adrian Landscaping
                  </span>
                </div>
              </a>
            </Link>
            <div className="navigation-desktop-menu">
              <ul className="navigation-links-list">
                <li>
                  <Link href="/">
                    <a>
                      <div className="navigation-link">
                        <span>Home</span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li>
                  <a href="Services">
                    <div className="navigation-link">
                      <span>Services</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="Gallery">
                    <div className="navigation-link">
                      <span>Gallery</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="Reviews">
                    <div className="navigation-link">
                      <span>Reviews</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="navigation-actions">
              <a href="tel:4803636207">
                <div className="navigation-phone-link">
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
                    className="navigation-action-icon"
                  >
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"></path>
                  </svg>
                  <span className="navigation-phone-text">480-363-6207</span>
                </div>
              </a>
              <a href="Quote">
                <div className="btn btn-sm btn-secondary">
                  <span>Get a Quote</span>
                </div>
              </a>
            </div>
            <button
              id="mobile-menu-open"
              aria-label="Open Menu"
              aria-expanded="false"
              className="navigation-mobile-toggle"
            >
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
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </nav>
        <div id="mobile-menu-overlay" className="navigation-mobile-overlay">
          <div className="navigation-overlay-header">
            <Link href="/">
              <a>
                <div className="navigation-logo-link">
                  <span className="navigation-logo-icon">🌳</span>
                  <span className="navigation-brand-name">
                    Adrian Landscaping
                  </span>
                </div>
              </a>
            </Link>
            <button
              id="mobile-menu-close"
              aria-label="Close Menu"
              className="navigation-mobile-close"
            >
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
                <path d="M18 6L6 18M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="navigation-overlay-content">
            <ul className="navigation-mobile-links">
              <li>
                <Link href="/">
                  <a>
                    <div className="navigation-mobile-link">
                      <span>Home</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <a href="Services">
                  <div className="navigation-mobile-link">
                    <span>Services</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="Gallery">
                  <div className="navigation-mobile-link">
                    <span>Gallery</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="Reviews">
                  <div className="navigation-mobile-link">
                    <span>Reviews</span>
                  </div>
                </a>
              </li>
            </ul>
            <div className="navigation-mobile-actions">
              <a href="tel:4803636207">
                <div className="navigation-mobile-phone">
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
                    className="navigation-action-icon"
                  >
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"></path>
                  </svg>
                  <span>480-363-6207</span>
                </div>
              </a>
              <a href="Quote">
                <div className="btn-lg btn btn-secondary">
                  <span>Get a Quote</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="navigation-container2">
          <div className="navigation-container3">
            <Script
              html={`<script defer data-name="navigation-logic">
(function(){
  const mobileOpenBtn = document.getElementById("mobile-menu-open")
  const mobileCloseBtn = document.getElementById("mobile-menu-close")
  const mobileOverlay = document.getElementById("mobile-menu-overlay")
  const mobileLinks = document.querySelectorAll(".navigation-mobile-link")

  function openMobileMenu() {
    mobileOverlay.style.display = "flex"
    document.body.style.overflow = "hidden"
    mobileOpenBtn.setAttribute("aria-expanded", "true")
  }

  function closeMobileMenu() {
    mobileOverlay.style.display = "none"
    document.body.style.overflow = ""
    mobileOpenBtn.setAttribute("aria-expanded", "false")
  }

  mobileOpenBtn.addEventListener("click", openMobileMenu)
  mobileCloseBtn.addEventListener("click", closeMobileMenu)

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu)
  })

  window.addEventListener("resize", () => {
    if (window.innerWidth > 767) {
      closeMobileMenu()
    }
  })

  let lastScroll = 0
  const navWrapper = document.getElementById("main-navigation")

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset

    if (currentScroll <= 0) {
      navWrapper.style.transform = "translateY(0)"
      return
    }

    if (currentScroll > lastScroll && !mobileOverlay.style.display === "flex") {
      navWrapper.style.transform = "translateY(-100%)"
    } else {
      navWrapper.style.transform = "translateY(0)"
    }

    lastScroll = currentScroll
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-container2 {
            display: none;
          }
          .navigation-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Navigation
