import React from 'react'

const About = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-12" id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-500 text-center">
          About JetMeal
        </h2>
        <p className="text-lg md:text-xl mb-10 text-center text-gray-600 max-w-3xl mx-auto">
          JetMeal is your go-to destination for lightning-fast food delivery. Whether you're
          craving local delicacies or international cuisine, we connect you with top-rated
          restaurants in your city — right at your fingertips.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-orange-100 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-2 text-orange-600">🚀 Fast Delivery</h3>
            <p className="text-gray-700">
              Our delivery partners ensure your food reaches you hot and fresh in under 30 minutes.
            </p>
          </div>

          <div className="bg-orange-100 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-2 text-orange-600">🍱 Wide Variety</h3>
            <p className="text-gray-700">
              Explore thousands of dishes from your favorite restaurants, all in one place.
            </p>
          </div>

          <div className="bg-orange-100 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-2 text-orange-600">💳 Easy Payments</h3>
            <p className="text-gray-700">
              Pay easily with UPI, cards, or COD. Your comfort and security are our top priorities.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h4 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h4>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At JetMeal, we aim to make food delivery faster, simpler, and more joyful — anytime, anywhere.
            Our goal is to become India's most reliable food delivery network.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About