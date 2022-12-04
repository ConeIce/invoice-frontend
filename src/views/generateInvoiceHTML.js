export default (invoiceData) => {
  return `
        <h1>${invoiceData.name}</h1>

        <p>${invoiceData.customerId}</p>

        <div>
            ${invoiceData.items.map((item) => {
              return `
                <p>${item.name}</p>
                <p>${item.cost}</p>
                <p>${item.quantity}</p>
              `;
            })}
        </div>
    `;
};
