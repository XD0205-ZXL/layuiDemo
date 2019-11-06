import util from "../../../tools/http.js";
let _map = {
    'detailInfoUrl' :'/',
};
export default{
    getInfo(){
        // util.ajax(_map.detailInfoUrl,"get",{});
        let infoObj =  {
            createTimeStr: "2019-02-22 18:05:05",
            curPage: 0,
            description: "BuOwner",
            id: "08b21d1b-f54e-4504-af3a-e52d1efde2ed",
            keyFileName: "key",
            name: "buOwner",
            offset: 0,
            pageSize: 10,
            system_type: 2,
            tableNo: "",
            updateBy: "zhaojj5",
            updateTime: 1553780993000,
            updateTimeStr: "2019-03-28 21:49:53",
            url: "http://admin.lenovouat.com/auth/dict/getdictmap?keys=BuOwnerType&t=list&searchName=${searchName}",
            valFileName: "buOwner",
            valueFileName: "value"
        }
    
        return infoObj
    }
}