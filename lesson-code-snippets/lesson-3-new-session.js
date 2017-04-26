// NewSession Handler
module.exports = function () {

  // Check for User Attributes in Dynamo DB
  const timesUsed = this.attributes.timesUsed;

  // First Ever Use
  if (!timesUsed) {

    // Set Times Used to 1
    this.attributes.timesUsed = 1;

    // Respond to User With Onboarding Message
    this.emit(':ask',
      `
        Welcome to Austin Local!
        Thanks for enabling this Skill. I think you'll find it great source of local info.
        You can ask me for local news, events, attractions, and facts, or say help for more information.
        So, what will it be?
      `,
       'How can I help?'
     );
  }

  // Not First Ever Use --> Route to Original Request Type
  else if (this.event.request.type === 'IntentRequest') {

    // Increment Times Used
    this.attributes.timesUsed += 1;

    // Route to Original Intent
    this.emitWithState(this.event.request.intent.name);
  }
  else {

    // Route to Launch Request
    this.emitWithState('LaunchRequest');
  }
};
