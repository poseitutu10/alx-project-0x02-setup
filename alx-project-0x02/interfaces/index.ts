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