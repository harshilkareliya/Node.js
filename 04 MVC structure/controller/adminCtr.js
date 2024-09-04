module.exports.home = (req,res)=>{
    try{
        res.render('home')
    }
    catch(err){
        console.error(err)
        res.status(500).send('Server Error')
    }
}

module.exports.about = (req,res)=>{
    try{
        res.render('about')
    } catch(err){
        console.error(err)
        res.status(500).send('Server Error')
    }
}

module.exports.book = (req,res)=>{
    try{
        res.render('book')
    } catch(err){
        console.error(err)
        res.status(500).send('Server Error')
    }
}

module.exports.contact = (req,res)=>{
    try{
        res.render('contact')
    } catch(err){
        console.error(err)
        res.status(500).send('Server Error')
    }
}