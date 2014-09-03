/**
*
* @license
* Copyright © 2013 Jason Proctor.  All rights reserved.
*
**/

positron.provide ("SquawkAttribute");

SquawkAttribute = function ()
{
	positron.attribute.Attribute.call (this);
}
positron.inherits (SquawkAttribute, positron.attribute.Attribute);

// well, i couldn't think of anything else a custom attribute would do!
SquawkAttribute.prototype.process = function (inElement, inAttributeName, inAttributeNumber)
{
	console.log ("SquawkAttribute.process() setting its element contents");
	document.getElementById ("squawk").innerHTML = "This content provided by the squawk attribute.";
};
