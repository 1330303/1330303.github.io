(function(a){var t=a("#search-form-wrap"),e=false,n=200;var i=function(){e=true};var r=function(a){setTimeout(function(){e=false;a&&a()},n)};a(".nav-search-btn").on("click",function(){if(e)return;i();t.addClass("on");r(function(){a(".search-form-input").focus()})});a(".search-form-input").on("blur",function(){i();t.removeClass("on");r()});a("body").on("click",function(){a(".article-share-box.on").removeClass("on")}).on("click",".article-share-link",function(t){t.stopPropagation();var e=a(this),n=e.attr("data-url"),i=encodeURIComponent(n),r="article-share-box-"+e.attr("data-id"),s=e.attr("data-title"),o=e.offset();if(a("#"+r).length){var c=a("#"+r);if(c.hasClass("on")){c.removeClass("on");return}}else{var l=['<div id="'+r+'" class="article-share-box">','<input class="article-share-input" value="'+n+'">','<div class="article-share-links">','<a href="https://twitter.com/intent/tweet?text='+encodeURIComponent(s)+"&url="+i+'" class="article-share-twitter" target="_blank" title="Twitter"><span class="fa fa-twitter"></span></a>','<a href="https://www.facebook.com/sharer.php?u='+i+'" class="article-share-facebook" target="_blank" title="Facebook"><span class="fa fa-facebook"></span></a>','<a href="http://pinterest.com/pin/create/button/?url='+i+'" class="article-share-pinterest" target="_blank" title="Pinterest"><span class="fa fa-pinterest"></span></a>','<a href="https://www.linkedin.com/shareArticle?mini=true&url='+i+'" class="article-share-linkedin" target="_blank" title="LinkedIn"><span class="fa fa-linkedin"></span></a>',"</div>","</div>"].join("");var c=a(l);a("body").append(c)}a(".article-share-box.on").hide();c.css({top:o.top+25,left:o.left}).addClass("on")}).on("click",".article-share-box",function(a){a.stopPropagation()}).on("click",".article-share-box-input",function(){a(this).select()}).on("click",".article-share-box-link",function(a){a.preventDefault();a.stopPropagation();window.open(this.href,"article-share-box-window-"+Date.now(),"width=500,height=450")});a(".article-entry").each(function(t){a(this).find("img").each(function(){if(a(this).parent().hasClass("fancybox")||a(this).parent().is("a"))return;var t=this.alt;if(t)a(this).after('<span class="caption">'+t+"</span>");a(this).wrap('<a href="'+this.src+'" data-fancybox="gallery" data-caption="'+t+'"></a>')});a(this).find(".fancybox").each(function(){a(this).attr("rel","article"+t)})});if(a.fancybox){a(".fancybox").fancybox()}var s=a("#container"),o=false,c=200;var l=function(){o=true};var f=function(){setTimeout(function(){o=false},c)};a("#main-nav-toggle").on("click",function(){if(o)return;l();s.toggleClass("mobile-nav-on");f()});a("#wrap").on("click",function(){if(o||!s.hasClass("mobile-nav-on"))return;s.removeClass("mobile-nav-on")})})(jQuery);