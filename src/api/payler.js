import request from "@/utils/request";

//获取选手名单
export function index(data) {
  return request({
    url: "/payler/index",
    method: "post",
	data
  });
}

//新增 
export function addpayler(data) {
  return request({
    url: "/payler/addpayler",
    method: "post",
    data,
  });
}

// 编辑
export function updatapayler(data) {
  return request({
    url: "/payler/addpayler",
    method: "post",
    data,
  });
}


//删除
export function deletepayler(data) {
	return request({
		url: '/payler/deletepayler',
		method: 'post',
		data
	})

}

