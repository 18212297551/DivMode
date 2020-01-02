
let top_content = document.getElementById("top_content");
let info_div = document.getElementById("navigation");
let body = document.getElementById("body");
let notice_info = $("#notice_info");
let content_body = $("#content_body");
let pagination = $("#pagination_ul");
let page_index = 0;

let platform_infos = navigator.appVersion;
if(platform_infos.indexOf("Android") !==-1 ){$("body").css("font-size","40px");}
else{$("body").css("font-size","16px");}

String.prototype.format = function () {
    //字符串format函数构造
    //arguments 默认接受所有参数

    let args = arguments;
    let str = this;
    let num = 0;
    return str.replace(/\{[0-9]?\}/g,function (item) {
        let intVal;
        //{}的情况
        if (item.length === 2){intVal = null}
        else{intVal = Number(item.substring(1,item.length-1));}

        let newitem;
        if (intVal === null){newitem = args[num];}
        else if (intVal === -1){newitem = '{';}
        else if (intVal === -2){newitem = '}';}
        else if (intVal >= 0){newitem = args[intVal];}
        else {newitem = item}
        //{}的情况下使用
        num += 1
        return newitem;

    })
}

function window_load(){
    window_scroll();
    nav_add_content();
    notice_add_content();
    content_add_content();

}
function window_scroll() {
    let top_rect = top_content.getBoundingClientRect();
    if (top_rect.bottom < 0) {
        info_div.style.top = "0";
        notice_info.css("top", '0');
    }
    else {
        info_div.style.top = null;
        notice_info.css("top", );
        notice_info.css("top", '');
    }
}


function nav_add_content(){
    let nav_local = $("#nav_local");
    let urls = ["add","get","set","remove"];
    for (let i=0; i<40; i++){
        let li = "<li id='nav_local_a_{0}'><a href='http://www.baidu.com'>第&ensp;{0}&ensp;条</a></li>".replace(/\{0\}/g, i.toString());
        nav_local.append(li);
    }
}

function notice_add_content() {

    for (let i=0; i<20; i++){
        let style = "font-size: 1px";
        let li = "<li class='notice_info_li'><a  href='javascript:'>第&ensp;{0}&ensp;条111111111111111111111111111</a></li>".format(i);
        notice_info.append(li);
    }
}
function content_add_content() {
    let item_num = 0;
    let page_item_num = 80;
    let page = null;
    for (let i=0; i<5000; i++){
        item_num += 1;
        if (page==null || item_num > page_item_num){
            item_num = 0;
            page_index += 1; //id从1开始
            if (page_index > 1){
                page_item_num = 150;
            }
            //新页
            let page_id = "#page_{}".replace("{}", page_index.toString());
            let div_innerHtml = "<div id='content_{}'><ul></ul></div>".replace("{}", page_index.toString());
            content_body.append(div_innerHtml);
            page = $("#content_{} ul".replace("{}", page_index.toString()));
            let page_div = $("#content_{}".replace("{}", page_index.toString()));
            //新分页
            let new_pagination = "<li id='page_num_{}' class='pagination_li'><a>{}</a></li>".replace(/{}/g, page_index.toString());
            // alert(new_pagination);
            // pagination.append(new_pagination);
            $("#next_page").before(new_pagination);
            let new_pagination_dom = $("#page_num_"+page_index.toString()+" a");
            new_pagination_dom.attr("href", '#content_'+page_index.toString());
            new_pagination_dom.attr("class", 'pagination');
            new_pagination_dom.attr("onclick", 'pagination_click(this)');
            page_div.hide();
            if (page_index === 1){
                new_pagination_dom.addClass("active_link");
                page_div.show();
                page_div.addClass('active');
            }else if (page_index === 2){
                $("#next_page a").attr('href', "#content_2");
            }else if(page_index >3){
                $("#page_num_"+page_index.toString()).hide();
            }

        }
        //添加内容
        let li = "<li class='content_a'><a href='http://www.baidu{0}.com'><i class='iconfont iconxiangmu'>&ensp;</i>第&ensp;{0}&ensp;条11111111111111111111111111sxwcwcwecwecewcwcwcewcwccsacdwcewcew1</a></li>".format(i);
        page.append(li);

    }
    if (page_index > 3){
        //默认始终显示最后两个页码
        $("#page_num_"+page_index.toString()).show();
        $("#page_num_"+(page_index-1).toString()).show();
        if (page_index > 5){
            let li = "<li id='ellipsis_last'>...</li>";
            $("#page_num_"+(page_index-1).toString()).before(li);
        }
    }

}

function pagination_click(a) {
    //换页功能函数  显示的内容添加class=active  显示内容对应的分页号增加class=active_link
    /*开始时先隐藏带有class=active的内容，然后移除其class=active
    * 利用函数传入的参数this获取触发按钮对应的分页号index 将当前index的分页添加class=active_link
    * 对应内容添加class=active*/
    let index = a.getAttribute("href").replace(/#content_/,'');
    let old_active = $(".active");
    let old_active_link = $(".active_link");
    let i = Number(index);
    //隐藏内容添加(...)
    let li_last = "<li id='ellipsis_last'>...</li>";
    let li_before = "<li id='ellipsis_before'>...</li>";
    $("#ellipsis_before").remove();
    $("#ellipsis_last").remove();
    //隐藏之前的显示内容，移除其对应class
    old_active.hide();
    old_active.removeClass("active");
    old_active_link.removeClass("active_link");
    //显示当前页码内容及添加相应class
    $("#page_num_"+index+" a").addClass("active_link");
    $("#content_"+index).fadeIn("slow");
    $("#content_"+index).addClass('active');

    //更改上一页下一页href
    if (i+1 > page_index){
        $("#next_page a").removeAttr('href');
    }else {
        $("#next_page a").attr('href', "#content_"+(i+1).toString());
    }
    if (i-1 < 1){
        $("#forword_page a").removeAttr("href");
    }else{
        $("#forword_page a").attr("href", "#content_"+(i-1).toString());
    }

    //当前页码等于1时，显示首页内容
    if (i === 1){
       $("#content_first, .img, .scroll_info").show();
       $("#content_first, .img, .scroll_info").addClass("active");
    }

    //隐藏页码，省略号
    if (page_index > 5){
        $(".pagination_li").hide();
        if (i-1>3){
            $("#page_num_2").after(li_before);
        }
        if (i+1<page_index-2){
            $("#page_num_"+(page_index-1).toString()).before(li_last);
        }

        //始终显示当前页码及其前后一个页码
        $("#page_num_"+(i-1).toString()).show();
        $("#page_num_"+(i+1).toString()).show();
        $("#page_num_"+(i).toString()).show();
        //始终显示前后两个页码
        $("#page_num_"+page_index.toString()).show();
        $("#page_num_"+(page_index-1).toString()).show();
        $("#page_num_1").show();
        $("#page_num_2").show();
        }

}

function goto_page(){
    //输入页码跳转
    let index = $("#goto_index").val();
    // alert(index);
    if (index<1){
        alert("请输入一个大于1的页码");
        return null;
    }else if (index > page_index){
        let state = confirm("输入的页码超出范围\n跳转的最后一页？");
        if (state === true){
            index = page_index;
        }
        else{
            return null;
        }
    }
    $("#page_num_"+index.toString()+" a").click();

}
function goto_index_keydown(k) {
    //输入页码回车跳转
    if (event.key === "Enter"){
        goto_page();
    }
}


//显示隐藏 滑入滑出 淡入淡出
$(document).ready(function (){
    //绑定body的滚动事件，让导航栏跟着页面滚动
    body.onscroll = window_scroll;
    window.onload = window_load;
    $("#tes").click(function () {
        $("#img").toggle("slow");
        $("#img").slideToggle("slow");
        $("#img").fadeToggle("slow");
    });

    $("#test1").click(function () {
        alert(this.innerText);
        let a = $("#img");
            a.toggle("slow");
            a.slideToggle("slow");
            a.fadeToggle("slow");
        });

    // $("#test").parentsUntil("body").css("background-color", "red");
    $("#test2").click(function (){$("#notice_info").children("#notice_info_a_1").load('./media/item.png')});

});

