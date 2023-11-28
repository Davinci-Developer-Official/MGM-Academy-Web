'use server'
import {v4 as uuidv4 }from "uuid";
import {pool}from "../db";

export default async function postStudentProfileData(req, res) {
    //connect to postrgres database.
    const client = await pool.connect();
    const createTable_studentsProfile = "CREATE TABLE studentsProfile (id  serial,usernames VARCHAR(100),studentUniqueId uuid PRIMARY KEY,phonenumber VARCHAR(20),email VARCHAR(50),biography VARCHAR(300),password VARCHAR(50),dateCreated DATE); "
    //HTTP Methods
    if (req.method === 'POST') {
      try {
        const studentUniqueId = uuidv4();
        const { usernames,phonenumber,email,biography,password } = req.body;
        
        const workingInsertQuery = "INSERT INTO studentsProfile (usernames, studentuniqueid, phonenumber, email, biography, password, datecreated)  VALUES ('sloppz', '550e8400-e29b-41d4-a716-446655440000', '+4571233764', 'slop@gmail.com', 'sloop', 'sloppy', CURRENT_TIMESTAMP);"
        const editedInsertQuery ="INSERT INTO studentsProfile (usernames, studentuniqueid, phonenumber, email, biography, password, datecreated) VALUES ($1, $2, $3, $4, $5, $6, CURRENT_TIMESTAMP); "
        //const insertQuery = 'INSERT INTO studentsProfile (usernames,phonenumber,email,biography,password) VALUES ($1,$2,$3,$4,$5,$6)'
        const result = await client.query(editedInsertQuery, [usernames,studentUniqueId,phonenumber,email,biography,password]);
        
        res.status(200).json({ success: true, data: result.rows });
        console.log({success:true,data:result.rows})
      } catch (error) {
        console.error('Error executing SQL query:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
      }
    } else if(req.method === "GET"){
        try {
            
            const result = await client.query('SELECT * FROM studentsProfile ')

            res.status(200).json({success:true,data:result.rows});
            console.log({success:true,data:result.rows});
        } catch (error) {
            console.error(error);
            res.status(500).json({success:false,error:"internal server error"});
        }
    } else if(req.method==="PUT"){
        try {
            const { usernames,phonenumber,email,biography,password } = req.body;
            const updateQuery = 'UPDATE studentsProfile SET usernames = $1,phonenumber = $2,email = $3,biography = $4,password = $5 WHERE studentUniqueId = $6  RETURNING *  '
            const result = await client.query(updateQuery,[usernames,studentUniqueId,phonenumber,email,biography,password]);
            
            if(result.rowCount>0){
                const updatedProfile = result.rows[0];
                res.status(200).json({message:'post updated successfully',updatedProfile});
                console.log({message:'post updated successfully',updatedProfile});
            }else{
                res.status(404).json({message:"post not found"});
                console.log({message:"post not found"});
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({success:false,error:"internal server error"})
        }
    }else if(req.method==="DELETE"){
        try {
            const{studentUniqueId}=req.body;
            const deleteQuery = "DELETE FROM studentsProfile where studentUniqueId = $1  RETURNING * ";
            const result = await client.query(deleteQuery,[studentUniqueId]);

            if(result.rowCount > 0){
                const deletedProfile = result.rows[0];
                res.status(200).json({message:"post deleted successfully",deletedProfile});
            }else{
                res.status(404).json({message:"profile not found"});
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({message:"Internal server Error"});
        }
    }else if(req.method==="DELETE"){
        try {
            const deleteAllQuery = 'DELETE FROM studentsProfile  RETURNING * ';
            const result = await client.query(deleteAllQuery);  
            if(result.rowCount>0){
                const deletedItem = result.rows;
                res.status(200).json({message:"All items have been deleted",deletedItem})
            }else{
                res.status(404).json({message:"no items found to delete"});
            }
        } catch (error) {
            console.error(error);
            res.status(404).json({message:"error deleting profiles"});
        }
    }else{
        console.log("api consumption has an issue during consumption contact the tech guy(s) ");
    }
  }