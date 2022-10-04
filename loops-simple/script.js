const elements = [
  { tag: 'h1', text: 'TEY' },
  { tag: 'p', text: 'TEY 2' },
  { tag: 'p', text: 'TEY 3' },
  { tag: 'p', text: 'TEY 4' },
  { tag: 'p', text: 'TEY 4' },
]

const container = document.querySelector('.container')
const div = document.createElement('div')

for (let i = 0; i < elements.length; i++) {
  let { tag, text } = elements[i]
  let elementTag = document.createElement(tag)
  elementTag.innerHTML = text

  div.appendChild(elementTag)
  container.appendChild(div)
}
