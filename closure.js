// 只是翻译，网址：http://javascriptissexy.com/understand-javascript-closures-with-ease/
/**
 * 闭包是一个内部函数，可以通过作用域链访问到外部（封装）函数的变量，他有三个作用域链：
 * 能够访问自己作用域的变量（函数内部定义的变量）；能够访问外部函数的变量；能够访问全局变量
 * 
 * 内部函数不仅可以可以访问外部函数变量，还可以访问外部函数的参数；注意：虽然内部函数可以
 * 直接访问外部函数参数，但不可以调用外部函数的 arguments 对象
 */
// 可以在一个函数的内部添加一个函数创建闭包
// JavaScript 中闭包的一个基本例子
function showName(firstName, lastName) {
    var nameIntro = "Your name is ";
    // this inner function has access to the outer function's variables, including the parameter
    function makeFullName() {
        return nameIntro + firstName + " " + lastName;
    }
    return makeFullName();
}
showName("Michael", "Jackson"); // Your name is Michael Jackson

/**
 * 闭包在 Node.js 中广泛运用，是 Node.js 异步和非阻塞架构中的主力军
 * 闭包也经常在jQuery中使用 和 你所看到的几乎所有的 JavaScript 代码中使用
 * (大概意思就是你能看到的 JavaScript 几乎都会使用闭包)
 */
// jQuery 中经典的闭包例子
// $(function () {
//     var selections = [];
//     $(".niners").click(function () { 
//         // this closure has access to the selections variable
//         selections.push(this.prop("name")); 
//         // update the selections variable in the outer function's scope
//     });
// });

// 闭包的规则和副作用
// 1. 即使外部函数 return 返回，闭包也可以访问外部函数的变量
/**
 * 闭包一个重要且棘手的问题之一是即使外部函数返回了，也还是可以访问到外部函数的变量。是的，你没看错。
 * 当 JavaScript 中的函数执行时，它们使用的是在创建时就生效的，一样的作用域链，这意味着即使外部函数返回后，
 * 内部函数仍然可以访问外部函数的变量。因此，在你的程序中，你不需要立刻调用内部函数来执行，可以在你需要的时候调用
 */
function celebrityName(firstName) {
    var nameIntro = "This celebrity is ";
    // this inner function has access to the outer function's variables, including the parameter
    function lastName(theLastName) {
        return nameIntro + firstName + " " + theLastName;
    }
    return lastName;
}

// 这一步，celebrityName 函数已返回，返回的是一个lastName 函数
var mjName = celebrityName("Michael");

// 外部函数返回，在这调用闭包 lastName 函数
// 但闭包依然可以访问外部函数 celebrityName 的变量和参数
mjName("Jackson"); // This celebrity is Michael Jackson
console.log(mjName); // [Function: lastName]

// 2. 闭包存储了外部函数变量的引用
/**
 * 他并不存储实际的值，当外部函数的变量的值在调用闭包之前发生改变时，闭包会变得更加有趣
 * 并且可以用创造性的方式来运用这个强大的功能，比如这个由 Douglas Crockford 首次展示的私有变量示例：
 */
function celebrityID() {
    var celebrityID = 999;
    // We are returning an object with some inner functions
    // All the inner functions have access to the outer function's variables
    return {
        getID: function () {
            // 该内部函数 getID 会返回未修改的当前值和调用 setID 更新后的 celebrityID 变量
            return celebrityID;
        },
        setID: function (theNewID) {
            // 该内部函数 setID 会随时更改外部函数的变量
            celebrityID = theNewID;
        }
    }
}

var mjID = celebrityID(); // celebrityID 函数返回了，返回的是一个对象
mjID.getID(); // 999
mjID.setID(567); // 更改外部函数的变量  
mjID.getID(); // 567: 返回更新后的celebrityId变量

// 3. 闭包错误
/**
 * 因为闭包可以访问到外部函数变量的更新后的值，所以当外部函数的变量通过for循环更改时，可能会出现 bug
 */
function celebrityIDCreator(theCelebrities) {
    var i;
    var uniqueID = 100;
    for (i = 0; i < theCelebrities.length; i++) {
        theCelebrities[i]["id"] = function () { // 闭包
            return uniqueID + i;
        }
    }
    return theCelebrities; // 返回的 id 是个function
}

var actionCelebs = [{
    name: "Stallone",
    id: 0
}, {
    name: "Cruise",
    id: 0
}, {
    name: "Willis",
    id: 0
}];

var createIdForActionCelebs = celebrityIDCreator(actionCelebs);
var stalloneID = createIdForActionCelebs[0];
console.log(stalloneID.id()); //103
/**
 * 在上面的示例中，当调用匿名函数时，i的值为3（数组的长度，然后递增）。
 * 将数字3添加到 uniqueID，对所有 celebritiesID 创建103。因此，
 * 返回得到的数组中的每个位置 id = 103，而不是预期的100、101、102
 * 
 * 发生这种情况的原因是，正如我们在上一个示例中所讨论的那样，
 * 闭包（此示例中为匿名函数）通过引用而不是通过值来访问外部函数的变量。
 * 所以，如前面的示例所示，我们可以使用闭包访问更新后的变量，
 * 由于外部函数运行整个 for 循环并返回 i 的最后一个值103，
 * 因此，此示例在更改 i 时类似地(通过引用)访问了 i 变量。
 */
// 为了修复这个闭包带来的副作用，可以使用一个立即执行的函数(Immediately Invoked Function Expression)，如下
function celebrityIDCreator(theCelebrities) {
    var i;
    var uniqueID = 100;
    for (i = 0; i < theCelebrities.length; i++) {
        theCelebrities[i]["id"] = function (j) {
            return function () {
                return uniqueID + j;
            }()
            // 在该函数的末尾添加（），可以立即执行该函数，并仅返回uniqueID + j的值，而不是返回一个函数
        }(i);
        // for循环的每次迭代将 i 的当前值传递到此 IIFE 中，并将正确的值保存到数组中
    }
    return theCelebrities;
}

var actionCelebs = [{
    name: "Stallone",
    id: 0
}, {
    name: "Cruise",
    id: 0
}, {
    name: "Willis",
    id: 0
}];

var createIdForActionCelebs = celebrityIDCreator(actionCelebs);
var stalloneID = createIdForActionCelebs[0];
console.log(stalloneID.id); // 100
var cruiseID = createIdForActionCelebs[1];
console.log(cruiseID.id); // 101