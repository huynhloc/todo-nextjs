import AIA from 'assets/icons/ic-AIA.svg';
import IFC from 'assets/icons/ic-IFC.svg';
import RB from 'assets/icons/ic-RB.svg';
import SF from 'assets/icons/ic-SF.svg';
import Business from 'assets/icons/ic-business.svg';
import CashFlow from 'assets/icons/ic-cashflow.svg';
import Community from 'assets/icons/ic-community.svg';
import Growth from 'assets/icons/ic-growth.svg';
import Impact from 'assets/icons/ic-impact.svg';
import Portfolio from 'assets/icons/ic-portfolio.svg';
import Step1 from 'assets/images/step1.png';
import Step2 from 'assets/images/step2.png';
import Step3 from 'assets/images/step3.png';
import Client1 from 'assets/images/client1.jpg';
import Client2 from 'assets/images/client2.jpg';
import Mail from 'assets/icons/ic-mail.svg';
import Language from 'assets/icons/ic-language.svg';
import Config from 'assets/icons/ic-config.svg';

export const PROMINENT_BUYERS: ProminentBuyerType[] = [
  { icon: IFC, name: 'ifc' },
  { icon: AIA, name: 'aia' },
  { icon: SF, name: 'sf' },
  { icon: RB, name: 'rb' },
];

export const KEY_BENEFITS: Array<Array<KeyBenefitType>> = [
  [
    {
      icon: CashFlow,
      title: 'Get more customers',
      description:
        'Reach a global customer base and enjoy a steady flow of high-value clients all year round.',
    },
    {
      icon: Community,
      title: 'Verified client reviews',
      description:
        'Become a trusted seller and drive future sales with verified reviews from top-tier enterprises.',
    },
    {
      icon: Growth,
      title: 'Fast payments',
      description:
        'Get paid quickly and easily, even across international borders with automated invoice processing, payments, and escrow.',
    },
  ],
  [
    {
      icon: Portfolio,
      title: 'Join an exclusive community',
      description:
        'Learn from leading entrepreneurs, creatives, and cutting-edge technologists from around the world.',
    },
    {
      icon: Business,
      title: 'Work the way you want',
      description:
        'Spend less time searching for customers and more time focusing on projects you love.',
    },
    {
      icon: Impact,
      title: 'Customer analytics',
      description:
        'Access powerful analytics and lead generation tools to better understand your customers and attract bigger clients.',
    },
  ],
];

export const SELLER_PROCESSES: SellerProcessType[] = [
  {
    src: Step1,
    title: '01. Set up your account',
    description: 'Set up your account with key business information.',
  },
  {
    src: Step2,
    title: '02. Complete your profile',
    description:
      'Answer a few simple questions about your services, expertise, and preferences.',
  },
  {
    src: Step3,
    title: '03. Create a service',
    description:
      'Offer your professional services and start selling to customers all over the world.',
  },
];

export const CLIENT_STORIES: ClientStoryType[] = [
  {
    avatar: Client1,
    clientName: 'Olena Zanichkovska',
    clientTitle: 'Founding Partner',
    company: '@The Gradient',
    clientQuote:
      "Thanks to Intrepid, I now spend more time improving my services instead of searching for customers and chasing leads. The best part is that I'm much less stressed out and have more time for my kids",
  },
  {
    avatar: Client2,
    clientName: 'John Davies',
    clientTitle: 'CEO,',
    company: 'Symbol',
    clientQuote:
      'We have developed a great relationship with the Intrepid team. Their understanding of the challenges faced by service providers is extremely evident in the platform they have created.',
  },
];

export const SELLER_PAYMENT_PROCESSES: SellerPaymentProcess[] = [
  {
    icon: Mail,
    title: 'Pick your price',
    description:
      'Take charge of your earnings. With us, you always control your prices.',
  },
  {
    icon: Language,
    title: 'Low transaction fees',
    description: 'Transparent fees designed for teams of all sizes.',
  },
  {
    icon: Config,
    title: 'Get paid fast',
    description:
      'Receive your payment within 5-10 days after work is delivered.',
  },
];

export const FAQ: FaqCollapseItemType[] = [
  {
    title: 'What is Intrepid?',
    content:
      'Intrepid is a global business-to-business e-commerce marketplace to buy and sell professional technology and creative services.',
  },
  {
    title: 'Who is Intrepid for?',
    content:
      'If you’re a top design, technology, data science or digital marketing studio, we welcome you to start selling your services on the Intrepid marketplace.',
  },
];
