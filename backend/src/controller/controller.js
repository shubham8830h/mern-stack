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

module.exports.postMethod = postMethod;
module.exports.readData=readData