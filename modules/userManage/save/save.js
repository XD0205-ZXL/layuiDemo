
import API from "./api.js";
import commomnUtil from "../../../tools/common.js";
import "./save.css";
import $ from "jquery";
import bind from "./bind.js";

let tag = commomnUtil.getQueryParams("tag");

let selectData = [
    {name:'大树',code:'1'},
    {name:'云朵',code:'2'},
    {name:'星星',code:'3'},
    {name:'萤火虫',code:'4'},
    {name:'狗狗',code:'5'},
    {name:'家人',code:'6'},
    {name:'美食',code:'7'},
];
let assignRoles = [
    {name:'是',code:'1'},
    {name:'否',code:'0'}
];

//动态获得下拉option的字符传
function randerSelectOpt(dataSource,domId){
    let htmlStr = '';
    if(dataSource.length > 0 ){
        dataSource.forEach(function(item){
            htmlStr  += '<option value='+ item.code +'>'+ item.name +'</option>';
        })
    }
    let dom = "#"+domId;
    $(dom).html(htmlStr);
};

$(function(){
    layui.use(['layer', 'form'], function(){
        let layer = layui.layer,form = layui.form,laytpl = layui.laytpl;

        //Rander 所属业务
        //获取tpl模版里面的html代码，为下面的render方法服务
        //获取所属业务的模板字符串
        randerSelectOpt(selectData,'tpl_isITcodeInfo');
        let tpl_isITcodeInfo = $("#tpl_isITcodeInfo").html(); //这个是<script>模板引擎里面的内容
        laytpl(tpl_isITcodeInfo).render([], function(html){//这个HTML就是是script标签中的模板字符串
            $("#isITcode").html(html); //吧这些option添加到页面上已经存在的select标签里面
            form.render();// 如果页面 form表单元素不正常  需要重新初始化一下 form
        });

        //Rander 分配角色
        //获取tpl模版里面的html代码，为下面的render方法服务
        randerSelectOpt(assignRoles,'tpl_assignRoles')
        let tpl_assignRoles = $("#tpl_assignRoles").html(); //这个是<script>模板引擎里面的内容
        laytpl(tpl_assignRoles).render([], function(html){//这个HTML就是是script标签中的模板字符串
            $("#assignRoles").html(html); //吧这些option添加到页面上已经存在的select标签里面
            form.render();// 如果页面 form表单元素不正常  需要重新初始化一下 form
        });

        //自定义form表单的验证规则
        form.verify({
            "isITcode":function(value){
                console.log(value)
            }
        });

        //监听提交
        form.on('submit(demo1)', function(data){
            // layer.alert('点击了提交按钮', {
            // title: '最终的提交信息'
            // })
            return false;
        });
 

    })
})
