import { Conspiracy } from './conspiracy.model'

describe('Conspiracy (model)', () => {
  let model: Conspiracy

  beforeEach(() => {
    model = new Conspiracy()
  })
  it('should provide defaults on construction', () => {
    expect(model.id).toBeNull()
    expect(model.title).toBeNull()
    expect(model.conspirators instanceof Array).toBe(true)
    expect(model.conspirators.length).toBe(0)
    expect(model.details).toBeNull()
  })
})
