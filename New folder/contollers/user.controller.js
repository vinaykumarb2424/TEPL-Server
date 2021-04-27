
const mongoose = require('mongoose');
const passport = require('passport');
const User = mongoose.model('users');

module.exports.register = (req, res, next) => {
    var user = new User();
    user.FirstName = req.body.FirstName;
    user.LastName = req.body.LastName;
    // user.DOB = req.body.DOB;

    // user.Gender = req.body.Gender;
    user.Email = req.body.Email;
    user.Mobile = req.body.Mobile

    user.Password = req.body.Password;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
}


module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, user, info) => {       
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) return res.status(200).json({ "token": user.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}

