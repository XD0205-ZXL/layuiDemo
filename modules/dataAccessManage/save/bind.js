import $ from 'jquery'
import API from './api.js'
export default{
    getInfoMsg(){
        let infoObjval =  API.getInfo();
        for(var key  in  infoObjval){
            let domStr = "#"+key;
            if($(domStr)[0] && $(domStr)[0] !== undefined && $(domStr)[0] !== null){
                debugger
                console.log($(domStr))
                $(domStr).val(infoObjval[key])
            }
        }
    }
}
