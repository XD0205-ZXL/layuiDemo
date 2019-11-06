import "./list.css";
import $ from "jquery";
import util from "../../../tools/http.js";

$(function(){

    //一般直接写在一个js文件中
    layui.use(['layer', 'form'], function(){
        var layer = layui.layer
        ,form = layui.form
        ,table = layui.table;
        table.render({
            elem: '#dataAccessList', //table的id名
            url:'/api/getauthmenu?ran=0.6998418006735032&ran=9044447',
            title: '数据权限列表',
            request:{
                pageName: 'curPage' //页码的参数名称，默认：page
                ,limitName: 'pageSize',
            },
            page:{
                limits:[30,60,90]
            }
            // ,toolbar: 'default' //开启工具栏，此处显示默认图标，可以自定义模板，详见文档
            // ,totalRow: true, //开启合计行
            ,parseData:function(data){
                debugger
                console.log(data)
                if(data.status == 200){
                    return {
                        code:0,
                        data:data.data,
                        curPage: data.curPage,
                        pageSize:data.pageSize,
                        count: data.totalCount,
                    }
                }else{
                    return data.msg ? data.msg : "未请求到数据"
                }
            }
            ,cols: [[
                {field:'name', title: '数据权限名称'}
                ,{field:'url', title: '接口地址'}
                ,{field:'keyFileName', title: 'KEY字段名'}
                ,{field:'valueFileName', title: 'Value字段名'}
                ,{field:'sign', title: '权限参数'}
                ,{fixed: 'right', width: 165, align:'center', toolbar: '#barDemo'}
            ]]
            ,page: true
        });

        //监听行工具事件
        table.on('tool(dataAccessList)', function(obj){ //注：tool 是工具条事件名，test 是 table 原始容器的属性 lay-filter="对应的值"
            var data = obj.data //获得当前行数据
            ,layEvent = obj.event; //获得 lay-event 对应的值
            if(layEvent === 'detail'){
                layer.msg('查看操作');
            } else if(layEvent === 'del'){
                debugger
                layer.confirm('真的删除行么', function(index){
                obj.del(); //删除对应行（tr）的DOM结构
                layer.close(index);
                //向服务端发送删除指令
                console.log("删除成功了");
                table.reload("dataAccessList");
                });
            } else if(layEvent === 'edit'){
                layer.msg('编辑操作');
            }
        });
        $("#add").click(()=>{
            window.location.href = "./save.html?tag=create";
        })
    });
})



