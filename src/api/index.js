import { fetchGet,fetchPost } from '../utils/request.js'

/**
 * 获取一个项目
 */
export function getAllRecentFilms (data) {
  return fetchPost('/project/projectInformation.ashx',data)
};
export function getAllRecentFilmsGet (data) {
  return fetchGet('/work/Directories/directoreisLoad.ashx',data)
}

/**
 * 首页热门评论
 */
export function getQueryCommentInfo (data) {
  return fetchPost('/Controller/QueryCommentInfo',data)
};
/**
 * 首页热门分类
 */
export function getQueryHotType () {
  return fetchGet('/api/HotType/QueryHotType')
};
/**
 * 搜索
 */
export function querySearch (data) {
  return fetchGet('/api/HotType/Seach',data)
};
/**
 * 点赞
 */
export function fabulous (data) {
  return fetchPost('/Controller/Fabulous',data)
};
/**
 * 投票
 */
export function vote (data) {
  return fetchPost('/Controller/Vote',data)
};
/**
 * 发布评论
 */
export function postSubject (data) {
  return fetchPost('/Controller/PostSubject',data)
};
/**
 * 产品详情
 */
export function getProcessDetails (data) {
  return fetchPost('/Controller/ProcessDetails',data)
};