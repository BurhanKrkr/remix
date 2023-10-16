import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import { calculateStars } from "~/helper/helper";

export function PhoneCard({ phone, horizontalProducts }: PhoneCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [defaultImage, setDefaultImage] = useState("");
  const [show, setShow] = useState(true);

  useEffect(() => {
    setDefaultImage(phone?.imageUrl);
    setShow(
      horizontalProducts.filter((product) => product.code === phone.code)
        .length > 0
    );
  }, []);

  const changeImage = (direction: string, code: number) => {
    if (direction === "right" || direction === "left") {
      const currentIndex = currentImageIndex;
      let nextIndex;

      if (direction === "right") {
        nextIndex = (currentIndex + 1) % horizontalProducts.length;
      } else {
        nextIndex =
          currentIndex - 1 < 0
            ? horizontalProducts.length - 1
            : currentIndex - 1;
      }

      const matchedProducts = horizontalProducts.filter(
        (product) => product.code === code
      );

      if (matchedProducts.length > 0) {
        const matchedImages = matchedProducts.map(
          (product) => product.imageUrl
        );

        const nextImage = matchedImages[nextIndex];
        if (nextImage) {
          setDefaultImage(nextImage);
          setCurrentImageIndex(nextIndex);
        }
      }
    }
  };

  return (
    <div className="w-80 bg-white shadow rounded group hover:shadow-lg">
      <div className="h-2/3 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center relative">
        <img
          src={defaultImage}
          alt="Background Image"
          className="w-full h-full object-cover object-center"
        />
        <div className="opacity-0 group-hover:opacity-100 absolute top-1/2 transform -translate-y-1/2 left-0">
          {show && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500 ml-2 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => changeImage("left", phone.code)}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          )}
        </div>
        <div className="opacity-0 group-hover:opacity-100 absolute top-1/2 transform -translate-y-1/2 right-0 ">
          {show && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500 mr-2 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => changeImage("right", phone.code)}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}
        </div>
      </div>
      <div className="p-4 flex flex-col items-center">
        <p className="text-gray-400 font-light text-xs text-center">
          {phone.price.toLocaleString("tr-TR", {
            style: "currency",
            currency: "TRY",
          })}
        </p>
        <p className="text-center text-gray-800 mt-1">{phone.name}</p>
        <div className="flex space-x-1 mt-2">
          {calculateStars(phone.dropRatio)}
        </div>
        <Link
          className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
          to={`/detail/${phone.code}`}
        >
          Detail
        </Link>
      </div>
    </div>
  );
}
