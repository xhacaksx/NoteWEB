//GET Homepage

exports.homepage = async (req,res)=>{
    const locals ={
        title :"NodeJs Notes",
        description:"Notes App",
    }


    res.render('index',{
        locals,
        layout: '../views/layouts/front-page'
    });
}

exports.about = async (req,res)=>{
    const locals ={
        title :"About - NodeJs Notes",
        description:"Notes App",
    }


    res.render('about',locals)
}