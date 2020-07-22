/**
  * @description This class will take care to control all
  * about interface like show or hidde imfromation or messages.
  * @author Andres Acosta
*/
class Interface {
      /**
        * Initialize the dropdown in DOM calling the method
        * buildSelect()
      */
      constructor(){
          this.init()
      }

      init(){
          this.buildSelect()
      }

      /**
        * @description Execute the method getAllCryptocurrencies() then
        * create a dropdown to show the result as options of the dropdown
        * @return {void}
        * @author Andres Acosta
      */
      buildSelect(){

            QUOTE.getAllCryptocurrencies()
            .then(currencies => {

                  const select = document.getElementById('criptomoneda')


                  for(const [key, value] of Object.entries(currencies.cryptocurrencies.Data)) {
                        const option  = document.createElement('option')
                        option.value = value.Symbol
                        option.appendChild(document.createTextNode(value.CoinName))
                        select.appendChild(option)
                  }

            })
      }
      /**
        * @description Show a message in the DOM according whit
        * the parameters provided
        * @param  {string} message the content to show in the DOM
        * @param {string} CSSclass the styles to assign to the message
        * @return {void}
        * @author Andres Acosta
      */
      showMessage(message, CSSclass){

            const div = document.createElement('div')
            div.className = CSSclass
            div.appendChild(document.createTextNode(message))

            const divMessage = document.querySelector('.mensajes')
            divMessage.appendChild(div)

            setTimeout(()=> div.remove(),3000)

      }
      /**
        * @description Receive the result of the conversion and
        * show it in the DOM
        * @param  {object} resurl object with de imformation of the conversion
        * @param {string} currency currency from which  the conversion was did
        * @param {cryptoCurrency} crypto to which the conversion was did
        * @return {void}
        * @author Andres Acosta
      */
      showResult(result, currency, cryptoCurrency){

            const lastResult= document.querySelector('#resultado > div')

            if(lastResult){
                  lastResult.remove()
            }

            const currencyData = result[cryptoCurrency][currency]

            let price = currencyData.PRICE.toFixed(2),
               percentage = currencyData.CHANGEPCTDAY.toFixed(2),
               updated = new Date(currencyData.LASTUPDATE * 1000).toLocaleDateString('es-MX');

            let HTMLTepmlate =  `
                  <div class="card bg-warning">
                      <div class="card-body text-light">
                        <h2 class="card-title"> Result:</h2>
                        <p>The price of ${currencyData.FROMSYMBOL} to currency ${currencyData.TOSYMBOL} is: $ ${price}</p>
                        <p>Variación último día: %${percentage}</p>
                        <p>Última Actualización: ${updated}</p>
                      </div>
                  </div>
            `
            this.showOrHiddeSpiner('block')

            setTimeout(() => {
                  document.querySelector('#resultado').innerHTML = HTMLTepmlate

                  this.showOrHiddeSpiner('none')
            },3000)


      }
      /**
        * @description Show or hidde a loading spinner according whit
        * the parameter
        * @param {string} display the value for property CSS display
        * @return {void}
      */
      showOrHiddeSpiner(display){
            const spinner = document.querySelector('.contenido-spinner')
            spinner.style.display = display
      }


}
