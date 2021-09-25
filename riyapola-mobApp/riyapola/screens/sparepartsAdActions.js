import * as React from 'react';
import { View } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { Button, Checkbox, DataTable, Headline } from 'react-native-paper';
import AdminTabs from '../shared/AdminTabs';

const optionsPerPage = [2, 3, 4];

const sparepartsAdActions = ({ navigation }) => {
    const [page, setPage] = React.useState(0);
    const [approved, setApproved] = React.useState({
        "0": "unchecked",
        "1": "unchecked",
        "2": "checked",
        "3": "checked"
    });
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    return (
        <View>
            <AdminTabs navigation={navigation} pageIndex={1} />
            <Headline style={{fontSize: 16,alignSelf: 'center',fontWeight: 'bold',padding: 20}}>Approve/Reject Spareparts Advertisements</Headline>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Approved</DataTable.Title>
                    <DataTable.Title>Ad Title</DataTable.Title>
                    <DataTable.Title>Date</DataTable.Title>
                    <DataTable.Title>Actions</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell><Checkbox status={approved[0]} color='#076AE0' key={0} onPress={(e) => setApproved({ ...approved, "0": approved[0] == "checked" ? "unchecked" : "checked" })} /></DataTable.Cell>
                    <DataTable.Cell>Engine For Sale</DataTable.Cell>
                    <DataTable.Cell>13/09/2021</DataTable.Cell>
                    <DataTable.Cell><Icon name='check-circle' color='#076AE0' size={30} /><Icon name='remove-circle' color='red' size={30} /><Icon name='info' size={30} /></DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell><Checkbox status={approved[1]} color='#076AE0' key={1} onPress={(e) => setApproved({ ...approved, "1": approved[1] == "checked" ? "unchecked" : "checked" })} /></DataTable.Cell>
                    <DataTable.Cell>JBL Radio</DataTable.Cell>
                    <DataTable.Cell>12/09/2021</DataTable.Cell>
                    <DataTable.Cell><Icon name='check-circle' color='#076AE0' size={30} /><Icon name='remove-circle' color='red' size={30} /><Icon name='info' size={30} /></DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell><Checkbox status={approved[2]} color='#076AE0' key={2} onPress={(e) => setApproved({ ...approved, "2": approved[2] == "checked" ? "unchecked" : "checked" })} /></DataTable.Cell>
                    <DataTable.Cell>Used Alto Door</DataTable.Cell>
                    <DataTable.Cell>13/09/2021</DataTable.Cell>
                    <DataTable.Cell><Icon name='check-circle' color='#076AE0' size={30} /><Icon name='remove-circle' color='red' size={30} /><Icon name='info' size={30} /></DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell><Checkbox status={approved[3]} color='#076AE0' key={3} onPress={(e) => setApproved({ ...approved, "3": approved[3] == "checked" ? "unchecked" : "checked" })} /></DataTable.Cell>
                    <DataTable.Cell>Ball Joint</DataTable.Cell>
                    <DataTable.Cell>25/08/2021</DataTable.Cell>
                    <DataTable.Cell><Icon name='check-circle' color='#076AE0' size={30} /><Icon name='remove-circle' color='red' size={30} /><Icon name='info' size={30} /></DataTable.Cell>
                </DataTable.Row>

                <DataTable.Pagination
                    page={page}
                    numberOfPages={2}
                    onPageChange={(page) => setPage(page)}
                    label="1-2 of 6"
                    optionsPerPage={optionsPerPage}
                    itemsPerPage={itemsPerPage}
                    setItemsPerPage={setItemsPerPage}
                    showFastPagination
                    optionsLabel={'Rows per page'}
                />
            </DataTable>
            <Button color='#076AE0' mode="contained" style={{maxWidth: 200, alignSelf: 'flex-end', marginEnd: 10}} >Bulk Approve</Button>
        </View>
    );
}

export default sparepartsAdActions;