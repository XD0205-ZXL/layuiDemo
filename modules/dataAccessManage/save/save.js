
import commomnUtil from "../../../tools/common.js";
import "./save.css";
import binds from "./bind.js";
import $ from "jquery";

$(function(){
    layui.use(['layer','laytpl','form'],function(){
        let layer = layui.layer,form = layui.form,laytpl = layui.laytpl;
        $("#layui-card-header").html("新建");
        let tag = commomnUtil.getUrlParamVal("tag");
        if(tag == "info"){
            $("#saveBtn").hide();
            $("#infoBtn").show();
            $("#layui-card-header").html("详情");
            //发送获取详情信息的ajax
            binds.getInfoMsg();
        }else{
            $("#saveBtn").show();
            $("#infoBtn").hide();
            $("#layui-card-header").html("新建");
        } 


        form.on('submit(demo1)', function(data){
            console.log(data);
        });
    })
})
