import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackHeaderLeftButtonProps} from '@react-navigation/stack';

import {View} from '../components/Themed';
import MenuIcon from '../components/MenuIcon';
import {useEffect, useState} from 'react';
import main from '../styles/main';
import {fetchAccountStatistics} from "../api/apis";
import {AccountResponseData} from "../api/models/accounts";
import {Button, Input} from 'react-native-elements';
import {ScrollView} from "react-native";
import AccountComponent from "../components/AccountComponent";

export default function AccountStatsScreen() {
  const navigation = useNavigation();

  const [accountName, setAccountName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [account, setAccount] = useState<AccountResponseData| undefined>(undefined);

  useEffect(() => {

    navigation.setOptions({
      showHeader: true,
      headerLeft: (props: StackHeaderLeftButtonProps) => (<MenuIcon/>)
    });
    setErrorMessage('');

  }, []);

  const searchAccount = () => {

    fetchAccountStatistics(accountName).then(data => {
      setAccount(data.data);
    }).catch(err => {
      console.log(err);
      setErrorMessage('Could not fetch account');
      setAccount(undefined);
    })
  };

  return (
    <View style={main.centerHorizontally}>
      <ScrollView style={{marginTop: 10, width: '90%'}}>
        <Input
          placeholder='Account name: '
          label={'Enter account name to get the stats'}
          errorStyle={{ color: 'red' }}
          errorMessage={errorMessage}
          onChangeText={value => setAccountName(value)}
        />
        <Button title={'Search'} onPress={searchAccount}/>

        {account && (
          <AccountComponent data={account}/>
        )}
      </ScrollView>
    </View>
  )
};
