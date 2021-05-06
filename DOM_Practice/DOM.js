const container = document.querySelector('.container');
const obj = {
   first: {
      tagName: 'h3',
      text: 'Test Done 01',
      attrs: [['id', 'TD01']],   
   },
   second: {
      tagName: 'div',
      text: 'Test Done 01',
      attrs: [['style', 'color:blue']],
   },
   third: {
      tagName: 'i',
      text: 'Test Done 01',
      attrs: [['style', 'color:yellow']],   
   }
}

for (let key in obj) {
   let node = DOMCreator(obj[key]);
   if (node) {
      container.appendChild(node);
   }
}

function DOMCreator (data) {
   let tag;
   if (!data.tagName) {
      console.error('TagName is mandatory');
      return false;
   }
   tag = document.createElement(data.tagName);

   if(data.text !== '') {
      tag.appendChild(document.createTextNode(data.text));
   }

   if(data.attrs.length > 0) {
      data.attrs.forEach(item => {
         tag.setAttribute(item[0], item[1]);
      })
   }
   return tag;
}


// _________________________________________________________________
// const arr = [
//    ['h1', 'Hello World!', []],
//    ['h3','Colored text', [['style', 'color:blue']]],
//    ['p', 'Some text Some text Some text Some text', []],
// ];

// for (let key of arr) {
//    let node = DOMCreator(key[0], key[1], key[2]);
//    if (node) {
//       container.appendChild(node);
//    }
// }

// function DOMCreator (tagName = false, text = '', attrs = []) {
//    let div;
//    if (!tagName) {
//       console.error('TagName is mandatory');
//       return false;
//    }
//    div = document.createElement(tagName);

//    if(text !== '') {
//       div.appendChild(document.createTextNode(text));
//    }

//    if(attrs.length > 0) {
//       attrs.forEach(item => {
//          div.setAttribute(item[0], item[1]);
//       })
//    }
//    return div;
// }