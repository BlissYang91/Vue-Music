<template>
   <div class="scroller">
      <div class="item_container"   v-for="(item,index) in list_desc " :key="index">
           <div class="container" @click="$emit('son_click',item.title)">
               <img :src="item.album_1000_1000" :alt="item.pic_big">
               <div>{{item.author}}</div>
           </div>
      </div>
       
   </div>
</template>

<script>
export default {
   name: 'HorizShowList',
   data() {
       return {
          list_desc:[]
       }
   },
   //    接收父级传来的参数，通过名字匹配 sub_type
   props:{
      sub_type:{
         type:[String,Number],
         default:24
      }

   },
   mounted(){
     var url = this.HOST + "/v1/restserver/ting?method=baidu.ting.billboard.billList&type="+this.sub_type+"&size=8&offset=0";
     this.$axios.get(url)
      .then(res =>{
         this.list_desc = res.data.song_list
         console.log('请求结果：'+JSON.stringify(res.data.song_list));
         
      })
      .catch(error => {
          console.log(error);
          
      })
   },
  
}
</script>

<style  scoped >
.scroller{
   width: 100%;
   height: 100%;
   display: -webkit-flex;
   display: flex;
   flex-direction: row;
   flex-flow: row nowrap;
   justify-items: center;
   align-items: center;
   overflow-x: scroll;
   list-style: none;
}
.item_container{
   width: 5.333333rem;
   height: 100%;
   display: flex;
   margin: 0 10px;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   list-style: none;
}
.container{
   width: 4.8rem;
   height: 100%;
   display: flex;
   margin: 0 auto;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   list-style: none;
  
}
</style>
