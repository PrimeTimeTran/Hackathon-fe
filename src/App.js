import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FundingPage from './pages/FundingPage';
import FundRequestDetailPage from '../src/pages/FundRequestDetailPage/FundRequestDetailPage';
import Navbar from './components/Navbar';
import Blog from './pages/Blog/Blog';
import BlogEditor from './pages/BlogEditor/BlogEditor';
import BlogDetail from './pages/BlogDetail/BlogDetail';
import NotFound from './pages/NotFound/NotFound';
import { useDispatch, useSelector } from 'react-redux';
import { routeActions } from './redux/actions/route.actions';
import BlogAdmin from './pages/BlogAdmin/BlogAdmin';

function App() {
	const history = useHistory();
	const redirect = useSelector((state) => state.route.redirectTo);
	const dispatch = useDispatch();
	useEffect(() => {
		if (redirect) {
			history.push(redirect);
			dispatch(routeActions.removeRedirectTo);
		}
	}, [redirect]);
	return (
		<div className="App">
			<Navbar />
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/about" exact component={AboutPage} />
				<Route path="/funding" exact component={FundingPage} />
				<Route path="/blog" exact component={Blog} />
				<Route path="/blog/:slug" exact component={BlogDetail} />
				<Route path="/admin/blog" exact component={BlogAdmin} />
				<Route path="/admin/blog/edit/:slug" exact component={BlogEditor} />
				<Route path="/admin/blog/new" exact>
					<BlogEditor createNew={true} />
				</Route>
				<Route path="/fundRequestDetailPage" exact component={FundRequestDetailPage} />
				<Route path="*" component={NotFound} />
			</Switch>
		</div>
	);
}

export default App;
