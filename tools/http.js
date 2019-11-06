
import q from "q";
import $ from "jquery";

let proxy_key = window.location.href.indexOf('localhost') == -1?'/ftl/':'';

let HTTP = {
    ajax(url,type,data){
        let defer = q.defer();
        $.ajax({
            url:proxy_key + url,
            type:type?type:"get",
            data:data?data:null,
            success(data){
                if(typeof data == "string"){
                    data = JSON.parse(data);
                }
                if(data.status == "200"){
                    defer.resolve({data:data});
                }else{
                    defer.reject({data:data.msg});
                }
            },
            error(err){
                defer.reject({data:err});
            }
        })
        return defer.promise;
    }
}

export default HTTP;