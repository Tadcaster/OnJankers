/**
*
* @license
* Copyright © 2013 Jason Proctor.  All rights reserved.
*
**/

// CONSTRUCTOR

var	SamplePage = function ()
{
	positron.Page.call (this);
};
positron.inherits (SamplePage, positron.Page);

// essentially Pages are just Views
// which are exclusive (one displays at any one time)
// load on demand
// and which manage a collection of sub Views

// called just before a page's visible animation starts
SamplePage.prototype.onBeforeVisible = function ()
{
	positron.Page.prototype.onBeforeVisible.call (this);
	
	console.log ("SamplePage.onBeforeVisible()");
}

// called when a page's markup is final
SamplePage.prototype.onDOMReady = function ()
{
	positron.Page.prototype.onDOMReady.call (this);
	
	console.log ("SamplePage.onDOMReady()");
}

// called when a page's markup is final AND its visible animation has completed
SamplePage.prototype.onVisible = function ()
{
	positron.Page.prototype.onVisible.call (this);
	
	console.log ("SamplePage.onVisible()");
}

// called just before a page's invisible animation starts
SamplePage.prototype.onBeforeInvisible = function ()
{
	positron.Page.prototype.onBeforeInvisible.call (this);
	
	console.log ("SamplePage.onBeforeInvisible()");
}

// called when a page's invisible animation completes
SamplePage.prototype.onInvisible = function ()
{
	positron.Page.prototype.onInvisible.call (this);
	
	console.log ("SamplePage.onInvisible()");
}

