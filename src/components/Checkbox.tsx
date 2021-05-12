interface Props {
  handleChange: () => void;
  checked: boolean;
}

function Checkbox({ handleChange, checked }: Props) {
  return <input onChange={handleChange} checked={checked} type="checkbox" />;
}

export default Checkbox;
