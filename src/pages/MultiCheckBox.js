import { useState } from "react";

const toppings = [
  { name: "Capsicum", price: 1.2 },
  { name: "Paneer", price: 2.0 },
  { name: "Red Paprika", price: 2.5 },
  { name: "Onions", price: 3.0 },
  { name: "Extra Cheese", price: 3.5 },
  { name: "Baby Corns", price: 3.0 },
  { name: "Mushroom", price: 2.0 },
];

const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

const MultiCheckBox = () => {
  const [checkedState, isCheckedState] = useState(new Array(toppings.length).fill(false));

  const [total, setTotal] = useState(0);

  function onChangeHandler(position) {
    const updatedCheckedState = checkedState.map((item, index) => {
      return index === position ? !item : item;
    });

    isCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce((sum, currentState, index) => {
      if (currentState === true) {
        return sum + toppings[index].price;
      }
      return sum;
    }, 0);

    setTotal(totalPrice);
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>check</th>
            <th>name</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {toppings.map(({ name, price }, index) => {
            return (
              <tr key={index}>
                <td>
                  <input type="checkbox" id={`checkbox-${index}`} name={name} value={name} checked={checkedState[index]} onChange={() => onChangeHandler(index)} />
                </td>
                <td>
                  <label htmlFor={`checkbox-${index}`}>{name}</label>
                </td>

                <td>{getFormattedPrice(price)}</td>
              </tr>
            );
          })}
        </tbody>

        <tfoot>
          <tr>
            <th></th>
            <th></th>
            <th>{getFormattedPrice(total)}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
export default MultiCheckBox;
