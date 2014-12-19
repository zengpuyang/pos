function item_handled(inputs){
    return _.chain(inputs)
        .map(function(code){return code+'-1'})
        .groupBy(function(code){return code.substr(0,10)})
        .toArray()
        .map(function(codes){
            return {
                barcode:codes[0].split('-',2)[0],
                count: _.reduce(codes,function(code1,code2){
                    return code1+parseInt(code2.split('-',2)[1])
                },0)
            }
        })
        .each(function(code){
            var code_method=_.filter(loadAllItems(),function(item){return item.barcode==code.barcode});
                code.name=code_method[0].name;
                code.unit=code_method[0].unit;
                code.price=code_method[0].price;
        })
        .value()
}