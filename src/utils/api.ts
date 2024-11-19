export async function fetchCryptoData() {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true')

    
    return await response.json()
  }
  
  export async function updateStaticCurrency(id:any, amount:number) {
    // In a real application, you would make an API call here
    // For this example, we'll just return the updated data
    return { id, amount }
  }