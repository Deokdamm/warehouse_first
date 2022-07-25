import request from '@/utils/request'

export function getAdmins(params){
	return request({
		url:'/admin/index',
		method:'get',
		params
	})
}

export function add(data){
	return request({
		url:'/admin/add',
		method:'post',
		data
	})
}

export function update(data){
	return request({
		url:'/admin/update',
		method:'post',
		data
	})
}

export function del(data){
	return request({
		url:'/admin/del',
		method:'post',
		data
	})
}
