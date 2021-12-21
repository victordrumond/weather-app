import './assets/css/Alerts.css';
import { formatDateAndTime } from './globalDeclarations.js';
import { FaRegWindowClose } from 'react-icons/fa';

function Alerts({alerts, name, country, offset, toggleAlert}) {

    return (
        <div id="alerts" className="d-flex flex-column">
            <div id="alerts-title" className="d-flex justify-content-between">
                <h4 className="text-danger">There {alerts.length === 1 ? "is" : "are"} currently {alerts.length} weather {alerts.length === 1 ? "alert" : "alerts"} to {name}, {country}</h4>
                <FaRegWindowClose className="text-end close-alerts-icon" onClick={() => toggleAlert()}/>
            </div>
            {alerts.map((item, i) => (
                <div id="alerts-message" className="d-flex flex-column" key={i}>
                    <p><b>Sender:</b> {item.sender_name}</p>
                    <p><b>Title:</b> {item.event}</p>
                    <p><b>Starting:</b> {formatDateAndTime("date+time", item.start, offset)}</p>
                    <p><b>Ending:</b> {formatDateAndTime("date+time", item.end, offset)}</p>
                    <p><b>Message:</b> {item.description}</p>
                    <p>--------------------------------------------------------------------------------------------</p>
                </div>
            ))}
        </div>
    );
};

export default Alerts;