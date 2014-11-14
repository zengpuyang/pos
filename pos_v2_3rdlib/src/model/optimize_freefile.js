/**
 * Created by zengpuyang on 14-11-14.
 */
function funfree(free,paid,save,n,count,arr,c){
    if(count>=3 && loadPromotions.call()[0].barcodes.indexOf(arr[0])!=-1 ){
    c=parseInt(count/3);
    free+='名称：'+loadAllItems()[n].name+'，数量：'+c+loadAllItems()[n].unit+'\n';
    paid-=c*loadAllItems()[n].price;
    save+=c*loadAllItems()[n].price;
    }
    return [free,paid,count-c,save]
}