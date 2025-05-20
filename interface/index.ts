import { StaticImageData } from "next/image";
import { IconType } from "react-icons/lib";

export type LayoutProps = {
  children: React.ReactNode;
};

export interface MenuItem {
  id: string;
  label: string;
  href?: string;
  hasMegaMenu?: boolean;
  megaMenuItems?: MegaMenuSection[];
}

interface MegaMenuSection {
  title: string;
  items: MegaMenuSectionItem[];
}

interface MegaMenuSectionItem {
  id: string;
  bgColor: string;
  dotColor: string;
  title: string;
  description: string;
  isNew?: boolean;
  href: string;
}

export interface HeroSlide {
  title: string | string[];
  subtitle: string;
  image: string | StaticImageData;
  buttonText?: string;
}

export interface HeroSectionProps {
  slides: HeroSlide[];
}

export interface HeadingProps {
  title: string;
  subtitle: string;
  className?: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  className?: string;
  buttonClassName?: string;
  link: string;
}

export interface ServicePageProps {
  heroSlides: HeroSlide[];
  expectationData: ExpectationCardProps[];
  servicePackages: PackageCardProps[];
  title: string;
  subtitle: string;
  solutionsTitle: string;
  solutionsSubtitle: string;
  solutionsData: Offer[];
}

export interface PackageCardProps {
  title: string;
  services: string[];
  highlighted?: boolean;
  price: string;
  ctaText?: string;
  popular?: boolean;
}

export interface ExpectationCardProps {
  id: number;
  icon: string | StaticImageData; 
  title: string;
  description: string | string[];
}

export interface DescriptionObject {
  id: number;
  title: string;
  contents: string[];
}

export interface AboutIntroItem {
  icon: StaticImageData;
  id: number;
  title: string;
  description: string | string[] | DescriptionObject[];
}

export interface ACRTeamObject {
  id: number;
  imageUrl: string | StaticImageData; 
  names: string;
  title: string;
  tel: string;
  email: string;
  description: string;
  social: {
    twitter: string;
    linkedin: string;
    instagram: string;
  };
}

export interface CustomerObject {
  id: number;
  imageUrl: string | StaticImageData;
  name: string;
}

export interface TextInputFieldProps {
  type?: string;
  placeholder: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ContactInfoProps {
  iconPath: string;
  text: string;
}

export interface PreferredCommunicationProps {
  selectedMethod: string;
  setSelectedMethod: (method: string) => void;
}

export interface TeamCardProps {
  name: string;
  title: string;
  bio: string;
  tel: string;
  email: string;
  avatar: string | StaticImageData; 
  social: {
    linkedin: string;
    twitter: string;
    instagram: string;
    facebook: string;
  };
}

export interface ResourceDataObject {
  id: number;
  product: string;
  iconUrl: IconType;
}

export interface EventDataObject {
  id: number;
  title: string;
  organizer: string;
  time: string;
  date: string;
  cost: number;
  image: string | StaticImageData;
}

export interface Product {
  id: number;
  name: string;
  image: string | StaticImageData;
  description: string;
}

export interface ProductCardProps {
  product: Product;
}

export interface Testimonials {
  content: string;
  author: string;
  role: string;
  imageUrl: string | StaticImageData;
}

export interface EventCardProps {
  id: number;
  title: string;
  organizer: string;
  time: string;
  date: string;
  cost: number;
  image: string | StaticImageData;
  gradientClass: string;
  location?: string;
  category?: string;
  description?: string;
}


interface Offer {
  imageUrl: string | StaticImageData;
  name: string;
  description: string;
  link: string;
}

export interface OffersCardProps {
  offers: Offer[];
}

interface QuickBooks {
  title: string;
  location: string;
  description: string;
  isAvailable?: boolean;
}

export interface QuickBooksCardProps {
  quickBooks: QuickBooks[];
}
  
  export interface QuickBooksFeature {
    icon: IconType;
    title: string;
    description: string;
  }

export interface MiclientExpectaionProps {
  icon: IconType; 
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
}

export interface miclientOffers {
  image: string |  StaticImageData;
  title: string;
  description: string[];
}

interface OptionCardProps {
  title: string;
  description: string;
  buttonText: string;
}

export interface OffersCard {
  options: OptionCardProps[];
}

export interface Meeting {
  id: number;
  name: string;
  date: string;
  location: string;
  avatar: string;
}

export interface CalendarDay {
  day: number;
  month: number;
  year: number;
  isCurrentMonth: boolean;
}

export interface PolicySection {
  id: string;
  title: string;
  content: string | string[];
}

export interface PolicyData {
  companyName: string;
  companyShortName: string;
  websiteUrl: string;
  contactPhone: string;
  contactEmail: string;
  lastUpdated: string;
  originalPosted: string;
}

export interface News {
  id: number;
  title: string;
  lead: string;
  imgUrl: string;
  mainImage?: string;
  imageCaption?: string;
  category?: string;
  readTime?: string;
  description: string;
  author: {
    name: string;
    role: string;
    image: string | StaticImageData;
    publishDate: string;
    bio?: string;
  };
  content: Array<{
    type: string;
    content?: string;
    level?: number;
    image?: string | StaticImageData;
    caption?: string;
    items?: string[];
  }>;
  comments: Array<{
    id: number;
    author: {
      name: string;
      image: string | StaticImageData;
    };
    date: string;
    content: string;
    likes?: number;
    replies?: Array<{
      id: number;
      author: {
        name: string;
        image: string | StaticImageData;
      };
      date: string;
      content: string;
      likes?: number;
    }>;
  }>;
  relatedArticles: Array<{
    title: string;
    url: string;
    image: string | StaticImageData;
    readTime: string;
    excerpt: string;
  }>;
}

export interface NewsCard {
  id: number;
  title: string;
  imageUrl: string  | StaticImageData;
  description: string;
}

export interface MenuItemAdmin {
  name: string;
  icon: React.ReactNode;
  path: string;
  subItems?: MenuItemAdmin[];
}

export interface MenuItemProps {
  item: MenuItemAdmin; 
  sidebarOpen: boolean;
  openSubMenu: string | null;
  toggleSubMenu: (name: string) => void;
  pathname: string;
}

export interface SidebarProps {
  menuItems: MenuItemAdmin[];
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export interface Subscriber {
  id: number;
  email: string;
  subscribed: boolean;
}

export interface Address {
  id: number;
  name: string;
  street: string;
  city: string;
  country: string;
  location: string;
}

export type UserRole = "admin" | "editor";

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
}

export interface CalendarEvent {
  id: number;
  title: string;
  start: string;
}