let mongoose = require('mongoose');
let User = mongoose.model('User')

module.exports = {
  register: (req, res) => {
    var newUser = new User(req.body);
    newUser.save( (err, user) => {
      if(err){
        console.log(err);
        return res.sendStatus(500);
      }else{
        // req.session.user = user;
        return res.json(user);
      }
    })
  },

login: (req, res) => {
  User.findOne({email: req.body.email}, (err, user) => {
    if (err || user.password != req.body.password){
      console.log('invalid')
      return res.sendStatus(500);
    }else{
      console.log(user);
      return res.json(user);
      }
    })
  }
}
