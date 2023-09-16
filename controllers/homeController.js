

//define route handles function
function homeController (_req, res) => {
    res.setHeader ("Content-type", "text/html");

    res.send(
        "<html><head><title>Hello world!</title></head><body><h1>Welcome to my dashboard!</h1></body></html>"
    );
};

module.exports { homeController};