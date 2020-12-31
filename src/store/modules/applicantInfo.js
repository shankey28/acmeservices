import {API,graphqlOperation, Storage} from "aws-amplify";
import {createApplicantProfile,updateApplicantProfile} from "@/graphql/mutations";
import {getApplicantProfile} from "@/graphql/queries";
import { uuid } from "uuidv4";
import awsconfig from "@/aws-exports";



export const applicantInfo = {
    state: {applicants: null,applicant: null},
    getters: {
        applicants:(state) => state.applicants,
        applicant:(state) => state.applicant
    },
    mutations: {
        setApplicants(state,payload){
            state.applicants = payload;
        },
        setApplicant(state,payload){
            state.applicant = payload;
        }
    },
    actions: {

        async updateApplicant({rootState},{applicantData,resumeFile}){
            const {
                aws_user_files_s3_bucket_region: region,
                aws_user_files_s3_bucket: bucket
            } = awsconfig;
            const extension = resumeFile.name.substr(resumeFile.name.lastIndexOf(".") + 1);
            const resumeId = uuid();
            const key = `resumes/${resumeId}.${extension}`;
            // appStatus:"New",
            // caFocus: this.careerInt,
            // name: this.name,
            // userName: this.username,
            // yOe: this.yOe ,
            // payOpt: this.payMethod,
            const inputData = {appStatus: applicantData.appStatus, 
                               caFocus: applicantData.caFocus,
                               email: applicantData.email,
                               name: applicantData.name,
                               userName: applicantData.userName,
                               yOe: JSON.stringify(applicantData.yOe).includes("Less than")?"Lessthan4":"Morethan4",
                               payOpt: JSON.stringify(applicantData.payOpt).includes("One time")?"OneTimeFee":"PerInterview"};


            inputData.resume = {key,region,bucket};

            //s3 bucket storage add file to it
            try {
                await Storage.put(key, resumeFile, {
                    level: "protected",
                    contentType: resumeFile.type,
                    metadata: { resumeId }
                })
                const {username} = rootState.auth;
                const item = await API.graphql(graphqlOperation(getApplicantProfile,{userName:username}));

                if(!item.data.getApplicantProfile)
                {
                await API.graphql(
                    graphqlOperation(createApplicantProfile, { input: inputData })
                );
                }
                else {
                    debugger;
                await API.graphql(
                    graphqlOperation(updateApplicantProfile, { input: inputData })
                ) ;   
            }            
                return Promise.resolve("success");


            } catch (error) {
                return Promise.reject(error);

            }

        }

    }

}