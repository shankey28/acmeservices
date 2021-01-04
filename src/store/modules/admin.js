import dynamodb from "../../api/dynamodb";

import {Auth} from "aws-amplify";

export const admin = {

    state: {tablestatus:"",tabledata:null},
    actions: {
        async createDDBTable({commit},tablename){
                var cred = await Auth.currentCredentials();
                dynamodb.checkTableExists(tablename,cred).then((status)=>{
                    if(!status)
                    {
                        dynamodb.createTable(tablename,cred).then((status)=>{
                            if(status)
                            {
                            commit("setTableStatus","created");
                            }
                            else
                            {
                                commit("setTableStatus","not created")
                            }

                        })
                    }
                    else
                    {
                        commit("setTableStatus","already exists");
                    }
                })

        },
        async deleteDDBTable({commit},tablename){

                var cred = await Auth.currentCredentials() ;
                dynamodb.checkTableExists(tablename,cred).then((status)=>{
                    if(status)
                    {
                        dynamodb.deleteTable(tablename,cred).then((status)=>{
                            if(status)
                            {
                            commit("setTableStatus","deleted");
                            }
                            else{
                                commit("setTableStatus","not deleted");
                            }
                        })
                    }
                    else{
                        commit("setTableStatus","does not exist")
                    }
                })                



        },

        async updateDDBTable({commit}, {file,tablename}){

            var cred = await Auth.currentCredentials() ;
            dynamodb.checkTableExists(tablename, cred).then((status)=>{
                if(status)
                {
                    dynamodb.updateTable(tablename,file,cred).then((status)=>{
                        if(status)
                        {
                        commit("setTableStatus","updated");
                        }
                        else{
                            commit("setTableStatus","not updated");
                        }
                    })
                }
                else{
                    commit("setTableStatus","does not exist")
                }
            })    
        },


        async getDDBTable({commit}, tablename){
            debugger;
            var cred = await Auth.currentCredentials() ;
            // dynamodb.checkTableExists(tablename, cred).then((status)=>{
            //     if(status)
            //     {
            //         dynamodb.getTableData(tablename,cred).then((data)=>{
            //             if(!data)
            //             {
            //             commit("setTableStatus","not exported");
            //             }
            //             else{
            //                 commit("setTableStatus","exported");
            //                // commit("setTableData",data);
            //                 return data
            //             }
            //         })
            //     }
            //     else{
            //         commit("setTableStatus","does not exist")
            //     }
            // })    

            var status = await dynamodb.checkTableExists(tablename,cred);
            if(status){
                var data = await dynamodb.getTableData(tablename,cred);
                    if(!data)
                        {
                        commit("setTableStatus","not exported");
                        }
                        else{
                            commit("setTableStatus","exported");
                           // commit("setTableData",data);
                            return data
                        }
            }
        }


    },
    mutations: {
        setTableStatus: (state,payload) => state.tablestatus = payload,
        setTableData: (state,payload) => state.tabledata = payload

    },
    getters: {
        tablestatus: state => state.tablestatus,
        tabeldata: state => state.tabledata
    }


}