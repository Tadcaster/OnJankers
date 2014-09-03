/**
*
* @license
* Copyright © 2013 Jason Proctor.  All rights reserved.
*
**/

positron.provide ("SampleTrigger");

SampleTrigger = function ()
{
	positron.trigger.Trigger.call (this);
}
positron.inherits (SampleTrigger, positron.trigger.Trigger);

// if your trigger requires cancellation when its markup goes away
// then implement your cancel() functionality here
SampleTrigger.prototype.cancel = function ()
{
	return false;
}

// return true here if your trigger shouldn't fire its action
// while its parent view is being refreshed
// usually this is false, as most triggers are UI based
// but some, like delay, should be deferred
SampleTrigger.prototype.isDeferred = function (inAction)
{
	return true;
}

// if a trigger is deferred
// this is called at regular register() time (ie during treewalk)
// to facilitate parameter etc extraction from context
// which would be gone at defer time
SampleTrigger.prototype.preRegister = function (inAction, inContext)
{
}

SampleTrigger.prototype.register = function (inAction, inContext)
{
	console.log ("SampleTrigger.register()");
	
	// this code sets up the conditions for the trigger to fire
	// once those conditions are met, the action is called
	// in our case, we'll just fire it now
	// but as we're deferred, we fire when the refresh is complete
	// (this is what the stock "defer" trigger does)
	inAction.fire ();
};

// return true here if your trigger requires cancellation if its markup goes away
// like if it's a delay or interval type thing and not UI related
SampleTrigger.prototype.requiresCancel = function ()
{
	return false;
}

