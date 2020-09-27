import {__server} from '@jx3box/jx3box-common/js/jx3box.json'
const OAuth = {
    github: {
        client_id: "5fbf7a66cd7d3d0f5153",
        authorize_uri: "https://github.com/login/oauth/authorize",
        callback : `${__server}oauth/github/callback`
    },
    qq : {
        client_id : "101870778",
        authorize_uri : "https://graph.qq.com/oauth2.0/authorize",
        callback : `${__server}oauth/qq/callback`
    },
    weibo : {
        client_id : "4076650110",
        authorize_uri : "https://api.weibo.com/oauth2/authorize",
        callback : `${__server}oauth/weibo/callback`
    }
}
export default OAuth