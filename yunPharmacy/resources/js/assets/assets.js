//类别
var classifications={"class1":"处方药","class2":"非方药","class3":"保健品"};
//类别详情
var	classificationList=
	{
	"处方药":{
		"名称1":{"spec":"规格","indication":"适应症","usage":"用法用量","manufacturers":["生产厂家1","生产厂家2"],"dosage":"剂型","image":"处方药1.jpg","treatment":"参与治疗","label":["标签1","标签2"],"diseases":["相关疾病1","相关疾病2"]},
		"名称2":{"spec":"规格","indication":"适应症","usage":"用法用量","manufacturers":["生产厂家1","生产厂家2"],"dosage":"剂型","image":"处方药2.jpg","treatment":"参与治疗","label":["标签1","标签2"],"diseases":["相关疾病1","相关疾病2"]}
		}
	};
//相关疾病列表
var diseasesList=
	{
	"相关疾病1":{"dialogue":"对话数量","msg":"信息","description":"病情描述","reply":"医生回复","date":"时间字符串"},
	"相关疾病2":{"dialogue":"对话数量","msg":"信息","description":"病情描述","reply":"医生回复","date":"时间字符串"}
	};
//文章
var articleList=["文章1","文章2"];
//获取某一类别的药品列表
function getDrugsList(classification)
{
	if(classification)
	{
		classificationName = classifications[classification];
		if(classificationName)
		{
			return classificationList[classificationName];
		}
	}
	return null;
}
//获取药品详情
function getDrugsDetail(classification,deugsName)
{ 
	var _classification = getDrugsList(classification);
	if(_classification&&deugsName)
	{
		return _classification[deugsName];
	}
	else
	{
		return null;
	}
}
//获取根路径
function getRootUrl()
{
	var href = window.location.href;
	var idx = href.indexOf("?");
	if(idx)
	{
		return href.substring(0,idx);
	}
	return href;
}
function reBuildUrl(params)
{
	var name;
	for(var tempname in params)
	{
		name = tempname;
		break;
	}
	var value = params[name];
	var oldValue = getUrlParam(name);
	var href = window.location.href;
	if(oldValue)
	{
		href = href.replace(name+"="+oldValue,name+"="+value);
	}
	else
	{
		var idx = href.indexOf("?");
		if(idx>0)
		{
			href = href+"&"+name+"="+value;
		}
		else
		{
			href = href+"?"+name+"="+value;
		}
	}
	return href;
}
//获取参数
function getUrlParams()
{
	var href = window.location.href;
	var idx = href.indexOf("?");
	var result;
	if(idx>0)
	{
		var params = href.substring(idx+1);
		if(params)
		{
			result={};
			var paramArray = params.split("&");
			for(var i = 0;i<paramArray.length;i++)
			{
				var paramKV = paramArray[i];
				var paramArray = paramKV.split("=");
				var name = paramArray[0];
				var value = paramArray[1];
				result[name] = value;
			}
			return result;
		}
	}
	return {};
}
//获取某一个参数值
function getUrlParam(name) {
    //构造一个含有目标参数的正则表达式对象
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); 
    //匹配目标参数
    var r = window.location.search.substr(1).match(reg);
    //返回参数值
    if (r != null) return unescape(r[2]);
    //不存在时返回null
    return null; 
}
//点击页面
function clickHeadButton(cls)
{
	window.location.href="classification.html?class="+cls;
}
//翻页点击
function aClick(param)
{
	var page=param;
	if(param ==="page1")
	{
		//向后翻页
		page = getUrlParam("page");
		if(page)
		{
			var intpage=Number(page);
			if(intpage<2)
			{
				intpage++;
			}
			page=intpage+"";
		}
		else{
			page = "1";
		}
	}
	if(param ==="page_1")
	{
		//向前翻页
		page = getUrlParam("page");
		if(page)
		{
			var intpage=Number(page);
			if(intpage>1)
			{
				intpage--;
			}
			page=intpage+"";
		}
		else{
			page = "1";
		}
	}
	var params={"page":page};
	window.location.href = reBuildUrl(params);
}