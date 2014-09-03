/**
*
* @license
* Copyright © 2013 Jason Proctor.  All rights reserved.
*
**/

positron.provide ("AlertAction");

AlertAction = function ()
{
	positron.action.Action.call (this);
}
positron.inherits (AlertAction, positron.action.Action);

AlertAction.prototype.fire = function (inEvent)
{
	positron.action.Action.prototype.fire.call (this, inEvent);
	
	alert (this.actionArgs [0]);
};


