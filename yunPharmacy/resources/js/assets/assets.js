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