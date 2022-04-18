const isOver18 = require('../src/is-over-18')

describe('isOver18', () => {
  it('works with eq', () => {
    const user = { age: 18 }
    expect(isOver18(user)).toBe(true)
  })

  // it('works when over', () => {
  //   const user = { age: 19 }
  //   expect(isOver18(user)).toBe(true)
  // })

  // it('works when under 18', () => {
  //   const user = { age: 17 }
  //   expect(isOver18(user)).toBe(false)
  // })
})
