import React from "react";
import Layout from "../Layouts/Template";

export default function Contact() {
    return (
        <>
            <Layout>
                <div className="container-fluid bg-white p-0">
                    {/* Page Header Start */}
                    <div
                        className="container-fluid page-header mb-5 p-0"
                        style={{ backgroundImage: "url(img/carousel-1.jpg)" }}
                    >
                        <div className="container-fluid page-header-inner py-5">
                            <div className="container text-center pb-5">
                                <h1 className="display-3 text-white mb-3 animated slideInDown">
                                    Contact
                                </h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center text-uppercase">
                                        <li className="breadcrumb-item">
                                            <a href="#">Home</a>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a href="#">Pages</a>
                                        </li>
                                        <li
                                            className="breadcrumb-item text-white active"
                                            aria-current="page"
                                        >
                                            Contact
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* Page Header End */}
                    {/* Contact Start */}
                    <div className="container-xxl py-5">
                        <div className="container">
                            <div
                                className="text-center wow fadeInUp"
                                data-wow-delay="0.1s"
                            >
                                <h6 className="section-title text-center text-primary text-uppercase">
                                    Contact Us
                                </h6>
                                <h1 className="mb-5">
                                    <span className="text-primary text-uppercase">
                                        Contact
                                    </span>{" "}
                                    For Any Query
                                </h1>
                            </div>
                            <div className="row g-4">
                                <div className="col-12">
                                    <div className="row gy-4">
                                        <div className="col-md-4">
                                            <h6 className="section-title text-start text-primary text-uppercase">
                                                Booking
                                            </h6>
                                            <p>
                                                <i className="fa fa-envelope-open text-primary me-2" />
                                                book@example.com
                                            </p>
                                        </div>
                                        <div className="col-md-4">
                                            <h6 className="section-title text-start text-primary text-uppercase">
                                                General
                                            </h6>
                                            <p>
                                                <i className="fa fa-envelope-open text-primary me-2" />
                                                info@example.com
                                            </p>
                                        </div>
                                        <div className="col-md-4">
                                            <h6 className="section-title text-start text-primary text-uppercase">
                                                Technical
                                            </h6>
                                            <p>
                                                <i className="fa fa-envelope-open text-primary me-2" />
                                                tech@example.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-md-6 wow fadeIn"
                                    data-wow-delay="0.1s"
                                >
                                    <iframe
                                        className="position-relative rounded w-100 h-100"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                                        frameBorder={0}
                                        style={{ minHeight: 350, border: 0 }}
                                        allowFullScreen
                                        aria-hidden="false"
                                        tabIndex={0}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <div
                                        className="wow fadeInUp"
                                        data-wow-delay="0.2s"
                                    >
                                        <form>
                                            <div className="row g-3">
                                                <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="name"
                                                            placeholder="Your Name"
                                                        />
                                                        <label htmlFor="name">
                                                            Your Name
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="email"
                                                            placeholder="Your Email"
                                                        />
                                                        <label htmlFor="email">
                                                            Your Email
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-floating">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="subject"
                                                            placeholder="Subject"
                                                        />
                                                        <label htmlFor="subject">
                                                            Subject
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-floating">
                                                        <textarea
                                                            className="form-control"
                                                            placeholder="Leave a message here"
                                                            id="message"
                                                            style={{
                                                                height: 150,
                                                            }}
                                                            defaultValue={""}
                                                        />
                                                        <label htmlFor="message">
                                                            Message
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <button
                                                        className="btn btn-primary w-100 py-3"
                                                        type="submit"
                                                    >
                                                        Send Message
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Contact End */}
                    {/* Newsletter Start */}
                    <div
                        className="container newsletter mt-5 wow fadeIn"
                        data-wow-delay="0.1s"
                    >
                        <div className="row justify-content-center">
                            <div className="col-lg-10 border rounded p-1">
                                <div className="border rounded text-center p-1">
                                    <div className="bg-white rounded text-center p-5">
                                        <h4 className="mb-4">
                                            Subscribe Our{" "}
                                            <span className="text-primary text-uppercase">
                                                Newsletter
                                            </span>
                                        </h4>
                                        <div
                                            className="position-relative mx-auto"
                                            style={{ maxWidth: 400 }}
                                        >
                                            <input
                                                className="form-control w-100 py-3 ps-4 pe-5"
                                                type="text"
                                                placeholder="Enter your email"
                                            />
                                            <button
                                                type="button"
                                                className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Newsletter Start */}
                    
                    {/* Back to Top */}
                    <a
                        href="#"
                        className="btn btn-lg btn-primary btn-lg-square back-to-top"
                    >
                        <i className="bi bi-arrow-up" />
                    </a>
                </div>
            </Layout>
        </>
    );
}
