import passport from 'passport';
import expressSession from 'express-session';
import LocalStrategy from 'passport-local';

export default function (app) {
    passport.serializeUser((user, done) => done(null, user.username));
    passport.deserializeUser((id, done) => {
        const user = {username: 'wicki', firstname: 'Moritz', lastname: 'Wicki',};
        done(null, user);
    });

    passport.use(new LocalStrategy((username, password, done) => {
        if (username === 'wicki' && password === 'sml12345') {
            done(null, {username: 'wicki', firstname: 'Moritz', lastname: 'Wicki'});
        } else {
            done(null, false);
        }
    }));

    app.use(expressSession({secret: 'M151', resave: false, saveUninitialized: false}));

    app.use(passport.initialize());

    app.use(passport.session());

    app.post('/login', passport.authenticate('local', {failureRedirect: '/login.html'}, null), (request, response) => {
        response.redirect('/');
    });
    app.get('/logout', (request, response) => {
        request.logout();
        response.redirect('/');
    });
}
