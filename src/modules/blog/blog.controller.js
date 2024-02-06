const connection = require('./../../../DB/connection/connection.js');

const getAllBlogs = (req, res) => {
    const SQL = `SELECT * FROM blog`;
    connection.execute(SQL,(err,result)=>{
    return res.json({ message: 'success', Blogs: result});
    });
}
const getUserBlogs = (req, res) => {
    const {user_name}=req.body;
    const SQL = `SELECT * FROM blog where user_name='${user_name}'`;
    connection.execute(SQL,(err,result)=>{
    return res.json({ message: 'success', Blogs: result});
    });
}
const addBlog = (req, res)=>{
  
    const {title,description ,user_name}= req.body;
    const SQL = `INSERT INTO blog(title,description,user_name) VALUES('${title}','${description}','${user_name}')`;
    connection.execute(SQL,(err,result)=>{
      if(err){
      return res.json({message:"error creating Blog"}); 
    }
    return res.json({message:"success"}); 
    });
   
}
const deleteBlog = (req, res) => {
  
    const {BlogId , user_name} = req.params;
    const SQL = `DELETE FROM blog WHERE id=${BlogId} AND user_name='${user_name}'`;
    connection.execute(SQL,(err,result)=>{
      if (result.affectedRows==0){
        return res.json({ message: 'Blog not found'});
      }
      return res.json({ message: 'success'});
    });

}
const updateBlog = (req, res) => {
    const {title, description } = req.body;
    const {BlogId , user_name }=req.params;

    const SQL = `UPDATE blog SET description='${description}', title='${title}', user_name='${user_name}' WHERE id=${BlogId} AND user_name='${user_name}'`;
    connection.execute(SQL,(err,result)=>{
      if (result.affectedRows==0){
        return res.json({ message: 'Blog not found'});
      }
      return res.json({ message: 'success'});
    });
}

module.exports = {getAllBlogs,getUserBlogs,addBlog,deleteBlog,updateBlog};