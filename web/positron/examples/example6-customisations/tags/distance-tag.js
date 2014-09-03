/**
*
* @license
* Copyright © 2013 Jason Proctor.  All rights reserved.
*
**/

// CONSTRUCTOR

var	DistanceTag = function ()
{
	positron.tag.Tag.call (this);

	this.requiredAttributes = new Array (4);
	this.requiredAttributes [0] = "lat1";
	this.requiredAttributes [1] = "lon1";
	this.requiredAttributes [2] = "lat2";
	this.requiredAttributes [3] = "lon2";
};
positron.inherits (DistanceTag, positron.tag.Tag);

DistanceTag.prototype.process = function (inElement, inContext, inTreeWalker)
{
	var	lat1 = positron.DOM.getFloatAttributeValue (inElement, "lat1") * (Math.PI / 180);
	var	lon1 = positron.DOM.getFloatAttributeValue (inElement, "lon1") * (Math.PI / 180);
	var	lat2 = positron.DOM.getFloatAttributeValue (inElement, "lat2") * (Math.PI / 180);
	var	lon2 = positron.DOM.getFloatAttributeValue (inElement, "lon2") * (Math.PI / 180);
	
	var newContext = gApplication.makeContext (inContext);

	var	distance = this.distance (lat1, lon1, lat2, lon2);
	newContext.put (this.getName (inElement), distance);

  return this.walkChildren (inElement, newContext, inTreeWalker);
}

DistanceTag.prototype.distance = function (inLat1, inLon1, inLat2, inLon2)
{
	var	distance = new Object ();
	
	var radiusM = 6371000;

	distance.m = Math.acos (Math.sin (inLat1) * Math.sin (inLat2) + 
		Math.cos (inLat1) * Math.cos (inLat2) *
		Math.cos (inLon2 - inLon1)) * radiusM;

	distance.km = distance.m / 1000;
	distance.mi = (distance.km * 5) / 8;
	distance.yards = distance.mi * 1760;
	distance.feet = distance.mi * 5280;
	
	return distance;
}

