import axios from 'axios'

export function request(config){
  const instance=axios.create({
    baseURL: '/api/w6',
    timeout: 5000
  })

  //2.1请求拦截
  instance.interceptors.request.use(config => {
    //console.log(config)
    // 在发送请求之前做些什么
    return config
  }, err => {
    // 对请求错误做些什么
    //console.log(err)
  });

  //2.2响应拦截
  instance.interceptors.response.use(res => {
    // 对响应数据做点什么
    return res.data
  }, err => {
    // 对响应错误做点什么
    console.log(err)
  });

  return instance(config)
}
