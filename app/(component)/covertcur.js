import React from "react";

function ConvertCur() {
  return (
    <div className="flex justify-center items-center">
      <iframe
        title="fx"
        src="https://wise.com/gb/currency-converter/fx-widget/converter?sourceCurrency=GBP&targetCurrency=EUR"
        height="490"
        width={`100%`}
        frameBorder="0"
        allowTransparency={true} // ✅ React requires camelCase
      ></iframe>
    </div>
  );
}

export default ConvertCur;
