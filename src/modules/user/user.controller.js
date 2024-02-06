const connection = require('./../../../DB/connection/connection.js');

const getAllUsers = (req, res) => {
    const SQL = `SELECT * FROM users`;
    connection.execute(SQL,(err,result)=>{
    return res.json({ message: 'success', users: result});
    });
}
const addUser = (req, res)=>{


    let {email ,password}= req.body;
    let bio ="";
    if(req.body.bio)
    {
      bio= req.body.bio;
    }
    if(!email)
    return res.json({message:"email is requred"});
    if(!password)
    return res.json({message:"password is requred"});
  
    const SQL = `INSERT INTO users(email,password,bio) VALUES('${email}','${password}','${bio}')`;
    connection.execute(SQL,(err,result)=>{
      if(err){
      if(err.errno==1062){
        return res.json({message:"email already in use"}); 
      }
      return res.json({message:"error creating user"}); 
    }
    return res.json({message:"success"}); 
    });
   
}
const deleteUser = (req, res) => {
  
    const {userId} = req.body;
    const SQL = `DELETE FROM users WHERE id=${userId}`;
    connection.execute(SQL,(err,result)=>{
      if (result.affectedRows==0){
        return res.json({ message: 'user not found'});
      }
      return res.json({ message: 'success'});
    });

}
const updateUser = (req, res) => {
    let {userId, email, password } = req.body;
    let bio ="";
    if(req.body.bio)
    {
      bio= req.body.bio;
    }
    if(!email)
    return res.json({message:"email is requred"});
    if(!password)
    return res.json({message:"password is requred"});
    const SQL = `UPDATE users SET password='${password}', email='${email}', bio='${bio}' WHERE id=${userId}`;
    connection.execute(SQL,(err,result)=>{
      if (result.affectedRows==0){
        return res.json({ message: 'user not found'});
      }
      return res.json({ message: 'success'});
    });
}

module.exports = {getAllUsers,addUser,deleteUser,updateUser}
