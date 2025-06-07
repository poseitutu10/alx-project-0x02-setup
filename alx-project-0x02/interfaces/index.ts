export interface CardProps {
  title: string;
  content: string;
}


export interface PostProps {
  handlePost: (data: CardProps) => void;
  onClose: () => void;
  isOpen: boolean;
}

