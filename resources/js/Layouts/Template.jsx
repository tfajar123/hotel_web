import React from "react";

import { Link } from "@inertiajs/inertia-react";

function Layout({ children }) {
    return (
        <>
            <div className="container-fluid bg-white p-0">
                <div>
                    {/* Header Start */}
                    <div className="container-fluid bg-dark px-0">
                        <div className="row gx-0">
                            <div className="col-lg-3 bg-dark d-none d-lg-block">
                                <a
                                    href="index.html"
                                    className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
                                >
                                    <h1 className="m-0 text-primary text-uppercase">
                                        Hotelier
                                    </h1>
                                </a>
                            </div>
                            <div className="col-lg-9">
                                <div className="row gx-0 bg-white d-none d-lg-flex">
                                    <div className="col-lg-7 px-5 text-start">
                                        <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                                            <i className="fa fa-envelope text-primary me-2" />
                                            <p className="mb-0">
                                                info@hotelier.com
                                            </p>
                                        </div>
                                        <div className="h-100 d-inline-flex align-items-center py-2">
                                            <i className="fa fa-phone-alt text-primary me-2" />
                                            <p className="mb-0">
                                                +022 345 67890
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 px-5 text-end">
                                        <div className="d-inline-flex align-items-center py-2">
                                            <a className="me-3" href>
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                            <a className="me-3" href>
                                                <i className="fab fa-twitter" />
                                            </a>
                                            <a className="me-3" href>
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                            <a className="me-3" href>
                                                <i className="fab fa-instagram" />
                                            </a>
                                            <a className href>
                                                <i className="fab fa-youtube" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                                    <a
                                        href="index.html"
                                        className="navbar-brand d-block d-lg-none"
                                    >
                                        <h1 className="m-0 text-primary text-uppercase">
                                            Hotelier
                                        </h1>
                                    </a>
                                    <button
                                        type="button"
                                        className="navbar-toggler"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#navbarCollapse"
                                    >
                                        <span className="navbar-toggler-icon" />
                                    </button>
                                    <div
                                        className="collapse navbar-collapse justify-content-between"
                                        id="navbarCollapse"
                                    >
                                        <div className="navbar-nav mr-auto py-0">
                                            <a
                                                href="/"
                                                className="nav-item nav-link active"
                                            >
                                                Home
                                            </a>
                                            <a
                                                href="/booking"
                                                className="nav-item nav-link"
                                            >
                                                Booking
                                            </a>
                                            <a
                                                href="/about"
                                                className="nav-item nav-link"
                                            >
                                                About
                                            </a>
                                            <a
                                                href="/services"
                                                className="nav-item nav-link"
                                            >
                                                Services
                                            </a>
                                            <a
                                                href="/rooms"
                                                className="nav-item nav-link"
                                            >
                                                Rooms
                                            </a>
                                            <a
                                                href="/contact"
                                                className="nav-item nav-link"
                                            >
                                                Contact
                                            </a>
                                        </div>
                                        {/* <a
                                            href="https://htmlcodex.com/hotel-html-template-pro"
                                            className="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block"
                                        >
                                            Premium Version
                                            <i className="fa fa-arrow-right ms-3" />
                                        </a> */}
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* Header End */}
                </div>

                {children}
                <div>
                    {/* Footer Start */}
                    <div
                        className="container-fluid bg-dark text-light footer wow fadeIn"
                        data-wow-delay="0.1s"
                    >
                        <div className="container pb-5">
                            <div className="row g-5">
                                <div className="col-md-6 col-lg-4">
                                    <div className="bg-primary rounded p-4">
                                        <a href="index.html">
                                            <h1 className="text-white text-uppercase mb-3">
                                                Hotelier
                                            </h1>
                                        </a>
                                        <p className="text-white mb-0">
                                            Hotelier is a website that offers accommodation services for guests.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <h6 className="section-title text-start text-primary text-uppercase mb-4">
                                        Contact
                                    </h6>
                                    <p className="mb-2">
                                        <i className="fa fa-map-marker-alt me-3" />
                                        123 Street, New York, USA
                                    </p>
                                    <p className="mb-2">
                                        <i className="fa fa-phone-alt me-3" />
                                        +012 345 67890
                                    </p>
                                    <p className="mb-2">
                                        <i className="fa fa-envelope me-3" />
                                        info@example.com
                                    </p>
                                    <div className="d-flex pt-2">
                                        <a
                                            className="btn btn-outline-light btn-social"
                                            href
                                        >
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a
                                            className="btn btn-outline-light btn-social"
                                            href
                                        >
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a
                                            className="btn btn-outline-light btn-social"
                                            href
                                        >
                                            <i className="fab fa-youtube" />
                                        </a>
                                        <a
                                            className="btn btn-outline-light btn-social"
                                            href
                                        >
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <div className="row gy-5 g-4">
                                        <div className="col-md-6">
                                            <h6 className="section-title text-start text-primary text-uppercase mb-4">
                                                Company
                                            </h6>
                                            <a className="btn btn-link" href>
                                                About Us
                                            </a>
                                            <a className="btn btn-link" href>
                                                Contact Us
                                            </a>
                                            <a className="btn btn-link" href>
                                                Privacy Policy
                                            </a>
                                            <a className="btn btn-link" href>
                                                Terms &amp; Condition
                                            </a>
                                            <a className="btn btn-link" href>
                                                Support
                                            </a>
                                        </div>
                                        <div className="col-md-6">
                                            <h6 className="section-title text-start text-primary text-uppercase mb-4">
                                                Services
                                            </h6>
                                            <a className="btn btn-link" href>
                                                Food &amp; Restaurant
                                            </a>
                                            <a className="btn btn-link" href>
                                                Spa &amp; Fitness
                                            </a>
                                            <a className="btn btn-link" href>
                                                Sports &amp; Gaming
                                            </a>
                                            <a className="btn btn-link" href>
                                                Event &amp; Party
                                            </a>
                                            <a className="btn btn-link" href>
                                                GYM &amp; Yoga
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="copyright">
                                <div className="row">
                                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                        ©{" "}
                                        <a className="border-bottom" href="#">
                                            Hotelier
                                        </a>
                                        , All Right Reserved.
                                        {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                                        Designed By{" "}
                                        <a
                                            className="border-bottom"
                                            href="https://htmlcodex.com"
                                        >
                                            HTML Codex
                                        </a>
                                        <br />
                                        Distributed By:{" "}
                                        <a
                                            className="border-bottom"
                                            href="https://themewagon.com"
                                            target="_blank"
                                        >
                                            ThemeWagon
                                        </a>
                                    </div>
                                    <div className="col-md-6 text-center text-md-end">
                                        <div className="footer-menu">
                                            <a href>Home</a>
                                            <a href>Cookies</a>
                                            <a href>Help</a>
                                            <a href>FQAs</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Footer End */}
                    {/* Back to Top */}
                    <a
                        href="#"
                        className="btn btn-lg btn-primary btn-lg-square back-to-top"
                    >
                        <i className="bi bi-arrow-up" />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Layout;
