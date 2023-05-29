// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// Test isPhoneNumber
test('Valid phone number should return true', () => {
  expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('Invalid phone number should return false', () => {
  expect(functions.isPhoneNumber('123-456-789')).toBe(false);
});

test('Valid phone number without area code should return true', () => {
  expect(functions.isPhoneNumber('456-7890')).toBe(true);
});

test('Invalid phone number with alphabets should return false', () => {
  expect(functions.isPhoneNumber('(123) abc-7890')).toBe(false);
});

// Test isEmail
test('Valid email should return true', () => {
  expect(functions.isEmail('test@example.com')).toBe(true);
});

test('Invalid email should return false', () => {
  expect(functions.isEmail('example.com')).toBe(false);
});

test('Valid email with underscore should return true', () => {
  expect(functions.isEmail('test_email@example.com')).toBe(true);
});

test('Invalid email with special characters should return false', () => {
  expect(functions.isEmail('test$@example.com')).toBe(false);
});

// Test isStrongPassword
test('Valid strong password should return true', () => {
  expect(functions.isStrongPassword('Abcdef123')).toBe(true);
});

test('Invalid weak password should return false', () => {
  expect(functions.isStrongPassword('na')).toBe(false);
});

test('Valid strong password with underscore should return true', () => {
  expect(functions.isStrongPassword('Strong_Pass123')).toBe(true);
});

test('Invalid password starting with a number should return false', () => {
  expect(functions.isStrongPassword('1Password')).toBe(false);
});

// Test isDate
test('Valid date should return true', () => {
  expect(functions.isDate('05/28/2023')).toBe(true);
});

test('Invalid date should return false', () => {
  expect(functions.isDate('2023/05/28')).toBe(false);
});

test('Valid date with single-digit day and month should return true', () => {
  expect(functions.isDate('5/8/2023')).toBe(true);
});

test('Invalid date with extra digits should return false', () => {
  expect(functions.isDate('05/28/20230')).toBe(false);
});

// Test isHexColor
test('Valid 3-digit hex color should return true', () => {
  expect(functions.isHexColor('#abc')).toBe(true);
});

test('Invalid hex color should return false', () => {
  expect(functions.isHexColor('ff00gg')).toBe(false);
});

test('Valid 6-digit hex color should return true', () => {
  expect(functions.isHexColor('#aabbcc')).toBe(true);
});

test('Invalid hex color with extra digits should return false', () => {
  expect(functions.isHexColor('#abcdef00')).toBe(false);
});
