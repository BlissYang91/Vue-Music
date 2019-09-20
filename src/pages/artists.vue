<template>
   <div class="index">
      <div class="title"><p>(子组件传来参数)当前歌曲名：</p><span>{{this.title}}</span></div>
      <div class="floating_container">
         <!-- 引用子组件并给子组件传递参数 sub_type -->
         <HorizShowList @son_click="getMusicTitle" :sub_type="sub_type"></HorizShowList>
      </div>
   </div>
</template>

<script>

// 引入子组件
import HorizShowList from "@/components/Horiz_Show_List"

export default {
   name: '',
   data() {
       return {
          sub_type:2,
          title:""
       }
   },
  components: {
   //   注册组件
    HorizShowList,
  },
  methods:{
     getMusicTitle(data){
        this.title = data;
     }
  }
}
</script>

<style scoped >
.index{
   width: 100%;
   height: 100vh;
   background: orange
}
.title{
   
   width: 100%;
   height: 50px;
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-items: center;
   top: 400px;
}
p{
   font-size: 12pt;
   color: beige;

}
.floating_container{
   position: fixed;
   bottom: 0.533333rem;
   left: 50%;
   transform: translateX(-50%);
   background: white;
   width: 90%;
   height: 9.333333rem;
   border-radius: 0.266667rem;
}

</style>
