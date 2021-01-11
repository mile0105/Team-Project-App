import {Text} from "./Themed";
import * as React from "react";
import {AccountResponseData} from "../api/models/accounts";

export interface AccountComponentProps {
  data: AccountResponseData
}

export default function AccountComponent({data}: AccountComponentProps) {

  const {stats} = data;

  return (
    <>
      <Text>
        {stats.all.duo?.deaths}
      </Text>
    </>
  )
}
