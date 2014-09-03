/**
*
* @license
* Copyright © 2013 Jason Proctor.  All rights reserved.
*
**/

// CONSTRUCTOR

var	AnglesTag = function ()
{
	positron.tag.Tag.call (this);
};
positron.inherits (AnglesTag, positron.tag.Tag);

AnglesTag.prototype.process = function (inElement, inContext, inTreeWalker)
{
	var	date = null;
	var	key = inElement.getAttribute ("key");
	
	if (key && key.length)
	{
		date = gApplication.getContextReference (key, inContext);
		
		if (date == null)
		{
			console.error ("AnglesTag with no date in context");
		}
	}
	
	if (date == null)
	{
		date = new Date ();
	}
	
	var	hours24 = date.getHours ();
	var	hours12 = hours24 > 12 ? hours24 - 12 : hours24;
	var	minutes = date.getMinutes ();
	var	seconds = date.getSeconds ();
	var	milliseconds = date.getMilliseconds ();
	
	var	hoursDegree = (hours12 / 12) * 360;
	hoursDegree += (minutes / 60) * 30;
	
	var	minutesDegree = (minutes / 60) * 360;
	minutesDegree += (seconds / 60) * 6;
	
	var	secondsDegree = (seconds / 60) * 360;
	secondsDegree += (milliseconds / 1000) * 6;
	
	var newContext = gApplication.makeContext (inContext);
	newContext.put (this.getNameDot (inElement) + "hoursdegree", hoursDegree);
	newContext.put (this.getNameDot (inElement) + "minutesdegree", minutesDegree);
	newContext.put (this.getNameDot (inElement) + "secondsdegree", secondsDegree);
  return this.walkChildren (inElement, newContext, inTreeWalker);
}

