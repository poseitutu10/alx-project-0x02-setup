export interface CardProps {
  title: string;
  content: string;
}


export interface PostPropsNew {
  handlePost: (data: CardProps) => void;
  onClose: () => void;
  isOpen: boolean;
}

export interface ButtonProps {
  title: string;
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full"
}


export interface PostProps {
  userId: number;
  title: string;
  content: string;
}

interface Geo {
  lat: number;
  lng: number;
}

interface Address {
  city: string;
  street: string;
  suite: string;
  zipcode: string;
  geo: Geo;
}


export interface UserProps {
  name: string;
  email: string;
  address: Address;
}