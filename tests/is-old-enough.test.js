const isOldEnough = require('../src/is-old-enough')

describe('isOldEnough', () => {
  it('works with eq', () => {
    const user = { age: 18 }
    expect(isOldEnough(user)).toBe(true)
  })

  it('works when over', () => {
    const user = { age: 19 }
    expect(isOldEnough(user)).toBe(true)
  })

  it('works when under 18', () => {
    const user = { age: 17 }
    expect(isOldEnough(user)).toBe(false)
  })
})
