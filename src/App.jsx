import { useState } from "react";
import InputBox from "./components/InputBox";
import UseCurrencyInfo from "./hooks/UseCurrencyInfo";

function App() {
  const [amount, setAmount] = useState();
  const [to, setTo] = useState("usd");
  const [from, setFrom] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState();

  const currencyInfo = UseCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setTo(from);
    setFrom(to);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
    console.log(convertedAmount)
  };

  return (
    <div
      className="flex flex-wrap w-full justify-center items-center h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?w=2000&t=st=1700074108~exp=1700074708~hmac=adb5f3c0746943631b0f2bda1d19e48ade5a6eb88f53af66881d50b52ff4f019')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-2xl mx-auto rounded-xl p-8 border-white border-2 backdrop-blur-md">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              
            }}
          >
            <div className="w-full mb-2">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrrncyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="w-full relative h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-white border-2 rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mb-2">
              <InputBox
                label="To"
                amount={amount}
                currencyOptions={options}
                onCurrrncyChange={(currency) => setTo(currency)}
                selectCurrency={to}
              />
            </div>
              <button onClick={convert} className="w-full bg-blue-600 px-4 py-3 rounded-lg border-2 border-white text-white mt-4 ">
              Convert {to.toUpperCase()} to {from.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
