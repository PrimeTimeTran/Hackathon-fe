import * as types from '../constants/blog.constants';

const initialState = {
	selectedBlog: {},
	blogList: [],
	loading: false,
};

const blogsReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case types.CREATE_SINGLE_BLOG_REQUEST:
		case types.GET_SINGLE_BLOG_REQUEST:
		case types.GET_BLOGS_REQUEST:
			return { ...state, loading: true };
		case types.GET_BLOGS_SUCCESS:
			return { ...state, loading: false, blogList: payload };
		case types.GET_SINGLE_BLOG_SUCCESS:
			return { ...state, loading: false, selectedBlog: payload };
		case types.CREATE_SINGLE_BLOG_SUCCESS:
			return { ...state, loading: false };
		case types.EDIT_SINGLE_BLOG_FIELD:
			const newData = state.selectedBlog;
			newData[payload.field] = payload.value;
			return { ...state, selectedBlog: newData };
		case types.GET_SINGLE_BLOG_FAILURE:
		case types.CREATE_SINGLE_BLOG_FAILURE:
		case types.GET_BLOGS_FAILURE:
			return { ...state, loading: false };
		default:
			return state;
	}
};

export default blogsReducer;
