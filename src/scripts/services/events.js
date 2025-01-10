import { baseUrl, eventsQuantity } from '../variables.js'

async function fetchUserEvents(userName) {
    const response = await fetch(`${ baseUrl }/${userName}/events?per_page=${ eventsQuantity }`);
    const eventObjects = await response.json();
    const filteredEvents = await eventObjects.filter(event => event.type === 'PushEvent' || event.type === 'CreateEvent')

    return await filteredEvents;
}

export { fetchUserEvents }