import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrrncyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  disableAmount = false,
  disableCurrency = false,
}) {
  const AmountInputId = useId();

  return (
    <div className="flex flex-wrap rounded-lg bg-white p-6 outline-none border-2 border-blue-600">
      <div className="w-1/2">
        <label htmlFor={AmountInputId} className="text-black mb-2 inline-block">
          {label}
        </label>
        <input
          id={AmountInputId}
          type="number"
          className="outline-none w-full bg-transparent py-2 text-black"
          value={amount}
          placeholder="Amount"
          disabled={disableAmount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 text-right">
        <p className="pb-4 text-right">Currency Type</p>
        <select
          className="outline-none px-3 py-2 rounded-lg cursor-pointer text-black inline-block w-28"
          value={selectCurrency}
          disabled={disableCurrency}
          onChange={(e) => onCurrrncyChange && onCurrrncyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
