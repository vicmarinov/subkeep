import { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { Link } from '@react-navigation/native';
import useCategoryNames from '../contexts/categoryNames/use-category-names';
import Chips from '../components/chips';
import type { SubscriptionsNavigatorScreenProps } from '../types/screen-props';

export default function SubscriptionsListScreen (
    { navigation, route }: SubscriptionsNavigatorScreenProps<'SubscriptionsList'>
) {
    const categoryNames = useCategoryNames();
    const [selectedCategoryName, setSelectedCategoryName] = useState('All');

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
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
        </ScrollView>
    );
}