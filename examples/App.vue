<template>
    <div>
        <div id="webgl" class="box" :style="styleObj"></div>
    </div>
</template>
<script>
    import "../src/index"
    export default{
        data(){
            return{
                styleObj:{
                    width : "1000px",
                    height : "600px"
                }
            }
        },
        created(){
        },
        components:{
        }
    }
</script>
<style>
    @import "global.css";
    .box {
        padding:10px;
        border: 1px solid #9da0a4;
        margin: 0 auto;
    }
</style>