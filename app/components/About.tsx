"use client";

export default function About() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Bringing authentic, home-cooked Indian meals to your doorstep
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-orange-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🍽️</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Freshly Made
            </h3>
            <p className="text-gray-600">
              Prepared with love & care, ensuring authentic flavors in every
              bite
            </p>
          </div>

          <div className="bg-orange-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">💸</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Affordable
            </h3>
            <p className="text-gray-600">
              Quality meals at reasonable prices, making good food accessible to
              everyone
            </p>
          </div>

          <div className="bg-orange-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🍃</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Healthy Ingredients
            </h3>
            <p className="text-gray-600">
              Using fresh, quality ingredients that nourish your body and soul
            </p>
          </div>

          <div className="bg-orange-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-600">
              Quick and reliable delivery straight to your doorstep
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-orange-100 rounded-full px-6 py-3">
            <p className="text-lg font-semibold text-gray-900">
              📲 Order Now:{" "}
              <a
                href="tel:403-494-9001"
                className="text-orange-600 hover:text-orange-700"
              >
                403-494-9001
              </a>
            </p>
          </div>
          <p className="mt-4 text-gray-600">
            Delicious, fresh, home-cooked meals are just a tap away!
          </p>
          <p className="text-gray-500 italic">Convenient. Affordable. Tasty.</p>
        </div>
      </div>
    </div>
  );
}
