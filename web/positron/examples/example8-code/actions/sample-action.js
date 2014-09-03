/**
*
* @license
* Copyright © 2013 Jason Proctor.  All rights reserved.
*
**/

positron.provide ("SampleAction");

var	SampleAction = function ()
{
	positron.action.Action.call (this);
}
positron.inherits (SampleAction, positron.action.Action);

// called when the associated trigger decides that its conditions are met
SampleAction.prototype.fire = function (inEvent)
{
	// do what your action does, here
	alert ("SampleAction fired!!");
};

