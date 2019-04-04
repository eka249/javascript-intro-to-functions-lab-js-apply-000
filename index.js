function shout(string) {
  return string.toUpperCase()
}
shout('Hello')=='HELLO'

function whisper(string) {
  return string.toLowerCase()
}
whisper('HELLo')

jest.spyOn(console, 'log')
function logShout(string) {
  spyon(string).toUpperCase()
}
logShout('hello')
