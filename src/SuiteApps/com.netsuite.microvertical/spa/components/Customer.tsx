import {ApplicationHeader, ContentPanel, Heading, StackPanel, Table, Pagination, Tab } from '@uif-js/component';
import {SystemIcon, Decorator, useState, useEffect} from '@uif-js/core';
import NetsuiteCalled from '../Services/FetchingNetsuiteData';


export default function Customer() { 
    const [customers, setCustomers] = useState([]);
    const [isLoader, setLoader] = useState(true);
    const [error, setError] = useState(null);
	const loader = {
        label: 'Loading...',
        visible: isLoader,
    };
    const rootStyle = {
        width: '100%',
        height: '100%',
    };
    useEffect(() => {
        // Fetch data when component mount
        async function loadData() {
            try {
                const data = await NetsuiteCalled.fetchCustomer();
                setCustomers(data);
                console.log('Customer data Micro Vertical TEST:', data);
            } catch (err) {
                setError(err.message);
                console.error('Error fetching data:', err);
            } finally {
                setLoader(false);
            }
        }
        
        loadData();
    }, []); // Empty dependency array means this runs once on mount

     const contentProps = (color) => ({
        outerGap: ContentPanel.GapSize.LARGE,
        decorator: Decorator.background({
            color, 
            strength: Decorator.Strength.STRONG,
        }),
    });

    return (
        <ContentPanel {...contentProps(Decorator.Color.WHITE)} loader={loader} rootStyle={rootStyle} >
            <StackPanel.Vertical >
              <StackPanel.Item>
                <ApplicationHeader title={'Customer'} icon={SystemIcon.PERSON} />
            </StackPanel.Item>
            <StackPanel.Item>
                <ContentPanel outerGap={ContentPanel.GapSize.LARGE} horizontalAlignment={ContentPanel.HorizontalAlignment.CENTER}>
                    <Heading type={Heading.Type.PAGE_SUBTITLE}>Here, you can see the customers!</Heading>
                </ContentPanel>
            </StackPanel.Item>
            {/* Display customer data when loaded */}
            {!error && customers.length > 0 && (
                <StackPanel.Item>
                    <ContentPanel {...contentProps(Decorator.Color.NEUTRAL)} loader={loader} rootStyle={rootStyle}>
                    <Table>
                            <Table.Caption>Customers</Table.Caption>
                            <Table.Header>
								<Table.Row>
									<Table.HeaderCell>ID</Table.HeaderCell>
									<Table.HeaderCell>NAME</Table.HeaderCell>
                                    <Table.HeaderCell>ACTIVE</Table.HeaderCell>
                                    <Table.HeaderCell>IS PERSON</Table.HeaderCell>
                                    <Table.HeaderCell>CURRENCY</Table.HeaderCell>
								</Table.Row>
							</Table.Header>
                            <Table.Body>
                                {customers.map((customer) => (
                                    <Table.Row>
                                    <Table.Cell>{customer?.id}</Table.Cell>
                                    <Table.Cell>{customer?.altname || customer?.companyname}</Table.Cell> 
                                    <Table.Cell>{customer?.isinactive}</Table.Cell>
                                    <Table.Cell>{customer?.isperson}</Table.Cell>
                                    <Table.Cell>{customer?.currency}</Table.Cell>
                                    </Table.Row>
                                ))}
                                
                            </Table.Body>
                        </Table>
                         
                    </ContentPanel>
                    </StackPanel.Item>
            )}
            <StackPanel.Item >
                <ContentPanel outerGap={ContentPanel.GapSize.LARGE} horizontalAlignment={ContentPanel.HorizontalAlignment.CENTER}>
                <Pagination pages={customers.length < 10 ? 1: customers.length}  />
                 </ContentPanel>
                
            </StackPanel.Item>
        </StackPanel.Vertical>
            </ContentPanel>
        
    );
}

