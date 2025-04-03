import {NavigationDrawer} from '@uif-js/component';
import NavigationItem from '../app/NavigationItem';
import {ContextType, SystemIcon, useContext} from '@uif-js/core';
import {RootRoute} from '../app/AppRoute';


export default function Navigation() {
	// Get the router information
	const location = useContext(ContextType.ROUTER_LOCATION);
	// Return NavigationDrawer whose items route to given routes
	return (
		<NavigationDrawer selectedValue={getCurrentNavigationItem(location)}>
			<NavigationDrawer.Item
				value={NavigationItem.DASHBOARD}
				icon={SystemIcon.HOME}
				label={'Dashboard'}
				route={RootRoute.DASHBOARD}
			/>
			<NavigationDrawer.Item
				value={NavigationItem.CUSTOMER}
				icon={SystemIcon.PERSON}
				label={'Customer'}
				route={RootRoute.CUSTOMER}
			/>
			<NavigationDrawer.Item
				value={NavigationItem.TRANSACTION}
				icon={SystemIcon.MONEY}
				label={'Transaction'}
				route={RootRoute.TRANSACTION}
			/>

			<NavigationDrawer.Item
				value={NavigationItem.INVENTORY}
				icon={SystemIcon.AVAILABLE}
				label={'Inventory'}
				route={RootRoute.INVENTORY}
			/>
		</NavigationDrawer>
	);
}

// Function that maps current route to NavigationDrawer.Item
const getCurrentNavigationItem = (location) => {
	for (const [route, navigationItem] of Object.entries(RouteToNavigationItem)) {
		if (location.matches(route, {exact: route !== RootRoute.OTHERS})) {
			return navigationItem;
		}
	}
	return null;
};

// Mapping of routes to NavigationDrawer.Item values
const RouteToNavigationItem = {
	[RootRoute.DASHBOARD]: NavigationItem.DASHBOARD,
};
