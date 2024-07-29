import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingForm = () => {
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [roomId, setRoomId] = useState('');
    const [rooms, setRooms] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [showAdditionalFields, setShowAdditionalFields] = useState(false);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await axios.get('/api/rooms');
                if (response.data && Array.isArray(response.data.rooms)) {
                    setRooms(response.data.rooms);
                } else {
                    console.error('Invalid response format:', response.data);
                }
            } catch (error) {
                console.error('Error fetching rooms:', error);
            }
        };

        fetchRooms();
    }, []);

    useEffect(() => {
        if (checkIn && checkOut && roomId) {
            setShowAdditionalFields(true);
        } else {
            setShowAdditionalFields(false);
        }
    }, [checkIn, checkOut, roomId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/booking', {
                check_in: checkIn,
                check_out: checkOut,
                room_id: roomId,
                name,
                email,
                phone_number: phoneNumber,
            });
            console.log('Data submitted:', response.data);
            alert('Data submitted successfully!');
            // Reset form fields
            setCheckIn('');
            setCheckOut('');
            setRoomId('');
            setName('');
            setEmail('');
            setPhoneNumber('');
            setShowAdditionalFields(false);
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    return (
        <div className="container-fluid booking pb-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container">
                <div className="bg-white shadow" style={{ padding: 35 }}>
                    <form onSubmit={handleSubmit}>
                        <div className="row g-2">
                            <div className="col-md-4">
                                <div className="date" id="date1" data-target-input="nearest">
                                    <input
                                        type="date"
                                        className="form-control"
                                        placeholder="Check in"
                                        value={checkIn}
                                        onChange={(e) => setCheckIn(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="date" id="date2" data-target-input="nearest">
                                    <input
                                        type="date"
                                        className="form-control"
                                        placeholder="Check out"
                                        value={checkOut}
                                        onChange={(e) => setCheckOut(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <select className="form-select" value={roomId} onChange={(e) => setRoomId(e.target.value)}>
                                    <option value="">Select Room</option>
                                    {rooms.map((room) => (
                                        <option key={room.id} value={room.id}>
                                            {room.room_number}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {showAdditionalFields && (
                            <div className="row g-2 mt-3">
                                <div className="col-md-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-md-4">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-md-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Phone Number"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                        )}

                        <div className="row g-2 mt-3">
                            <div className="col-md-12 text-end">
                                <button className="btn btn-primary" type="submit" disabled={!showAdditionalFields}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;
