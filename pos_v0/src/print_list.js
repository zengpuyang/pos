var print_List={
    put_seal_shopping:function(inputs){
        var receipt='';
        _.each(inputs,function(item){
            receipt+= '名称：'+item.name+'，数量：'+item.count+item.unit+
                '，单价：'+item.price.toFixed(2)+'(元)，小计：'+(item.count*item.price).toFixed(2)+'(元)\n';
        });
        return receipt
    },
    total: function (inputs) {
        return _.reduce(_.map(inputs,function(item){return item.price*item.count}), function(memo, num){ return memo + num; }, 0).toFixed(2);
    }
};