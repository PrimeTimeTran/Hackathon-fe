import Interweave from 'interweave';
import { HashtagMatcher, UrlMatcher } from 'interweave-autolink';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { blogActions } from '../../redux/actions/blog.actions';
import './style.css';

const BlogDetail = () => {
	const { t } = useTranslation();
	const { slug } = useParams();
	const selectedBlog = useSelector((state) => state.blog.selectedBlog);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(blogActions.getSingleBlog({ slug }));
	}, [slug, dispatch]);
	return (
		<div className="blog-detail-page d-flex flex-column align-items-center">
			<div className="bg-white blog-post my-3">
				<div className="blog-card-photo p-0">
					<img src={selectedBlog.cover_photo} alt="cover" />
				</div>
				<div className="p-4">
					<div className="blog-post-title-wrapper">
						<div className="blog-post-title">{selectedBlog.title}</div>
					</div>
					<div className="text-center">
						{t('written_by')} <i>{selectedBlog.author}</i> {t('at_time').toLowerCase()} {moment(selectedBlog.createdAt).format('DD-MM-yyyy')}
					</div>
					<div className="mt-3 blog-body">
						<Interweave content={selectedBlog.body} matchers={[new UrlMatcher('url'), new HashtagMatcher('hashtag')]} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogDetail;
