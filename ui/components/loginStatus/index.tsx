import React from 'react';
import { Select } from 'antd';
import './index.scss';

const { Option } = Select;


type Props = {

}

export const LoginStatus: React.FunctionComponent<Props> = (props): JSX.Element => {


  return (
    <div className="login-status">
      <a>login</a>
    </div>
  )
}