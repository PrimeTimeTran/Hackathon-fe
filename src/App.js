import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import './css/form.css';
import HomePage from './pages/HomePage';
import Header from './components/Header/Header';
import Blog from './pages/Blog/Blog';
import BlogEditor from './pages/BlogEditor/BlogEditor';
import BlogDetail from './pages/BlogDetail/BlogDetail';
import NotFound from './pages/NotFound/NotFound';
import { useDispatch, useSelector } from 'react-redux';
import { routeActions } from './redux/actions/route.actions';
import BlogAdmin from './pages/BlogAdmin/BlogAdmin';
import AboutPage from './pages/AboutPage/AboutPage';
import FundingPage from './pages/FundingPage';
import FundRequestDetailPage from '../src/pages/FundRequestDetailPage/FundRequestDetailPage';
import NewHomePage from './pages/NewHomePage/NewHomePage';
import NewFooter from './components/NewFooter/NewFooter';

function App() {
	const history = useHistory();
	const redirect = useSelector((state) => state.route.redirectTo);
	const dispatch = useDispatch();
	useEffect(() => {
    if (redirect) {
      history.push(redirect);
      dispatch(routeActions.removeRedirectTo);
    }
  }, [redirect, dispatch, history]);
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route path="/" exact component={NewHomePage} />
				<Route path="/about" exact component={AboutPage} />
				<Route path="/funding" exact component={FundingPage} />
				<Route path="/newHomePage" exact component={NewHomePage} />
				<Route path="/blog" exact component={Blog} />
				<Route path="/blog/:slug" exact component={BlogDetail} />
				<Route path="/admin/blog" exact component={BlogAdmin} />
				<Route path="/admin/blog/edit/:slug" exact component={BlogEditor} />
				<Route path="/admin/blog/new" exact>
					<BlogEditor createNew={true} />
				</Route>
				<Route path="/map" exact component={HomePage} />
				<Route path="/fundRequestDetailPage" exact component={FundRequestDetailPage} />
				<Route path="*" component={NotFound} />
			</Switch>
			<NewFooter />
		</div>
	);
}

export default App;
