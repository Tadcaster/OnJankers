/**
*
* @license
* Copyright © 2013 Jason Proctor.  All rights reserved.
*
**/

positron.provide ("TimeoutTrigger");

TimeoutTrigger = function ()
{
}
positron.inherits (TimeoutTrigger, positron.trigger.Trigger);

TimeoutTrigger.prototype.register = function (inAction)
{
	console.log ("TimeoutTrigger.register()");
	
	var	time = 1000;
	
	if (inAction.triggerArgs.length)
	{
		time = positron.Util.parseTime (inAction.triggerArgs [0], 1000);
	}
	
	var	timeout = setTimeout
	(
		function ()
		{
			if (positron.DOM.isValidNode (inAction.element))
			{
				inAction.fire ();
			}
			else
			{
				clearInterval (timeout);
			}
		},
		time
	);

};

