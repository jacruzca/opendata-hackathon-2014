/**
 * Created by jhon on 28/03/14.
 */
module.exports = function (app, passport) {
    /* Rutas de Passport */
// Ruta para desloguearse
    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });
// Ruta para autenticarse con Twitter (enlace de login)
    app.get('/auth/twitter', passport.authenticate('twitter'));
// Ruta para autenticarse con Facebook (enlace de login)
    app.get('/auth/facebook', passport.authenticate('facebook'));
// Ruta de callback, a la que redirigirá tras autenticarse con Twitter.
// En caso de fallo redirige a otra vista '/login'
    app.get('/auth/twitter/callback', passport.authenticate('twitter'), function (req, res) {
        res.redirect("http://bogodata.org");
    });
// Ruta de callback, a la que redirigirá tras autenticarse con Facebook.
// En caso de fallo redirige a otra vista '/login'
    app.get('/auth/facebook/callback', passport.authenticate('facebook') , function (req, res) {
        res.redirect("http://bogodata.org");
    });
}