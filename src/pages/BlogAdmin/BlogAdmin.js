import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';

import { blogActions } from '../../redux/actions/blog.actions';
import './style.css';
import { Button } from 'react-bootstrap';
const BlogAdmin = () => {
	const blogs = useSelector((state) => state.blog.blogList);
	const dispatch = useDispatch();
	useEffect(() => {
    dispatch(blogActions.getAllBlogs());
  }, [dispatch]);
	return (
		<div className="blog-detail-page d-flex flex-column align-items-center">
			<div className="p-3 w-100 container d-flex flex-column align-items-center">
				<table className="blog-table">
					<thead>
						<tr>
							<th>Title</th>
							<th>Author</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{blogs.map((item) => (
							<tr>
								<td>{item.title}</td>
								<td>{item.author}</td>
								<td>
									<div className="blog-table-buttons">
										<Link to={`/admin/blog/edit/${item.slug}`}>
											<FontAwesomeIcon icon={faEdit} />
										</Link>
										<Link>
											<FontAwesomeIcon icon={faTrashAlt} />
										</Link>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className="text-center">
					<Link to="/admin/blog/new">
						<Button variant="outline-secondary">New Post</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default BlogAdmin;
