import * as React from 'react';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackHeaderLeftButtonProps} from '@react-navigation/stack';

import {View} from '../components/Themed';
import MenuIcon from '../components/MenuIcon';
import main from '../styles/main';
import {fetchAccountStatistics} from "../api/apis";
import {AccountResponseData} from "../api/models/accounts";
import {Button, Input} from 'react-native-elements';
import {ScrollView} from "react-native";
import AccountComponent from "../components/AccountComponent";

export default function AccountStatsScreen() {
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);
  const [accountName, setAccountName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [account, setAccount] = useState<AccountResponseData | undefined>(undefined);

  useEffect(() => {

    navigation.setOptions({
      showHeader: true,
      headerLeft: (props: StackHeaderLeftButtonProps) => (<MenuIcon/>)
    });
    setErrorMessage('');

  }, []);

  const searchAccount = () => {

    if (!isLoading) {
      setIsLoading(true);
      fetchAccountStatistics(accountName).then(data => {
        setAccount(data.data);
        setIsLoading(false);
      }).catch(err => {
        if (err.status && err.status === 404) {
          setErrorMessage('Account does not exist');
        } else {
          setErrorMessage('Could not fetch account')
        }
        setAccount(undefined);
        setIsLoading(false)
      });
    }
  };

  return (
    <View style={main.centerHorizontally}>
      <ScrollView style={{marginTop: 10, width: '90%'}}>
        <Input
          placeholder='Account name: '
          label={'Enter account name to get the stats'}
          errorStyle={{color: 'red'}}
          errorMessage={errorMessage}
          onChangeText={value => setAccountName(value)}
        />
        <Button title={'Search'} disabled={isLoading} onPress={searchAccount}/>

        {account && (
          <AccountComponent data={account}/>
        )}
      </ScrollView>
    </View>
  )
};
