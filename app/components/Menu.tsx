"use client";

import { DATA } from "../data";

export default function Menu() {
  return (
    <div className="space-y-16">
      {Object.entries(DATA.MENU).map(([category, details]) => (
        <div
          key={category}
          className="rounded-xl p-8 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {category}
              </h3>
              {"description" in details && details.description && (
                <p className="text-gray-600">{details.description}</p>
              )}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {details.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-semibold text-gray-900">
                      {item.name}
                    </h4>
                    <span className="text-orange-600 font-bold">
                      {item.price}
                    </span>
                  </div>
                  {"desc" in item && item.desc && (
                    <p className="text-gray-600 whitespace-pre-line">
                      {item.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {details.note && (
              <p className="text-center text-gray-600 italic">{details.note}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
