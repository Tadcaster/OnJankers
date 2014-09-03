
var	Application = function ()
{
	positron.Application.call (this);
}
positron.inherits (Application, positron.Application);

Application.prototype.start = function ()
{
	positron.Application.prototype.start.call (this);
}

