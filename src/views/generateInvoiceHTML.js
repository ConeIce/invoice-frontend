export default (invoiceData, customerData) => {
  return `
  <section>
    <header class="py-12 px-16 bg-red-500 text-white">
        <h1 class="font-semibold text-xl">Invoice</h1>
        <h1 class="font-semibold text-xl">${invoiceData.name}</h1>

        <p class="my-5">To</p>

        <p>${customerData.name}</p>
        <p>${customerData.city}</p>
        <p class=" mb-8">${customerData.country}</p>

        <span class="bg-red-50 text-xs text-slate-900 rounded-full py-1 px-4"><span class="-translate-y-2">${
          customerData.email
        }</span></span>
        <span class="bg-red-50 text-xs text-slate-900 rounded-full py-1 px-4"><span class="-translate-y-2">${
          customerData.phone
        }</span></span>
    </header>
    </section>
    <main class="py-12 px-16">
        <h2 class="text-xl">Your items</h2>

        <header class="mt-8 mb-2 flex justify-between p-2 text-xs">
            <p class="basis-1/4">Name</p>
            <p class="basis-1/4">Price</p>
            <p class="basis-1/4">Quantity</p>
            <p class="basis-1/4">Total</p>
        </header>

        <div class="h-1 bg-slate-50"></div>

        ${invoiceData.items
          .map((item) => {
            return `
            <div class="mb-2 flex justify-between p-2 text-xs">
                <p class="basis-1/4">${item.name}</p>
                <p class="basis-1/4">$${item.cost}</p>
                <p class="basis-1/4">${item.quantity}</p>
                <p class="basis-1/4">$${item.cost * item.quantity}</p>
            </div>
            `;
          })
          .join("")}

        <div class="mt-8 h-1 bg-slate-50"></div>

        <div class="mt-4 flex justify-between p-2 text-xs">
            <p class="basis-1/4"></p>
            <p class="basis-1/4"></p>
            <p class="basis-1/4"></p>
            <p class="basis-1/4">$${invoiceData.items.reduce((acc, curr) => {
              return acc + curr.cost * curr.quantity;
            }, 0)}</p>
        </div>
    </main>
    `;
};
