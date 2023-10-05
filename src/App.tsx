import { useState } from "react";
import html2pdf from "html2pdf.js";
import ShadowDocument from "./ShadowDocument";

function App() {
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyVatNumber, setCompanyVatNumber] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [companyRegistrationNumber, setCompanyRegistrationNumber] = useState("");
  const [date, setDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [vatPercentage, setVatPercentage] = useState(25);
  const [currency, setCurrency] = useState<"USD" | "SEK" | "EUR">("USD");
  const [hourlyOrTotal, setHourlyOrTotal] = useState<"Hourly" | "Total">("Hourly");
  const [hours, setHours] = useState(0);
  const [price, setPrice] = useState(0);
  const [notes, setNotes] = useState("");
  const [terms, setTerms] = useState("");

  const [buyerName, setBuyerName] = useState("");
  const [buyerAddress, setBuyerAddress] = useState("");
  const [buyerVatNumber, setBuyerVatNumber] = useState("");

  const downloadInvoice = () => {
    const element = document.getElementById("shadowInvoice")!;
    const clone = element.cloneNode(true) as HTMLElement;
    clone.style.display = "flex";
    const opt = {
      filename: `${companyName} invoice #${invoiceNumber} for ${buyerName}.pdf`,
      html2canvas: { scale: 4 },
    };
    html2pdf().from(clone).set(opt).save();
  };

  return (
    <>
      <section className="bg-gray-900 w-full">
        <div className="px-4 py-8 mx-auto max-w-2xl">
          <h2 className="mb-2 text-xl font-bold text-white">
            Free and Easy Invoice Generator.{" "}
            <a
              href="https://github.com/ibrahimpg/free-invoice-generator"
              className="underline underline-offset-4"
            >
              Source code.
            </a>
          </h2>
          <p className="text-white">
            Leave fields that are irrelevant to you empty. The final invoice that gets downloaded
            should still look good.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2 mt-10">
              <label className="block mb-2 text-sm font-medium text-white">Invoice Date</label>
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                placeholder="4/5/2021, 4-5-2021, etc... use any format you like"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-white">Invoice Due Date</label>
              <input
                type="text"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                placeholder="4/13/2021, 4-13-2021, etc... use any format you like"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-white">Invoice Number</label>
              <input
                type="text"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
                className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                placeholder="1"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-white">Company Name</label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                placeholder="Company Name (or your name)"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-white">Company Address</label>
              <input
                type="text"
                value={companyAddress}
                onChange={(e) => setCompanyAddress(e.target.value)}
                className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                placeholder="Company Address"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-white">
                Company Registration Number
              </label>
              <input
                type="text"
                value={companyRegistrationNumber}
                onChange={(e) => setCompanyRegistrationNumber(e.target.value)}
                className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                placeholder="Company Registration Number"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-white">
                Company VAT Number if EU
              </label>
              <input
                type="text"
                value={companyVatNumber}
                onChange={(e) => setCompanyVatNumber(e.target.value)}
                className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                placeholder="Company VAT Number"
              />
            </div>

            <div className="sm:col-span-2 mt-10">
              <label className="block mb-2 text-sm font-medium text-white">Buyer Name</label>
              <input
                type="text"
                value={buyerName}
                onChange={(e) => setBuyerName(e.target.value)}
                className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                placeholder="Type buyer company or individual name"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-white">Buyer Address</label>
              <input
                type="text"
                value={buyerAddress}
                onChange={(e) => setBuyerAddress(e.target.value)}
                className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                placeholder="Buyer Address"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-white">
                Buyer VAT Number if EU
              </label>
              <input
                type="text"
                value={buyerVatNumber}
                onChange={(e) => setBuyerVatNumber(e.target.value)}
                className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                placeholder="Buyer VAT Number"
              />
            </div>

            <div className="sm:col-span-2 mt-10">
              <label className="block mb-2 text-sm font-medium text-white">
                Description of services/product
              </label>
              <input
                type="text"
                value={serviceDescription}
                onChange={(e) => setServiceDescription(e.target.value)}
                className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                placeholder="Products or services rendered..."
              />
            </div>
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-white">Price</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                placeholder="1000"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-white">Hourly or Total</label>
              <select
                id="hourlyOrTotal"
                defaultValue="Hourly"
                onChange={(e) => setHourlyOrTotal(e.target.value as "Hourly" | "Total")}
                className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="Hourly">Hourly</option>
                <option value="Total">Total</option>
              </select>
            </div>
            {hourlyOrTotal === "Hourly" && (
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-white">Number of hours</label>
                <input
                  type="number"
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                  placeholder="40"
                />
              </div>
            )}
            <div>
              <label className="block mb-2 text-sm font-medium text-white">Currency</label>
              <select
                id="currency"
                defaultValue="Select currency"
                onChange={(e) => setCurrency(e.target.value as "USD" | "EUR" | "SEK")}
                className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="USD">USD</option>
                <option value="SEK">SEK</option>
                <option value="EURO">EURO</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-white">VAT %</label>
              <input
                type="number"
                value={vatPercentage}
                onChange={(e) => setVatPercentage(Number(e.target.value))}
                className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                placeholder="25"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-white">Notes</label>
              <textarea
                id="notes"
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                placeholder="Any additional notes you want to add to the invoice"
              ></textarea>
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-white">Terms</label>
              <textarea
                id="terms"
                rows={4}
                value={terms}
                onChange={(e) => setTerms(e.target.value)}
                className="block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                placeholder="Any additional terms you want to add to the invoice"
              ></textarea>
            </div>
          </div>
          <button
            onClick={downloadInvoice}
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-900 hover:bg-primary-800"
          >
            Print Invoice
          </button>
        </div>
      </section>
      <ShadowDocument
        buyerAddress={buyerAddress}
        buyerName={buyerName}
        buyerVatNumber={buyerVatNumber}
        companyAddress={companyAddress}
        companyRegistrationNumber={companyRegistrationNumber}
        companyName={companyName}
        companyVatNumber={companyVatNumber}
        currency={currency}
        date={date}
        hours={hours}
        notes={notes}
        terms={terms}
        dueDate={dueDate}
        hourlyOrTotal={hourlyOrTotal}
        invoiceNumber={invoiceNumber}
        price={price}
        serviceDescription={serviceDescription}
        vatPercentage={vatPercentage}
      />
    </>
  );
}

export default App;
