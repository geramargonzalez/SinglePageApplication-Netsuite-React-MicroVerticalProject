import {ApplicationHeader, ContentPanel, Heading, StackPanel } from '@uif-js/component';
import {SystemIcon} from '@uif-js/core';


export default function Transaction() {

    return (
        <StackPanel.Vertical>
            <StackPanel.Item>
                <ApplicationHeader title={'Transaction'} icon={SystemIcon.MONEY} />
            </StackPanel.Item>
            <StackPanel.Item>
                <ContentPanel outerGap={ContentPanel.GapSize.LARGE}>
                    <Heading type={Heading.Type.MEDIUM_HEADING}>Transaction Page is under construction</Heading>
                </ContentPanel>
            </StackPanel.Item>
        </StackPanel.Vertical>
    );
}