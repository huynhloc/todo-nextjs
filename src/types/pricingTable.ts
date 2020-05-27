import {
  STARTUP,
  PROFESSIONAL,
  STUDIO,
  GROWTH,
  SERVICES_SHOWCASE,
  SERVICE_LISTING,
  VERIFIED_PROFILE,
  FEATURED_PROFILE,
  TEXT,
  ICON,
  WHITE,
  GRAY,
  BUSINESS_DEVELOPMENT,
  AUTHENTICATION_VERIFICATION_SUPPORT,
  VERIFIED_CLIENT_REVIEWS,
  CLIENT_REVIEW_WITH_FOLLOW_UP,
  RECEIVE_RESPOND_INQUIRIES,
  SUB_ACCOUNTS,
  CUSTOMER_SERVICE,
  PERSONALISED_CUSTOMER_SERVICE,
  LEGAL_ADVISORY_SERVICE,
  PRODUCT_PROFILE_ADVISORY_SERVICE,
} from 'constants/pricingTable';

export type PlanKey =
  | typeof STARTUP
  | typeof PROFESSIONAL
  | typeof STUDIO
  | typeof GROWTH;

export type ServiceKey =
  | typeof SERVICES_SHOWCASE
  | typeof SERVICE_LISTING
  | typeof VERIFIED_PROFILE
  | typeof FEATURED_PROFILE
  | typeof BUSINESS_DEVELOPMENT
  | typeof AUTHENTICATION_VERIFICATION_SUPPORT
  | typeof VERIFIED_CLIENT_REVIEWS
  | typeof CLIENT_REVIEW_WITH_FOLLOW_UP
  | typeof RECEIVE_RESPOND_INQUIRIES
  | typeof SUB_ACCOUNTS
  | typeof CUSTOMER_SERVICE
  | typeof PERSONALISED_CUSTOMER_SERVICE
  | typeof LEGAL_ADVISORY_SERVICE
  | typeof PRODUCT_PROFILE_ADVISORY_SERVICE;

export type RowDataType = typeof TEXT | typeof ICON;

export type PlanHeader = {
  key: PlanKey;
  name: string;
  price: string;
  description: string;
  icon: SvgrComponent;
};

export type ServiceRowOrder = {
  serviceKey: ServiceKey;
  name: string;
  isHeader?: boolean;
  type: RowDataType;
  theme: theme;
};
export type Services = Record<ServiceKey, ServiceRowOrder>;
export type PlanHeaders = Record<PlanKey, PlanHeader>;
export type theme = typeof WHITE | typeof GRAY;
export type PlanService = Record<ServiceKey, null | string | SvgrComponent>;
export type PlanServices = Record<PlanKey, PlanService>;
export type PlansOption = {
  value: PlanKey;
  label: string;
};
export type MobileService = ServiceRowOrder & {
  subServices: ServiceRowOrder[];
};
