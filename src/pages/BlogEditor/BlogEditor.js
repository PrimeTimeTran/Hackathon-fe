import moment from 'moment';
import React, { useEffect } from 'react';
import { useMemo } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './style.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { blogActions } from '../../redux/actions/blog.actions';
import { useTranslation } from 'react-i18next';

const BlogEditor = ({ createNew }) => {
	const { slug } = useParams();
	const { t } = useTranslation();
	const title = useSelector((state) => state.blog.selectedBlog.title);
	const author = useSelector((state) => state.blog.selectedBlog.author);
	const body = useSelector((state) => state.blog.selectedBlog.body);
	const blog = useSelector((state) => state.blog.selectedBlog);
	const cover_photo = useSelector((state) => state.blog.selectedBlog.cover_photo);
	const quillRef = React.useRef(null);
	const dispatch = useDispatch();
	const addCover = () => {
		window.cloudinary.openUploadWidget({ cloudName: 'wotv', uploadPreset: 'CS-hackathon', sources: ['local', 'url'], multiple: false }, (error, result) => {
			if (result.event === 'success') {
				console.log(result);
				changeValue('cover_photo', result.info.secure_url);
			}
		});
	};
	const imageHandler = () => {
		window.cloudinary.openUploadWidget(
			{
				cloudName: 'wotv',
				uploadPreset: 'CS-hackathon',
				sources: ['local', 'url'],
				multiple: false,
				maxImageWidth: 800,
				maxImageHeight: 800,
				clientAllowedFormats: ['png', 'jpeg', 'jpg', 'gif', 'webp'],
			},
			(error, result) => {
				if (result.event === 'success') {
					const link = result.info.secure_url;
					const quill = quillRef.current.getEditor();
					const range = quill.getSelection(true);
					quill.insertEmbed(range.index, 'image', link);
					quill.setSelection(range.index + 1);
				}
			}
		);
	};
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
	const handleSubmit = () => {
		if (!createNew) {
			dispatch(blogActions.updateBlog({ slug, blog }));
		} else {
			dispatch(blogActions.createBlog(blog));
		}
	};
	const changeValue = (field, value) => {
		dispatch(blogActions.changeBlogValue({ field, value }));
	};
	const modules = useMemo(
		() => ({
			toolbar: {
				container: [[{ header: [1, 2, 3, 4, 5, 6, false] }], ['bold', 'italic', 'underline'], [{ list: 'ordered' }, { list: 'bullet' }], [{ align: [] }], ['link', 'image'], [{ color: [] }]],
				handlers: {
					image: imageHandler,
				},
			},
		}),
		[]
	);
	useEffect(() => {
		if (slug) {
			dispatch(blogActions.getSingleBlog({ slug }));
		}
	}, [slug, dispatch]);
	return (
		<div className="blog-page p-3">
			<div className="d-flex flex-column align-items-center">
				<div className="blog-card-title-wrapper d-flex justify-content-center" style={{ maxWidth: 400 }}>
					<div className="blog-card-title">{createNew ? 'Create' : 'Edit'} Post</div>
				</div>
				<div className="bg-white w-100 p-3 blog-editor" style={{ maxWidth: 1100 }}>
					<div className="blog-input-group row row-cols-md-2">
						<div>
							<div className="blog-input-title">Title</div>
							<input onChange={(e) => changeValue('title', e.target.value)} defaultValue={blog.title} />
						</div>
						<div>
							<div className="blog-input-title">Author</div>
							<input onChange={(e) => changeValue('author', e.target.value)} defaultValue={blog.author} />
						</div>
						<div>
							<div className="blog-input-title">Slug</div>
							<input onChange={(e) => changeValue('slug', e.target.value)} defaultValue={blog.slug} />
						</div>

						<div className="d-flex flex-column justify-content-end mt-3">
							{/* <div className="blog-input-title">Cover Image</div> */}
							<div>
								<Button variant="outline-success" onClick={addCover}>
									Upload Cover Image
								</Button>
							</div>
						</div>
					</div>
					<div className="blog-input-title">Body Text</div>
					{blog.body || !slug ? <ReactQuill ref={quillRef} modules={modules} defaultValue={blog.body} onChange={(value) => changeValue('body', value)} /> : null}

					<div style={{ textAlign: 'end' }} className="mt-2">
						<Button variant="outline-secondary" onClick={handleSubmit}>
							{createNew ? 'Create' : 'Save'}
						</Button>
					</div>
				</div>
			</div>
			<div className="d-flex flex-column align-items-center">
				<div className="blog-card-title-wrapper d-flex justify-content-center" style={{ maxWidth: 400 }}>
					<div className="blog-card-title">Preview</div>
				</div>
				<div className="blog-cards d-flex flex-column align-items-center w-100">
					<Row className="blog-card m-0 w-100">
						<Col xl={7} className="blog-card-photo p-0">
							<img src={cover_photo || 'https://vnpi-hcm.vn/wp-content/uploads/2018/01/no-image-800x600.png'} alt="demo" />
						</Col>
						<Col xl={5} className="blog-card-text">
							<div className="blog-card-title-wrapper d-flex justify-content-center">
								<div className="blog-card-title">{title || 'Title of the Post'}</div>
							</div>
							<div className="blog-card-credit">
								{t('written_by')} <i>{author || 'Unknown'}</i> {t('at_time').toLowerCase()} {blog.createdAt || moment(Date.now()).format('DD-MM-yyyy')}
							</div>
							<div>❤️</div>
							<div className="blog-card-content">{stripTag(body) ? truncate(stripTag(body), 25) : 'Excerpt of the post'}</div>
							<div className="blog-card-read-more">
								<span>{t('read_more')}</span>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</div>
	);
};

export default BlogEditor;
