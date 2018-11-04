let words=[{'index':10,'val':'b'},{'index':20,'val':'e'},{'index':30,'val':'e'}];
let hello=[{"index":14,"val":'h'},{"index":23,"val":"e"},{"index":32,"val":'l'},{"index":41,"val":"l"},{"index":50,"val":'o'}];
function init(){
    console.log('init');
    //生成span标签
    gen_span();
    // set_words({index:10,val:'b'},{index:20,val:'e'},{index:30,val:'e'});
    set_words(words,hello);
}
var arr = [];   // 26个英文字母 数组
function getEN(){
    for(var i = 65; i < 91; i++){
        arr.push(String.fromCharCode(i));
    }
    // return arr.join(',');
}
getEN();

var arr_span = [];  // 生成span里的文字，随机获取26个字母
var main = document.querySelector('div.main');
function gen_span(){
    for(let i=0;i<108;i++){
        arr_span[i]=i
        arr_span[i] = document.createElement('span');
        let get_index = parseInt(Math.random()*26);
        // console.log('get_index',get_index);
        arr_span[i].innerHTML = arr[get_index];
        main.appendChild(arr_span[i]);
    }
}
// 将目标文字，添加到目标坐标

let tmp_arr = [];   //临时数组 存储参数数组
function set_words(){
    console.log(arguments);
    // 参数为对象数组组成的数组 [[{}],[{}]]
    // 将传入的参数的val全部拼接到tmp_arr中
    for(let i of arguments){
        // tmp_arr=tmp_arr.concat(i);
        tmp_arr.push(i);
    }
    console.log(tmp_arr);
    for(let j of tmp_arr){
        for(let n of j){
        main.children[n.index].innerHTML=n.val;
        }
    }
}
// 添加点击事件
let click_arr =[];
// let main = document.querySelector('div.main');
main.onclick=function(e){
    console.log(e.target);
    let index = [].indexOf.call(arr_span,e.target);
    let t_text = e.target.innerHTML;
    // console.log(index);
    e.target.className ='actived1';
    // 把当前点击获取到的内容 添加到对象中
    // 将新组成的元素保存到数组中 click_arr，用于与参数的比对
    // click_arr.push({'index':index,'val':t_text});

    // // 将tmp_str 点击信息 转换为字符串的 tmp_click
    // let tmp_click = JSON.stringify(click_arr);

    // // tmp_str 转换为字符串的 参数信息
    // let tmp_str = JSON.stringify(tmp_arr);
    // console.log(tmp_str);
    // let in_words=tmp_str.indexOf(tmp_click);// 查找当前点击累加字符串在 参数字符串中的位置
    
    // //遍历 tmp_str，比对click_arr
    // for(let item of tmp_arr){
    //     console.log('循环item',item);
    //     if(in_words!=-1){   //如果当前点击元素包含的值，不存在于参数数组中,则清空click_arr
    //         console.log('当前值不包含在于参数数组中',click_arr);
    //         click_arr = [];
    //     }else{
    //         console.log(click_arr);
    //         for(let i of click_arr){
    //         // main.children[i.index].className='';
    //         // click_arr=[];
    //         }
    //     }
    // }
}
// 为所有点击的目标清除样式
function clearClass(value,i){
    e.target.className ='';
}
init();