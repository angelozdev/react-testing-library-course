interface Props {
  handleChange: () => void;
  checked: boolean;
}

function Checkbox({ handleChange, checked }: Props) {
  return (
    <label className="cursor-pointer">
      <p>Disable button</p>
      <input onChange={handleChange} checked={checked} type="checkbox" />
    </label>
  );
}

export default Checkbox;
