// AMAZON.YesIntent Handler
module.exports = function () {

  // Get Last Intent from Session Attributes
  const lastIntent = this.attributes.lastIntent;

  // Last Intent Exists
  if (lastIntent) {

    // Respond with Last Intent
    this.emitWithState(lastIntent);
  }

  // No Last Intent
  else {

    // Respond with Help Intent
    this.emitWithState('AMAZON.HelpIntent');
  }
};
