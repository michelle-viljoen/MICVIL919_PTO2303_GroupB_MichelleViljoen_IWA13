let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below

const logCalc = () => { 
  const isString = (typeof(calculated) == 'string')
  const calculatedAsNumber = isString ? parseInt(calculated) : calculated
   calculated = calculatedAsNumber + 1
  return (calculated)
 
}

 const calcUser = () => {
  logCalc()
  if (calculated > 1) user = 'John'
  if (calculated > 2) state = 'requesting'
  if (calculated > 3) state = 'idle'
  return (state)
}

const checkUser = () => {
  //calcUser()
	if (user && state === 'requesting') {
		 console.log((`User: ${user} (${calculated})`))
	}
  function checkUser(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  return checkUser()
}

// // Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()