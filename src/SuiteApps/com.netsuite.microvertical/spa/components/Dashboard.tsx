import {ApplicationHeader, ContentPanel, Heading, StackPanel } from '@uif-js/component';
import {SystemIcon} from '@uif-js/core';


export default function Dashboard({records}) {

    return (
        <StackPanel.Vertical>
            <StackPanel.Item>
                <ApplicationHeader title={'Home'} icon={SystemIcon.HOME} />
            </StackPanel.Item>
            <StackPanel.Item>
                <ContentPanel outerGap={ContentPanel.GapSize.LARGE}>
                    <Heading type={Heading.Type.MEDIUM_HEADING}>Welcome to Micro Vertical!</Heading>
                </ContentPanel>
            </StackPanel.Item>
         
        </StackPanel.Vertical>
    );
}