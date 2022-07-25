import request from '@/utils/request'

export function getStudent(data){
	return request({
		url:'/student/index',
		method:'post',
		data
	})
}
