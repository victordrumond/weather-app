import './assets/css/Alerts.css';
import { formatDateAndTime } from './globalDeclarations.js';
import { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FaExclamationCircle } from 'react-icons/fa';

function Alerts({alerts, name, country, offset}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <div id="alerts-btn-box">
            <div onClick={handleShow}>
                <FaExclamationCircle
                    variant="danger"
                    className="text-danger alerts-button"
                />
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-danger">
                        There {alerts.length === 1 ? "is" : "are"} currently {alerts.length} weather {alerts.length === 1 ? "alert" : "alerts"} to {name}, {country}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body id="alerts-message">
                    {alerts.map((item, i) => (
                        <div className="d-flex flex-column" key={i}>
                            <p><b>Sender:</b> {item.sender_name}</p>
                            <p><b>Title:</b> {item.event}</p>
                            <p><b>Starting:</b> {formatDateAndTime("date+time", item.start, offset)}</p>
                            <p><b>Ending:</b> {formatDateAndTime("date+time", item.end, offset)}</p>
                            <p><b>Message:</b> {item.description}</p>
                        </div>
                    ))}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Alerts;