import { Card } from 'antd'

interface Currency {
  id: number
  name: string
  price: string
  icon: string
}

export default function CurrencyCards({ currencies, isDarkMode }: any) {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {currencies.map((currency: Currency) => (
        <Card
          key={currency.id}
          className={`relative rounded-xl shadow-xl p-6 flex items-center justify-between ${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
          }`}
          style={{ minWidth: '280px', maxWidth: '350px' }}
        >
          {/* Flower Design in the Corner */}
          <div className="absolute top-0 right-0 mt-4 mr-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center">
              <span className="text-white font-bold text-xl">🌸</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src={currency.icon}
              alt={`${currency.name} icon`}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold">{currency.name}</h3>
              <p className="text-lg font-medium">{currency.price}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
