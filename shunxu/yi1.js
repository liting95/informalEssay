//for中嵌套异步
function forTest() {
    for (var i = 0; i < 5; i++) {
        // setTimeout(function () {
        //     console.log("第" + (i + 1) + "次循环--for"); // 66666
        // }, 1000);
        (function (j) {
            setTimeout(function () {
                console.log("第" + (j + 1) + "次循环--for"); // 66666
            }, 1000);
        }(i));
    }
}
forTest();
//用递归代替for循环，可以保证正常执行顺序
function recurTest(j, length) {
    setTimeout(function () {
        console.log("第" + (j + 1) + "次循环--递归");
        if (++j < length) {
            recurTest(j, length);
        }
    }, 1000);
}
recurTest(0, 5);

// 立即执行函数：声明一个匿名函数然后马上调用这个匿名函数
/*
(function(){})()不叫闭包叫立即执行函数，所谓闭包，要拆成闭和包，
闭指代不想暴露给外部的数据，包指代将数据打包出去暴露给外部；
之所以这么说原因在于JS的函数作用域，函数内部的变量函数外部无法访问，这形成了闭；
函数外部想得到函数内部的变量，可以通过某些方法譬如通过return等语句将内部的变量暴露出去，这形成了包；
因而——立即执行函数只是函数的一种调用方式，和闭包没有必然的联系；
闭包是和作用域扯上关系的，而(function(){})()是函数声明完就执行，
只是有时想要用到闭包那么可以用(function(){})()来构成闭包，而不是(function(){})()是闭包
闭包的本质是执行完后只返回有用的数据，包内变量完全销毁，防止全局污染
*/






















// created: function () {
//     axios.get('../../WeChatMaterial/recommendationItem/list?' + 'currentPage=1')
//         .then(function (response) {
//             var respData = response.data;
//             if (respData.result === 'ok') {
//                 app.user_display = respData.userDisplay;
//                 app.items = respData.data.list;
//                 app.total_page = respData.data.pages;
//                 app.current_page = respData.data.pageNum;
//                 //遍历respData.data.list中的id
//                 getGoodsList(0, app.items.length);

//                 function getGoodsList(j, length) {
//                     var id = app.items[j].id;
//                     axios.get('../../WeChatMaterial/goodsList?id=' + id)
//                         .then(function (response) {
//                             var goodsList = response.data;
//                             app.goodsList.push(goodsList);
//                             if (++j < length) {
//                                 getGoodsList(j, length);
//                             }
//                         });
//                 }
//             }
//         });
// }