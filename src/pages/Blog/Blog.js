import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { blogActions } from '../../redux/actions/blog.actions';
import './style.css';

const Blog = () => {
	const blogs = useSelector((state) => state.blog.blogList);
	const dispatch = useDispatch();
	const stripTag = (str) => {
		if (!str) return null;
		return str.replace(/(<([^>]+)>)/gi, '');
	};
	const truncate = (str, num) => {
		if (!str) return null;
		const strSplits = str.replace(/\s+/g, ' ').split(/(?=\s)/gi);
		if (strSplits.length <= num) return str;
		return strSplits.slice(0, num).join('') + '...';
	};
	useEffect(() => {
		dispatch(blogActions.getAllBlogs());
	}, []);
	return (
		<div className="blog-page">
			<div className="blog-banner">
				<div className="blog-banner-wrapper">
					<div className="blog-banner-text">TẠP CHÍ YÊU THƯƠNG</div>
					<div className="blog-banner-divider"></div>
					<div className="blog-banner-subtext">Nơi điều kỳ diệu bắt đầu</div>
				</div>
			</div>
			<Container className="blog-cards d-flex flex-column align-items-center">
				{blogs.map((item, index) => (
					<Row className={`blog-card ${index % 2 ? 'flex-row-reverse' : ''}`}>
						<Col xl={7} className="blog-card-photo p-0">
							<img src={item.cover_photo} alt={''} />
						</Col>
						<Col xl={5} className="blog-card-text">
							<div className="blog-card-title-wrapper d-flex justify-content-center">
								<div className="blog-card-title">{item.title}</div>
							</div>
							<div className="blog-card-credit">
								Viết bởi <i>{item.author}</i> vào {item.createdAt}
							</div>
							<div>❤️</div>
							<div className="blog-card-content">{truncate(stripTag(item.body), 25)}</div>
							<div className="blog-card-read-more">
								<Link to={`/blog/${item.slug}`}>
									<span>Đọc thêm</span>
								</Link>
							</div>
						</Col>
					</Row>
				))}
			</Container>
		</div>
	);
};

export default Blog;
