import request from "@/utils/request";

export function getXiaozhang() {
	return request({
		url: '/xiaozhang/index',
		method: 'get'
	})
}
