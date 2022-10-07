import { useState } from "react";

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);

  function onChangeHandler() {
    setIsChecked(!isChecked);
  }

  return (
    <div>
      <h1>Select pizza topping</h1>
      <div className="toppings">
        <input type="checkbox" id="topping" name="topping" value="paneer" checked={isChecked} onChange={onChangeHandler} /> Paneer
      </div>

      <div className="result">Topping is {isChecked ? "checked" : "unchecked"}</div>
    </div>
  );
};

export default CheckBox;
