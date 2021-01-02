<template>
 <div class="bg-gray-200 min-h-screen pt-2 font-mono my-16">
        <div class="container mx-auto">
            <div class="inputs w-full max-w-2xl p-6 mx-auto">
                <h2 class="text-2xl text-gray-900">DynamoDB Actions </h2>
                <form class="mt-6 border-t border-gray-400 pt-4" @submit.prevent="submitForm">
                        <div class='w-full md:w-full px-3 mb-6'>
                        <div class='w-full md:w-full px-3 mb-6'>
                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Table Name</label>
                            <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' v-model="tablename"  required>
                        </div>

                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Select an option</label>
                            <div class="flex-shrink w-full inline-block relative">
                                <select class="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded" v-model="tableoptions" @change="cascade">
                                    <option>choose ...</option>
                                    <option>Create Table</option>
                                    <option>Delete Table</option>
                                    <option>Export Table Data</option>
                                    <option>Import Table Data</option>
                                </select>
                                <div class="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                        <div class='w-full md:w-full px-3 mb-6' v-if="importselected">
                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Upload File</label>
                            <div class="flex-shrink w-full inline-block relative">
                            <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' @change="updateFile" type='file' accept=".csv" required>

                            </div>
                        </div>
                            </div>
                        </div>
                            <div class="flex justify-center">
                                <button class="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3" type="submit">Submit</button>

                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' v-if="tablestatus">Table {{tablestatus}}</label>  

                            </div>

                </form>
            </div>
        </div>
     </div>
  
</template>

<script>
import {mapActions,mapGetters} from "vuex";
export default {
    name: "Admin",
    data:()=>({tablename:"",importselected: false, datafile: null,tableoptions:""}),

    methods:{
        ...mapActions({createTable:"createDDBTable",deleteTable:"deleteDDBTable",updateTable:"updateDDBTable"}),
         submitForm(){
            if(this.tableoptions == "Create Table")
            {
                this.createTable(this.tablename);

            }
            else if(this.tableoptions == "Delete Table")
            {
                this.deleteTable(this.tablename);
            }
            // else if(this.tableoptions == "Export Table Data")
            // {

            // }
            else if(this.tableoptions == "Import Table Data")
            {
                debugger;
                this.updateTable({file:this.datafile,tablename:this.tablename});

            }

        },
        updateFile(file){
          this.datafile = file.target.files[0];
          console.log(this.datafile);
      },
        cascade(e){
            this.tableoptions = e.target.value;
            if(e.target.value == "Import Table Data")
            {
            this.importselected = true;
            this.tablestatus = false;
            }
            else
            {
            this.tablestatus = false;
            this.importselected = false;
            }
        }


    },
    computed: mapGetters({tablestatus:"tablestatus"})

}
</script>

<style>

</style>