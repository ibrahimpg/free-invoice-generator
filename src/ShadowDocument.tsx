interface Invoice {
  companyName: string;
  companyAddress: string;
  companyVatNumber: string;
  serviceDescription: string;
  companyRegistrationNumber: string;
  date: string;
  dueDate: string;
  hours: number;
  invoiceNumber: string;
  notes: string;
  terms: string;
  vatPercentage: number;
  currency: "USD" | "EUR" | "SEK";
  hourlyOrTotal: "Hourly" | "Total";
  price: number;
  buyerName: string;
  buyerAddress: string;
  buyerVatNumber: string;
}

const ShadowDocument = ({
  companyName,
  companyAddress,
  companyVatNumber,
  serviceDescription,
  companyRegistrationNumber,
  date,
  dueDate,
  invoiceNumber,
  vatPercentage,
  currency,
  hourlyOrTotal,
  hours,
  price,
  notes,
  terms,
  buyerName,
  buyerAddress,
  buyerVatNumber,
}: Invoice) => {
  const currencySymbol = currency === "USD" ? "$" : currency === "EUR" ? "€" : "kr";
  return (
    <section className="w-full flex-col hidden" id="shadowInvoice">
      <div className="w-full border-b-4 flex items-center p-6 justify-between border-black">
        <div>
          <h2 className="mb-8 text-4xl font-bold">{companyName}</h2>
          {companyAddress && <h2 className="text-lg font-bold">{companyAddress}</h2>}
          {companyVatNumber && <h2 className="text-lg font-bold">VAT # {companyVatNumber}</h2>}
          {companyRegistrationNumber && (
            <h2 className="mb-1 text-lg font-bold">Registration # {companyRegistrationNumber}</h2>
          )}
        </div>
        <h2 className="mb-2 text-xl font-bold">Invoice #{invoiceNumber}</h2>
      </div>
      <div className="w-full flex items-center p-6 justify-between">
        <div>
          <h2 className="mb-1 text-lg font-bold">Invoice To:</h2>
          {buyerName && <h2 className="mb-1 text-lg font-bold">{buyerName}</h2>}
          {buyerAddress && <h2 className="mb-1 text-lg font-bold">{buyerAddress}</h2>}
          {buyerVatNumber && <h2 className="mb-1 text-lg font-bold">VAT # {buyerVatNumber}</h2>}
        </div>
        <div>
          <h2 className="mb-1 text-lg font-bold">Invoice Date: {date}</h2>
          <h2 className="mb-1 text-lg font-bold bg-blue-200 p-2 rounded">Due Date: {dueDate}</h2>
          <h2 className="mb-1 text-lg font-bold mt-4">
            Subtotal: {currencySymbol}
            {hourlyOrTotal === "Total" ? price : hours * price}
          </h2>
          <h2 className="mb-1 text-lg font-bold">
            {`VAT (${vatPercentage}%)`}: {currencySymbol}
            {(hourlyOrTotal === "Total" ? price : hours * price) * (vatPercentage / 100)}
          </h2>
          <h2 className="mb-1 text-lg font-bold mt-4 bg-blue-200 p-2 rounded">
            Amount Due: {currencySymbol}
            {(hourlyOrTotal === "Total" ? price : hours * price) * (1 + vatPercentage / 100)}
          </h2>
        </div>
      </div>

      <div className="w-full flex flex-col items-start p-6 justify-between mt-16">
        <div className="flex w-full py-2 bg-gray-400 px-2 justify-between">
          <div className="w-[25%]">Item</div>
          {hourlyOrTotal === "Hourly" && <div className="w-[25%]">Hours</div>}
          {hourlyOrTotal === "Hourly" && <div className="w-[25%]">Rate</div>}
          <div className="w-[25%]">Amount</div>
        </div>
        <div className="flex w-full py-8 bg-gray-100 px-2 justify-between">
          <div className="w-[25%]">{serviceDescription}</div>
          {hourlyOrTotal === "Hourly" && <div className="w-[25%]">{hours}</div>}
          {hourlyOrTotal === "Hourly" && (
            <div className="w-[25%]">
              {currencySymbol}
              {price}
            </div>
          )}
          <div className="w-[25%]">
            {currencySymbol}
            {hourlyOrTotal === "Total" ? price : hours * price}
          </div>
        </div>
      </div>

      <div className="w-full flex items-start p-6 justify-between mt-16">
        <div className="p-4 bg-gray-100 rounded w-72 min-h-32">
          <h2 className="mb-1 text-lg font-bold">Notes:</h2>
          {notes}
        </div>
        <div className="p-4 bg-gray-100 rounded w-72 min-h-32">
          <h2 className="mb-1 text-lg font-bold">Terms:</h2>
          {terms}
        </div>
      </div>
    </section>
  );
};

export default ShadowDocument;
