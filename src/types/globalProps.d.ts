/* eslint-disable @typescript-eslint/no-explicit-any */

type FooterLinkIcon = {
  url: string;
  icon: SvgrComponent;
};

type FooterLinkText = {
  url: string;
  title: string;
};

type ProminentBuyerType = {
  name: string;
  icon: SvgrComponent;
};

type KeyBenefitType = {
  icon: SvgrComponent;
  title: string;
  description: string;
};

type SellerProcessType = {
  src: string;
  title: string;
  description: string;
};

type ClientStoryType = {
  avatar: string;
  clientName: string;
  clientTitle: string;
  clientQuote: string;
  company: string;
};

type SellerPaymentProcess = {
  icon: SvgrComponent;
  title: string;
  description: string;
};

type FaqCollapseItemType = {
  title: string;
  content: string;
};

type MenuItemType = {
  title: string;
};

type ServerErrorType = {
  message: string;
  errors: Record<string, string>;
};

type InitialStateType = {};

type TabSliderType = {
  icon: SvgrComponent;
};

type ToastTheme = 'success' | 'error' | 'warning';

type UserInfoType = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  confirmed: boolean | null | undefined;
  role: {
    type: string | null | undefined;
  };
};

type UserMenuType = {
  title: string;
  type: 'link' | 'action';
  action?: any;
  href?: string;
};

type DropdownOption = {
  value: string | number | boolean | null;
  label: string | JSX.Element;
  isDisabled?: boolean;
  isClearable?: boolean;
};

type DropdownOptions = ReadonlyArray<DropdownOption>;

type DropdownSelectValue = DropdownOption | DropdownOptions | null | undefined;
