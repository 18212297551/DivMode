
// let top_content = document.getElementById("top_content");
// let info_div = document.getElementById("navigation");
// let body = document.getElementById("body");
// let notice_info = $("#notice_info");
// let content_body = $("#content_body");
// let pagination = $("#pagination_ul");
// let page_index = 0;
//
// function window_load(){
//     window_scroll();
//     nav_add_content();
//     notice_add_content();
//     content_add_content();
// }
// function window_scroll() {
//     let top_rect = top_content.getBoundingClientRect();
//     if (top_rect.bottom < 0) {
//         info_div.style.top = "0";
//         notice_info.css("top", '0');
//     }
//     else {
//         info_div.style.top = null;
//         notice_info.css("top", );
//         notice_info.css("top", '');
//     }
// }
//
//
function nav_add_content(){
    let nav_local = $("#nav_local");
    let urls = ["add","get","set","remove"];
    urls = urls*10;
    for (let i=0; i<40; i++){
        let li = "<li id='nav_local_a_{0}'><a href='https://www.w3cschool.cn/jquery/jquery-dom-{1}.html'>第&ensp;{0}&ensp;条</a></li>".replace(/\{0\}/g, i.toString()).replace(/\{1\}/g, urls[i]);
        nav_local.append(li);
    }
}
nav_add_content();
//
// function notice_add_content() {
//
//     for (let i=0; i<20; i++){
//         let style = "font-size: 1px";
//         let li = "<li id='notice_info_a_{0}'><a  href='http://www.baidu{0}.com'>第&ensp;{0}&ensp;条111111111111111111111111111</a></li>".replace(/\{0\}/g, i.toString());
//         notice_info.append(li);
//     }
// }
// function content_add_content() {
//     let item_num = 0;
//     let page_item_num = 80;
//     let page = null;
//     for (let i=0; i<500; i++){
//         item_num += 1;
//         if (page==null || item_num > page_item_num){
//             item_num = 0;
//             page_index += 1; //id从1开始
//             if (page_index > 1){
//                 page_item_num = 150;
//             }
//             //新页
//             let page_id = "#page_{}".replace("{}", page_index.toString());
//             let div_innerHtml = "<div id='content_{}'><ul></ul></div>".replace("{}", page_index.toString());
//             content_body.append(div_innerHtml);
//             page = $("#content_{} ul".replace("{}", page_index.toString()));
//             let page_div = $("#content_{}".replace("{}", page_index.toString()));
//             //新分页
//             let new_pagination = "<li id='page_num_{}' class='pagination_li'><a>{}</a></li>".replace(/{}/g, page_index.toString());
//             // alert(new_pagination);
//             // pagination.append(new_pagination);
//             $("#next_page").before(new_pagination);
//             let new_pagination_dom = $("#page_num_"+page_index.toString()+" a");
//             new_pagination_dom.attr("href", '#content_'+page_index.toString());
//             new_pagination_dom.attr("class", 'pagination');
//             new_pagination_dom.attr("onclick", 'pagination_click(this)');
//             page_div.hide();
//             if (page_index === 1){
//                 new_pagination_dom.addClass("active_link");
//                 page_div.show();
//                 page_div.addClass('active');
//             }else if (page_index === 2){
//                 $("#next_page a").attr('href', "#content_2");
//             }else if(page_index >3){
//                 $("#page_num_"+page_index.toString()).hide();
//             }
//
//         }
//         //添加内容
//         let li = "<li class='content_a'><a href='http://www.baidu{0}.com'><i class='iconfont iconxiangmu'>&ensp;</i>第&ensp;{0}&ensp;条11111111111111111111111111sxwcwcwecwecewcwcwcewcwccsacdwcewcew1</a></li>".replace(/\{0\}/g, i.toString());
//         page.append(li);
//
//     }
//     if (page_index > 3){
//         //默认始终显示最后两个页码
//         $("#page_num_"+page_index.toString()).show();
//         $("#page_num_"+(page_index-1).toString()).show();
//         if (page_index > 5){
//             let li = "<li id='ellipsis_last'>...</li>";
//             $("#page_num_"+(page_index-1).toString()).before(li);
//         }
//     }
//
// }
//
// window_load();
// postMessage("加载完成！");