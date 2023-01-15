const foodModel=require("../model/model")

const postMethod=async(req,res)=>{
  try {
      const foodName = req.body.foodName;
      const daySince = req.body.daySince;
      const data = await foodModel.create({
        foodName: foodName,
        daySince: daySince,
      });
      if (data) {
         res.send("insrted data")
      }
  } catch (error) {
    res.send(error.message)
  }
}



const readData = async (req, res) => {
  try {
    foodModel.find({},(err,result)=>{
      if (err) {
        res.send(err)
      }
      res.send(result)
    })
  } catch (error) {
    res.send(error.message);
  }
};


const updateData= async(req,res)=>{
  try {
     const newFoodName = req.body.newFoodName;
     const id = req.body.id;

     const data = await foodModel.findByIdAndUpdate(
       { _id: id },
       { foodName: newFoodName },
       { new: true }
     );

     return res.status(200).send({ message: "sucessfully updated..." });
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const deleteData=async(req,res)=>{
 try {
   const id = req.params.id;
   const record = await foodModel.findByIdAndRemove(id);
   return res.status(200).send({ message: "sucessfully deleted..." });
 } catch (error) {
  res.status(500).send(error.message)
 }
}

module.exports.postMethod = postMethod;
module.exports.readData=readData
module.exports.updateData=updateData
module.exports.deleteData=deleteData