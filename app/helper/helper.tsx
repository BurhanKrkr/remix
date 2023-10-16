export function calculateStars(rating: number) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating / 3) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l-3 3m0 0l3 3m-3-3V9m3 3h-6"
          />
        </svg>
      );
    } else {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l-3 3m0 0l3 3m-3-3V9m3 3h-6"
          />
        </svg>
      );
    }
  }
  return stars;
}
