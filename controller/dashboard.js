const models =require('../models');
const jwt = require('jsonwebtoken');

exports.dashboardForm = (req, res, next) => {
    models.userItems.findAll({
        include: [{
          model: models.users,
          //required: true,inner join
          where: {id: 2}
          }]
      }).then(resultt=>{
        console.log(resultt)
    }).catch(err=>{
        console.log(err)
    })
    return res.render('dashboard');

};

exports.dashboardData = (req, res, next) => {

    var data = [];
    data = req.body.liInput;
    // var data2 =Object.entries(data)
    console.log('*********************', data)
    //  var ar = data.toString().split(',');
    //  console.log(ar)
    const token = req.cookies.jwt;

    // check json web token exists & is verified
    if (token) {
        jwt.verify(token, 'this is secret key', (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                return res.render('dashboard', { pageTitle: 'Something Went Worng' });

            } else {
                // console.log(decodedToken);
                // for (var i = 0; i < data.length; i++) {
                // var mydata = data[i];
                // const result = await Item.create({
                //     itemName: data,
                //     user_id: decodedToken.id
                // })
                var dataArray = [];
                for (var i = 0; i < data.length; i++) {
                    dataArray.push({
                        item_name: data[i],
                        user_id: decodedToken.id
                    })
                }
                models.userItems.bulkCreate(dataArray)
                .then(reslt => {
                    console.log(reslt);
                    return res.render('dashboard', { pageTitle: 'Item inserted successfully' });
                }).catch(err => {
                    console.log(err);
                    return res.render('dashboard', { pageTitle: 'Something Went Worng' });
                });
                 
            }
        });
    } else {
        return res.render('dashboard', { pageTitle: 'Authentication Failed' });

    }




};