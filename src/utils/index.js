export const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false
  return num > 1
}

const isPerfectSquare = x => {
  let s = parseInt(Math.sqrt(x))
  return s * s === x
}

export const isFibonacci = n => {
  return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4)
}
