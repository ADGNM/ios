/**
 * Created by bobo on 2016/12/21.
 */
$(document).ready(function(){
    var ll = lazyLoad,
        href = location.href.indexOf('localhost'),
        page = $('#pageName').val();
    ll.init({
        pageNo:2,
        url:'http://qc.wa.news.cn/nodeart/list',
        dataCallback:appendHtml
    });

    Bo.keywordCallback = initKeyword;
    Bo.initKeywords();

    function appendHtml(data){
        var html = '', dat = data.data.list;
        for(var i = 0;i<dat.length;i++){
            html += _returnHtml(dat[i]);
        }
        ll.dataBox.append(html);
    }
    function _returnHtml(data){
        var html = '';
        html += '<li class="bg-white"><div class="img-full video-box"><div class="video-title"><div class="pad10">'+data.Title+'</div></div>'+hasVideoIcon(data)+'</div>' +
        '<div class="thumb-text-extra">'+getKeyword(data.keyword)+'<span class="source">'+(data.SourceName||'')+'</span></div>';
        return html;
    }
    function hasVideoIcon(data){
        var src ="http://m.xinhuanet.com/"+ Bo.getImgPath(data.PicLinks);
        return page == '视频'?'<img src="'+src+'"><a href="'+data.LinkUrl+'"></a></div>':'<a href="'+data.LinkUrl+'"><img src="'+src+'"></a>';
    }
    function getKeyword(keyword){
        var html = '';
        if(keyword){
            var kw = keyword.split(';'), len = Math.min(kw.length, 3);
            for(var i = 0;i<len;i++){
                html += '<span class="keyword">'+kw[i]+'</span>';
            }
        }
        return html;
    }
    function initKeyword(node, keyword){
        var html = '', len = Math.min(keyword.length, 3);
        for(var i = 0;i<len;i++){
            html += '<span class="keyword">'+keyword[i]+'</span>';
        }
        node.parent().append(html);
    }
});