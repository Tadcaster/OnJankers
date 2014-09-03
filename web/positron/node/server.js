var http = require ("http");
var fs = require ("fs");
var path = require ("path");
var	childProcess = require ("child_process");

var	directory = process.argv [2];

http.createServer
(
	function (request, response)
	{
		console.log ("request " + request.url);
		
		var filePath = null;

		if (request.url == "/")
		{
			filePath = directory + "/index.html";
		}
		else
		{
			filePath = directory + request.url;
		}
		
		var extension = path.extname(filePath);

		if (extension == ".html")
		{
			contentType = "text/html";
		}
		else
		if (extension == ".js")
		{
			contentType = "text/javascript";
		}
		else
		if (extension == ".css")
		{
			contentType = "text/css";
		}
		else
		if (extension == ".json")
		{
			contentType = "application/json";
		}
		else
		if (extension == ".jpg" || extension == ".jpeg")
		{
			contentType = "image/jpeg";
		}
		else
		if (extension == ".gif")
		{
			contentType = "image/gif";
		}
		else
		if (extension == ".png")
		{
			contentType = "image/png";
		}
		else
		{
			console.log ("defaulting content type for extension " + extension);
			contentType = "application/octet-string";
		}

		fs.exists
		(
			filePath,
			function (inExists)
			{
				if (inExists)
				{
					fs.readFile
					(
						filePath,
						function (inError, inContent)
						{
							if (inError)
							{
								console.log ("error on " + filePath);
								
								response.writeHead (500);
								response.end ();
							}
							else
							{
								response.writeHead (200, {"Content-Type": contentType});
								response.end (inContent, "utf-8");
							}
						}
					);
				}
				else
				{
					console.log ("error on " + filePath);
								
					response.writeHead (404);
					response.end ();
				}
			}
		);
	}
).listen(8085);

childProcess.spawn ("open", ["http://127.0.0.1:8085/"]);

