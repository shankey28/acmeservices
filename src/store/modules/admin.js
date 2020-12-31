import api from "../../api/dynamodb";
import {Auth} from "aws-amplify";

export const admin = {

    state: {tablestatus:""},
    actions: {
        async createDDBTable({commit},tablename){
                var cred = await Auth.currentCredentials();
                api.checkTableExists(tablename,cred).then((status)=>{
                    if(!status)
                    {
                        api.createTable(tablename,cred).then((status)=>{
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
                debugger;
                api.checkTableExists(tablename,cred).then((status)=>{
                    if(status)
                    {
                        api.deleteTable(tablename,cred).then((status)=>{
                            if(status)
                            {
                            commit("setTableStatus","deleted");
                            }
                            else{
                                commit("setTableStatus","not delete");
                            }
                        })
                    }
                    else{
                        commit("setTableStatus","does not exist")
                    }
                })                



        }
    },
    mutations: {
        setTableStatus: (state,payload) => state.tablestatus = payload,

    },
    getters: {
        tablestatus: state => state.tablestatus
    }


}