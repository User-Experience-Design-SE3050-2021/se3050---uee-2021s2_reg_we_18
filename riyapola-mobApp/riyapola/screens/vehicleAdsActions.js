import React, { useState, useEffect } from 'react';
import { ScrollView, View, ActivityIndicator, Text } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { Button, Checkbox, DataTable, Headline } from 'react-native-paper';
import AdminTabs from '../shared/AdminTabs';
import axios from 'axios';

const optionsPerPage = [2, 3, 4];

const vehicleAdActions = ({ navigation }) => {
    const [page, setPage] = useState(0);
    // const [approved, setApproved] = useState({
    //     "0": "unchecked",
    //     "1": "unchecked",
    //     "2": "checked",
    //     "3": "checked"
    // });
    const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);

    const [vehicle, setVehicle] = useState([]);
    const [approved, setApproved] = useState({
        id: ""
    })
    const [bulkApprove, setBulkApprove] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        axios.get('https://riyapola.herokuapp.com/vehicle/pending/ads').then((res) => {
            console.log(res.data)
            setVehicle(res.data)
            
        })
    }, [])

    useEffect(() => {
        if(loading)
         setLoading(false);
    }, [vehicle])

    const singleAdApprove = (id) => {
        axios.put(`https://riyapola.herokuapp.com/vehicle/${id}`,{status: "published"}).then((res) => {
            console.log('status updated!')
        }).catch((err) => {
            console.log(err)
        })
    }

    const bulkUpdate = (id) => {
        bulkApprove.find(item => item == id) ? setBulkApprove(bulkApprove.filter(elem => elem != id)) : setBulkApprove([...bulkApprove, id])
    }

    const submitBulk = () => {
        console.log('bulk ids',bulkApprove)
        bulkApprove.forEach(async (item, index) => {
            await axios.put(`https://riyapola.herokuapp.com/vehicle/${item}`,{status: "published"})
            console.log(item,index)
        })
    }
    useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    return (
        <View>
            <AdminTabs navigation={navigation} pageIndex={0} />
            <Headline style={{ fontSize: 18, alignSelf: 'center', fontWeight: 'bold', padding: 20 }}>Approve/Reject vehicle Advertisements</Headline>
            
            {vehicle.length != 0 ?
                <ScrollView horizontal>
                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title>Approved</DataTable.Title>
                            <DataTable.Title>Ad Title</DataTable.Title>
                            <DataTable.Title>Date</DataTable.Title>
                            <DataTable.Title>Actions</DataTable.Title>
                        </DataTable.Header>
                        {vehicle.length > 0 ? vehicle.filter(status => status.status != "published").map((ad) => {
                            return (
                                <DataTable.Row key={ad._id}>
                                    <DataTable.Cell style={{ marginRight: 17 }}><Checkbox status={bulkApprove.find(item => item == ad._id) ? 'checked' : 'unchecked'} onPress={() => bulkUpdate(ad._id)} color='#076AE0' key={ad._id} /></DataTable.Cell>
                                    <DataTable.Cell style={{ marginRight: 17 }}>{ad.title}</DataTable.Cell>
                                    <DataTable.Cell style={{ marginRight: 17 }}>{ad.updatedAt.split('T')[0]}</DataTable.Cell>
                                    <DataTable.Cell style={{ marginRight: 17 }}><Icon name='check-circle' color='#076AE0' size={30} value={ad._id} onPress={() => { setVehicle({ ...vehicle, status: "published" }), singleAdApprove(ad._id) }} /><Icon name='remove-circle' color='red' size={30} /><Icon name='info' size={30} /></DataTable.Cell>
                                </DataTable.Row>
                            )
                        }) : (null)}

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
                </ScrollView> : loading ? <ActivityIndicator  animating={loading} size="large" color="#0000ff"/> : <Text>No Pending Ads</Text>}
            <Button color='#076AE0' mode="contained" style={{ maxWidth: 200, alignSelf: 'flex-end', marginEnd: 10 }} onPress={() => submitBulk()} >Bulk Approve</Button>
        </View>
    );
}

export default vehicleAdActions;