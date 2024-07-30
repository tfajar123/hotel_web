import React, { useState, useEffect } from "react";
import Layout from "../../Layouts/Template";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";

export default function BookingIndex({ bookings }) {
    const [selectedBooking, setSelectedBooking] = useState(null);

    const handleViewDetails = (booking) => {
        setSelectedBooking(booking);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this booking?")) {
            Inertia.delete(`/booking/${id}`, {
                onSuccess: () => {
                    alert("Booking deleted successfully!");
                    // Optionally, refresh the list of bookings here
                },
                onError: (errors) => {
                    console.error("Error deleting booking:", errors);
                    alert("An error occurred. Please try again.");
                },
            });
        }
    };

    return (
        <Layout>
            <div className="container-fluid bg-white p-0">
                <div
                    className="container-xxl page-header mb-5 p-0"
                    style={{ backgroundImage: "url(img/carousel-1.jpg)" }}
                >
                    <div className="container-fluid page-header-inner py-5">
                        <div className="container text-center pb-5">
                            <h1 className="display-3 text-white mb-3 animated slideInDown">
                                {selectedBooking ? "Booking Details" : "Booking List"}
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

                <div className="container-xxl py-5">
                    <div className="container" style={{ minHeight: "100vh" }}>
                        <div className="row g-5">
                            <div className="col-lg-12">
                                <h6 className="section-title text-start text-primary text-uppercase">
                                    {selectedBooking ? "Booking Details" : "Your Bookings"}
                                </h6>
                                {selectedBooking ? (
                                    <div className="card shadow-sm rounded">
                                        <div className="card-body">
                                            <h2 className="card-title mb-4">Booking ID: {selectedBooking.id}</h2>
                                            <div className="row mb-2">
                                                <div className="col-4"><strong>Name:</strong></div>
                                                <div className="col-8">{selectedBooking.name}</div>
                                            </div>
                                            <div className="row mb-2">
                                                <div className="col-4"><strong>Email:</strong></div>
                                                <div className="col-8">{selectedBooking.email}</div>
                                            </div>
                                            <div className="row mb-2">
                                                <div className="col-4"><strong>Phone Number:</strong></div>
                                                <div className="col-8">{selectedBooking.phone_number}</div>
                                            </div>
                                            <div className="row mb-2">
                                                <div className="col-4"><strong>Room Type:</strong></div>
                                                <div className="col-8">{selectedBooking.room.room_type}</div>
                                            </div>
                                            <div className="row mb-2">
                                                <div className="col-4"><strong>Check-in:</strong></div>
                                                <div className="col-8">{selectedBooking.check_in}</div>
                                            </div>
                                            <div className="row mb-2">
                                                <div className="col-4"><strong>Check-out:</strong></div>
                                                <div className="col-8">{selectedBooking.check_out}</div>
                                            </div>
                                            <div className="row mb-2">
                                                <div className="col-4"><strong>Total Nights:</strong></div>
                                                <div className="col-8">{selectedBooking.total_nights}</div>
                                            </div>
                                            <div className="row mb-2">
                                                <div className="col-4"><strong>Total Price:</strong></div>
                                                <div className="col-8">${selectedBooking.total_price}</div>
                                            </div>
                                            <div className="row mb-2">
                                                <div className="col-4"><strong>Payment Status:</strong></div>
                                                <div className="col-8">{selectedBooking.payment_status ? 'Paid' : 'Unpaid'}</div>
                                            </div>
                                            <div className="text-end mt-4">
                                                <button onClick={() => setSelectedBooking(null)} className="btn btn-secondary">
                                                    Back to List
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="table-responsive">
                                        <table className="table table-striped table-hover table-bordered">
                                            <thead className="table-dark">
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
                                                {bookings.map((booking) => (
                                                    <tr key={booking.id}>
                                                        <td>{booking.id}</td>
                                                        <td>{booking.name}</td>
                                                        <td>{booking.room.room_type}</td>
                                                        <td>{booking.check_in}</td>
                                                        <td>{booking.check_out}</td>
                                                        <td>${booking.total_price}</td>
                                                        <td>{booking.payment_status ? 'Paid' : 'Unpaid'}</td>
                                                        <td>
                                                            <button onClick={() => handleViewDetails(booking)} className="btn btn-primary btn-sm">View</button>
                                                            <Link href={`/booking/${booking.id}/edit`} className="btn btn-secondary btn-sm ms-2">Edit</Link>
                                                            <button
                                                                onClick={() => handleDelete(booking.id)}
                                                                className="btn btn-danger btn-sm ms-2"
                                                            >
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
                    <i className="bi bi-arrow-up" />
                </a>
            </div>
        </Layout>
    );
}
