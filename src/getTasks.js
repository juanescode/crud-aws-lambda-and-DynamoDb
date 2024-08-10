const AWS = require("aws-sdk");

const getTasks = async (event) => {
 try {
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const result = await dynamodb
      .scan({
        TableName: "TaskTable",
      })
      .promise();
  
    const task = result.Items;
  
    return {
      statusCode: 200,
      body: JSON.stringify(task),
    };
 } catch (error) {
    console.log(error)
 }
};

module.exports = { getTasks };
