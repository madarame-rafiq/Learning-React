


function InputBox({
    label,
    onChangeAmount,
    disabled,
    options,
    onCurrencyChange,
    amount,
    calculate,
    currency
}) {
  return (
    <div className="input-container">
        <div className="input-amount">
            <label className="lab">{label}</label>
            <input type="number" onChange={(e) => onChangeAmount(Number(e.target.value))} disabled={disabled} value={amount} />
        </div>
        <div className="input-currency">
            <select name="currency" value={currency} onChange={(e) => onCurrencyChange(e.target.value)} >
                {
                    options.map((currency, ind) => {
                        return (<option key={ind} value={currency} >
                            {currency}
                        </option>)
                    })
                }
            </select>
        </div>
    </div>
  )
}

export default InputBox