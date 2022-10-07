const InputCheckBox = ({ label, name, checked, onChange }) => {
  return (
    <div>
      <input
        type="checkbox"
        id={name}
        name={name}
        value={name}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={name}>{label || name}</label>

      {/* <div className="form-row">
        <input type="checkbox" id="checkbox-input" name="checkbox-input" value="checkbox-input" checked={checkboxInput} onChange={() => setCheckboxInput(!checkboxInput)} />
        <label htmlFor="checkbox-input">checkbox input</label>
      </div> */}
    </div>
  );
};

export default InputCheckBox;
