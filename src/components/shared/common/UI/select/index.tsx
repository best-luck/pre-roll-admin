import { SELECT_OPTION_TYPE } from "@src/lib/types/general";

interface SelectProps {
  options: SELECT_OPTION_TYPE[];
  className: string|null;
  onChange: (v: string) => void;
}

export default function Select(props: SelectProps) {

  const { options, className, onChange } = props;

  return (
    <select
      className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 p-2.5 ${className}`}
      onChange={e => onChange(e.target.value)}>
      {
        options.map((option: SELECT_OPTION_TYPE, index: number) => <option value={option.value} key={`option-${index}`}>{option.label}</option>)
      }
    </select>
  );
}