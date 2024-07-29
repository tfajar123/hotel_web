import React from "react";
import Layout from "../Layouts/Template";

export default function Rooms({ rooms }) {
    return (
        <>
            <Layout>
                <div class="container-fluid bg-white p-0">
                    <div
                        className="container-fluid page-header mb-5 p-0"
                        style={{ backgroundImage: "url(img/carousel-1.jpg)" }}
                    >
                        <div className="container-fluid page-header-inner py-5">
                            <div className="container text-center pb-5">
                                <h1 className="display-3 text-white mb-3 animated slideInDown">
                                    Rooms
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
                                            Rooms
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div class="container-xxl py-5">
                        <div class="container">
                            <div
                                class="container-fluid booking pb-5 wow fadeIn"
                                data-wow-delay="0.1s"
                            >
                                {/* Room Start */}

                                <div className="container-xxl py-5">
                                    <div className="container">
                                        <div
                                            className="text-center wow fadeInUp"
                                            data-wow-delay="0.1s"
                                        >
                                            <h6 className="section-title text-center text-primary text-uppercase">
                                                Our Rooms
                                            </h6>
                                            <h1 className="mb-5">
                                                Explore Our{" "}
                                                <span className="text-primary text-uppercase">
                                                    Rooms
                                                </span>
                                            </h1>
                                        </div>
                                        <div className="row g-4">
                                            {rooms.map((room, index) => (
                                                <div
                                                    key={room.id}
                                                    className={`col-lg-4 col-md-6 wow fadeInUp`}
                                                    data-wow-delay={`${
                                                        0.1 * (index + 1)
                                                    }s`}
                                                >
                                                    <div className="room-item shadow rounded overflow-hidden">
                                                        <div className="position-relative">
                                                            <img
                                                                className="img-fluid"
                                                                src="img/room-1.jpg" // Sementara, gunakan gambar yang sama
                                                                alt={
                                                                    room.room_type
                                                                }
                                                            />
                                                            <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                                                                ${room.price}
                                                                /Night
                                                            </small>
                                                        </div>
                                                        <div className="p-4 mt-2">
                                                            <div className="d-flex justify-content-between mb-3">
                                                                <h5 className="mb-0">
                                                                    {
                                                                        room.room_type
                                                                    }
                                                                </h5>
                                                                <div className="ps-2">
                                                                    <small className="fa fa-star text-primary" />
                                                                    <small className="fa fa-star text-primary" />
                                                                    <small className="fa fa-star text-primary" />
                                                                    <small className="fa fa-star text-primary" />
                                                                    <small className="fa fa-star text-primary" />
                                                                </div>
                                                            </div>
                                                            <div className="d-flex mb-3">
                                                                <small className="border-end me-3 pe-3">
                                                                    <i className="fa fa-bed text-primary me-2" />
                                                                    {room.facilities.includes(
                                                                        "bed"
                                                                    )
                                                                        ? room.facilities
                                                                              .split(
                                                                                  "bed"
                                                                              )[0]
                                                                              .trim()
                                                                        : "0"}{" "}
                                                                    Bed
                                                                </small>
                                                                <small className="border-end me-3 pe-3">
                                                                    <i className="fa fa-bath text-primary me-2" />
                                                                    {room.facilities.includes(
                                                                        "bath"
                                                                    )
                                                                        ? room.facilities
                                                                              .split(
                                                                                  "bath"
                                                                              )[0]
                                                                              .trim()
                                                                        : "0"}{" "}
                                                                    Bath
                                                                </small>
                                                                <small>
                                                                    <i className="fa fa-wifi text-primary me-2" />
                                                                    {room.facilities.includes(
                                                                        "wifi"
                                                                    )
                                                                        ? "Wifi"
                                                                        : "No Wifi"}
                                                                </small>
                                                            </div>
                                                            <p className="text-body mb-3">
                                                                {
                                                                    room.description
                                                                }
                                                            </p>
                                                            <div className="d-flex justify-content-between">
                                                                <a
                                                                    className="btn btn-sm btn-primary rounded py-2 px-4"
                                                                    href="#"
                                                                >
                                                                    View Detail
                                                                </a>
                                                                <a
                                                                    className="btn btn-sm btn-dark rounded py-2 px-4"
                                                                    href="#"
                                                                >
                                                                    Book Now
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Room End */}
            </Layout>
        </>
    );
}
