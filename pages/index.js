import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Adrian Landscape</title>
          <meta property="og:title" content="Adrian Landscape" />
          <link
            rel="canonical"
            href="https://dapper-regular-fish-d9lv0y.teleporthq.site/"
          />
          <meta
            property="og:url"
            content="https://dapper-regular-fish-d9lv0y.teleporthq.site/"
          />
        </Head>
        <Navigation></Navigation>
        <section className="hero-section">
          <div className="hero-background">
            <img
              alt="Lush park background"
              src="https://images.pexels.com/photos/12314823/pexels-photo-12314823.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="hero-img"
            />
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-container">
            <div className="hero-content">
              <h1 className="hero-title home-hero-title">
                <span>
                  {' '}
                  Crafted Outdoor Living,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-thq-hero-accent-elm">Built to Last</span>
              </h1>
              <p className="home-hero-subtitle hero-subtitle">
                Expert landscaping, yard maintenance, and full remodels designed
                to transform your yard into a breathtaking oasis.
              </p>
              <div className="hero-actions">
                <a href="#quote-wizard">
                  <div className="btn-lg btn btn-secondary">
                    <span>Request a Free Quote</span>
                  </div>
                </a>
                <a href="#services">
                  <div className="btn-lg btn btn-outline">
                    <span>View Our Services</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="trust-section">
          <div className="trust-container">
            <div className="trust-grid">
              <div className="reveal-on-scroll trust-item">
                <div className="trust-icon-wrapper">
                  <svg
                    fill="none"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="trust-title">Expert Quality</h3>
                <p className="section-content">
                  Premium craftsmanship in every detail.
                </p>
              </div>
              <div className="reveal-on-scroll trust-item">
                <div className="trust-icon-wrapper">
                  <svg
                    fill="none"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
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
                <h3 className="trust-title">Locally Owned</h3>
                <p className="section-content">
                  Serving our community with pride.
                </p>
              </div>
              <div className="reveal-on-scroll trust-item">
                <div className="trust-icon-wrapper">
                  <svg
                    fill="none"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle r="10" cx="12" cy="12"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h3 className="trust-title">On-Time Completion</h3>
                <p className="section-content">
                  Reliable schedules you can trust.
                </p>
              </div>
              <div className="reveal-on-scroll trust-item">
                <div className="trust-icon-wrapper">
                  <svg
                    fill="none"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    <rect x="8" y="2" rx="1" ry="1" width="8" height="4"></rect>
                    <path d="M9 14h6"></path>
                    <path d="M9 18h6"></path>
                    <path d="M9 10h6"></path>
                  </svg>
                </div>
                <h3 className="trust-title">Free On-Site Estimates</h3>
                <p className="section-content">
                  Transparent pricing with no obligation.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="services-section">
          <div className="services-row reveal-on-scroll">
            <div className="services-media">
              <img
                alt="Yard Maintenance"
                src="https://images.pexels.com/photos/30517620/pexels-photo-30517620.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="service-img"
              />
            </div>
            <div className="services-info">
              <div className="service-card">
                <h2 className="section-title">Yard Maintenance</h2>
                <p className="section-content">
                  Keep your outdoor space looking pristine year-round with our
                  comprehensive maintenance plans.
                </p>
              </div>
            </div>
          </div>
          <div className="services-row reveal-on-scroll reverse">
            <div className="services-info">
              <div className="service-card">
                <h2 className="section-title">Tree Trimming</h2>
                <p className="section-content">
                  Expert tree care to ensure the health and beauty of your
                  landscape through safe pruning and shaping.
                </p>
              </div>
            </div>
            <div className="services-media">
              <img
                alt="Tree Trimming"
                src="https://images.pexels.com/photos/34380472/pexels-photo-34380472.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="service-img"
              />
            </div>
          </div>
          <div className="services-row reveal-on-scroll">
            <div className="services-media">
              <img
                alt="Full Yard Remodel"
                src="https://images.pexels.com/photos/17460104/pexels-photo-17460104.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="service-img"
              />
            </div>
            <div className="services-info">
              <div className="service-card">
                <h2 className="section-title">Full Yard Remodel</h2>
                <p className="section-content">
                  Contact us today for a full Yard Remodel. Tell us what you
                  want, and Adrian can give you his input and we can get
                  something started for you.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="gallery-section">
          <div className="gallery-grid">
            <div className="gallery-item reveal-on-scroll">
              <img
                alt="Project 1"
                src="https://images.pexels.com/photos/32363063/pexels-photo-32363063.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="gallery-img"
              />
              <div className="gallery-overlay">
                <span className="gallery-tag">Yard Maintenance</span>
              </div>
            </div>
            <div className="gallery-item reveal-on-scroll">
              <img
                alt="Project 2"
                src="https://images.pexels.com/photos/5864701/pexels-photo-5864701.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="gallery-img"
              />
              <div className="gallery-overlay">
                <span className="gallery-tag">Full Remodel</span>
              </div>
            </div>
            <div className="gallery-item reveal-on-scroll">
              <img
                alt="Project 3"
                src="https://images.pexels.com/photos/2832040/pexels-photo-2832040.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="gallery-img"
              />
              <div className="gallery-overlay">
                <span className="gallery-tag">Tree Trimming</span>
              </div>
            </div>
            <div className="gallery-item reveal-on-scroll">
              <img
                alt="Project 4"
                src="https://images.pexels.com/photos/23883505/pexels-photo-23883505.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="gallery-img"
              />
              <div className="gallery-overlay">
                <span className="gallery-tag">Full Remodel</span>
              </div>
            </div>
            <div className="gallery-item reveal-on-scroll">
              <img
                alt="Project 5"
                src="https://images.pexels.com/photos/25324586/pexels-photo-25324586.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="gallery-img"
              />
              <div className="gallery-overlay">
                <span className="gallery-tag">Yard Maintenance</span>
              </div>
            </div>
            <div className="gallery-item reveal-on-scroll">
              <img
                alt="Project 6"
                src="https://images.pexels.com/photos/36750187/pexels-photo-36750187.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="gallery-img"
              />
              <div className="gallery-overlay">
                <span className="gallery-tag">Tree Trimming</span>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials-section">
          <div className="testimonials-container">
            <div className="testimonials-grid">
              <div className="reveal-on-scroll testimonial-card">
                <div className="stars">
                  <svg
                    fill="currentColor"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    stroke="none"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="currentColor"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    stroke="none"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="currentColor"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    stroke="none"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="currentColor"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    stroke="none"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="currentColor"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    stroke="none"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <p className="section-content">
                  &quot;Adrian&apos;s team did an incredible job with our tree
                  trimming. Professional, safe, and our oaks look healthier than
                  ever.&quot;
                </p>
                <span className="testimonial-author">— Sarah J.</span>
              </div>
              <div className="reveal-on-scroll testimonial-card">
                <div className="stars">
                  <svg
                    fill="currentColor"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    stroke="none"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="currentColor"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    stroke="none"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="currentColor"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    stroke="none"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="currentColor"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    stroke="none"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="currentColor"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    stroke="none"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <p className="section-content">
                  &quot;The full yard remodel was a seamless process. Adrian
                  listened to every detail and turned our boring lawn into a
                  paradise.&quot;
                </p>
                <span className="testimonial-author">— Michael R.</span>
              </div>
              <div className="reveal-on-scroll testimonial-card">
                <div className="stars">
                  <svg
                    fill="currentColor"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    stroke="none"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="currentColor"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    stroke="none"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="currentColor"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    stroke="none"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="currentColor"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    stroke="none"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    fill="currentColor"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    stroke="none"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <p className="section-content">
                  &quot;Reliable and consistent yard maintenance. It&apos;s so
                  nice to come home to a perfectly manicured lawn every
                  week.&quot;
                </p>
                <span className="testimonial-author">— Emily W.</span>
              </div>
            </div>
          </div>
        </section>
        <section id="quote-wizard" className="wizard-section">
          <div className="wizard-container">
            <div className="wizard-card reveal-on-scroll">
              <div className="wizard-progress-container">
                <div
                  id="wizard-progress-bar"
                  className="wizard-progress-bar"
                ></div>
              </div>
              <form
                id="quote-form"
                action="/submit"
                method="POST"
                data-form-id="3c96a3f4-0244-4c3e-940e-7aaf4a8963ca"
              >
                <div data-step="1" className="wizard-step active">
                  <h2 className="section-title">Select Services</h2>
                  <div className="wizard-options">
                    <label className="wizard-option">
                      <input
                        type="checkbox"
                        id="thq_service_WDnu"
                        name="service"
                        value="Yard Maintenance"
                        data-form-field-id="thq_service_WDnu"
                      />
                      <span>Yard Maintenance</span>
                    </label>
                    <label className="wizard-option">
                      <input
                        type="checkbox"
                        id="thq_service_6Gry"
                        name="service"
                        value="Tree Trimming"
                        data-form-field-id="thq_service_6Gry"
                      />
                      <span>Tree Trimming</span>
                    </label>
                    <label className="wizard-option">
                      <input
                        type="checkbox"
                        id="thq_service_Ifwg"
                        name="service"
                        value="Full Yard Remodel"
                        data-form-field-id="thq_service_Ifwg"
                      />
                      <span>Full Yard Remodel</span>
                    </label>
                    <label className="wizard-option">
                      <input
                        type="checkbox"
                        id="thq_service_6b3v"
                        name="service"
                        value="Other"
                        data-form-field-id="thq_service_6b3v"
                      />
                      <span>Other</span>
                    </label>
                  </div>
                  <div className="wizard-nav">
                    <button
                      id="thq_button_-xcM"
                      name="button"
                      type="button"
                      data-form-field-id="thq_button_-xcM"
                      className="btn btn-secondary next-step"
                    >
                      Continue
                    </button>
                  </div>
                </div>
                <div data-step="2" className="wizard-step">
                  <h2 className="section-title">Project Details</h2>
                  <textarea
                    id="thq_details_XRbx"
                    name="details"
                    required="true"
                    minlength="10"
                    placeholder="Tell us more about your project..."
                    data-form-field-id="thq_details_XRbx"
                  ></textarea>
                  <div className="wizard-nav">
                    <button
                      id="thq_button_WAhG"
                      name="button"
                      type="button"
                      data-form-field-id="thq_button_WAhG"
                      className="btn prev-step btn-outline"
                    >
                      Back
                    </button>
                    <button
                      id="thq_button_zPkr"
                      name="button"
                      type="button"
                      data-form-field-id="thq_button_zPkr"
                      className="btn btn-secondary next-step"
                    >
                      Continue
                    </button>
                  </div>
                </div>
                <div data-step="3" className="wizard-step">
                  <h2 className="section-title">Timeline</h2>
                  <div className="wizard-options">
                    <label className="wizard-option">
                      <input
                        type="radio"
                        id="thq_timeline_Jx1P"
                        name="timeline"
                        value="ASAP"
                        required="true"
                        data-form-field-id="thq_timeline_Jx1P"
                      />
                      <span>ASAP</span>
                    </label>
                    <label className="wizard-option">
                      <input
                        type="radio"
                        id="thq_timeline_n-x0"
                        name="timeline"
                        value="1-3 Months"
                        data-form-field-id="thq_timeline_n-x0"
                      />
                      <span>1-3 Months</span>
                    </label>
                    <label className="wizard-option">
                      <input
                        type="radio"
                        id="thq_timeline_6Ahr"
                        name="timeline"
                        value="Flexible"
                        data-form-field-id="thq_timeline_6Ahr"
                      />
                      <span>Flexible</span>
                    </label>
                  </div>
                  <div className="wizard-nav">
                    <button
                      id="thq_button_qDfA"
                      name="button"
                      type="button"
                      data-form-field-id="thq_button_qDfA"
                      className="btn prev-step btn-outline"
                    >
                      Back
                    </button>
                    <button
                      id="thq_button_PEeK"
                      name="button"
                      type="button"
                      data-form-field-id="thq_button_PEeK"
                      className="btn btn-secondary next-step"
                    >
                      Continue
                    </button>
                  </div>
                </div>
                <div data-step="4" className="wizard-step">
                  <h2 className="section-title">Contact Info</h2>
                  <div className="wizard-inputs">
                    <input
                      type="text"
                      id="thq_true_XE5W"
                      name="true"
                      required="true"
                      placeholder="Your Name"
                      data-form-field-id="thq_true_XE5W"
                    />
                    <input
                      type="email"
                      id="thq_email_nfOj"
                      name="email"
                      required="true"
                      placeholder="Your Email"
                      data-form-field-id="thq_email_nfOj"
                    />
                    <input
                      type="tel"
                      id="thq_phone_lcHx"
                      name="phone"
                      required="true"
                      placeholder="480-363-6207"
                      data-form-field-id="thq_phone_lcHx"
                    />
                  </div>
                  <div className="wizard-nav">
                    <button
                      id="thq_button_3Hgz"
                      name="button"
                      type="button"
                      data-form-field-id="thq_button_3Hgz"
                      className="btn prev-step btn-outline"
                    >
                      Back
                    </button>
                    <button
                      id="thq_button_tJVR"
                      name="button"
                      type="submit"
                      data-form-field-id="thq_button_tJVR"
                      className="btn btn-secondary"
                    >
                      Submit Quote
                    </button>
                  </div>
                </div>
              </form>
              <div id="wizard-success" className="wizard-step">
                <div className="success-content">
                  <div className="success-icon">
                    <svg
                      fill="none"
                      width="64"
                      xmlns="http://www.w3.org/2000/svg"
                      height="64"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h2 className="section-title">Thank You!</h2>
                  <p className="section-content">
                    Your request has been received. Adrian will contact you
                    shortly.
                  </p>
                  <p className="section-content">
                    For immediate assistance, please call:
                  </p>
                  <a href="tel:4803636207">
                    <div className="success-phone">
                      <span>480-363-6207</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="final-cta-section">
          <div className="cta-container">
            <div className="cta-content">
              <h2 className="section-title">
                Ready to transform your outdoor space?
              </h2>
              <div className="cta-actions">
                <a href="#quote-wizard">
                  <div className="btn-lg btn btn-secondary">
                    <span>Request a Free Quote</span>
                  </div>
                </a>
                <a href="tel:4803636207">
                  <div className="cta-phone">
                    <span>Call Now: 480-363-6207</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<style>
        @keyframes fadeIn {from {opacity: 0;}
to {opacity: 1;}}@keyframes fadeInDown {from {opacity: 0;
transform: translateY(-30px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes fadeInUp {from {opacity: 0;
transform: translateY(30px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="home-container4">
          <div className="home-container5">
            <Script
              html={`<script defer data-name="wizard-and-reveal">
(function(){
  // Scroll Reveal Animation
  const revealElements = document.querySelectorAll(".reveal-on-scroll")

  const revealOnScroll = () => {
    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect()
      const isVisible = rect.top <= window.innerHeight * 0.85
      if (isVisible) {
        el.classList.add("active")
      }
    })
  }

  window.addEventListener("scroll", revealOnScroll)
  revealOnScroll() // Initial check

  // Multi-Step Wizard Logic
  const form = document.getElementById("quote-form")
  const successScreen = document.getElementById("wizard-success")
  const progressBar = document.getElementById("wizard-progress-bar")
  const nextBtns = document.querySelectorAll(".next-step")
  const prevBtns = document.querySelectorAll(".prev-step")
  const steps = document.querySelectorAll(".wizard-step")

  let currentStep = 1
  const totalSteps = 4

  const updateWizard = () => {
    steps.forEach((step) => {
      step.classList.remove("active")
      if (step.dataset.step == currentStep) {
        step.classList.add("active")
      }
    })

    const progress = (currentStep / totalSteps) * 100
    progressBar.style.width = \`\${progress}%\`
  }

  nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const currentStepEl = document.querySelector(\`.wizard-step[data-step="\${currentStep}"]\`)
      const inputs = currentStepEl.querySelectorAll("input[required], textarea[required]")

      let isValid = true
      inputs.forEach((input) => {
        if (!input.checkValidity()) {
          input.reportValidity()
          isValid = false
        }
      })

      if (isValid && currentStep < totalSteps) {
        currentStep++
        updateWizard()
      }
    })
  })

  prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (currentStep > 1) {
        currentStep--
        updateWizard()
      }
    })
  })

  form.addEventListener("submit", (e) => {
    // Native submission would happen here, but we show the success screen for UX
    // In a real app, this would be handled by the action="/submit"
    e.preventDefault()
    form.style.display = "none"
    successScreen.classList.add("active")
    progressBar.style.width = "100%"
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .home-thq-hero-accent-elm {
            color: var(--color-accent);
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
          .home-container4 {
            display: none;
          }
          .home-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Home
