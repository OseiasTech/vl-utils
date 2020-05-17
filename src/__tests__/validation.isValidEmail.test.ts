import { isValidEmail } from '../validation/index'

test('is valid email', () => {
  const validEmail = 'lucas@hotmail.com'
  const invalidEmail = 'lUcas@enterprise1.com.br'
  expect(isValidEmail(validEmail)).toBe(true)
  expect(isValidEmail(invalidEmail)).toBe(false)
})