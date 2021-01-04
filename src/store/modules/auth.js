import { Auth } from "aws-amplify";
import cw from "../../api/cw";

export const auth = {

    state: { user: null, username: null , usergroup: null, useremail: null,usercred: null},
    mutations: {
        setUser(state, payload) {
            console.log(payload);
            try{
                state.user = payload;
                state.username = payload.username;
                state.useremail = payload.attributes.email;
            }
            catch(error){
                console.log(error);
            }

        },
        setUserGroup(state,payload) {
            state.usergroup = payload;
        },
        setUserCred(state,payload) {
            state.usercred = payload

        }

    },
    actions: {
        async logout({ commit }) {


            const userInfo = await Auth.currentUserInfo();
            const cred = await Auth.currentCredentials();
            const {accessToken} = await Auth.currentSession();
            const cognitogroups = accessToken.payload['cognito:groups'];
            const tenant = cognitogroups[0];
            await cw.processLogs(cred,userInfo.username,tenant,"LoggedOut")
            commit("setUser",null);
            commit("setUserGroup",null);
            commit("setUserCred",null);
            return await Auth.signOut();

        },
        async login({ commit }, { username, password }) {
            try {
                await Auth.signIn({
                    username,
                    password
                });

                const userInfo = await Auth.currentUserInfo();
                commit("setUser", userInfo);
                const cred = await Auth.currentCredentials();
                commit("setUserCred",cred);
                const {accessToken} = await Auth.currentSession();
                // get the tenant from the top of the cognito groups list
                const cognitogroups = accessToken.payload['cognito:groups'];
                const tenant = cognitogroups[0];
                commit("setUserGroup",tenant);    

                await cw.processLogs(cred,userInfo.username,tenant,"LoggedIn")

                return Promise.resolve("Success");

            } catch (error) {
                console.log(error);
                return Promise.reject(error);
            }
        },
        async confirmSignUp(_, { username, code }) {
            try {
                await Auth.confirmSignUp(username, code);
                return Promise.resolve();

            } catch (error) {
                console.log(error);
                return Promise.reject(error);

            }
        },
        async signUp(_, { username, password, email }) {
            try {
                await Auth.signUp({
                    username,
                    password,
                    attributes: {
                        email
                    }
                })
                return Promise.resolve();

            } catch (error) {
                console.log(error);
                return Promise.reject();

            }
        },
        // async getUserGroup({commit}){
        //     const {accessToken} = await Auth.currentSession();
        //     // get the tenant from the top of the cognito groups list
        //     const cognitogroups = accessToken.payload['cognito:groups'];
        //     const tenant = cognitogroups[0];
        //     commit("setUserGroup",tenant);    
        // },
        async authAction({ commit }) {
            const userInfo = await Auth.currentUserInfo();
            commit("setUser", userInfo);

        }

    },
    getters: {
        user: (state) => state.user,
        usergroup: (state) => state.usergroup,
        useremail: (state) => state.useremail,
        username: (state) => state.username,
        usercred: (state) => state.usercred
        // useremail: (state) => state.user.ATTRIBUTES.EMAIL

    }

}