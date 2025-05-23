import {ContentPanel, Heading, Link, StackPanel} from '@uif-js/component';
import {RootRoute} from '../app/AppRoute';

export default function NotFoundPage() {
	return (
		<StackPanel.Vertical alignment={StackPanel.Alignment.CENTER} outerGap={ContentPanel.GapSize.LARGE}>
			<StackPanel.Item>
				<Heading type={Heading.Type.MEDIUM_HEADING}>This page does not exist...</Heading>
			</StackPanel.Item>
			<StackPanel.Item>
				<Link route={{route: RootRoute.DASHBOARD}}>Go back to Dashboard</Link>
			</StackPanel.Item>
		</StackPanel.Vertical>
	);
}
