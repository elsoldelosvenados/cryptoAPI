const QUOTE = new API('2e2e7edeb8f0097a0e29be9f84caa9a6ee55e413e14df8317fd6895a6613b67e')
const UI = new Interface()


/**
  * Get form whit de coins and cryptocoins.
*/
const FORM = document.querySelector('#formulario')

/**
  * As soon as hte user clicks the button this event
  * will be executed getting the values from fields then
  * it will validate that they are not empty to finally
  * do the request to the API and to show the reponse.
*/
FORM.addEventListener('submit', (e)=>{
      e.preventDefault()

      /**
        * Get the coin sleected
      */
      const selectCoin = document.querySelector('#moneda')
      const selectedCoin = selectCoin.options[selectCoin.selectedIndex].value

      /**
        * Get the cryptocoin sleected
      */
      const selectCrypto = document.querySelector('#criptomoneda')
      const selectedCrypto = selectCrypto.options[selectCrypto.selectedIndex].value

      /**
        * Validate form
      */
      if(selectedCrypto === '' || selectedCoin === ''){
            UI.showMessage('All fields must be filled','alert bg-danger text-center')
      } else {
            console.log('Paso')
            QUOTE.getValues(selectedCoin,selectedCrypto)
            .then(data =>{
                  UI.showResult(data.result.RAW, selectedCoin, selectedCrypto)
            })
      }
})
