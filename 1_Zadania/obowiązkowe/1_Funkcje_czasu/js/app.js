function countHello(range) {
  let intervalIteration = 0

  if (range >= 0 && range <= 10) {
    setInterval(function () {
      if (intervalIteration !== range) {
        intervalIteration++
        console.log(`Hello to już ${intervalIteration}`)
      }
    }, 500)
  } else {
    console.log('Podałeś zły zasięg')
  }
}

countHello(2)
