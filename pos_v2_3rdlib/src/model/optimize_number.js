/*Created by zengpuyang on 14-11-12.*/
function num(i,arr,inputs){      //i：购物车序号；arr：购物车商品代码分割数组；inputs：购物车数组
    var count=1;
    for(var j=i+1;j<inputs.length;j++){
      if(arr[0]==inputs[j]){
        count+=1
      }
    }
    return count+=arr[1]-1
}