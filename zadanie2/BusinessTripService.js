import moment from 'moment';
import uuid from 'uuid';

const BASE_URL = 'https://myevents-4187.restdb.io/rest/events'; //пример трябва да го заменим
const API_KEY = 'Api Keya ot restb';

export function getEvents() {
    return fetch(BASE_URL,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'x-apikey': API_KEY
            }
        }
    )
    .then(response => response.json())
    .then(events => events.map(item => ({
        ...item,
        date: moment(item.date, "DD/MM/YYYY HH:mm").toDate(),
    })));
}

export function getEventById(id) {
    return fetch(`${BASE_URL}/${id}`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'x-apikey': API_KEY
            }
        }
    )
    .then(response => response.json())
    .then(item => {
        return {
            ...item,
            date: moment(item.date, "DD/MM/YYYY HH:mm").toDate()
        }
    })
    .catch(error => console.error(error));    
}


export function addEvent({title, date, description}) {
    return fetch(BASE_URL,
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'x-apikey': API_KEY
            },
            body: JSON.stringify({
                title, date, description, id: uuid()
            })
        })
        .then(result => result.json())
        .catch(error => console.error(error));
}

export function editEvent({id, title, date, description}) {
    return fetch(`${BASE_URL}/${id}`,
        {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'x-apikey': API_KEY
            },
            body: JSON.stringify({
                title, date, description
            })
        })
        .then(result => result.json())
        .catch(error => console.error(error));
}

export function deleteEvent(id) {
    return fetch(`${BASE_URL}/${id}`,
        {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'x-apikey': API_KEY
            }
        })
        .then(result => result.json())
        .catch(error => console.error(error));
}
