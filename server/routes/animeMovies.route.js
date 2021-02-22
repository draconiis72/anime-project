const AnimeController = require('../controllers/animeMovies.controller');


module.exports = (app) =>{
    app.get('/api/animeMovies', AnimeController.FindallAnimeMovies);
    app.get('/api/animeMovies/:id', AnimeController.FindOneAnimeMovie);
    app.post('/api/animeMovies', AnimeController.CreateOneAnimeMovie);
    app.put('/api/animeMovies/:id', AnimeController.UpdateExistingAnimeMovie);
    app.delete('/api/animeMovies/:id', AnimeController.DeleteExistingAnimeMovie);
}