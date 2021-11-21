<template >
    <div>table</div>
    <table v-if="header" class="w-100 table table-primary">
        <thead>
            <tr>
                <th v-for="(thead,key) in header" :key="key">
                    {{thead}}
                </th>
            </tr>
        </thead> 
        <tbody>
            <tr v-for="(item,key) in FormatedListItem" :key="key">
             <td v-for="(cell,keyCell) in item" :key="keyCell">
                {{cell}}     
            </td> 
            </tr>
        </tbody>  
    </table>
</template>

<script lang="ts">
    import { Vue, Options } from "vue-class-component";

    @Options({
        components: {}
    })
    export default class TableDefault extends Vue {
        header!:string[];
        items;
        FormatedListItem:any = [];

        override created():void {
            this.header = [
                "id",
                "content", 
                "title",
            ] 
            this.items = [
                {"id" : 1,"title":"test1","tel":6040201584,"content":"loremS SDKHCI SID "},
                {"id" : 2,"title":"tesdd666","tel":10000000,"content":"cdskjfnvdf  SDKHCI SID "}
            ]
            
            this.items.map((el) =>{
                let item:Record<string, unknown> = el
                let newItem:Record<string, unknown> ={}
                 this.header.map((headItem)=>{
                     newItem[headItem] = item[headItem]
                 })
                this.FormatedListItem.push(newItem)
            })
        }


    }

</script>

<style lang="scss" scoped>
</style>