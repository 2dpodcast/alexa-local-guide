// NPM Modules
const axios = require('axios');

// Restaurants Handler
module.exports = function () {

  // Cusine Slot
  const cuisineSlot = this.event.request.intent.slots.Cuisine.value || '';

  // Zomato Restaurant Search Request
  const restaurantSearchRequest = {
    method: 'get',
    url: 'https://developers.zomato.com/api/v2.1/search',
    headers: {
      'Accept': 'application/json',
      'user-key': process.env.ZOMATO_API_KEY,
    },
    params: {
      entity_id: '278', // Hard Coded for Chosen Location
      entity_type: 'city', // Hard Coded for Chosen Location
      sort: 'rating', // Sort by Rating
      q: cuisineSlot,
    },
  };

  // Call Zomato API Search Endpoint
  axios(restaurantSearchRequest)
    .then((response) => {

      // Log Zomato Response
      console.log(`Zomato API Response: ${JSON.stringify(response.data, null, 2)}`); // eslint-disable-line no-console

      // Respond to User
      this.emit(':tell', 'I found some restaurants.');
    })
    .catch((error) => {

      // Log Zomato API Error
      console.log('Zomato API Error: ', error); // eslint-disable-line no-console

      // Respond to User
      this.emit(':tell', 'I had trouble finding any restaurants. Please try again later.');
    });
};
