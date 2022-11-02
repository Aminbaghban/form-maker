import { PasswordCheckerProps } from '@aminbaghbanzadeh/password-policies-screen';
import { InputProps } from '@chakra-ui/react';
import { IconType } from '../../../interfaces';

export interface PasswordInputProps extends InputProps {
  icon?: IconType;
  passwordPolicies?: PasswordCheckerProps;
  showPasswordStatusScreen: boolean;
  //mask: any;
  //maskChar: any;
}
