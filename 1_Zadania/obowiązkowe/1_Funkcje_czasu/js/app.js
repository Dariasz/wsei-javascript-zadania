function countHello(range) {
  let intervalIteration = 1

  if (range >= 0 && range <= 10) {
    const interval = setInterval(function () {
      console.log(`Hello to już ${intervalIteration}`)

      if (intervalIteration === range) {
        clearInterval(interval)
      }
      intervalIteration++
    }, 500)
  } else {
    console.log('Podałeś zły zasięg')
  }
}

countHello(2)
