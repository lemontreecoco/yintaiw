$(function(){
	var headwx=$(".head-wx")[0];
	var wxxiala=$(".wx-xiala")[0];
	var ytsya1=$(".ytsy-a1")[0];
	var headwxp1=$(".head-wxp1")[0];
	headwx.onmouseover=function(){
		wxxiala.style.display="block";
        ytsya1.style.color="#E5004F";
        headwxp1.style.backgroundPosition="21px -87px";

	}
	headwx.onmouseout=function(){
		wxxiala.style.display="none"
	}
	// 二维码结束
	// 下载客户端
	var sjyt=$(".sjyt")[0];
	var sjytxiala=$(".sjyt-xiala")[0];
	var headwxa1=$(".headwx-a1")[0];
	var sjytc1=$(".sjytc1")[0];
	sjyt.onmouseover=function(){
		sjytxiala.style.display="block";
        headwxa1.style.color="#E5004F";
        sjytc1.style.backgroundPosition="0 -20px";

	}
	sjyt.onmouseout=function(){
		sjytxiala.style.display="none"
	}
	// 下载客户端
	// 我的银泰
	var headmyyt=$(".head-myyt")[0];
	var myytxiala=$(".myyt-xiala")[0];
	var hha1=$(".h-h-a1")[0];
	headmyyt.onmouseover=function(){
		myytxiala.style.display="block";
        hha1.style.color="#E5004F";

	}
	headmyyt.onmouseout=function(){
		myytxiala.style.display="none"
	}
	// 我的银泰
	// 购物车
	var lggwc=$(".lg-gwc")[0];
	var gwcxiala=$(".gwc-xiala")[0];
	lggwc.onmouseover=function(){
		gwcxiala.style.display="block";

	}
	lggwc.onmouseout=function(){
		gwcxiala.style.display="none"
	}
	// 购物车
	// banner轮播
	var banner=$(".banner")[0];
	var ptbox=$(".ptbox");
	var bdian=$(".bdian");
	var bzh=$(".b-zh")[0];
	var byh=$(".b-yh")[0];
	var bn=0;
	var bnext=0;
	var bt=setInterval(bmove,2000);
	function bmove(){
		bnext=bn+1;
		if(bnext>=ptbox.length){
			bnext=0;
		}
        for(i=0;i<ptbox.length;i++){
			bdian[i].style.background="#211616";
			ptbox[i].style.opacity="0";
		}
		ptbox[bn].style.opacity="1";
		bdian[bn].style.background="#E5004F";
		animate(ptbox[bn],{opacity:0},300);
		animate(ptbox[bnext],{opacity:1},300);
		bn=bnext;
	}
	function bmove1(){
		bnext=bn-1;
		if(bnext<0){
			bnext=ptbox.length-1;
		}
		for(i=0;i<ptbox.length;i++){
			bdian[i].style.background="#211616";
			ptbox[i].style.opacity="0";
		}
		ptbox[bn].style.opacity="1";
		bdian[bn].style.background="#E5004F";
		animate(ptbox[bn],{opacity:0},300);
		animate(ptbox[bnext],{opacity:1},300);
		bn=bnext;
	}
	banner.onmouseover=function(){
		clearInterval(bt);
		bzh.style.display="block";
		byh.style.display="block";
	}
	banner.onmouseout=function(){
		bt=setInterval(bmove,2000);
		bzh.style.display="none";
		byh.style.display="none";
	}
	bzh.onclick=function(){
    	bmove1();
    }
    byh.onclick=function(){
    	bmove();
    }
    for(var i=0;i<bdian.length;i++){
    	bdian[i].index=i;
    	bdian[i].onmouseover=function(){
    		for(var i=0;i<bdian.length;i++){
    			bdian[i].style.background="#211616";
    			ptbox[i].style.opacity="0";
    		}
            bdian[this.index].style.background="#E5004F";
            ptbox[this.index].style.opacity="1";
    	}
    }
	// banner轮播
	// banner左侧
	var bl1=$(".bl1");
	var blixl=$(".bli-xl");
	for(var i=0;i<bl1.length;i++){
		bl1[i].index=i;
		bl1[i].onmouseover=function(){
			for(var j=0;j<blixl.length;j++){
				blixl[j].style.display="none";
			}
			blixl[this.index].style.display="block";
			bl1[this.index].style.background="#E5004F";
		}
        bl1[i].onmouseout=function(){
        	blixl[this.index].style.display="none";
        	bl1[this.index].style.background="#333333";
        }
	}
	// banner左侧
	//第一个选项卡
	var cza=$(".cza");
	var czxl=$(".cz-xl");
	for(var i=0;i<cza.length;i++){
		cza[i].index=i;
		cza[i].onmouseover=function(){
			for(var j=0;j<czxl.length;j++){
				czxl[j].style.display="none";
			}
			czxl[this.index].style.display="block";
		}
	}
	//第一个选项卡
	// 第二选项卡
	var rmpp=$(".rmpp");
	var tknkd=$(".tknkd");
	for(var i=0;i<rmpp.length;i++){
		rmpp[i].index=i;
		rmpp[i].onmouseover=function(){
			for(var j=0;j<tknkd.length;j++){
				tknkd[j].style.display="none";
			}
			tknkd[this.index].style.display="block";
		}
	}
	// 第二选项卡
    //小轮播
    function xlunbo(obj){
    	var box=obj;
	    var mpxlbk=$(".mpxlbk",obj)[0];
	    var mplxlbzh=$(".mpl-xlb-zh",obj)[0];
	    var mplxlbyh=$(".mpl-xlb-yh",obj)[0];
	    var mpxlbd=$(".mpxlbd",obj);
	    var xn=0;
	    var xnext=0;
	    var xw=parseInt(getStyle(mpxlbd[0],"width"));
	    // var xt=setInterval(xmove,2100);
	    function xmove(){
	    	xnext=xn+1;
	    	if(xnext>=mpxlbd.length){
	    		xnext=0;
	    	}
	    	mpxlbd[xnext].style.left=xw+"px";
	    	animate(mpxlbd[xn],{left:-xw},600);
	    	animate(mpxlbd[xnext],{left:0},600);
	    	xnext=xn;
	    }
	    function xmove1(){
	    	xnext=xn-1;
	    	if(xnext<0){
	    		xnext=mpxlbd.length-1;
	    	}
	    	mpxlbd[xnext].style.left=-xw+"px";
	    	animate(mpxlbd[xn],{left:xw},600);
	    	animate(mpxlbd[xnext],{left:0},600);
	    	xnext=xn;
	    }
	    mpxlbk.onmouseover=function(){
	    	// clearInterval(xt);
	    }
	    mpxlbk.onmouseout=function(){
	    	// xt=setInterval(xmove,2100);
	    }
	    mplxlbyh.onclick=function(){
	        xmove();
	    }
	    mplxlbzh.onclick=function(){
	        xmove1();
	    }
	} 
	var box=$(".mpl-x");
    for(var i=0;i<box.length;i++){
         xlunbo(box[i]);
  }    
    //小轮播
    // 大轮播
    function dalunbo(obj){
    	var box1=obj;
    	var mpdlb=$(".mp-dlb",obj)[0];
	    var mpdlbpt=$(".mpdlbpt",obj);
	    var mpdian=$(".mpdian",obj);
	    var mplbdzh=$(".mplbd-zh",obj)[0];
	    var mplbdyh=$(".mplbd-yh",obj)[0];
	    var yln=0;
	    var ylnext=0;
	    var ylwidth=parseInt(getStyle(mpdlbpt[0],"width"));
	    // var ylt=setInterval(ylmove,2200);
	    function ylmove(){
	        ylnext=yln+1;
	        if(ylnext>=mpdlbpt.length){
	            ylnext=0;
	        }
	        for(var i=0;i<mpdlbpt.length;i++){
	            mpdian[i].style.background="#3E3E3E";
	        }
	        mpdian[ylnext].style.background="#B61D1D";
	        mpdlbpt[ylnext].style.left=ylwidth+"px";
	        animate(mpdlbpt[yln],{left:-ylwidth},400);
	        animate(mpdlbpt[ylnext],{left:0},400);
	        yln=ylnext;
	    }
	    function ylmove1(){
	        ylnext=yln-1;
	        if(ylnext<0){
	            ylnext=mpdlbpt.length-1;
	        }
	        for(var i=0;i<mpdlbpt.length;i++){
	            mpdian[i].style.background="#3E3E3E";
	        }
	        mpdian[ylnext].style.background="#B61D1D";
	        mpdlbpt[ylnext].style.left=-ylwidth+"px";
	        animate(mpdlbpt[yln],{left:ylwidth},400);
	        animate(mpdlbpt[ylnext],{left:0},400);
	        yln=ylnext;
	    }
	    mpdlb.onmouseover=function(){
	        // clearInterval(ylt);
	        mplbdzh.style.display="block";
	        mplbdyh.style.display="block";
	    }
	    mpdlb.onmouseout=function(){
	        // ylt=setInterval(ylmove,2200);
	        mplbdzh.style.display="none";
	        mplbdyh.style.display="none";
	    }
	    mplbdzh.onclick=function(){
	        ylmove1();
	    }
	    mplbdyh.onclick=function(){
	        ylmove();
	    }
	    for(var i=0;i<mpdlbpt.length;i++){
	        mpdian[i].index=i;
	        mpdian[i].onmouseover=function(){
	            if(this.index==yln){
	                return;
	            }else if(this.index<yln){
	                for(i=0;i<mpdlbpt.length;i++){
	                    mpdian[i].style.background="#3E3E3E";
	                }
	                mpdian[this.index].style.background="#B61D1D";
	                mpdlbpt[this.index].style.left=-ylwidth+"px";
	                animate(mpdlbpt[yln],{left:ylwidth},400);
	                animate(mpdlbpt[this.index],{left:0},400);
	                yln=this.index;
	            }else if(this.index>yln){
	                for(i=0;i<mpdlbpt.length;i++){
	                    mpdian[i].style.background="#3E3E3E";
	                }
	                mpdian[this.index].style.background="#B61D1D";
	                mpdlbpt[this.index].style.left=ylwidth+"px";
	                animate(mpdlbpt[yln],{left:-ylwidth},400);
	                animate(mpdlbpt[this.index],{left:0},400);
	                yln=this.index;
	            }
	        }
	    } 
	}
	var box1=$(".ssmpbql");
    for(var i=0;i<box1.length;i++){
         dalunbo(box1[i]);
  } 
    // 大轮播





    // floor
    var floor=$(".floor");
	var box_mlk=$(".box_mlk")[0];
	var lis=$(".lctz");
	var cw=document.documentElement.clientWidth;//获得屏幕的宽
    var ch=document.documentElement.clientHeight; //获得屏幕的高
    var bh=box_mlk.offsetHeight; //获得旁边框的高
    // console.log(bh);
    box_mlk.style.top=(ch-bh)/2+"px"; //将旁边的框垂直居中    
    for(var i=0;i<lis.length;i++){
    	lis[i].index=i;
        lis[i].onclick=function(){
          // var dd=lis[this.index].getAttribute("aa");
          // lis[this.index].innerHTML=dd; 
    	  var obj=document.documentElement.scrollTop? document.documentElement:document.body;
          var top=floor[this.index].offsetTop-70; //楼距屏幕的高
          // obj.scrollTop=top; //超出屏幕的距离等于楼距屏幕的距离

          animate(obj,{scrollTop:top},200);
          
          
          for(var j=0;j<lis.length;j++){
          	lis[j].style.background="";//将所有格子显示白色
          	lis[j].innerHTML="";
          } 
          lis[this.index].style.background="#E5004F";//将当前格子显示粉红色
          var aa=lis[this.index].getAttribute("aa");
          lis[this.index].innerHTML=aa;
          lis[i].style.color="#fff";
          }
    }
   window.onscroll=function(){
      var obj=document.body.scrollTop?document.body:document.documentElement;

      for(var i=0;i<floor.length;i++){
        if(obj.scrollTop>=floor[i].offsetTop-ch){
          for(var j=0;j<lis.length;j++){
            lis[j].style.background=""//背景都为白色
            lis[j].innerHTML="";//字体颜色为灰色
          }
          lis[i].style.background="#E5004F";//当前颜色为粉色
          var aa=lis[i].getAttribute("aa");
          lis[i].innerHTML=aa;//当前字体颜色为白色
          lis[i].style.color="#fff";
        }
      }
      // 双开关
      var flag=true;
      var flag1=true;
      if(obj.scrollTop>=floor[0].offsetTop-ch){
        if(flag){
          flag=false;
          animate(box_mlk,{opacity:1},300,function(){
            flag1=true;
          });
        }
      
      }else{
        if(flag1){
          flag1=false;
          animate(box_mlk,{opacity:0},300,function(){
            flag=true;
          });
        }
        
      }
    }
})