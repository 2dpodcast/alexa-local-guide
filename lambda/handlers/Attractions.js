// Attractions Handler
module.exports = function () {

  const attractions = [
    {
      name: 'The London Eye',
      description: 'The London Eye is a major feature of London\'s skyline. It boasts some of London\'s best views from its 32 capsules, each weighing 10 tonnes and holding up to 25 people. Climb aboard for a breathtaking experience, with an unforgettable perspective of more than 55 of London\'s most famous landmarks – all in just 30 minutes!',
    },
    {
      name: 'The Sea Life Aquarium',
      description: 'Get a taste of the deep blue sea at the Sea Life London Aquarium. Spot up to 400 species including sharks, stingrays, moray eels and clown fish. See stunning green sea turtles and test your nerve on the glass "shark walk". Learn more at daily talks and feeding times.',
    },
    {
      name: 'Madame Tussauds London',
      description: 'At Madame Tussauds, you\'ll come face-to-face with some of the world\'s most famous faces. From Shakespeare to Lady Gaga you\'ll meet influential figures from showbiz, sport, politics and even royalty. Strike a pose with Usain Bolt, get close to One Direction or receive a once-in-a-lifetime audience with Her Majesty the Queen.',
    },
    {
      name: 'London Zoo',
      description: 'Discover more than 16,000 animals at one of England\'s oldest zoos. Come face-to-face with magnificent tigers, hippos and giraffes, and meet the penguins at their Penguin Beach home. Make it a fun family day out and visit the petting zoo, where children can feed donkeys, sheep and llamas.',
    },
    {
      name: 'The Tower of London',
      description: 'Take a tour with one of the Yeoman Warders around the Tower of London, one of the world\'s most famous buildings. Discover its 900-year history as a royal palace, prison and place of execution, arsenal, jewel house and zoo! Gaze up at the White Tower, tiptoe through a medieval king\'s bedchamber and marvel at the Crown Jewels.',
    }
  ];

  // Get Random Attraction
  const randomAttraction = attractions[Math.floor(Math.random() * attractions.length)];

  // Set Session Attributes for Context
  this.attributes.lastIntent = 'Attractions';

  // Respond to User
  this.emit(':ask', `How about checking out ${randomAttraction.name}. ${randomAttraction.description}. Would you like to hear another attraction?`, 'Would you like to hear another attraction?');
};
