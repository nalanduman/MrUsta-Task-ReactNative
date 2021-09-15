import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import moment from 'moment';

import { JobDetailsProps } from '../../types';
import { DetailsType } from './types';
import { styles } from './styles';
import job from '../../api/job';

const JobDetails: React.FC<JobDetailsProps> = ({ navigation, route }) => {
    const param = route.params

    const [details, setDetails] = useState<DetailsType[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        getDetails()
    }, [])

    async function getDetails() {
        const data = await job.getJobDetail(param.id)
        if (data) {
            setDetails(data)
            setLoading(true)
        }
    }

    function dateFormat(date: any) {
        const data = moment(date)
        return data.format('MM-DD-YYYY')
    }

    return (
        <SafeAreaView style={styles.container}>
            {loading ?
                <>
                    <View style={styles.topContainer}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={require('../../assets/left.png')} style={styles.leftImage} />
                        </TouchableOpacity>
                        <Text style={styles.title}>{details.Title}</Text>
                    </View>

                    <View style={styles.container2}>
                        <Text style={styles.date}>Created at {dateFormat(details.CreatedOnUtc)}</Text>
                        <Image source={{ uri: details.CustomerThumb }} style={styles.image} />
                        <Text style={styles.customerText}>{details.CustomerName}</Text>
                        <Text>Status: {details.Status}</Text>
                        <Text style={styles.locationText}>Location</Text>
                        <Text>Latitude: {details.Latitude}</Text>
                        <Text>Longitude: {details.Longitude}</Text>
                        <Text style={styles.dateText}>Job Date</Text>
                        <Text>{dateFormat(details.JobDateUtc)}</Text>
                    </View>
                </>
                :
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator size="large" color="#E3562A" />
                </View>
            }
        </SafeAreaView>
    )
}

export default JobDetails