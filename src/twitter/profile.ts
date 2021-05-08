import AWS from 'aws-sdk';

export const getdata = async () => {
    const dynamoDB = new AWS.DynamoDB.DocumentClient();

      const getParam = {
        TableName: 'profile',
        Key: {
          id: "1",
        },
      };

      const profile = await dynamoDB.get(getParam).promise();
      return profile.Item.description;

};

export const putdata = async (request?: any) => {
    const dynamoDB = new AWS.DynamoDB.DocumentClient();
    let data = {} as {
        description: string,
        img: string
    };
    
    data = JSON.parse(request.body);

    const params = {
      TableName: 'profile',
      Item: {
        id: "1",
        description:data.description,
        image_url: data.img
      },
    };
    await dynamoDB.put(params).promise();

};