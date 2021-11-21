<template >
    <div>table</div>
    <!-- <div v-if="header" style="" class="w-100 table-grid">
        <div class="thead" style="display: grid; grid-template-columns:  auto auto auto "> 
            <div class="th" v-for="(thead,key) in header" :key="key">
                {{thead}}
            </div>
        </div>
        <div class="tbody">
            <div class="tr" style="display: grid; grid-template-columns:  auto auto auto " v-for="(item,key) in FormatedListItem" :key="key">
                <div class="td" v-for="(cell,keyCell) in item" :key="keyCell">
                    {{cell}}     
                </div> 
            </div>
        </div>
    </div> -->
     <div v-if="header" class="w-100 table-grid">
        <div class="thead"> 
            <div class="th" v-for="(thead,key) in header" :key="key">
                {{thead}}
            </div>
        </div>
        <div class="tbody" style=" " v-for="(item,key) in FormatedListItem" :key="key">
            <div class="td" v-for="(cell,keyCell) in item" :key="keyCell">
                {{cell}}     
            </div> 
        </div>
    </div>
    
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
    .table-grid{
         display: grid;
        .thead{
             grid-area: header;
            border-bottom: 2px solid black;
        }
        .tbody{
            display: grid;
             grid-area: main;

        }
        .td, .th{
            text-align: left;
        }

     grid-template-rows: auto;
    grid-template-areas: 
        "header header header header"
        "main main main main"
        "main main main main"
        }
</style>