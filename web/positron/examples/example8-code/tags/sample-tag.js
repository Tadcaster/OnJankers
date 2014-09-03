/**
*
* @license
* Copyright © 2013 Jason Proctor.  All rights reserved.
*
**/

// CONSTRUCTOR

var	SampleTag = function ()
{
	positron.tag.Tag.call (this);
};
positron.inherits (SampleTag, positron.tag.Tag);

// called when the treewalker encounters the element
// 
SampleTag.prototype.process = function (inElement, inContext, inTreeWalker)
{
  return this.walkChildren (inElement, inContext, inTreeWalker, "SAMPLE TAG CALLED!");
}

// called when the treewalker has finished walking your children
// override this to do stuff with your finished markup (this is rare)
// then call the superclass to resume the treewalker
SampleTag.prototype.onWalkComplete = function (inTreeWalker)
{
	positron.tag.Tag.prototype.onWalkComplete.call (this, inTreeWalker);
}
