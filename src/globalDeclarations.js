import img01d from './assets/images/01d.jpg';
import img01n from './assets/images/01n.jpg';
import img02d from './assets/images/02d.jpg';
import img02n from './assets/images/02n.jpg';
import img03d from './assets/images/03d.jpg';
import img03n from './assets/images/03n.jpg';
import img04d from './assets/images/04d.jpg';
import img04n from './assets/images/04n.jpg';
import img09d from './assets/images/09d.jpg';
import img09n from './assets/images/09n.jpg';
import img10d from './assets/images/10d.jpg';
import img10n from './assets/images/10n.jpg';
import img11d from './assets/images/11d.jpg';
import img11n from './assets/images/11n.jpg';
import img13d from './assets/images/13d.jpg';
import img13n from './assets/images/13n.jpg';
import img50d from './assets/images/50d.jpg';
import img50n from './assets/images/50n.jpg';

export const backgroundImageObj = {
    "01d": img01d, "01n": img01n, "02d": img02d, "02n": img02n, "03d": img03d, "03n": img03n, "04d": img04d, "04n": img04n,
    "09d": img09d, "09n": img09n,
    "10d": img10d, "10n": img10n,
    "11d": img11d, "11n": img11n,
    "13d": img13d, "13n": img13n,
    "50d": img50d, "50n": img50n
};

export const formatDateAndTime = (type, date, offset) => {
    if (type === "date+time") {
        let localDate;
        if (date === null) {
            localDate = new Date().getTime() + 1000*offset;
        } else {
            localDate = 1000*(date + offset);
        };
        let newDate = new Date(localDate).toUTCString();
        let dateOnly = newDate.slice(0, -13);
        let timeOnly = newDate.substring(newDate.length - 12, newDate.length);
        return dateOnly.slice(0, -5) + ", " + timeOnly.slice(0, -7);
    };
    if (type === "date" || type === "time") {
        let localDate = 1000*(date + offset);
        let newDate = new Date(localDate).toUTCString();
        if (type === "date") {
            return newDate.slice(0, -18);
        } else {
            return newDate.slice(0, -7).substring(17);
        };
    };
};

export const formatDescription = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const roundTemp = (temp) => {
    return Math.round(temp);
};

export const roundSpeed = (speed) => {
    return (speed*3.6).toFixed(1);
};

export const roundProb = (prob) => {
    return (prob*100).toFixed(0);
};