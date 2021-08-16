import api from '../../apiService';
import * as types from '../constants/blog.constants';
import { routeActions } from './route.actions';

const getAllBlogs =
	(page = 1, limit = 5) =>
	async (dispatch) => {
		dispatch({ type: types.GET_BLOGS_REQUEST, payload: null });
		try {
			let url = `/blog?page=${page}&limit=${limit}`;
			const res = await api.get(url);
			dispatch({ type: types.GET_BLOGS_SUCCESS, payload: res.data.data.blogs });
		} catch (error) {
			dispatch({ type: types.GET_BLOGS_FAILURE, payload: error });
		}
	};
const createBlog = (blog) => async (dispatch) => {
	dispatch({ type: types.CREATE_SINGLE_BLOG_REQUEST, payload: null });
	try {
		let url = `/blog`;
		const res = await api.post(url, blog);
		dispatch({ type: types.CREATE_SINGLE_BLOG_SUCCESS, payload: res.data });
	} catch (error) {
		dispatch({ type: types.CREATE_SINGLE_BLOG_FAILURE, payload: error });
	}
};

const updateBlog =
	({ blog, slug }) =>
	async (dispatch) => {
		dispatch({ type: types.UPDATE_SINGLE_BLOG_REQUEST, payload: null });
		try {
			let url = `/blog/${slug}`;
			const res = await api.put(url, blog);
			dispatch({ type: types.UPDATE_SINGLE_BLOG_SUCCESS, payload: res.data });
		} catch (error) {
			dispatch({ type: types.UPDATE_SINGLE_BLOG_FAILURE, payload: error });
		}
	};

const getSingleBlog =
	({ slug }) =>
	async (dispatch) => {
		dispatch({ type: types.GET_SINGLE_BLOG_REQUEST, payload: null });
		try {
			let url = `/blog/${slug}`;
			const res = await api.get(url);
			dispatch({ type: types.GET_SINGLE_BLOG_SUCCESS, payload: res.data.data });
		} catch (error) {
			dispatch(routeActions.redirectTo('/404'));
			dispatch({ type: types.GET_SINGLE_BLOG_FAILURE, payload: error });
		}
	};
const changeBlogValue =
	({ field, value }) =>
	async (dispatch) => {
		dispatch({ type: types.EDIT_SINGLE_BLOG_FIELD, payload: { field, value } });
	};
export const blogActions = { getAllBlogs, createBlog, getSingleBlog, updateBlog, changeBlogValue };
