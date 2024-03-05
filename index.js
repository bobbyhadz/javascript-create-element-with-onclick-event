console.log('bobbyhadz.com');

// ✅ Create element
const el = document.createElement('div');

el.addEventListener('click', function handleClick(event) {
  console.log('element clicked 🎉🎉🎉', event);
});

// ✅ Add text content to the element
el.textContent = 'Hello world';

// ✅ Or set the innerHTML of the element
// el.innerHTML = `<span>Hello world</span>`;

el.style.backgroundColor = 'salmon';
el.style.width = '150px';
el.style.height = '150px';

// ✅ add element to DOM
const box = document.getElementById('box');
box.appendChild(el);
