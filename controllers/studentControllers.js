import Student from "../models/student.js"

export function getStudents(req,res){
        Student.find()
        .then((students)=>{

              res.json(students);

            }

        ).catch(()=>{

                res.json({
                    message : "Failed to fetch student"
                });

                
            } );
    }



 export  function creatStudent (req,res) {

       if(req.user == null){
		res.status(403).json({
			message : "Please login to create a student"
		})
		return
	}
	if(req.user.role != "admin"){
		res.status(403).json({
			message : "Please login as an admin to create a student"
		})
		return
	}
        student
            .save()
            .then(()=>{
                res.json({
                    message : "student save successfully"
                });
        })
        .catch(()=>{
                console.log("FAild to save student")
            });


    }    