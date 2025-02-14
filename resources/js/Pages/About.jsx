import React from "react";
import Layout from "../Layouts/Template";

export default function About() {
    return (
        <>
            <Layout>
                {/* About Start */}
                <div className="container-fluid bg-white p-0">
                    {/* Page Header Start */}
                    <div
                        className="container-fluid page-header mb-5 p-0"
                        style={{ backgroundImage: "url(img/carousel-1.jpg)" }}
                    >
                        <div className="container-fluid page-header-inner py-5">
                            <div className="container text-center pb-5">
                                <h1 className="display-3 text-white mb-3 animated slideInDown">
                                    About Us
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
                                            About
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* Page Header End */}
                    {/* About Start */}
                    <div className="container-xxl py-5">
                        <div className="container">
                            <div className="row g-5 align-items-center">
                                <div className="col-lg-6">
                                    <h6 className="section-title text-start text-primary text-uppercase">
                                        About Us
                                    </h6>
                                    <h1 className="mb-4">
                                        Welcome to{" "}
                                        <span className="text-primary text-uppercase">
                                            Hotelier
                                        </span>
                                    </h1>
                                    <p className="mb-4">
                                        Tempor erat elitr rebum at clita. Diam
                                        dolor diam ipsum sit. Aliqu diam amet
                                        diam et eos. Clita erat ipsum et lorem
                                        et sit, sed stet lorem sit clita duo
                                        justo magna dolore erat amet
                                    </p>
                                    <div className="row g-3 pb-4">
                                        <div
                                            className="col-sm-4 wow fadeIn"
                                            data-wow-delay="0.1s"
                                        >
                                            <div className="border rounded p-1">
                                                <div className="border rounded text-center p-4">
                                                    <i className="fa fa-hotel fa-2x text-primary mb-2" />
                                                    <h2
                                                        className="mb-1"
                                                        data-toggle="counter-up"
                                                    >
                                                        1234
                                                    </h2>
                                                    <p className="mb-0">
                                                        Rooms
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="col-sm-4 wow fadeIn"
                                            data-wow-delay="0.3s"
                                        >
                                            <div className="border rounded p-1">
                                                <div className="border rounded text-center p-4">
                                                    <i className="fa fa-users-cog fa-2x text-primary mb-2" />
                                                    <h2
                                                        className="mb-1"
                                                        data-toggle="counter-up"
                                                    >
                                                        1234
                                                    </h2>
                                                    <p className="mb-0">
                                                        Staffs
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="col-sm-4 wow fadeIn"
                                            data-wow-delay="0.5s"
                                        >
                                            <div className="border rounded p-1">
                                                <div className="border rounded text-center p-4">
                                                    <i className="fa fa-users fa-2x text-primary mb-2" />
                                                    <h2
                                                        className="mb-1"
                                                        data-toggle="counter-up"
                                                    >
                                                        1234
                                                    </h2>
                                                    <p className="mb-0">
                                                        Clients
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        className="btn btn-primary py-3 px-5 mt-2"
                                        href
                                    >
                                        Explore More
                                    </a>
                                </div>
                                <div className="col-lg-6">
                                    <div className="row g-3">
                                        <div className="col-6 text-end">
                                            <img
                                                className="img-fluid rounded w-75 wow zoomIn"
                                                data-wow-delay="0.1s"
                                                src="img/about-1.jpg"
                                                style={{ marginTop: "25%" }}
                                            />
                                        </div>
                                        <div className="col-6 text-start">
                                            <img
                                                className="img-fluid rounded w-100 wow zoomIn"
                                                data-wow-delay="0.3s"
                                                src="img/about-2.jpg"
                                            />
                                        </div>
                                        <div className="col-6 text-end">
                                            <img
                                                className="img-fluid rounded w-50 wow zoomIn"
                                                data-wow-delay="0.5s"
                                                src="img/about-3.jpg"
                                            />
                                        </div>
                                        <div className="col-6 text-start">
                                            <img
                                                className="img-fluid rounded w-75 wow zoomIn"
                                                data-wow-delay="0.7s"
                                                src="img/about-4.jpg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* About End */}
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

                {/* About End */}
            </Layout>
        </>
    );
}
