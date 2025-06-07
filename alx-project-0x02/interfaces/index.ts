export interface CardProps {
  title: string;
  content: string;
}


export interface PostProps {
  handlePost: (data: CardProps) => void;
  onClose: () => void;
  isOpen: boolean;
}

export interface ButtonProps {
  title: string;
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full"
}