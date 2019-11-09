function setNav (pageType)
{
	document.writeln("<!--导航栏-->");
	document.writeln("		<div class=\'fixed\'>");
	document.writeln("			<nav class=\'top-bar\' data-topbar>");
	document.writeln("				<ul class=\'title-area\'>");
	document.writeln("					<li class=\'name\'>");
	document.writeln("					<h1><a href=\'javascript:void(0);\'>API文档</a></h1>");
	document.writeln("					</li>");
	document.writeln("					<li class=\'toggle-topbar menu-icon\'><a href=\'javascript:void(0);\'><span></span></a></li>");
	document.writeln("				</ul>");
	document.writeln("				<section class=\'top-bar-section\'>");
	document.writeln("					<ul class=\'left\'>");
	if (pageType == "index")
	{
	document.writeln("					<li class=\'active\'><a href=\'index.html\'><i class=\'fi-home\'></i> 首页</a></li>");
	}
	else
	{
	document.writeln("					<li><a href=\'index.html\'><i class=\'fi-home\'></i> 首页</a></li>");
	}
	if (pageType == "FighterCtrler" || pageType == "FighterMcCtrler" || pageType == "FighterEffectCtrl" || pageType == "FighterVoiceCtrler" || pageType == "FighterBuffCtrler")
	{
	document.writeln("						<li class=\'active has-dropdown\'>");
	}
	else
	{
	document.writeln("						<li class=\'has-dropdown\'>");
	}
	document.writeln("							<a href=\'javascript:void(0);\'>人物控制器</a>");
	document.writeln("							<ul class=\'dropdown\'>");
	if (pageType == "FighterCtrler")
	{
	document.writeln("								<li class=\'active\'><a href=\'FighterCtrler.html\'>Fighter控制器</a></li>");
	}
	else
	{
	document.writeln("								<li><a href=\'FighterCtrler.html\'>Fighter控制器</a></li>");
	}
	if (pageType == "FighterMcCtrler")
	{
	document.writeln("								<li class=\'active\'><a href=\'FighterMcCtrler.html\'>Mc控制器</a></li>");
	}
	else
	{
	document.writeln("								<li><a href=\'FighterMcCtrler.html\'>Mc控制器</a></li>");
	}
	if (pageType == "FighterEffectCtrl")
	{
	document.writeln("								<li class=\'active\'><a href=\'FighterEffectCtrl.html\'>Effect控制器</a></li>");
	}
	else
	{
	document.writeln("								<li><a href=\'FighterEffectCtrl.html\'>Effect控制器</a></li>");
	}
	if (pageType == "FighterVoiceCtrler")
	{
	document.writeln("								<li class=\'active\'><a href=\'FighterVoiceCtrler.html\'>Voice控制器</a></li>");
	}
	else
	{
	document.writeln("								<li><a href=\'FighterVoiceCtrler.html\'>Voice控制器</a></li>");
	}
	if (pageType == "FighterBuffCtrler")
	{
	document.writeln("								<li class=\'active\'><a href=\'FighterBuffCtrler.html\'>Buff控制器</a></li>");
	}
	else
	{
	document.writeln("								<li><a href=\'FighterBuffCtrler.html\'>Buff控制器</a></li>");
	}
	document.writeln("							</ul>");
	document.writeln("						</li>");
	if (pageType == "FighterAttackerCtrler")
	{
	document.writeln("						<li class=\'active\'><a href=\'FighterAttackerCtrler.html\'>攻击对象控制器</a></li>");
	}
	else
	{
	document.writeln("						<li><a href=\'FighterAttackerCtrler.html\'>攻击对象控制器</a></li>");
	}
	if (pageType == "AssisiterCtrler")
	{
	document.writeln("						<li class=\'active\'><a href=\'AssisiterCtrler.html\'>辅助人物控制器</a></li>");
	}
	else
	{
	document.writeln("						<li><a href=\'AssisiterCtrler.html\'>辅助人物控制器</a></li>");
	}
	if (pageType == "FighterHitModel" || pageType == "HitVO")
	{
	document.writeln("						<li class=\'active has-dropdown\'>");
	}
	else
	{
	document.writeln("						<li class=\'has-dropdown\'>");
	}
	document.writeln("							<a href=\'javascript:void(0);\'>模型</a>");
	document.writeln("							<ul class=\'dropdown\'>");
	if (pageType == "FighterHitModel")
	{
	document.writeln("								<li class=\'active\'><a href=\'FighterHitModel.html\'>攻击模型</a></li>");
	}
	else
	{
	document.writeln("								<li><a href=\'FighterHitModel.html\'>攻击模型</a></li>");
	}
	if (pageType == "HitVO")
	{
	document.writeln("								<li class=\'active\'><a href=\'HitVO.html\'>攻击值对象</a></li>");
	}
	else
	{
	document.writeln("								<li><a href=\'HitVO.html\'>攻击值对象</a></li>");
	}
	document.writeln("							</ul>");
	document.writeln("						</li>");
	if (pageType == "Assister" || pageType == "FighterAction" || pageType == "FighterMain" || pageType == "FighterMC")
	{
	document.writeln("						<li class=\'active has-dropdown\'>");
	}
	else
	{
	document.writeln("						<li class=\'has-dropdown\'>");
	}
	document.writeln("							<a href=\'javascript:void(0);\'>人物杂项</a>");
	document.writeln("							<ul class=\'dropdown\'>");
	if (pageType == "Assister")
	{
	document.writeln("								<li class=\'active\'><a href=\'Assister.html\'>辅助人物对象</a></li>");
	}
	else
	{
	document.writeln("								<li><a href=\'Assister.html\'>辅助人物对象</a></li>");
	}
	if (pageType == "FighterAction")
	{
	document.writeln("								<li class=\'active\'><a href=\'FighterAction.html\'>人物活动</a></li>");
	}
	else
	{
	document.writeln("								<li><a href=\'FighterAction.html\'>人物活动</a></li>");
	}
	if (pageType == "FighterMain")
	{
	document.writeln("								<li class=\'active\'><a href=\'FighterMain.html\'>人物主体</a></li>");
	}
	else
	{
	document.writeln("								<li><a href=\'FighterMain.html\'>人物主体</a></li>");
	}
	if (pageType == "FighterMC")
	{
	document.writeln("								<li class=\'active\'><a href=\'FighterMC.html\'>人物MC</a></li>");
	}
	else
	{
	document.writeln("								<li><a href=\'FighterMC.html\'>人物MC</a></li>");
	}
	document.writeln("							</ul>");
	document.writeln("						</li>");
	document.writeln("					</ul>");
	document.writeln("					<ul class=\'right\'>");
	document.writeln("						<li><a href=\'javascript:void(0);\'></a></li>");
	document.writeln("						<li data-reveal-id=\'aboutModal\'><a href=\'javascript:void(0);\' class=\'button\'>关于本文档</a></li>");
	document.writeln("							<div id=\'aboutModal\' class=\'reveal-modal medium\' data-reveal>");
	document.writeln("								<h2>关于：</h2>");
	document.writeln("								<p>本站是由于站点制作者<b>氺</b>对于API文档用Word文档阅览不方便而设计的，<br />源码可以从Github获取到，您也可以Fork一份到自己的账号里进行折腾，<br />美工修改方面不做任何限制</p>");
	document.writeln("								<p>内容贡献者：<b>剑jian</b>、<b>小皮</b>、<b>氺</b></p>");
	document.writeln("								<p>Powered by <a href=\'https://jquery.com/\' target=\'_blank\'>jQuery</a> , <a href=\'https://foundation.zurb.com/\' target=\'_blank\'>Foundation</a> , <a href=\'https://hitokoto.cn/\' target=\'_blank\'>Hitokoto</a> , <a href=\'https://www.typora.io/\' target=\'_blank\'>Typora</a></p>");
	document.writeln("								<a class=\'close-reveal-modal\'>&times;</a>");
	document.writeln("							</div>");
	document.writeln("						<li><a href=\'../index.html\' class=\'button\'>回到主页</a></li>");
	document.writeln("						<li><a href=\'javascript:void(0);\' class=\'button\' onclick=\'toTop()\'>返回顶部</a></li>");
	document.writeln("					</ul>");
	document.writeln("				</section>");
	document.writeln("			</nav>");
	document.writeln("		</div>");
}

//获取一言，每30s重新获取
update();
setInterval(update,30000);
function update()
{
	var xhr = new XMLHttpRequest();
	xhr.open('get', 'https://v1.hitokoto.cn');
	xhr.onreadystatechange = function () 
	{
		if (xhr.readyState === 4 && xhr.status==200)
		{
			var data = JSON.parse(xhr.responseText);
			var hitokoto = document.getElementById('stc');
			hitokoto.innerText = "『 " + data.hitokoto + " 』" + "　 ——" + data.from;
		}
	}
	xhr.send();
}

//返回顶部按钮
function toTop()
{
	timer=setInterval(function()
	{
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		var ispeed=Math.floor(-scrollTop/10);
		console.log(ispeed)
		if(scrollTop==0){
			clearInterval(timer);
		}
		document.documentElement.scrollTop=document.body.scrollTop=scrollTop+ispeed;
	},30)
};