export interface RadioButtonProps {
  handleSelect: (key: string) => void;
  option: { key: string };
  selectedSort: string;
}
