import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
    Login: undefined,
    JobsList: undefined,
    JobDetails: { id: number },
}

type LoginNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
type LoginRouteProp = RouteProp<RootStackParamList, 'Login'>;
export type LoginProps = {
    navigation: LoginNavigationProp,
    route: LoginRouteProp,
};

type JobsListNavigationProp = StackNavigationProp<RootStackParamList, 'JobsList'>;
type JobsListRouteProp = RouteProp<RootStackParamList, 'JobsList'>;
export type JobsListProps = {
    navigation: JobsListNavigationProp,
    route: JobsListRouteProp,
};

type JobDetailsNavigationProp = StackNavigationProp<RootStackParamList, 'JobDetails'>;
type JobDetailsRouteProp = RouteProp<RootStackParamList, 'JobDetails'>;
export type JobDetailsProps = {
    navigation: JobDetailsNavigationProp,
    route: JobDetailsRouteProp,
};