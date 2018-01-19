function zds(json){
	if(json instanceof Object && !(json instanceof Array)){
		let str = "";
		for(let key in json){
			str += key+"="+json[key]+"&";
		}
		str = str.slice(0,-1);
		return str;
	}else{
		//console.log("zds期待一个对象作为参数！！！");
		throw "typeError: zds function expects an Object as param";
		return ;
	}
		
}
//console.log(formatUrl({"name":"zhangsan","age":18}));
export default{
	zds: zds
}
