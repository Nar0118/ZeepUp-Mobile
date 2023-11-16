export interface ButtonProps {
  title: string;
  onPress: () => void;
  width: number;
  height: number;
  backgroundColor: string;
  textColor: string;
  fontSize?: number;
  disabled?: boolean;
  border?: boolean;
}
