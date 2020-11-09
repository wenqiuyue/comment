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
  return fetchPost('/Controller/QueryCommentInfo.ashx',data)
};
/**
 * 首页热门分类
 */
export function getQueryHotType () {
  return fetchPost('/Controller/QueryHotType.ashx')
};
/**
 * 搜索
 */
export function querySearch (data) {
  return fetchPost('/Controller/QuerySearch.ashx',data)
};
/**
 * 点赞
 */
export function fabulous (data) {
  return fetchPost('/Controller/Fabulous.ashx',data)
};
/**
 * 投票
 */
export function vote (data) {
  return fetchPost('/Controller/Vote',data)
};