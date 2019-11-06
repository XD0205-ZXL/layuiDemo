
import http from "../../../tools/http.js";
const _save = "/api/save";

export default {
    create(){
        return http.ajax(_save);
    },
    getInfo(){
        http.ajax(_save).then()
    }
}