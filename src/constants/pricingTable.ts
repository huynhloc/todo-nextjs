import {
  PlanKey,
  ServiceRowOrder,
  PlanHeaders,
  PlanServices,
  PlansOption,
  Services,
  MobileService,
} from 'types/pricingTable';
import Checked from 'assets/icons/ic-checked.svg';
import StartUpIcon from 'assets/icons/ic-startup.svg';
import ProfessionalIcon from 'assets/icons/ic-professional.svg';
import StudioIcon from 'assets/icons/ic-studio.svg';
import GrowthIcon from 'assets/icons/ic-rocket.svg';

// plans
export const STARTUP = 'STARTUP';
export const PROFESSIONAL = 'PROFESSIONAL';
export const STUDIO = 'STUDIO';
export const GROWTH = 'GROWTH';

// services
export const SERVICES_SHOWCASE = 'SERVICES_SHOWCASE';
export const SERVICE_LISTING = 'SERVICE_LISTING';
export const VERIFIED_PROFILE = 'VERIFIED_PROFILE';
export const FEATURED_PROFILE = 'FEATURED_PROFILE';
export const BUSINESS_DEVELOPMENT = 'BUSINESS_DEVELOPMENT';
export const AUTHENTICATION_VERIFICATION_SUPPORT =
  'AUTHENTICATION_VERIFICATION_SUPPORT';
export const VERIFIED_CLIENT_REVIEWS = 'VERIFIED_CLIENT_REVIEWS';
export const CLIENT_REVIEW_WITH_FOLLOW_UP = 'CLIENT_REVIEW_WITH_FOLLOW_UP';
export const RECEIVE_RESPOND_INQUIRIES = 'RECEIVE_RESPOND_INQUIRIES';
export const SUB_ACCOUNTS = 'SUB_ACCOUNTS';
export const CUSTOMER_SERVICE = 'CUSTOMER_SERVICE';
export const PERSONALISED_CUSTOMER_SERVICE = 'PERSONALISED_CUSTOMER_SERVICE';
export const LEGAL_ADVISORY_SERVICE = 'LEGAL_ADVISORY_SERVICE';
export const PRODUCT_PROFILE_ADVISORY_SERVICE =
  'PRODUCT_PROFILE_ADVISORY_SERVICE';

// data type
export const TEXT = 'TEXT';
export const ICON = 'ICON';

// row theme
export const WHITE = 'white';
export const GRAY = 'gray';

export const PLANS_ORDER: PlanKey[] = [STARTUP, PROFESSIONAL, STUDIO, GROWTH];

export const PLANS_HEADER: PlanHeaders = {
  [STARTUP]: {
    key: STARTUP,
    name: 'Startup',
    price: 'Free',
    description: 'Create a profile and get exposure for your business services',
    icon: StartUpIcon,
  },
  [PROFESSIONAL]: {
    key: PROFESSIONAL,
    name: 'Professional',
    price: '$100/year',
    description: 'Create a profile and get exposure for your business services',
    icon: ProfessionalIcon,
  },
  [STUDIO]: {
    key: STUDIO,
    name: 'Studio',
    price: '$400/year',
    description: 'Create a profile and get exposure for your business services',
    icon: StudioIcon,
  },
  [GROWTH]: {
    key: GROWTH,
    name: 'Growth',
    price: '$900/year',
    description: 'Create a profile and get exposure for your business services',
    icon: GrowthIcon,
  },
};

export const SERVICES: Services = {
  [SERVICES_SHOWCASE]: {
    serviceKey: SERVICES_SHOWCASE,
    name: 'Services Showcase',
    isHeader: true,
    type: TEXT,
    theme: WHITE,
  },
  [SERVICE_LISTING]: {
    serviceKey: SERVICE_LISTING,
    name: 'Service Listing',
    type: TEXT,
    theme: GRAY,
  },
  [VERIFIED_PROFILE]: {
    serviceKey: VERIFIED_PROFILE,
    name: 'Verified Profile',
    type: ICON,
    theme: WHITE,
  },
  [FEATURED_PROFILE]: {
    serviceKey: FEATURED_PROFILE,
    name: 'Featured Profile & Services',
    type: ICON,
    theme: GRAY,
  },

  // Business Development
  [BUSINESS_DEVELOPMENT]: {
    serviceKey: BUSINESS_DEVELOPMENT,
    name: 'Business Development',
    isHeader: true,
    type: TEXT,
    theme: WHITE,
  },
  [AUTHENTICATION_VERIFICATION_SUPPORT]: {
    serviceKey: AUTHENTICATION_VERIFICATION_SUPPORT,
    name: 'Authentication & verification support',
    type: ICON,
    theme: GRAY,
  },
  [VERIFIED_CLIENT_REVIEWS]: {
    serviceKey: VERIFIED_CLIENT_REVIEWS,
    name: 'Verified Client Reviews',
    type: ICON,
    theme: WHITE,
  },
  [CLIENT_REVIEW_WITH_FOLLOW_UP]: {
    serviceKey: CLIENT_REVIEW_WITH_FOLLOW_UP,
    name: 'Client review with follow up',
    type: ICON,
    theme: GRAY,
  },
  [RECEIVE_RESPOND_INQUIRIES]: {
    serviceKey: RECEIVE_RESPOND_INQUIRIES,
    name: 'Receive & respond to inquiries',
    type: ICON,
    theme: WHITE,
  },
  [SUB_ACCOUNTS]: {
    serviceKey: SUB_ACCOUNTS,
    name: 'Sub accounts',
    type: TEXT,
    theme: GRAY,
  },

  // Customer service
  [CUSTOMER_SERVICE]: {
    serviceKey: CUSTOMER_SERVICE,
    name: 'Customer service',
    isHeader: true,
    type: TEXT,
    theme: WHITE,
  },
  [PERSONALISED_CUSTOMER_SERVICE]: {
    serviceKey: PERSONALISED_CUSTOMER_SERVICE,
    name: 'Personalised customer service',
    type: TEXT,
    theme: GRAY,
  },
  [LEGAL_ADVISORY_SERVICE]: {
    serviceKey: LEGAL_ADVISORY_SERVICE,
    name: 'Legal Advisory service',
    type: ICON,
    theme: WHITE,
  },
  [PRODUCT_PROFILE_ADVISORY_SERVICE]: {
    serviceKey: PRODUCT_PROFILE_ADVISORY_SERVICE,
    name: 'Product/Profile Advisory service',
    type: ICON,
    theme: GRAY,
  },
};

// services order
export const SERVICE_ROWS_ORDER: ServiceRowOrder[] = [
  // Services Showcase section
  SERVICES.SERVICES_SHOWCASE,
  SERVICES.SERVICE_LISTING,
  SERVICES.VERIFIED_PROFILE,
  SERVICES.FEATURED_PROFILE,

  // Business Development
  SERVICES.BUSINESS_DEVELOPMENT,
  SERVICES.AUTHENTICATION_VERIFICATION_SUPPORT,
  SERVICES.VERIFIED_CLIENT_REVIEWS,
  SERVICES.CLIENT_REVIEW_WITH_FOLLOW_UP,
  SERVICES.RECEIVE_RESPOND_INQUIRIES,
  SERVICES.SUB_ACCOUNTS,

  // Customer service
  SERVICES.CUSTOMER_SERVICE,
  SERVICES.PERSONALISED_CUSTOMER_SERVICE,
  SERVICES.LEGAL_ADVISORY_SERVICE,
  SERVICES.PRODUCT_PROFILE_ADVISORY_SERVICE,
];

// mobile Service order
export const MOBILE_SERVICES_ORDER: MobileService[] = [
  {
    ...SERVICES.SERVICES_SHOWCASE,
    subServices: [
      SERVICES.SERVICE_LISTING,
      SERVICES.VERIFIED_PROFILE,
      SERVICES.FEATURED_PROFILE,
    ],
  },
  {
    ...SERVICES.BUSINESS_DEVELOPMENT,
    subServices: [
      SERVICES.AUTHENTICATION_VERIFICATION_SUPPORT,
      SERVICES.VERIFIED_CLIENT_REVIEWS,
      SERVICES.CLIENT_REVIEW_WITH_FOLLOW_UP,
      SERVICES.RECEIVE_RESPOND_INQUIRIES,
      SERVICES.SUB_ACCOUNTS,
    ],
  },
  {
    ...SERVICES.CUSTOMER_SERVICE,
    subServices: [
      SERVICES.PERSONALISED_CUSTOMER_SERVICE,
      SERVICES.LEGAL_ADVISORY_SERVICE,
      SERVICES.PRODUCT_PROFILE_ADVISORY_SERVICE,
    ],
  },
];

export const PLAN_SERVICES: PlanServices = {
  [STARTUP]: {
    [SERVICES_SHOWCASE]: null,
    [SERVICE_LISTING]: '1',
    [VERIFIED_PROFILE]: '',
    [FEATURED_PROFILE]: null,
    [BUSINESS_DEVELOPMENT]: null,
    [AUTHENTICATION_VERIFICATION_SUPPORT]: null,
    [VERIFIED_CLIENT_REVIEWS]: null,
    [CLIENT_REVIEW_WITH_FOLLOW_UP]: null,
    [RECEIVE_RESPOND_INQUIRIES]: Checked,
    [SUB_ACCOUNTS]: '',
    [CUSTOMER_SERVICE]: null,
    [PERSONALISED_CUSTOMER_SERVICE]: 'Email support',
    [LEGAL_ADVISORY_SERVICE]: null,
    [PRODUCT_PROFILE_ADVISORY_SERVICE]: null,
  },
  [PROFESSIONAL]: {
    [SERVICES_SHOWCASE]: null,
    [SERVICE_LISTING]: '3',
    [VERIFIED_PROFILE]: Checked,
    [FEATURED_PROFILE]: null,
    [BUSINESS_DEVELOPMENT]: null,
    [AUTHENTICATION_VERIFICATION_SUPPORT]: Checked,
    [VERIFIED_CLIENT_REVIEWS]: Checked,
    [CLIENT_REVIEW_WITH_FOLLOW_UP]: null,
    [RECEIVE_RESPOND_INQUIRIES]: Checked,
    [SUB_ACCOUNTS]: '1',
    [CUSTOMER_SERVICE]: null,
    [PERSONALISED_CUSTOMER_SERVICE]: 'Email support',
    [LEGAL_ADVISORY_SERVICE]: null,
    [PRODUCT_PROFILE_ADVISORY_SERVICE]: null,
  },
  [STUDIO]: {
    [SERVICES_SHOWCASE]: null,
    [SERVICE_LISTING]: '10',
    [VERIFIED_PROFILE]: Checked,
    [FEATURED_PROFILE]: Checked,
    [BUSINESS_DEVELOPMENT]: null,
    [AUTHENTICATION_VERIFICATION_SUPPORT]: Checked,
    [VERIFIED_CLIENT_REVIEWS]: Checked,
    [CLIENT_REVIEW_WITH_FOLLOW_UP]: null,
    [RECEIVE_RESPOND_INQUIRIES]: Checked,
    [SUB_ACCOUNTS]: '3',
    [CUSTOMER_SERVICE]: null,
    [PERSONALISED_CUSTOMER_SERVICE]: 'Chat support',
    [LEGAL_ADVISORY_SERVICE]: Checked,
    [PRODUCT_PROFILE_ADVISORY_SERVICE]: Checked,
  },
  [GROWTH]: {
    [SERVICES_SHOWCASE]: null,
    [SERVICE_LISTING]: '10',
    [VERIFIED_PROFILE]: Checked,
    [FEATURED_PROFILE]: Checked,
    [BUSINESS_DEVELOPMENT]: null,
    [AUTHENTICATION_VERIFICATION_SUPPORT]: Checked,
    [VERIFIED_CLIENT_REVIEWS]: Checked,
    [CLIENT_REVIEW_WITH_FOLLOW_UP]: Checked,
    [RECEIVE_RESPOND_INQUIRIES]: Checked,
    [SUB_ACCOUNTS]: '10',
    [CUSTOMER_SERVICE]: null,
    [PERSONALISED_CUSTOMER_SERVICE]:
      'Dedicated account manager\n + Chat support',
    [LEGAL_ADVISORY_SERVICE]: Checked,
    [PRODUCT_PROFILE_ADVISORY_SERVICE]: Checked,
  },
};

export const PLAN_OPTIONS: PlansOption[] = [
  { value: STARTUP, label: 'Startup' },
  { value: PROFESSIONAL, label: 'Professional' },
  { value: STUDIO, label: 'Studio' },
  { value: GROWTH, label: 'Growth' },
];
