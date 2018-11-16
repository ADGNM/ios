/**
 * Created by bobo on 2016/12/20.
 */
$(document).ready(function(){
    var ll = lazyLoad;
    ll.init({
        pageNo:2,
        dataCallback:appendHtml
    });
    function appendHtml(data){
        var html = '', dat = data.data.list;
        for(var i = 0;i<dat.length;i++){
            html += _returnHtml(dat[i]);
        }
        ll.dataBox.append(html);
    }
    function _returnHtml(data){
        var len = 0, html = '';
        if(data.allPics) len = ~~(data.allPics.length);
        switch (len){
            case 0:
                html = getOneImage(data, getImgPath(data.PicLinks));
                break;
            case 1:
            case 2:
                html = getOneImage(data, data.allPics[0]);
                break;
            default :
                html = getThreeImage(data);
                break;
        }
        return html;
    }
    function getImgPath(path){
        if(!path) return '';
        var hp = '../../titlepic/', tp = '0h';
        var sub1 = path.split('.'),
            sub2 = sub1[0].split('_'),
            sub2_l = sub2[0].length,
            pat = sub2[0].substr(0, sub2_l-4);
        return hp+pat+'/'+sub1[0]+tp+'.'+sub1[1];
    }
    function getOneImage(data, imagePath){
        var html = '';
        html += '<li class="thumb-item"><div class="thumb-img"><a href="'+data.LinkUrl+'" target="_blank">' +
        '<img src="'+imagePath+'" alt="'+data.Title+'"></a></div><div class="thumb-info"><h3 class="thumb-tit">' +
        '<a href="'+data.LinkUrl+'">'+data.Title+'</a></h3><div class="thumb-extra">'+getKeyword(data.keyword)+'<span class="source">'+(data.SourceName||'')+'</span></div></div></li>';
        return html;
    }
    function getThreeImage(data){
        var html = '';
        html += '<div class="thumb-p3 pack"><h3 class="thumb-p3-tit"><a href="'+data.LinkUrl+'" target="_blank">'+data.Title+'</a></h3>' +
        '<div class="thumb-p3-imgs"><a href="'+data.LinkUrl+'" target="_blank">' +
        '<img src="'+data.allPics[0]+'" border="0" alt="'+data.Title+'">' +
        '<img src="'+data.allPics[1]+'" border="0" alt="'+data.Title+'">' +
        '<img src="'+data.allPics[2]+'" border="0" alt="'+data.Title+'"></a></div></div>';
        return html;
    }
    function getKeyword(keyword){
        var html = '';
        if(keyword){
            var kw = keyword.split(';');
            var len = Math.min(kw.length, 1);
            for(var i = 0;i<len;i++){
                html += '<span class="keyword">'+kw[i]+'</span>';
            }
        }
        return html;
    }
    new Swiper('.swiper-container', {
        autoplay: 6000,
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        loop: (function(){
            var needLoop = true,
                slides = $(".swiper-container").find(".swiper-slide"),
                lastSlide = slides.eq(-1),
                isAd = lastSlide.find("script")
            ;
            if(isAd.length) {
                lastSlide.remove();
            }
            return needLoop;
        })()
    });
});