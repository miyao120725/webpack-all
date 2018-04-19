var Cookie = {};
Cookie = {
    /**
     * 设置cookie
     * @param name 名称
     * @param value 值
     * @param expires 有效时间（单位：小时）（可选） 默认：24h
     */
    set: function(name, value, expires, domain) {
        var expTimes = expires ? (Number(expires) * 60 * 60 * 1000) : (24 * 60 * 60 * 1000); // 毫秒
        var expDate = new Date();
        expDate.setTime(expDate.getTime() + expTimes);
        var expString = expires ? '; expires=' + expDate.toUTCString() : '';
        var pathString = '; path=/';
        var domain = '; domain=' + domain;
        document.cookie = name + '=' + encodeURI(value) + expString + pathString + domain;
    },
    /**
     * 读cookie
     * @param name
     */
    get: function(name) {
        var cookieStr = '; ' + document.cookie + '; ';
        var index = cookieStr.indexOf('; ' + name + '=');
        if (index !== -1) {
            var s = cookieStr.substring(index + name.length + 3, cookieStr.length);
            return decodeURI(s.substring(0, s.indexOf('; ')));
        } else {
            return null;
        }
    },
    /**
     * 删除cookie
     * @param name
     */
    del: function(name, domain) {
        var exp = new Date(new Date().getTime() - 1);
        var s = this.get(name);
        if (s !== null) {
            document.cookie = name + '=' + s + '; expires=' + exp.toUTCString() + '; path=/; domain=' + domain;
        }
    }
}
function getQueryString (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
}

var qid = getQueryString('qid') || Cookie.get('qid') || 'null';
if (getQueryString('qid')) {
    Cookie.set('qid', getQueryString('qid'), 6, 'mop.com' );
}

/**
 * 详情页广告
 * @return {[type]} [description]
 */

function renderGgid (ggids) {
	return ggids[qid];
}

// function __mop__3g__index__renderGg__01 () {
//     renderGgid({
//         'null': 'u3043250',
//         'mopgaosu': 'u3043919',
//         'mopzhangliu': 'u3045308'
//     })
// }

function __mop__3g__detail__renderGg__01 () {
    // return renderGgid({
    //     // 'null': 'u3043239',
    //     // 'mopgaosu': 'u3043924',
    //     // 'mopzhangliu': 'u3045308',
    //     // 'mop2345llq': 'u3046754'
    //     'null': 'cxpdtpmpfaedgm',
    //     'mopgaosu': 'dyqeuqgnubfhnqu',
    //     'mopzhangliu': 'bwocstocyzdec',
    //     'mop2345llq': 'hcuiybdzyfjzb'
    // })
}

function __mop__3g__detail__renderGg__02 () {
    // return renderGgid({
    //     // 'null': 'u3043242',
    //     // 'mopgaosu': 'u3043929',
    //     // 'mopzhangliu': 'u3045309',
    //     // 'mop2345llq': 'u3046758'
    //     'null': 'vqiwmifmftxywzf',
    //     'mopgaosu': 'idvjzvlslgkcef',
    //     'mopzhangliu': 'cxpdtupdfaedgm',
    //     'mop2345llq': 'lgymcfhdijn'
    // })
}

function __mop__3g__detail__renderGg__03 () {
    
	// return qid === 'mopgaosu' ? 'u3043943' : "u3043249";
}