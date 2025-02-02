export type FilterProps = {
  label?: string;
  options?: Array<{ label: string; value: string }>;
  onChange?: (arg: string) => void;
};
