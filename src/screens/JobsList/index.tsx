import React, { useEffect, useState } from 'react';
import { FlatList, Text, Image, TouchableOpacity, ActivityIndicator, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { JobsListProps } from '../../types';
import { JobsType } from './types';
import { styles } from './styles';
import job from '../../api/job';

const JobsList: React.FC<JobsListProps> = ({ navigation }) => {
    const [jobsData, setJobsData] = useState<JobsType[]>([])
    const [loading, setLoading] = useState(false)
    const [sort, setSort] = useState<boolean>(false)

    useEffect(() => {
        getJobs()
    }, [])

    async function getJobs() {
        const data = await job.getJobsList()
        if (data) {
            setJobsData(data)
            setLoading(true)
        }
    }

    function renderJobs({ item, id }: { item: JobsType, id: number }) {
        return (
            <TouchableOpacity style={styles.itemContainer} onPress={() => goDetails(item)}>
                <Image source={{ uri: item.Job.Thumb }} style={styles.itemImage} />
                <Text style={styles.itemTitle}>{item.Job.Title}</Text>
                <Text style={styles.itemDate}>{item.Job.JobDate}</Text>
                <Text style={styles.itemText}>{item.Job.CustomerName}</Text>
                <Text style={styles.itemText}>{item.Job.Status}</Text>
            </TouchableOpacity>
        )
    }

    function goDetails(item: JobsType) {
        navigation.navigate("JobDetails", { id: item.Job.Id })
    }


    function sortbyDate() {
        jobsData.sort(function (a, b) {
            if (!sort) {
                return new Date(a.Job.CreatedOnUtc) - new Date(b.Job.CreatedOnUtc)
            }
            else {
                return new Date(b.Job.CreatedOnUtc) - new Date(a.Job.CreatedOnUtc)
            }

        })
    }

    return (
        <SafeAreaView style={styles.container}>
            {loading ?
                <>
                    <Text style={styles.header}>Jobs List</Text>

                    <TouchableOpacity onPress={() => {
                        sortbyDate()
                        setSort(!sort)
                    }}>
                        <Image source={sort ?
                            require('../../assets/sort-by-attributes.png')
                            :
                            require('../../assets/sort-by-attributes-interface.png')
                        }
                            style={styles.sortImage} />
                    </TouchableOpacity>

                    <FlatList<JobsType>
                        keyExtractor={(_, index) => index.toString()}
                        data={jobsData}
                        renderItem={renderJobs}
                        showsVerticalScrollIndicator={false}
                    />
                </>
                :
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator size="large" color="#E3562A" />
                </View>
            }
        </SafeAreaView>
    )
}

export default JobsList