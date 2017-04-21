// LaunchRequest Handler
module.exports = function () {

  // Respond to User
  this.emit(':ask',
    'Welcome to London Local. You can ask me for local news, events, attractions, and facts, or say help. What will it be?',
    'You can ask me for local news, events, attractions, and facts, or say help. What will it be?'
  );
};
