import { CustomerProps } from './Customer';
import { CustomerInfoProps, CustomerSignOutEvent } from './CustomerInfo';
import { GuestFormProps, GuestFormValues } from './GuestForm';
import { LoginFormProps, LoginFormValues } from './LoginForm';

export type CustomerInfoProps = CustomerInfoProps;
export type CustomerProps = CustomerProps;
export type CustomerSignOutEvent = CustomerSignOutEvent;
export type GuestFormProps = GuestFormProps;
export type GuestFormValues = GuestFormValues;
export type LoginFormProps = LoginFormProps;
export type LoginFormValues = LoginFormValues;

export { default as CustomerViewType } from './CustomerViewType';
export { default as CustomerInfo } from './CustomerInfo';
export { default as GuestForm } from './GuestForm';
export { default as LoginForm } from './LoginForm';
export { SUPPORTED_METHODS } from './CheckoutButtonList';
