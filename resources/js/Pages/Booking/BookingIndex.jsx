import React from "react";
import Layout from "../../Layouts/Template";
import { Inertia } from "@inertiajs/inertia-react";

export default function BookingIndex({ bookings }) {
    return (
        <>
            <Layout>
                {/* Booking Index Start */}
                <div className="container-fluid bg-white p-0">
                    {/* Page Header Start */}
                    <div
                        className="container-xxl page-header mb-5 p-0"
                        style={{ backgroundImage: "url(img/carousel-1.jpg)" }}
                    >
                        <div className="container-fluid page-header-inner py-5">
                            <div className="container text-center pb-5">
                                <h1 className="display-3 text-white mb-3 animated slideInDown">
                                    Booking Index
                                </h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center text-uppercase">
                                        <li className="breadcrumb-item">
                                            <a href="#">Home</a>
                                        </li>
                                        <li className="breadcrumb-item text-white active" aria-current="page">
                                            Booking
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* Page Header End */}

                    {/* Booking Content Start */}
                    <div className="container-xxl py-5">
                        <div className="container" style={{ minHeight: "100vh" }}>
                            <div className="row g-5">
                                <div className="col-lg-12">
                                    <h6 className="section-title text-start text-primary text-uppercase">
                                        Your Bookings
                                    </h6>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Booking ID</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Room</th>
                                                <th scope="col">Check-in</th>
                                                <th scope="col">Check-out</th>
                                                <th scope="col">Total Price</th>
                                                <th scope="col">Payment Status</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {bookings.map(booking => (
                                                <tr key={booking.id}>
                                                    <td>{booking.id}</td>
                                                    <td>{booking.name}</td>
                                                    <td>{booking.room.room_type}</td>
                                                    <td>{booking.check_in}</td>
                                                    <td>{booking.check_out}</td>
                                                    <td>${booking.total_price}</td>
                                                    <td>{booking.payment_status ? 'Paid' : 'Unpaid'}</td>
                                                    <td>
                                                        <a href="#" className="btn btn-primary btn-sm">View</a>
                                                        <a href="#" className="btn btn-secondary btn-sm">Edit</a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Booking Content End */}

                    {/* Back to Top */}
                    <a
                        href="#"
                        className="btn btn-lg btn-primary btn-lg-square back-to-top"
                    >
                        <i className="bi bi-arrow-up" />
                    </a>
                </div>
                {/* Booking Index End */}
            </Layout>
        </>
    );
}
