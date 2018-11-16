/**
 * Created by bobo on 2016/12/7.
 */
(function(global){
    (function() {
        var w_width = $(global).width();
        var baseFontSize = w_width/10;
        $('html').css('font-size', baseFontSize+'px');
    })();

    if(!global.Bo) global.Bo = {};

    var HREF = document.location.href,
        NAV = {
            channel:[
                {href:'http://m.news.cn/xw/index.htm', name:'新闻'},
                {href:'http://m.news.cn/fortune/index.htm', name:'财经'},
                {href:'http://m.news.cn/world/index.htm', name:'国际'},
                {href:'http://m.news.cn/ent/index.htm', name:'娱乐'},
                {href:'http://m.news.cn/photo/index.htm', name:'图片'},
                {href:'http://m.news.cn/forum/index.htm', name:'社区'},
                {href:'http://m.news.cn/mil/index.htm', name:'军事'},
                {href:'http://m.news.cn/sports/index.htm', name:'体育'},
                {href:'http://m.news.cn/tech/index.htm', name:'前沿'},
                {href:'http://m.news.cn/edu/index.htm', name:'教育'},
                {href:'http://m.news.cn/comments/index.htm', name:'网评'},
                {href:'http://m.news.cn/gangao/index.htm', name:'港澳台'},
                {href:'http://m.news.cn/legal/index.htm', name:'法治'},
                {href:'http://m.news.cn/society/index.htm', name:'社会'},
                {href:'http://m.news.cn/culture/index.htm', name:'文化'},
                {href:'http://m.news.cn/fashion/index.htm', name:'时尚'},
                {href:'http://m.news.cn/travel/index.htm', name:'旅游'},
                {href:'http://m.news.cn/health/index.htm', name:'健康'},
                {href:'http://m.news.cn/auto/index.htm', name:'汽车'},
                {href:'http://m.news.cn/house/index.htm', name:'房产'},
                {href:'http://m.news.cn/food/index.htm', name:'美食'},
                {href:'http://m.news.cn/book/index.htm', name:'悦读'},
                {href:'http://m.news.cn/video/index.htm', name:'视频'},
                {href:'http://www.xinhuanet.com/video/xinhuaradio/mobile.htm', name:'广播'}
            ],
            topic:[
                {href:'http://m.news.cn/xxjxs/index.htm', name:'学习进行时'},
                {href:'http://www.xinhuanet.com/politics/rs.htm', name:'人事任免'},
                {href:'http://sike.xinhuanet.com/static/index.html', name:'思客'},
                {href:'http://www.xinhuanet.com/datanews/web.htm', name:'数据新闻'},
                {href:'http://uav.xinhuanet.com/', name:'无人机'}
            ],
            location:[
                {href:'http://m.news.cn/bj.htm', name:'北京'},
                {href:'http://m.news.cn/jl.htm', name:'吉林'},
                {href:'http://m.news.cn/sh.htm', name:'上海'},
                {href:'http://m.news.cn/js.htm', name:'江苏'},
                {href:'http://m.news.cn/ah.htm', name:'安徽'},
                {href:'http://m.news.cn/fj.htm', name:'福建'},
                {href:'http://m.news.cn/sd.htm', name:'山东'},
                {href:'http://m.news.cn/hb.htm', name:'湖北'},
                {href:'http://m.news.cn/hn.htm', name:'湖南'},
                {href:'http://m.news.cn/gd.htm', name:'广东'},
                {href:'http://m.news.cn/gx.htm', name:'广西'},
                {href:'http://m.news.cn/hq.htm', name:'海南'},
                {href:'http://m.news.cn/cq.htm', name:'重庆'},
                {href:'http://m.news.cn/sc.htm', name:'四川'},
                {href:'http://m.news.cn/gz.htm', name:'贵州'},
                {href:'http://m.news.cn/gs.htm', name:'甘肃'},
                {href:'http://m.news.cn/nx.htm', name:'宁夏'},
                {href:'http://m.news.cn/xj.htm', name:'新疆'},
                {href:'http://m.news.cn/nmg.htm', name:'内蒙古'},
                {href:'http://m.news.cn/hlj.htm', name:'黑龙江'}

                //{href:'http://m.news.cn/tj.htm', name:'天津'},
                //{href:'http://m.news.cn/jx.htm', name:'江西'},
                //{href:'', name:'河南'},
                //{href:'', name:'河北'},
                //{href:'', name:'山西'},
                //{href:'http://m.news.cn/ln.htm', name:'辽宁'},
                //{href:'http://m.news.cn/qh.htm', name:'青海'},
                //{href:'http://m.news.cn/yn.htm', name:'云南'},
                //{href:'http://m.news.cn/xz.htm', name:'西藏'},
                //{href:'', name:'陕西'},
                //{href:'http://m.news.cn/zj.htm', name:'浙江'}
            ],
            language:[
                {href:'http://xinhuanet.com/english/mobile/index.htm', name:'ENGLISH'},
                {href:'http://spanish.xinhuanet.com/mobile/index.htm', name:'Español'},
                {href:'http://french.xinhuanet.com/mobile/index.htm', name:'Français'},
                {href:'http://jp.xinhuanet.com/m/index.htm', name:'日本語'},
                {href:'http://kr.xinhuanet.com/m/index.htm', name:'한국어'},
                {href:'http://german.xinhuanet.com/dwpdsjb/index.htm', name:'Deutsch'},
                {href:'http://portuguese.xinhuanet.com/mobile/index.htm', name:'Português'},
                {href:'http://arabic.news.cn/mobile/index.htm',name:'عربى'},
                {href:'http://russian.xinhuanet.com/mobile/index.htm', name:'Русский язык'}
            ]
        },
        COLUMN = {
            auto: "汽车",
            book: "悦读",
            comments: "网评",
            culture: "文化",
            edu: "教育",
            ent: "娱乐",
            fashion: "时尚",
            food: "美食",
            fortune:"财经",
            forum: "社区",
            gangao: "港澳台",
            health: "健康",
            house: "房产",
            legal: "法治",
            mil: "军事",
            photo: "图片",
            society: "社会",
            sports: "体育",
            tech: "前沿",
            travel: "旅游",
            video: "视频",
            world: "国际",
            xw: "新闻"
        },
        COLUMN_BOX = '<div class="container">' +
            '<div class="nav-more-content"><div class="nav-list-head"><div class="nav-close ico-add"></div></div>' +
            '<div class="nav-list-wrapper">' +
            '<h2>网站地图</h2><ul class="channel-list"></ul>' +
            '<h2>品牌栏目</h2><ul class="topic-list"></ul>' +
            '<h2>地方频道</h2><ul class="location-list"></ul>' +
            '<h2>多语种频道</h2><ul class="language-list"></ul></div></div></div>';
    //var HREF = 'http://mobile.news.cn/2016-12/07/c_129395384.htm';
    var gid = HREF.match(/.*_(\d+)\.htm/),
        meta = $('input[name="keywords"]'),
        keyBox = $('.bo-keyword');
    Bo.keywordCallback = null;
    Bo.getGid = function (){
        gid?Bo.gid = gid[1]:Bo.gid = 129395384;
        return Bo;
    };
    Bo.initRecommend = function(){
        var recommend = $('.bo-recommend'), lis = recommend.find('li');
        if(lis.length<1) recommend.hide();
        return Bo;
    };
    Bo.initKeywords = function(){
        meta.length>0?addKeywords():keyBox.hide();
        return Bo;
    };
    Bo.initFooter = function (node){
        var footer = '<footer><p>Copyright © 2000 - 2017 XINHUANET.com</p><p>版权所有 新华网股份有限公司</p></footer>';
        $(node).append(footer);
        return Bo;
    };
    Bo.initHeader = function(node){
        var header = '<header><div class="pack"><span class="logo"><a href="http://m.news.cn/index.htm"></a></span><span class="pagename"></span><span class="nav-more-btn iconfont icon-gongnengcaidan"></span></div></header>';
        if($('.channel-list').length<1) $(node).prepend(COLUMN_BOX);
        $(node).prepend(header);
        navColumn();
        return Bo;
    };
    Bo.initNavClick = function(){
        navClick();
        return Bo;
    };
    Bo.getImgPath = function(path){
        if(!path) return '';
        var hp = '../../titlepic/' /*'http://www.xinhuanet.com/test/titlepic/'*/, tp = '0h';
        var sub1 = path.split('.'),
            sub2 = sub1[0].split('_'),
            sub2_l = sub2[0].length,
            pat = sub2[0].substr(0, sub2_l-4);
        return hp+pat+'/'+sub1[0]+tp+'.'+sub1[1];
    };
    Bo.getColumnName = function(){
        var href = HREF.split('/')[3];
        return COLUMN[href]||'';
    };
    function addKeywords(){
        //console.log(meta);
        meta.each(function(){
            var keywords = $(this).val(),
                kws = [];
            if(keywords){
                kws = keywords.split(',');
                if(Bo.keywordCallback) Bo.keywordCallback($(this), kws);
            }
        });
    }
    function navColumn(){
        for(var i in NAV){
            var html = navHtml(NAV[i]);
            $('ul.'+i+'-list').html(html);
        }
        navClick();
    }
    function navHtml(data){
        var html = '';
        for(var i = 0;i<data.length;i++){
            html+='<li><a href="'+data[i].href+'">'+data[i].name+'</a></li>'
        }
        return html;
    }
    function navClick() {
        var $navShowBtn = $('.nav-more-btn');
        var $navMoreContent = $('.nav-more-content');
        var $navCloseBtn = $('.nav-close');

        $navShowBtn.on('click', function(e) {
            e.preventDefault();
            $navMoreContent.addClass('show');
            $('html').addClass('noscroll');
        });

        $navCloseBtn.on('click', function(e) {
            e.preventDefault();
            $navMoreContent.removeClass('show');
            $('html').removeClass('noscroll');
        });
    }
    function createColumn(){
        var channel = NAV.channel;
        for(var i = 0;i<channel.length;i++){
            var n = channel[i].href.split('/')[1];
            COLUMN[n] = channel[i].name;
        }
        console.log(COLUMN);
    }
    //createColumn();
    Bo.getColumnName();
})(window);