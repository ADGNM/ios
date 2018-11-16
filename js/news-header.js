/**
 * Created by bobo on 2016/12/21.
 * edited by hover-hou @2018/05/24 增加地方频道手机看pc页面功能
 */
$(document).ready(function() {
    var focusClass = 'nav-item-active',
        pn = $('#pageName').val(),
        nav = $('.nav-link');

    function locateNav() {
        nav.each(function() {
            var name = $(this).text().trim();
            if (name == pn) $(this).addClass(focusClass);
        });
        $('.pagename').text(pn);
    }
    locateNav();
});


/*;! function(opt) {
    var opt = opt || {},
        _url = opt.mobUrl || "http://m.news.cn",
        _hashStr = opt.hashStr || "f=pad",
        ua = navigator.userAgent.toLowerCase(),
        isM = ua.indexOf("mobile") !== -1,
        l = window.location.href,
        stopPc = l.indexOf(_hashStr) !== -1;
    if (isM && !stopPc) window.location.href = _url
}({
    mobUrl: "http://m.news.cn",
    hashStr: "f=pad"
})*/

;
! function() {
    var model = {
            list: [{
                add: "总网",
                mobUrl: "http://m.news.cn",
                pcInMob: "http://www.xinhuanet.com/?f=pad"
            }, {
                add: "北京",
                mobUrl: "http://m.news.cn/bj.htm",
                pcInMob: "http://www.bj.xinhuanet.com"
            }, {
                add: "天津",
                mobUrl: "http://m.news.cn/tj.htm",
                pcInMob: "http://www.tj.xinhuanet.com/pc.htm"
            }, {
                add: "内蒙古",
                mobUrl: "http://m.news.cn/nmg.htm",
                pcInMob: "http://www.nmg.xinhuanet.com/?f=pad"
            }, {
                add: "河北",
                mobUrl: "http://m.news.cn/he.htm",
                pcInMob: "http://he.xinhuanet.com/?f=pad"
            }, {
                add: "山西",
                mobUrl: "http://m.news.cn/sx.htm",
                pcInMob: "http://www.sx.xinhuanet.com/ztjn/2017back.htm"
            }, {
                add: "辽宁",
                mobUrl: "http://m.news.cn/ln.htm",
                pcInMob: "http://www.ln.xinhuanet.com/?f=pad"
            }, {
                add: "吉林",
                mobUrl: "http://m.news.cn/jl.htm",
                pcInMob: "http://www.jl.xinhuanet.com/?f=pc"
            }, {
                add: "黑龙江",
                mobUrl: "http://m.news.cn/hlj.htm",
                pcInMob: "http://www.hlj.xinhuanet.com"
            }, {
                add: "陕西",
                mobUrl: "http://m.news.cn/sn.htm",
                pcInMob: "http://sn.xinhuanet.com/?f=pad"
            }, {
                add: "甘肃",
                mobUrl: "http://m.news.cn/gs.htm",
                pcInMob: "http://gs.xinhuanet.com/?f=pad"
            }, {
                add: "青海",
                mobUrl: "http://m.news.cn/qh.htm",
                pcInMob: "http://qh.xinhuanet.com/?f=pad"
            }, {
                add: "宁夏",
                mobUrl: "http://m.news.cn/nx.htm",
                pcInMob: "http://www.nx.xinhuanet.com/?f=pad"
            }, {
                aadd: "新疆",
                mobUrl: "http://m.news.cn/xj.htm",
                pcInMob: "http://www.xj.xinhuanet.com/?f=pc"
            }, {
                add: "河南",
                mobUrl: "http://m.news.cn/ha.htm",
                pcInMob: "http://www.ha.xinhuanet.com/?f=pad"
            }, {
                add: "湖北",
                mobUrl: "http://m.news.cn/hb.htm",
                pcInMob: "http://www.hb.xinhuanet.com/?f=pc"
            }, {
                add: "湖南",
                mobUrl: "http://m.news.cn/hn.htm",
                pcInMob: "http://www.hn.xinhuanet.com/pc.htm"
            }, {
                add: "上海",
                mobUrl: "http://m.news.cn/sh.htm",
                pcInMob: "http://www.sh.xinhuanet.com/?f=pad"
            }, {
                add: "山东",
                mobUrl: "http://m.news.cn/sd.htm",
                pcInMob: "http://www.sd.xinhuanet.com/?f=pc"
            }, {
                add: "江苏",
                mobUrl: "http://m.news.cn/js.htm",
                pcInMob: "http://www.js.xinhuanet.com/?f=pc"
            }, {
                add: "浙江",
                mobUrl: "http://m.news.cn/zj.htm",
                pcInMob: "http://www.zj.xinhuanet.com/?f=pad"
            }, {
                add: "安徽",
                mobUrl: "http://m.news.cn/ah.htm",
                pcInMob: "http://www.ah.xinhuanet.com/?f=pad"
            }, {
                add: "江西",
                mobUrl: "http://m.news.cn/jx.htm",
                pcInMob: "http://www.jx.xinhuanet.com/?f=pc"
            }, {
                add: "福建",
                mobUrl: "http://m.news.cn/fj.htm",
                pcInMob: "http://www.fj.xinhuanet.com/?f=pc"
            }, {
                add: "广东",
                mobUrl: "http://m.news.cn/gd.htm",
                pcInMob: "http://www.gd.xinhuanet.com/?f=pad"
            }, {
                add: "广西",
                mobUrl: "http://m.news.cn/gx.htm",
                pcInMob: "http://www.gx.xinhuanet.com/?f=pad"
            }, {
                add: "海南",
                mobUrl: "http://m.news.cn/hq.htm",
                pcInMob: "http://www.hq.xinhuanet.com/?f=pad"
            }, {
                add: "重庆",
                mobUrl: "http://m.news.cn/cq.htm",
                pcInMob: "http://www.cq.xinhuanet.com/?f=pc"
            }, {
                add: "四川",
                mobUrl: "http://m.news.cn/sc.htm",
                pcInMob: "http://www.sc.xinhuanet.com/?f=pad"
            }, {
                add: "云南",
                mobUrl: "http://m.news.cn/yn.htm",
                pcInMob: "http://yn.xinhuanet.com/?f=pad"
            }, {
                add: "贵州",
                mobUrl: "http://m.news.cn/gz.htm",
                pcInMob: "http://www.gz.xinhuanet.com/pc.htm"
            }, {
                add: "西藏",
                mobUrl: "http://m.news.cn/xz.htm",
                pcInMob: "http://www.xz.xinhuanet.com/?f=pc"
            }],
            url: window.location.href,
            index: 0,
            tag: document.querySelector(".pcref a"),
            needChangeUrl: false
        },
        controller = {
            changeTagUrl: function() {
                if (model.needChangeUrl) view.renderUrl(model.list[model.index].pcInMob);
                return this;
            },
            updateIndex: function(_i) {
                model.index = _i || 0;
                return this;
            },
            diffUrl: function() {
                var _data = model.list,
                    i = model.index;
                if (_data[i].mobUrl != _data[i].pcInMob) {
                    model.needChangeUrl = true;
                }
                return this;
            },
            matchUrl: function() {
                var _data = model.list,
                    _url = model.url,
                    _url2 = _url.replace("xinhuanet.com", "news.cn"),
                    i = 0,
                    len = _data.length;
                for (; i < len; i++) {
                    if (_url.indexOf(_data[i].mobUrl) !== -1 || _url2.indexOf(_data[i].mobUrl) !== -1) {
                        this.updateIndex(i);
                    }
                }
                return this;
            },
            init: function() {
                this.matchUrl().diffUrl().changeTagUrl();
                return this;
            }
        },
        view = {
            renderUrl: function(url) {
                model.tag.href = url || "";
                return this;
            }
        };
    controller.init();
}()