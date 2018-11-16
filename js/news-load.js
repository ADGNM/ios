/**
 * Created by bobo on 2016/12/6.
 */
(function(global){
    var body = $('.container'),
        fullPath = 1,
        loading = false;
    global.lazyLoad = {
        config:{
            nid:_getNodeId(),
            pageNo:0,
            lazy:true,
            pageSize:12,
            viewBox:global,
            dataBox:'#data',
            scrollBox:global,
            dataCallback:null,
            loadBox:'#loading',
            url:'http://qc.wa.news.cn/nodeart/list'
        },
        dataBox:null,
        viewBox:null,
        loadBox:null,
        dataCallback:null,
        scrollBox:null,
        init:function (param){
            var self = this;
            self.initConfig(param);
            //console.log(self.config.lazy);
            self.config.lazy?self.moreData():self.getData();
        },
        initConfig:function(param){
            var self = this;
            for(var i in param){
                self.config[i] = param[i];
            }
            self.dataBox = $(self.config.dataBox);
            self.loadBox = $(self.config.loadBox);
            self.viewBox = $(self.config.viewBox);
            self.scrollBox = $(self.config.scrollBox);
            self.dataCallback = self.config.dataCallback;
        },
        getData: function(){
            var self = this, con = self.config;
            self.showLoading(true);
            var dataUrl = con.url+'?nid='+con.nid+'&pgnum='+con.pageNo+'&cnt='+con.pageSize+'&attr=63&tp=1&orderby=1&mulatt=1?';
            //console.log(dataUrl);
            $.ajax({
                type:'post',
                url:dataUrl,
                dataType:'jsonp',
                success:function(data){
                    if(data.status == 0){
                        self.showLoading(false);
                        if(self.dataCallback) self.dataCallback(data);
                        con.pageNo ++;
                    }else{
                        self.showLoading(true);
                        self.loadBox.find('a').text('暂无更多');
                        self.loadBox.addClass('no-more');
                    }
                }
            });
        },
        moreData:function(){
            var self = this;
            self.scrollBox.scroll(function(){
                if(!loading){
                    var winTop = $(this).scrollTop(),
                        winHeight = $(this).height(),
                        dataHeight = body.height();
                    var tb = ~~(dataHeight-winTop-winHeight);
                    //console.log(winTop,winHeight,dataHeight);
                    if(tb<200) self.getData();
                }
            });
        },
        showLoading:function(state){
            var self = this;
            if(state){
                loading = true;
                self.loadBox.removeClass('hidden');
            }else{
                loading = false;
                self.loadBox.addClass('hidden');
            }
        }
    };
    function _getNodeId(){
        return $('#nid').val();
    }
})(window);