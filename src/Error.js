import './assets/css/Error.css';

function Error({ type, log }) {

    if (type === "fetch-error") {
        return (
            <div id="error-container">
                <div id="error-title" className="d-flex text-danger">
                    <h4>Oops!</h4>
                </div>
                <p className="text-danger">There was an error loading your data.</p>
                <p className="text-danger">Please try again later.</p>
            </div>
        );
    } else if (type === "api-error") {
        return (
            <div id="error-container">
                <div id="error-title" className="d-flex text-danger">
                    <h4>Oops!</h4>
                </div>
                <p className="text-danger">There was an error loading your data.</p>
                <p className="text-danger">Error {log.cod}: {log.message}</p>
            </div>
        );
    };
};

export default Error;