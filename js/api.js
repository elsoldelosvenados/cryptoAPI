
/**
  * @description This class will take care to request the data
  * to api and to return this data in JSON
  * @param {string} apikey the key to request data
  * @author Andres Acosta
*/
class API{

      constructor(apikey){
        console.log('puto')
          this.apikey = apikey
      }

      /**
      * @description Get all the supported cryptocurrencies to make a quote
      * and return them as JSON
      * @return {object} coins the list of coins
      * @author Andres Acosta
      */
      async getAllCryptocurrencies(){
            const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`

            const requestToAPI = await fetch(url)

            const cryptocurrencies = await requestToAPI.json()

            return {
                cryptocurrencies
            }
      }
      /**
        * @description this method will take car to make the quote
        * between a coin and cryptocurrency then return the result like JSON
        * @param {string} currency the original currency to be become to cryptocurrency
        * @param {string} cryptoCurrency the cryptocurrency to which the original currency
        * will be becomed
        * @return {object} the result of conversion like as JSON
        * @author Andres Acosta
      */
      async getValues(currency, cryptoCurrency) {
            const url  = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}&api_key=${this.apikey}`

            const requestToAPI = await fetch(url)

            const result = await requestToAPI.json()

            return {
                result
            }
      }
}
