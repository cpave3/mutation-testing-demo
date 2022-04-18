const isOver18 = require('./is-over-18')

describe('isOver18', () => {
  it('works with eq', () => {
    expect(isOver18(18)).toBe(true)
  })

  it('works when over', () => {
    expect(isOver18(19)).toBe(true)
  })

  it('works when under 18', () => {
    expect(isOver18(17)).toBe(false)
  })
})
