
//Saves the web page of the url as filename
function(url, fileName)
{
    var page = require('webpage').create();
    page.open(url, function (status) {
        console.log("Status: " + status);
        if (status === "success") {
            page.render(fileName);
        }
        phantom.exit();
    });
}