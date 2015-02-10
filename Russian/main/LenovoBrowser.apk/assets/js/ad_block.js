javascript: (function() {
	dateTime = new Date().getTime();
    init_lenovo_ad();
    sh =  setInterval(lenovo_ad.remove_ad,800);
})();

var lenovo_ad;
var sh;
var dateTime;
var timeOut = 5000;

function init_lenovo_ad() {
    var LenovoAd = {
        createNew: function() {
            var lenovo_ad = {};
            return lenovo_ad;
        }
    };

    lenovo_ad = LenovoAd.createNew();
    lenovo_ad.remove_ad = function remove_ad() {
    	if(document.readyState.match("complete")){
    		lenovo_ad.remove_sh();
    		if(document.URL.indexOf('m.mogujie') >= 0){//蘑菇街
    			setTimeout(function(){ 
    				lenovo_ad.remove_by_click_class('app-close');
    			},1000);
    			return;
    		}
		}
		
		if(new Date().getTime() - dateTime>=timeOut){
			lenovo_ad.remove_sh();
		}
			
    	if(document.URL.indexOf("alipay.com/appIndex.htm?continue")>0){
    		var io = new AI.ajax('/home/clientDownloadSpread.json',{
    			 type:'POST'
 			  });
   			io.send();
   			$('#J-advertise').hide('3000');
   			lenovo_ad.remove_sh();
    	}
    	
    	if(document.URL.indexOf('mail.qq.com') >= 0){//qq邮箱
    		try{
    			lenovo_ad.remove_class("top_announce");
    		}catch(err) {
    		
    		}
    		try{
    			document.getElementsByClassName("spread_conti")[0].childNodes[1].click()
    		}catch(err) {
    		
    		}
    	}
    	
    	if(document.URL.indexOf('m.v.360.cn') >= 0){//360影视
			var element = document.getElementsByClassName("btn cancel-btn")[0];
			if(element!=null){
				lenovo_ad.click_event(element);
			}
    		return;
    	}
    	
    	if(document.URL.indexOf('m.pps.tv') >= 0){//pps
			var element = document.getElementsByClassName("skip-btn")[0];
			if(element!=null){
				lenovo_ad.click_event(element);
			}
    		return;
    	}
    	
    	if(document.URL.indexOf('m.pm2d5') >= 0){//pm2.5
			lenovo_ad.remove_id("google_ads_frame1_anchor");
    		return;
    	}
    	
    	 if(document.URL.indexOf('budejie.com') >= 0){//可乐铺子
			lenovo_ad.remove_class("client_comment");
    		return;
    	}
    
    	if(document.URL.indexOf('m.kelepuzi') >= 0){//可乐铺子
			lenovo_ad.remove_id("google_afmc_859806243");
    		return;
    	}
    
    	if(document.URL.indexOf('m.yiche.com') >= 0){//易车网
			lenovo_ad.remove_id("m_download_top");
    		lenovo_ad.remove_by_click_id("close");
    		return;
    	}
    	
    	if(document.URL.indexOf('m.qiushibaike.com') >= 0){//糗事百科
			lenovo_ad.remove_id("cproIframe1Wrap");
			lenovo_ad.remove_id("div-gpt-ad-1382694041396-1_ad_container");
    	lenovo_ad.remove_by_click_id("xuantingCloseBtn_u1360794");
    		return;
    	}
    	
    	if(document.URL.indexOf('soso.com') >= 0){//soso小说
			lenovo_ad.remove_class("ad_image_container");
    		return;
    	}
    
    	if(document.URL.indexOf('page.yicha.cn') >= 0){//易查搜索
    		lenovo_ad.remove_id("bdAd");
    		return;
    	}
    
    	if(document.URL.indexOf('pt.3g.qq.com') >= 0 || document.URL.indexOf('m.qzone') >= 0){//qq空间
    		lenovo_ad.remove_id("layer_down");
    		return;
    	}
    
    	if(document.URL.indexOf('m.58') >= 0){//58同城
    		lenovo_ad.remove_id("index_down_div");
    		return;
    	}
    
    	if(document.URL.indexOf('m.meishij') >= 0){//美食杰
    		lenovo_ad.remove_by_click_id("mad1_close");
    		return;
    	}
    
    	if(document.URL.indexOf('m.ctrip.com') >= 0){//携程无线
    		lenovo_ad.remove_class("jsmodule");
    		return;
    	}
    
    	if(document.URL.indexOf('m.douguo') >= 0){//豆果美食
    		lenovo_ad.remove_id("topBan");
    		return;
    	}
    
    	if(document.URL.indexOf('m.dianping') >= 0){//大众点评
    		lenovo_ad.remove_by_click_id("J_close");
    		return;
    	}
    
    	if(document.URL.indexOf('touch.qunar') >= 0){//去哪儿
    		lenovo_ad.remove_class("qn_download");
    		return;
    	}
    
    	if(document.URL.indexOf('ganji') >= 0){//赶集
    		appclientClick();
    		return;
    	}
    
    	if(document.URL.indexOf('m.vancl.com') >= 0){//凡客
    		lenovo_ad.remove_by_click_class("appClose");
    		return;
    	}
    	
    	if(document.URL.indexOf('m.toacx') >= 0){//我爱冷笑话
    		lenovo_ad.remove_class("topic");
    		return;
    	}
    
    	if(document.URL.indexOf('i.meituan') >= 0){//美团
    		lenovo_ad.remove_id("common-banner");
    		return;
    	}
    
    	if(document.URL.indexOf('wap.meilishuo') >= 0){//美丽说
    		Message.close();
    		return;
    	}
    
    	if(document.URL.indexOf('m.dangdang') >= 0){//当当
	    	 $('.header').hide();
    		return;
    	}
    
    
    	if(document.URL.indexOf('ju.m.taobao') >= 0){//聚划算
    		//lenovo_ad.remove_by_click_id("action_20130313_close");
    		return;
    	}
    	
    	if(document.URL.indexOf('m.taobao.com') >= 0){//淘宝
    		lenovo_ad.remove_by_click_id("smartAd-close");
    		return;
    	}
    
    	if(document.URL.indexOf('m.yihaodian') >= 0){//一号店
    		lenovo_ad.remove_class('idxDownTip');
    		return;
    	}
    
    	if(document.URL.indexOf('co.koudai') >= 0){//口袋
    		lenovo_ad.remove_by_click_class("close");
    		return;
    	}
    
    	if(document.URL.indexOf('m.360buy')>=0 || document.URL.indexOf('m.jd.com') >= 0){//京东商城
    		lenovo_ad.remove_by_click_class("div_banner_close");
    		return;
    	}
    
    	if(document.URL.indexOf('m.letv') >= 0){//乐TV
    		lenovo_ad.remove_by_click_id("ads-btn");
    		return;
    	}

    	if(document.URL.indexOf('m.iqiyi') >= 0){//爱奇艺
    		var element = document.getElementById("popflowclose");
			if(element!=null){
				lenovo_ad.click_event(element);
			}
    		return;
    	}
    
    	if(document.URL.indexOf('m.kuwo') >= 0){//酷我
    		lenovo_ad.remove_id("tanchuang");
    		return;
    	}
    
    	if(document.URL.indexOf('music.baidu') >= 0){//百度音乐
    		lenovo_ad.remove_id("guide");
    		lenovo_ad.remove_class('swipe');
    		return;
    	}
    
    	if(document.URL.indexOf('m.tudou') >= 0){//土豆
    		lenovo_ad.remove_by_click_class("circle");
    		return;
    	}
    	
    	if(document.URL.indexOf('m.tv.sohu') >= 0){//搜狐视频
    		lenovo_ad.remove_id("tip");
    		return;
    	}
    
    	if(document.URL.indexOf('m.youku') >= 0){//优酷
    		lenovo_ad.remove_by_click_class("circle");
    		return;
    	}
    
    	if(document.URL.indexOf('map.baidu.com') >= 0){//百度地图
    		lenovo_ad.remove_by_click_class("banner-close-icon");
    		return;
    	}
    	
    	if(document.URL.indexOf('pptv.com') >= 0){//PPTV
    		closead_289310();
    		return;
    	}
    
        if (document.URL.indexOf('baidu') >= 0) {
            this.remove_ad_baidu();
            return;
        };
        if (document.URL.indexOf('3g.sina.com.cn') >= 0) {
            try {
                clsBanner();
                lenovo_ad.remove_id('banner_top');

            } catch(e) {}
            return;
        };
        if (document.URL.indexOf('m.sohu.com') >= 0 || document.URL.indexOf('360.shupeng.com') >= 0) {
            this.remove_by_click_class('close');
            lenovo_ad.remove_class('AD_ACT');
            lenovo_ad.remove_id('notice');
            return;
        };
        if (document.URL.indexOf('http://m.tmall.com/') >= 0) {
            try {
                var d = new Date();
                var nowDay = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate();
                localStorage.setItem("first_enter_flag", nowDay);
                document.getElementById("action_20130107").style.display = 'none';
                lenovo_ad.remove_id('action_20130107');
            } catch(e) {};
            return;
        };
        if (document.URL.indexOf('http://book.easou.com/') >= 0) {
            var e = document.getElementsByClassName('delete')[0];
            this.click_event(e);
            lenovo_ad.remove_class('ad');
            return;
        };
        if (document.URL.indexOf('http://ti.3g.qq.com/') >= 0) {
            this.remove_by_click_class('wb-clientclose t_bt_close t_listen_class');
            lenovo_ad.remove_class('wb-client-download');
            lenovo_ad.remove_class('t_ad ad-tips');
            return;
        };

        if (document.URL.indexOf('http://wap.alipay.com/') >= 0) {

            var io = new AI.ajax('/home/clientDownloadSpread.json', {
                type: 'POST'
            });
            io.send();
            ad = document.getElementById('J-advertise');
            ad.parentElement.removeChild(ad);
            lenovo_ad.remove_id('J-advertise');
            return;
        };
        if (document.URL.indexOf('http://m.suning.com/') >= 0) {
            setTimeout(function() {
                lenovo_ad.remove_class('appdownload w');
            },
            2000);
            return;
        };

        if (document.URL.indexOf('3g.cn') >= 0) {
            this.remove_by_click_id('adFlowImg-close');
            lenovo_ad.remove_id('adFlowSwitch');
            return;
        };

    };

    lenovo_ad.remove_ad_baidu = function remove_ad_baidu() {
        if (document.URL.indexOf('wapp.baidu.com') >= 0) {
            return this.remove_by_click_class('btn_close');
        };

        if (document.URL.indexOf('m.baidu.com/news') >= 0) {
            try {
                this.remove_by_click_class('index-ad-close');

                var e1 = document.getElementById('index_view_topad');
                if (e1 != null && e1.children[0] && e1.children[0].children[0]) {
                    this.click_event(e1.children[0].children[0]);
                };

                var e2 = document.getElementById('page_view_btmad');
                if (e2 != null && e2.children[0] && e2.children[0].children[1]) {
                    var evt = document.createEvent("MouseEvents");
                    evt.initEvent("click", true, true);
                    app.helper.closeADBanner(e2.children[0].children[1], evt);
                };

                lenovo_ad.remove_id('index-ad-close');
                lenovo_ad.remove_id('page_view_btmad');

            } catch(e) {}
            return;
        };
    };
    lenovo_ad.remove_by_click_class = function remove_by_click_class(class_name) {
        var elements = document.getElementsByClassName(class_name);
        if (elements.length > 0 && elements[0] != null) {
            this.click_event(elements[0]);
        };
    };

    lenovo_ad.remove_by_click_id = function remove_by_click_id(id_name) {
        var element = document.getElementById(id_name);
        if (element != null) {
            this.click_event(element);
        };
    };

    lenovo_ad.click_event = function click_event(element) {
        if (element != null) {
            var evt = document.createEvent("MouseEvents");
            evt.initEvent("click", true, true);
            element.dispatchEvent(evt);
            this.remove_sh();
        };
    };

    lenovo_ad.remove_class = function remove_class(class_name) {
        var elements = document.getElementsByClassName(class_name);
        if (elements.length > 0) {
            for (var i = 0; i < elements.length;) {
                this.remove_element(elements[i]);
            };
        };
    };

    lenovo_ad.remove_id = function remove_id(id_name) {
        var element = document.getElementById(id_name);
        this.remove_element(element);
    };

    lenovo_ad.remove_element = function remove_element(element) {
        if (element != null && element.parentElement != null) {
            element.parentElement.removeChild(element);
            this.remove_sh();
        };
    };
    
	lenovo_ad.remove_sh = function remove_sh(){
		clearInterval(sh);
	}
};