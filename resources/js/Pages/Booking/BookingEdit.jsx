import React, { useState, useEffect } from "react";
import Layout from "../../Layouts/Template";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import axios from 'axios';

export default function BookingEdit({ booking }) {
    const [formData, setFormData] = useState({
        name: booking.name,
        email: booking.email,
        phone_number: booking.phone_number,
        check_in: booking.check_in,
        check_out: booking.check_out,
        payment_status: booking.payment_status ? 'true' : 'false', // Normalize to string for select input
        room_id: booking.room_id,
    });

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await axios.get('/api/rooms');
                setRooms(response.data.rooms);
            } catch (error) {
                console.error('Error fetching rooms:', error);
            }
        };

        fetchRooms();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form data before submitting
        if (new Date(formData.check_in) >= new Date(formData.check_out)) {
            alert("Check-out date must be after check-in date.");
            return;
        }

        Inertia.post(`/booking/${booking.id}`, {
            ...formData,
            _method: 'put',
            payment_status: formData.payment_status === 'true' // Convert back to boolean for server
        }, {
            onError: (errors) => {
                alert("An error occurred. Please check your input.");
                console.error(errors);
            },
            onSuccess: () => {
                alert("Booking updated successfully!");
            },
        });
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
                            <h1 className="display-3 text-white mb-3 animated slideInDown">Edit Booking</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center text-uppercase">
                                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Booking</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="container-xxl py-5" style={{ minHeight: "100vh" }}>
                    <h6 className="section-title text-start text-primary text-uppercase">Edit Booking</h6>
                    <div className="card shadow-sm p-4" style={{marginBottom: "100px"}}>
                        
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone_number" className="form-label">Phone Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phone_number"
                                    name="phone_number"
                                    value={formData.phone_number}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="check_in" className="form-label">Check-in Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="check_in"
                                    name="check_in"
                                    value={formData.check_in}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="check_out" className="form-label">Check-out Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="check_out"
                                    name="check_out"
                                    value={formData.check_out}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="payment_status" className="form-label">Payment Status</label>
                                <select
                                    id="payment_status"
                                    name="payment_status"
                                    className="form-select"
                                    value={formData.payment_status}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="true">Paid</option>
                                    <option value="false">Unpaid</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="room_id" className="form-label">Room</label>
                                <select
                                    id="room_id"
                                    name="room_id"
                                    className="form-select"
                                    value={formData.room_id}
                                    onChange={handleInputChange}
                                    required
                                >
                                    {rooms.map((room) => (
                                        <option key={room.id} value={room.id}>
                                            {room.room_number}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="d-flex justify-content-between">
                                <button type="submit" className="btn btn-primary">Save Changes</button>
                                <Link href="/booking" className="btn btn-secondary btn-sm ms-2">Cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>

                <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
                    <i className="bi bi-arrow-up" />
                </a>
            </div>
        </Layout>
    );
}
