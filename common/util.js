const CryptoJS = require('crypto-js')
const Utils = require('./constants.js')
/**
 * 登陆签名
 * @param username 用户名
 * @param key 秘钥
 * @param timeStr 时间戳
 * @returns {*|string}
 */
const getSignature = function(username, key, timeStr) {
	let array = [username, key, timeStr];
	array.sort();
	let arrayStr = array[0] + array[1] + array[2];
	return getMD5Encrypt(arrayStr);
}
/**
 * 获取MD5加密
 * @returns {*|string}
 */
const getMD5Encrypt = function(oriStr) {
	//返回MD5后的base64格式
	return CryptoJS.enc.Base64.stringify(CryptoJS.MD5(CryptoJS.enc.Utf8.parse(oriStr)));
}
/**
 * 获取des加密的字符串
 * @param sourceStr 原字符串
 * @returns des加密的字符串 base64编码
 */
const getDESEncStr = function(sourceStr) {
	const keyHex = CryptoJS.enc.Utf8.parse(getMD5Encrypt(Utils.DES_KEY));
	const encrypted = CryptoJS.DES.encrypt(sourceStr, keyHex, {
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7
	});
	console.log("encrypted:" + encrypted);
	return encrypted.toString();
}

/**
 * 获取des解密的字符串
 * @param encrypted 加密字符串
 * @returns des解密的字符串
 */
const getDESDecStr = function(encrypted) {
	const keyHex = CryptoJS.enc.Utf8.parse(getMD5Encrypt(Utils.DES_KEY));
	const decrypted = CryptoJS.DES.decrypt({
		ciphertext: CryptoJS.enc.Base64.parse(encrypted)
	}, keyHex, {
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7
	});
	let temp = '';
	try {
		temp = decrypted.toString(CryptoJS.enc.Utf8);
	} catch (e) {

	}
	return temp;
}

/**
 * 获取aes加密的字符串
 * @param sourceStr 原字符串
 * @returns aes加密的字符串
 */
const getAESEncStr = function(encryptedStr) {
	//const key = CryptoJS.enc.Utf8.parse("1234123412ABCDEF"); //十六位十六进制数作为密钥
	const key = CryptoJS.enc.Utf8.parse(getMD5Encrypt(Utils.AES_KEY));
	const iv = CryptoJS.enc.Utf8.parse('ABCDEF1234123412'); //十六位十六进制数作为密钥偏移量
	let srcs = CryptoJS.enc.Utf8.parse(encryptedStr);
	let encrypted = CryptoJS.AES.encrypt(srcs, key, {
		iv: iv,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7
	});
	return encrypted.ciphertext.toString().toUpperCase();
}

/**
 * 获取aes解密的字符串
 * @param encrypted 加密字符串
 * @returns aes解密的字符串
 */
const getAESDecStr = function(sourceStr) {
	//const key = CryptoJS.enc.Utf8.parse("1234123412ABCDEF"); //十六位十六进制数作为密钥
	const key = CryptoJS.enc.Utf8.parse(getMD5Encrypt(Utils.AES_KEY));
	const iv = CryptoJS.enc.Utf8.parse('ABCDEF1234123412'); //十六位十六进制数作为密钥偏移量
	let encryptedHexStr = CryptoJS.enc.Hex.parse(sourceStr);
	let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
	let decrypt = CryptoJS.AES.decrypt(srcs, key, {
		iv: iv,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7
	});
	let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
	return decryptedStr.toString();
}

function formatTime(time) {
	if (typeof time !== 'number' || time < 0) {
		return time
	}

	var hour = parseInt(time / 3600)
	time = time % 3600
	var minute = parseInt(time / 60)
	time = time % 60
	var second = time

	return ([hour, minute, second]).map(function(n) {
		n = n.toString()
		return n[1] ? n : '0' + n
	}).join(':')
}

function formatLocation(longitude, latitude) {
	if (typeof longitude === 'string' && typeof latitude === 'string') {
		longitude = parseFloat(longitude)
		latitude = parseFloat(latitude)
	}

	longitude = longitude.toFixed(2)
	latitude = latitude.toFixed(2)

	return {
		longitude: longitude.toString().split('.'),
		latitude: latitude.toString().split('.')
	}
}
var dateUtils = {
	UNITS: {
		'年': 31557600000,
		'月': 2629800000,
		'天': 86400000,
		'小时': 3600000,
		'分钟': 60000,
		'秒': 1000
	},
	humanize: function(milliseconds) {
		var humanize = '';
		for (var key in this.UNITS) {
			if (milliseconds >= this.UNITS[key]) {
				humanize = Math.floor(milliseconds / this.UNITS[key]) + key + '前';
				break;
			}
		}
		return humanize || '刚刚';
	},
	format: function(dateStr) {
		var date = this.parse(dateStr)
		var diff = Date.now() - date.getTime();
		if (diff < this.UNITS['天']) {
			return this.humanize(diff);
		}
		var _format = function(number) {
			return (number < 10 ? ('0' + number) : number);
		};
		return date.getFullYear() + '/' + _format(date.getMonth() + 1) + '/' + _format(date.getDay()) + '-' +
			_format(date.getHours()) + ':' + _format(date.getMinutes());
	},
	parse: function(str) { //将"yyyy-mm-dd HH:MM:ss"格式的字符串，转化为一个Date对象
		var a = str.split(/[^0-9]/);
		return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
	},
	/**
	 * 时间格式化
	 * @param fmt
	 * @param date
	 * @returns {*}
	 */
	formatDate: function(fmt, date) { // 格式，日期
		let o = {
			'M+': date.getMonth() + 1, // 月份
			'd+': date.getDate(), // 日
			'h+': date.getHours(), // 小时
			'm+': date.getMinutes(), // 分
			's+': date.getSeconds(), // 秒
			'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
			'S': date.getMilliseconds() // 毫秒
		}
		if (/(y+)/.test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
		}
		for (let k in o) {
			if (new RegExp('(' + k + ')').test(fmt)) {
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
			}
		}
		return fmt
	}
};
/**
 * 校验是否为浮点数
 * @param val
 * @returns {boolean}
 */
const isFloat = function(val) {
	let regPos = /^\d+(\.\d+)?$/ // 非负浮点数
	let regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/ // 负浮点数
	return regPos.test(val) || regNeg.test(val)
};

module.exports = {
	formatTime: formatTime,
	formatLocation: formatLocation,
	dateUtils: dateUtils,
	isFloat,
	getMD5Encrypt,
	getSignature,
	getDESEncStr,
	getDESDecStr,
	getAESEncStr,
	getAESDecStr
}
