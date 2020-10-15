const bcrypt =require('bcryptjs')
const models =require('../models')

exports.signupForm = (req, res, next) => {
  
  res.render('signup');
 
 
};


exports.postSignupData = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const pass = req.body.pass;
    
    models.users.findOne({ where: { email: email } })
    .then(userDoc => {
      if (userDoc) {
        return res.render('signup', {pageTitle: 'email already exist' });
      }
      return bcrypt.hash(pass, 12)
      .then( hashedPasswaord =>{
        models.users.create({
          name: name,
          email: email,
          password: hashedPasswaord
        }).then(result => {        
          return res.redirect('/login');
         }).catch(err => {
          console.log(err)
        })
        
      }).then(result => {
         
       return res.redirect('/login');
      })
      })
    .catch(err => {
      console.log(err)
    })
     
    
    

}