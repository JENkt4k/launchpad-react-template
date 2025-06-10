export const setRoutes = (app) => {
    const indexController = new IndexController();

    app.get('/', indexController.index);
    app.get('/api/example', indexController.example);
};