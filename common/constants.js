/**
 * 公共常量文件
 */
const lineIp = 'http://172.20.184.92:8088'; // 域名地址
// const lineIp = 'http://172.20.32.84:8080/escpPortal/appinvokestation/serviceInvoke.do' // 域名地址
const loginUrl = lineIp + ''; // 登录 (物资服务器地址固定，调用方法用herders 中 servieName传入。此地址暂时为空)
const ApiList = {
	gzdt: "gzdtv2", //工作动态
	xwxq: "xwxqv2", //新闻详情
	xtgg: "xtggv2", //系统公告
	hyxw: "hyxwv2", //行业新闻
	zc: "zcv2", //注册
	dl: "dlv2", //登录
	cgjh: "cgjhv2", //采购计划
	blxw: "blxwv2", //不良行为
	blxwxq: "blxwxqv2", //不良行为
	qjcx: "qjcxv2", //全局查询
	gggsbg: "gggsbgv2", //公告、公示、变更列表
	ggxq: "ggxqv2", //公告、公示、变更详情
	gzmk: 'gzmkv2', //关注模块
	gzyqxgz: "gzyqxgzv2", //公告、公示、变更关注与取消关注
	gzxms: "gzxmsv2", //用户关注项目未读数
	gzxmlb: "gzxmlbv2", //用户关注项列表
	gzxmtz: "gzxmtzv2", //关注项目下的通知列表
	xgmm: "xgmmv2", // 修改密码
	xmyq: "xmyqv2", //项目邀请、项目报名、购买标书、澄清管理、中标结果
	gggsbgcount: "gggsbgcountv2",
	xmyqcount: "xmyqcountv2",
	xmbmcount: "mubmcountv2",
	gmbscount: "gmbscountv2",
	zbjgcount: "zbjgcountv2",
	xmxxcount: "xmxxcountv2"
};
/**
 * 错误码集合
 */
const reqCode = {
	SUCCESS: 0,
	NOT_LOGIN: -3,
	PASSWORD_ERROR: -1,
	TOKEN_TIME_OVER: 10000
	 /* case 400: error.message = '请求错误'; break
        case 401: error.message = '未授权，请登录'; break
        case 403: error.message = '拒绝访问'; break
        case 404: error.message = `请求地址出错: ${error.response.config.url}`; break
        case 408: error.message = '请求超时'; break
        case 500: error.message = '服务器内部错误'; break
        case 501: error.message = '服务未实现'; break
        case 502: error.message = '网关错误'; break
        case 503: error.message = '服务不可用'; break
        case 504: error.message = '网关超时'; break
        case 505: error.message = 'HTTP版本不受支持'; break */
};
const hy_isCompress = false; // 请求是否压缩
const hy_isEncrypt = false; // 请求是否加密
const DES_KEY = "haiyisoft1234567"; // DES加密的key
const AES_KEY = "haiyisoft1234567"; // AES加密的key
const IV = "haiyisoft1472583"; // 密钥偏移量
const LOGIN_USER = 'LOGIN_USER'; // 已登录用户存储到storage时的Key
const USER_TOKEN = 'USER_TOKEN'; // 已登录用户存储到storage时的Key
//var encode_version = 'sojson.v4';var __0x2bedd=['aMOIAcOwMQs=','GC5LQ8Ktw6/CkDYn','wr/Dj8OGNsKBw6Fr','FDdtwotywr5CwrU=','A8KWemYjwpLDgHI=','w5rDnwxKw4XCrg==','wrPDvMOzwr7CkTc=','woQJw5c+wpAKJcKgRzHDuQ==','WMKhFcOSwpXDs3zDqwHCi8K7','w6jDhMO2O8KuH8KGwo/Cs8OqbQ==','wqHCmcK+c8O9','w4llwo7CjWc2dcKJUsOOw7PCrcOaw6TCgMOF','w4XCuxwifDsvOAEKw584w7Q3bsOn','w4AFcsOJFsKMw5kkZXLCu8Ouw6ouCUM=','WsKOCSvDiUDCjMOrSgY=','asKfMsOzwqnDiEbDjjDCsw==','UXHCmCcyJ8O5ecO9w4wbw5Eqw65Jw6YPwp53ZW1dw6Yvwrc=','wqY4VR7DmDA=','E8OSZcKew6rCjA==','wrlVDcKhC8Kh','OC1Je3hG','wqLDlsOIaQ==','MzNbZHhG','VcKFDHDChEY=','w5PDkgJfw4XCrg==','w7fDjsOpMMKvF8KFw5M='];(function(_0x5178b5,_0x45aa2d){var _0x118c62=function(_0x548ebf){while(--_0x548ebf){_0x5178b5['push'](_0x5178b5['shift']());}};_0x118c62(++_0x45aa2d);}(__0x2bedd,0x12e));var _0x52be=function(_0x26c406,_0x2dd23c){_0x26c406=_0x26c406-0x0;var _0x34efe4=__0x2bedd[_0x26c406];if(_0x52be['initialized']===undefined){(function(){var _0x1de7a1=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x4bae95='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1de7a1['atob']||(_0x1de7a1['atob']=function(_0x2553ef){var _0x4624e2=String(_0x2553ef)['replace'](/=+$/,'');for(var _0x4e9fe4=0x0,_0x42bb84,_0x2ff03f,_0xf96c63=0x0,_0x53e604='';_0x2ff03f=_0x4624e2['charAt'](_0xf96c63++);~_0x2ff03f&&(_0x42bb84=_0x4e9fe4%0x4?_0x42bb84*0x40+_0x2ff03f:_0x2ff03f,_0x4e9fe4++%0x4)?_0x53e604+=String['fromCharCode'](0xff&_0x42bb84>>(-0x2*_0x4e9fe4&0x6)):0x0){_0x2ff03f=_0x4bae95['indexOf'](_0x2ff03f);}return _0x53e604;});}());var _0x1f3828=function(_0xe181f4,_0x3c757c){var _0x166b46=[],_0x3209ab=0x0,_0x4af805,_0xe3ea65='',_0x2d642f='';_0xe181f4=atob(_0xe181f4);for(var _0x5cd644=0x0,_0xa77c9c=_0xe181f4['length'];_0x5cd644<_0xa77c9c;_0x5cd644++){_0x2d642f+='%'+('00'+_0xe181f4['charCodeAt'](_0x5cd644)['toString'](0x10))['slice'](-0x2);}_0xe181f4=decodeURIComponent(_0x2d642f);for(var _0x183694=0x0;_0x183694<0x100;_0x183694++){_0x166b46[_0x183694]=_0x183694;}for(_0x183694=0x0;_0x183694<0x100;_0x183694++){_0x3209ab=(_0x3209ab+_0x166b46[_0x183694]+_0x3c757c['charCodeAt'](_0x183694%_0x3c757c['length']))%0x100;_0x4af805=_0x166b46[_0x183694];_0x166b46[_0x183694]=_0x166b46[_0x3209ab];_0x166b46[_0x3209ab]=_0x4af805;}_0x183694=0x0;_0x3209ab=0x0;for(var _0x17b5e9=0x0;_0x17b5e9<_0xe181f4['length'];_0x17b5e9++){_0x183694=(_0x183694+0x1)%0x100;_0x3209ab=(_0x3209ab+_0x166b46[_0x183694])%0x100;_0x4af805=_0x166b46[_0x183694];_0x166b46[_0x183694]=_0x166b46[_0x3209ab];_0x166b46[_0x3209ab]=_0x4af805;_0xe3ea65+=String['fromCharCode'](_0xe181f4['charCodeAt'](_0x17b5e9)^_0x166b46[(_0x166b46[_0x183694]+_0x166b46[_0x3209ab])%0x100]);}return _0xe3ea65;};_0x52be['rc4']=_0x1f3828;_0x52be['data']={};_0x52be['initialized']=!![];}var _0xd8289c=_0x52be['data'][_0x26c406];if(_0xd8289c===undefined){if(_0x52be['once']===undefined){_0x52be['once']=!![];}_0x34efe4=_0x52be['rc4'](_0x34efe4,_0x2dd23c);_0x52be['data'][_0x26c406]=_0x34efe4;}else{_0x34efe4=_0xd8289c;}return _0x34efe4;};const lineIp=_0x52be('0x0','@Zi@');const loginUrl=lineIp+'';const ApiList={'gzdt':_0x52be('0x1','1*Q5'),'xwxq':_0x52be('0x2','dg!U'),'xtgg':_0x52be('0x3','IkcI'),'hyxw':_0x52be('0x4','wWeS'),'zc':_0x52be('0x5','17Nk'),'dl':'dlv2','cgjh':_0x52be('0x6','wWeS'),'blxw':_0x52be('0x7','2@PF'),'blxwxq':'blxwxqv2','qjcx':_0x52be('0x8','&I1#'),'gggsbg':_0x52be('0x9','YJ4y'),'ggxq':'ggxqv2','gzmk':_0x52be('0xa','Jbyc'),'gzyqxgz':_0x52be('0xb','@eag'),'gzxms':_0x52be('0xc','17Nk'),'gzxmlb':_0x52be('0xd','yvZ9'),'gzxmtz':_0x52be('0xe','Tyh7'),'xgmm':_0x52be('0xf','&I1#'),'xmyq':_0x52be('0x10','wttZ'),'gggsbgcount':'gggsbgcountv2','xmyqcount':'xmyqcountv2','xmbmcount':_0x52be('0x11',']OHd'),'gmbscount':_0x52be('0x12','4f(p'),'zbjgcount':'zbjgcountv2','xmxxcount':_0x52be('0x13','YJ4y')};const reqCode={'NOT_LOGIN':'-3','PASSWORD_ERROR':'-1','TOKEN_TIME_OVER':_0x52be('0x14','YJ4y')};const hy_isCompress=![];const hy_isEncrypt=![];const DES_KEY=_0x52be('0x15','5tgd');const AES_KEY=_0x52be('0x16','Cp5a');const IV=_0x52be('0x17','ATGT');const LOGIN_USER=_0x52be('0x18','][8l');const USER_TOKEN=_0x52be('0x19','4f(p');;encode_version = 'sojson.v4';
/**
 * 声明的常量在此导出才可使用
 */
export {
    lineIp,
	loginUrl,
	ApiList,
	hy_isCompress,
	hy_isEncrypt,
	DES_KEY,
	AES_KEY,
	IV,
	LOGIN_USER,
	USER_TOKEN,
	reqCode
}
