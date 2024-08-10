const AWS = require("aws-sdk");

const deleteTask = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;

  const result = await dynamodb
    .delete({
      TableName: "TaskTable",
      Key: { id },
    })
    .promise();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "task deleted successfully",
    }),
  };
};

module.exports = {
  deleteTask,
};
