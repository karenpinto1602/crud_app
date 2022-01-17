// this file will allow us to render different routes

exports.homeRoutes = (req,res) => {
    res.render('index');
}

exports.add_userRoute = (req,res) => {
    res.render('add_user');
}

exports.update_userRoute = (req,res) => {
    res.render('update_user');
}