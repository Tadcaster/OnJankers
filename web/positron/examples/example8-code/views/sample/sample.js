/**
*
* @license
* Copyright © 2013 Jason Proctor.  All rights reserved.
*
**/

// CONSTRUCTOR

var	SampleView = function ()
{
	positron.View.call (this);
};
positron.inherits (SampleView, positron.View);

// called just before a view's visible animation starts
SampleView.prototype.onBeforeVisible = function ()
{
	positron.View.prototype.onBeforeVisible.call (this);
	
	console.log ("SampleView.onBeforeVisible()");
}

// called when a view's markup is final
SampleView.prototype.onDOMReady = function ()
{
	positron.View.prototype.onDOMReady.call (this);
	
	console.log ("SampleView.onDOMReady()");
}

// called when a view's markup is final AND its visible animation has completed
SampleView.prototype.onVisible = function ()
{
	positron.View.prototype.onVisible.call (this);
	
	console.log ("SampleView.onVisible()");
}

// called just before a view's invisible animation starts
SampleView.prototype.onBeforeInvisible = function ()
{
	positron.View.prototype.onBeforeInvisible.call (this);
	
	console.log ("SampleView.onBeforeInvisible()");
}

// called when a view's invisible animation completes
SampleView.prototype.onInvisible = function ()
{
	positron.View.prototype.onInvisible.call (this);
	
	console.log ("SampleView.onInvisible()");
}

