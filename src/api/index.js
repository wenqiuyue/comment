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