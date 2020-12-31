var AWS = require("aws-sdk");
const {DynamoDBClient,DescribeTableCommand, DeleteTableCommand,CreateTableCommand} = require("@aws-sdk/client-dynamodb");

export default {

      async checkTableExists(tablename,cred) {
         debugger
         var dbclient = new DynamoDBClient({
            region: "us-east-1",
            credentials:{
                accessKeyId: cred.accessKeyId,
                secretAccessKey: cred.secretAccessKey,
                sessionToken: cred.sessionToken
            }
          });
          try{
          var data = await dbclient.send(new DescribeTableCommand({TableName:tablename}));
          console.log("Table exists: ", data)
          return Promise.resolve(true);
          }
          catch(err)
          {
              console.log("Table does not exist",err);
              return Promise.resolve(false);

          }
        


    },

     async createTable(tablename,cred){
        var status = false;
        var dbclient = new DynamoDBClient({
            region: "us-east-1",
            credentials:{
                accessKeyId: cred.accessKeyId,
                secretAccessKey: cred.secretAccessKey,
                sessionToken: cred.sessionToken
            }
          });
        var params = {
            TableName : tablename,
            KeySchema: [       
                { AttributeName: "year", KeyType: "HASH"},  //Partition key
                { AttributeName: "title", KeyType: "RANGE" }  //Sort key
            ],
            AttributeDefinitions: [       
                { AttributeName: "year", AttributeType: "N" },
                { AttributeName: "title", AttributeType: "S" }
            ],
            ProvisionedThroughput: {       
                ReadCapacityUnits: 10, 
                WriteCapacityUnits: 10
            }
        };
        
        try{
            var data = await dbclient.send(new CreateTableCommand(params));
            console.log("Table created: ", data)
            return Promise.resolve(true);
            }
            catch(err)
            {
                console.log("Error creating table",err);
                return Promise.resolve(false);
  
            }

    },
    async deleteTable(tablename,cred)
    {
        debugger
        var dbclient = new DynamoDBClient({
            region: "us-east-1",
            credentials:{
                accessKeyId: cred.accessKeyId,
                secretAccessKey: cred.secretAccessKey,
                sessionToken: cred.sessionToken
            }
          });
         
         var params ={TableName:tablename};
         var status = false;
         try{
            var data = await dbclient.send(new DeleteTableCommand(params));
            console.log("Table deleted: ", data)
            return Promise.resolve(true);
            }
            catch(err)
            {
                console.log("Error deleting table",err);
                return Promise.resolve(false);
  
            }

        

    }
}

