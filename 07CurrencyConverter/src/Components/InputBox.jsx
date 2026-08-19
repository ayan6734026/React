import { useId } from "react"

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption=[],
    selectedCurrency="usd",
    amountDisable=false,
    currencyDisable=false

}) {

    const amountInputId = useId()

  return (
    <div className='h-25 w-auto px-4 py-3 flex flex-row items-center bg-blue-200 space-x-20 rounded-xl'>
      <div className='h-auto w-1/2 flex flex-col justify-between gap-3'>
        <label className='text-base text-start pl-1' htmlFor={amountInputId}>
          {label}
        </label>
        <input 
        className='h-auto text-lg border border-gray-300 bg-white rounded-lg shadow-2xl px-2 focus:border-indigo-600 focus:outline-hidden'
        type='number'
        id={amountInputId} 
        min={1} 
        placeholder='Enter a number'
        value={amount} 
        onChange={(e)=>{onAmountChange && onAmountChange(e.target.value)}}
        disabled={amountDisable}
        >
        </input>
      </div>
      <div className='h-auto w-1/2 flex flex-col justify-between gap-3'>
        <p className='text-base text-start'>
          Currency Type
        </p>
        <select
        className='bg-amber-50 rounded-2xl px-2 border border-gray-300  focus:border-indigo-600 focus:outline-hidden'
        value={selectedCurrency}
        onChange={(e)=>{
            onCurrencyChange && onCurrencyChange(e.target.value)
        }}
        disabled={currencyDisable}
        >
          {currencyOption.map((currency)=>
            <option key={currency} value={currency}>
                {currency}
            </option>
          )}
        </select>
      </div>
    </div>
  )
}

export default InputBox