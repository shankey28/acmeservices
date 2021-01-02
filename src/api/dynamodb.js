
const {DynamoDBClient,DescribeTableCommand, DeleteTableCommand,CreateTableCommand,BatchWriteItemCommand} = require("@aws-sdk/client-dynamodb");
import parse from "csv-parse/lib/sync";


export default {

      async checkTableExists(tablename,cred) {
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
            ],
            AttributeDefinitions: [       
                { AttributeName: "year", AttributeType: "S" },
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

        

    },
    async readFileAsText(file){
        let content = new Promise((res)=>{
            let fileReader = new FileReader();
            fileReader.onload = (e) => {
                res(fileReader.result);
                console("text converted: ",e);
            };
            fileReader.readAsText(file);
        });
        return content ;
    },
    async updateTable(tablename,file,cred){
        debugger;
        const params = {RequestItems:{}};
        var dbclient = new DynamoDBClient({
            region: "us-east-1",
            credentials:{
                accessKeyId: cred.accessKeyId,
                secretAccessKey: cred.secretAccessKey,
                sessionToken: cred.sessionToken
            }
          });

          const contents = await this.readFileAsText(file);

          const data = parse(contents,{columns:true});
          var tableitems = [];
          data.forEach((item)=>{
              tableitems.push({PutRequest:{
                Item:{
                    Key:{S:"year"},
                    year: {S:item["year"]},
                    title: {S:item["title"]}
                  }
              }
          });
        });
            params.RequestItems = {
                [tablename] : tableitems 
            }
          try{
             var res = await dbclient.send(new BatchWriteItemCommand(params));
             console.log("Success updating DDB table: ",res);
             return Promise.resolve(true);
          }
          catch(err){
              console.log("Error updating table: ",err)
              return Promise.resolve(false);

          }

    }
}

