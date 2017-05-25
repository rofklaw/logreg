let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
  email: {type:String, required: true,
    validate: {
              validator: function( value ) {
              return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( value )
              },
              message: "Email not Valid"
              }
      },
  password: {type:String, required: true, minlength: 8, maxlength: 32}
})

mongoose.model('User', UserSchema);
