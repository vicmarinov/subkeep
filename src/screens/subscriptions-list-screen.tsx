import { useState, useEffect } from 'react';
import { Text, Alert, StyleSheet } from 'react-native';
import { Link } from '@react-navigation/native';
import useCategoryNames from '../contexts/categoryNames/use-category-names';
import type { SubscriptionsNavigatorScreenProps } from '../types/screen-props';
import type { Brief as SubscriptionBriefData } from '../types/subscriptions';
import subscriptionService from '../services/subscription-service';
import Screen from '../components/screen';
import Chips from '../components/chips';
import SubscriptionCard from '../components/subscription-card';
import Message from '../components/message';

export default function SubscriptionsListScreen (
    { navigation, route }: SubscriptionsNavigatorScreenProps<'SubscriptionsList'>
) {
    const categoryNames = useCategoryNames();
    const [selectedCategoryName, setSelectedCategoryName] = useState('All');

    const subscriptionsData = useSubscriptionsData(selectedCategoryName);

    return (
        <Screen.FlatList
            header={<>
                <Text>Subscriptions List Screen</Text>
                <Link screen='SubscriptionDetails'>Go to Subscription Details Screen</Link>
                <Link screen='SaveSubscription'>Go to Save Subscription Screen</Link>

                {!categoryNames.isLoading && (
                    <Chips
                        data={['All', ...categoryNames.names, 'Other']}
                        keyExtractor={item => item}
                        valueExtractor={item => item}
                        selectedValue={selectedCategoryName}
                        setSelectedValue={setSelectedCategoryName}
                    />
                )}
            </>}

            data={subscriptionsData}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <SubscriptionCard data={item} />}

            ListEmptyComponent={
                <Message text={
                    !subscriptionsData
                        ? 'Loading...'
                    : selectedCategoryName === 'All'
                        ? 'No subscriptions found.'
                        : `No subscriptions found for category "${selectedCategoryName}".`
                } />
            }

            contentContainerStyle={styles.subscriptionsContainer}
            style={styles.screen}
        />
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingHorizontal: 15
    },
    subscriptionsContainer: {
        gap: 10
    }
});

function useSubscriptionsData (
    selectedCategoryName: string
): SubscriptionBriefData[] | undefined {
    const [
        subscriptionsData,
        setSubscriptionsData
    ] = useState<SubscriptionBriefData[]>();

    useEffect(() => {
        const filter = {
            categoryName:
                selectedCategoryName === 'All'
                    ? undefined
                : selectedCategoryName === 'Other'
                    ? null
                    : selectedCategoryName
        };

        const abortController = new AbortController();

        subscriptionService
            .getAll(abortController, filter)
            .then(setSubscriptionsData)
            .catch(error => {
                if (error.message.startsWith('AbortError')) {
                    console.log('Subscriptions fetch was aborted.');
                } else {
                    Alert.alert(
                        'Fetch Error',
                        'Failed to fetch subscriptions. Please try again later.'
                    );

                    console.error('Subscriptions fetch error:', error);
                }
            });

        return () => abortController.abort();
    }, [selectedCategoryName]);

    return subscriptionsData;
}