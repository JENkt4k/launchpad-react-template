class IndexController {
    public async getIndex(req, res) {
        res.send('Welcome to the Launchpad API!');
    }

    // Additional methods for handling other routes can be added here
}

export default IndexController;