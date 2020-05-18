/**
 *  A simple validation function created to validate emails.
 *  **Keep in mind that the best solution is to validate emails at the server side.**
 * @name isValidEmail
 * @version 0.1.0
 * @param {string} email The email you want to validate.
 * @returns {boolean} Returns `true` if is a valid email or `false` if it isn't.
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
 * @returns {boolean} Returns `true` if is a valid mobile phone or `false` if it isn't.
 */
export const isValidMobilePhone = (phone : string, validateDDD: boolean = false) : boolean => {
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