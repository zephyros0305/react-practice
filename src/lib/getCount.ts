function getCount(): Promise<number> {
  return new Promise((res) => {
    setTimeout(() => {
      const count = 15
      res(count)
    }, 50)
  })
}

export { getCount }
