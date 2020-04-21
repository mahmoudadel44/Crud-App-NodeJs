const User=require('../model/user')

insertUser=(req,res,next)=>{
    // console.log(req.body.username)
    const user=new User({
      userName:req.body.username,
      userEmail:req.body.useremail
    })
    user.save((error,result)=>{
      if(error){
        console.log(error)
        res.redirect('/');
        return;
      }
      console.log(result)
      res.redirect('/getusers')
    })
    }
// get all users
getUsers=(req,res,next)=>{
    User.find({},(error,result)=>{
    if(error){
      console.log(error)
      res.redirect('/')
    }
    console.log(result)
    res.render('index',{items:result})
    
    })
    }

    //update Users
updateUsers =(req,res,next)=>{
        const id=req.body.id;
        const updatedUser={
         userName:req.body.username,
         userEmail:req.body.useremail
        }
      User.updateOne({_id:id},{$set:updatedUser},(error,doc)=>{
      if(error){
        console.log(error)
        res.redirect('/')
        return;
      }
      console.log(doc)
      res.redirect('/getusers')
      })
      }
      //delete users
  deleteUser=(req,res,next)=>{
        const id=req.body.id;
        User.deleteOne({_id:id},(error,doc)=>{
      if(error){
        console.log(error)
        res.redirect('/')
      }
      console.log(doc)
      res.redirect('/getusers')
        })
      }
    module.exports={
        insertUser:insertUser,
        getUsers:getUsers,
        updateUsers:updateUsers,
        deleteUser:deleteUser
    }
