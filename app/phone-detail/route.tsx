import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPhone } from "~/service/app.service";

export let loader: LoaderFunction = async ({ params }) => {
  let { code } = params;

  if (!code) {
    return json({ error: "Invalid Parameter" }, { status: 400 });
  }
  let codeAsNumber = parseInt(code, 10);
  let phone = await getPhone(codeAsNumber);

  return json({ phone });
};

function Detail() {
  const data = useLoaderData<typeof loader>();
  const phone = data?.phone.products;
  console.log(phone);
  return (
    <div>
      <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
        <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
          <img
            className="w-full"
            alt={phone?.productName}
            src={phone?.imageUrl}
          />
        </div>
        <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
          <div className="border-b border-gray-200 pb-6">
            <p className="text-sm leading-none text-gray-600 dark:text-gray-500 ">
              {phone.mkName} / {phone.badge}
            </p>
          </div>
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800 dark:text-gray-500">
              {phone.productName}
            </p>
            <div className="flex items-center justify-center">
              <p className="text-sm leading-none text-gray-600 dark:text-gray-400 mr-3">
                {phone.price.toLocaleString("tr-TR", {
                  style: "currency",
                  currency: "TRY",
                })}
              </p>
            </div>
          </div>
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800 dark:text-gray-500">
              Storage Options
            </p>
            <div className="flex items-center justify-center">
              <p className="text-sm leading-none text-gray-600 dark:text-gray-400 mr-3">
                {phone.storageOptions.map((i: String) => {
                  return (
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-200">
                      {i}
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm leading-none text-gray-600 dark:text-gray-400 mt-4 md:mt-7">
              The iPhone is a perfect example of modern technology. Designed to
              make everyone's life easier and more enjoyable, the iPhone boasts
              an array of incredible features. Here are some of the key
              highlights:
            </p>
            <ul className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-400">
              <li>Sleek and elegant design</li>
              <li>High-resolution Retina display</li>
              <li>Powerful processor</li>
              <li>Outstanding camera quality</li>
            </ul>
            <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-400">
              The iPhone is a game-changer in the world of technology and always
              sets the latest tech trends.
            </p>
          </div>
          <div>
            <div className="border-t border-b py-4 mt-7 border-gray-200">
              <div
                data-menu
                className="flex justify-between items-center cursor-pointer"
              >
                <p className="text-base leading-4 text-gray-800 dark:text-gray-400">
                  Shipping and Returns
                </p>
                <button
                  className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded"
                  role="button"
                  aria-label="show or hide"
                >
                  <svg
                    className="transform text-gray-300 dark:text-white"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 1L5 5L1 1"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                className="hidden pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 dark:text-gray-400"
                id="sect"
              >
                You will be responsible for paying for your own shipping costs
                for returning your item. Shipping costs are nonrefundable.
              </div>
            </div>
          </div>

          <div>
            <div className="border-b py-4 border-gray-200">
              <div
                data-menu
                className="flex justify-between items-center cursor-pointer"
              >
                <p className="text-base leading-4 text-gray-800 dark:text-gray-400">
                  Contact us
                </p>
                <button
                  className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded"
                  role="button"
                  aria-label="show or hide"
                >
                  <svg
                    className="transform text-gray-300 dark:text-white"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 1L5 5L1 1"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                className="hidden pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 dark:text-gray-400"
                id="sect"
              >
                If you have any questions on how to return your item to us,
                contact us.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
