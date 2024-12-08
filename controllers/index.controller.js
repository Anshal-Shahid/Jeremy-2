
const home=(req,res)=>{
    res.render('home.ejs')
}

const about=(req,res)=>{
    res.render('about.ejs')
}
const index=(req,res)=>{
    res.render('index.ejs')
}
const dinner=(req,res)=>{
    res.render('dinner.ejs')
}

module.exports={home,about,index,dinner}