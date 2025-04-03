import {Router, Store, useMemo, useState} from '@uif-js/core';
import {StackPanel} from '@uif-js/component';
import reducer from './app/Reducer';
import initialState from './app/InitialState';
import {RootRoute} from './app/AppRoute';
import Dashboard from './components/Dashboard';
import Navigation from './components/Navigation';
import NotFoundPage from './components/NotFoundPage';
import Customer from './components/Customer';
import Transaction from './components/Transaction';

export default function MicroVerticalApp() {
	// Setup state management - in this case it only statically stores the countries data
	const [state, setState] = useState(initialState);
	const store = useMemo(() => {
		return Store.create({
			reducer,
			state: initialState,
			onStateChanged: ({currentState}) => setState(currentState),
		});
	});

	const {records} = state;

	return (
		<Router.Hash>
			{/* Setup router */}
			<Store.Provider store={store}>
				{/* Setup store*/}
				<StackPanel>
					<StackPanel.Item shrink={0}>
						<Navigation />
					</StackPanel.Item>
					<StackPanel.Item grow={1}>
						<Router.Routes>
							<Router.Route path={RootRoute.DASHBOARD} exact={true}>
								<Dashboard records={records} />
							</Router.Route>
							<Router.Route path={RootRoute.CUSTOMER} exact={true}>
								<Customer />
							</Router.Route>
							<Router.Route path={RootRoute.TRANSACTION} exact={true}>
								<Transaction />
							</Router.Route>
							<Router.Route path={RootRoute.OTHERS} exact={true}>
								<NotFoundPage />
							</Router.Route>
						</Router.Routes>
					</StackPanel.Item>
				</StackPanel>
			</Store.Provider>
		</Router.Hash>
	);
}
