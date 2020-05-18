/**
 *  A simple validation function created to validate emails.
 *  **Keep in mind that the best solution is to validate emails at the server side.**
 * @name isValidEmail
 * @version 0.1.0
 * @param {string} email The email you want to validate.
 * @returns {boolean} Returns `true` if it is a valid email or `false` if it isn't.
 */
export const isValidEmail = (email: string) : boolean => {
  const regex: RegExp = /^([a-z0-9]+(\.[a-z0-9]+)*|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
  if(email) {
    const test = regex.test(email)
    if(test) { 
      return true 
    } else { 
      return false 
    }
  } else {
    return false
  }
}


/**
 *  Validate if the given string have the shape of a mobile phone number.
 * @name isValidMobilePhone
 * @version 0.1.0
 * @param {string} phone The phone you want to validate.
 * @param {boolean} validateDDD A boolean flag that indicates if you are usign ddd on the provided number
 * @returns {boolean} Returns `true` if it is a valid mobile phone or `false` if it isn't.
 */
export const isValidMobilePhone = (phone : string, validateDDD: boolean = false) : boolean => {
  if(!phone){
    return false
  }

  const clean = phone.replace(/\D/, "")

  if(!clean || clean.length > 11) {
    return false
  }

  if(validateDDD && clean.length !== 11){
    return false
  }

  if(!validateDDD && clean.length !== 9) {
    return false
  }

  const ddds = [
    "11", "12", "13", "14", "15", "16", "17", "18", "19", "21", "22", "24", "27", 
    "28", "31", "32", "33", "34", "35", "37", "38", "41", "42", "43", "44", "45",
    "46", "47", "48", "49", "51", "53", "54", "55", "61", "62", "63", "64", "65",
    "66", "67", "68", "69", "71", "73", "74", "75", "77", "79", "81", "82", "83",
    "84", "85", "86", "87", "88", "89", "91", "92", "93", "94", "95", "96", "97",
    "98", "99"
  ]

  if(validateDDD){
    const ddd = clean.substring(0,2)
    const search = ddds.find(item => item === ddd)
    if(!search){
      return false
    }
  }

  const regex: RegExp = clean.length === 9 ? /(9)\d{8}$/ : /\d{2}(9)\d{8}$/
  const test = regex.test(clean)
  if(test) { 
    return true 
  } else { 
    return false 
  }
}

/**
 *  Validate if the given string have the shape of a phone number.
 * @name isValidPhone
 * @version 0.1.0
 * @param {string} phone The phone you want to validate.
 * @param {boolean} validateDDD A boolean flag that indicates if you are usign ddd on the provided number
 * @returns {boolean} Returns `true` if it is a valid phone or `false` if it isn't.
 */
export const isValidPhone = (phone: string, validateDDD: boolean = false): boolean => {
  if(!phone) {
    return false
  }

  const clean = phone.replace(/\D/, "")

  if(!clean || clean.length > 10) {
    return false
  }

  if(validateDDD && clean.length !== 10){
    return false
  }

  if(!validateDDD && clean.length !== 8) {
    return false
  }

  const ddds = [
    "11", "12", "13", "14", "15", "16", "17", "18", "19", "21", "22", "24", "27", 
    "28", "31", "32", "33", "34", "35", "37", "38", "41", "42", "43", "44", "45",
    "46", "47", "48", "49", "51", "53", "54", "55", "61", "62", "63", "64", "65",
    "66", "67", "68", "69", "71", "73", "74", "75", "77", "79", "81", "82", "83",
    "84", "85", "86", "87", "88", "89", "91", "92", "93", "94", "95", "96", "97",
    "98", "99"
  ]

  if(validateDDD){
    const ddd = clean.substring(0,2)
    const search = ddds.find(item => item === ddd)
    if(!search){
      return false
    }
  }

  const regex: RegExp = clean.length === 8 ? /\d{8}$/ : /\d{2}\d{8}$/
  const test = regex.test(clean)
  if(test) { 
    return true 
  } else { 
    return false 
  }
}

/**
 *  Validate if the given string have the shape of a zipcode.
 * @name isValidZipCode
 * @version 0.1.0
 * @param {string} zipcode The zipcode you want to validate.
 * @returns {boolean} Returns `true` if it is a valid phone or `false` if it isn't.
 */
export const isValidZipCode = (zipcode: string): boolean => {
  if(!zipcode){
    return false
  }
  
  const clean = zipcode.replace(/\D/, "")


  if(clean.length === 8){
    return true
  } else {
    return false
  }
}

/**
 *  Validate if the given string is empty or not.
 * @name isEmptyString
 * @version 0.1.0
 * @param {string} text The text you want to validate.
 * @returns {boolean} Returns `true` if the string is empty or `false` if it isn't.
 */
export const isEmptyString = (text: string): boolean => {
  if(!text){
    return true
  } else {
    return false
  }
}

/**
 *  Validate if the name provided is valid or not.
 *  **The function accepts capital letters as a valid name.**
 * @name isValidName
 * @version 0.1.0
 * @param {string} name The name you want to validate.
 * @param {boolean} single A boolean param to check if this is a single or composed name.
 * @returns {boolean} Returns `true` if the name is valid or `false` if it isn't.
 */
export const isValidName = (name: string, single: boolean = true): boolean => {
  if(!name){
    return false
  }

  const arrayChecks: boolean[] = []
  const validName: RegExp = /^([a-zA-Z]+)$/
  const separateNames = name.split(' ')

  if(!single && separateNames.length === 1){
    return false
  }

  if(separateNames.map(name => name.length <= 1)) {
    return false
  }

  separateNames.forEach(name => {
    const result = validName.test(name)
    arrayChecks.push(result)
  })

  if(arrayChecks.find(i => i === false)) {
    return false
  } else {
    return true
  }
}

