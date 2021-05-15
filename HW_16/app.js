class myAccorderon {
  constructor(config) {
    this.config = config;
    this.myAcc = null;
    this.render();

  }

  render() {
    this.myAcc = document.createElement('div');
    this.myAcc.setAttribute('class', 'myAccordeon');

    for (let item of this.config.items) {
        this.myAcc.appendChild(
        this.renderItem(item)
      );
    }
    this.config.element.appendChild(this.myAcc)
  }

  renderItem(item) {
    let accItem = document.createElement('div'),
        accTitle = document.createElement('div'),
        accContent = document.createElement('div'),
        opened = item.opened ? ' ': 'hidden',
        chevron = item.opened ? 'chevron-up' : 'chevron-down';

    accItem.setAttribute('class', 'myAccordeon__item');
    accTitle.setAttribute('class', 'myAccordeon__title');
    accTitle.innerHTML = `
        <hr><span class="myAccordeon__title--text">${item.title}</span>
        <span class="myAccordeon__title--chevron ${chevron}"></span>`;
    accContent.setAttribute('class', `myAccordeon__content ${opened}`);
    accContent.innerText = item.content;
    accItem.appendChild(accTitle);
    accItem.appendChild(accContent);

    this.addEvent(accItem);

    return accItem;
  }

  closeAll() {
    let title = this.myAcc.querySelectorAll('.myAccordeon__title--chevron');
    let content = this.myAcc.querySelectorAll('.myAccordeon__content');
    for(let key of title) {
        key.classList.remove('chevron-up');
        key.classList.add('chevron-down')
    }
    for(let key of content) {
        key.classList.add('hidden')
    }
  }


  addEvent(item) {
    let title = item.querySelector('.myAccordeon__title');
    let content = item.querySelector('.myAccordeon__content');

    title.addEventListener('click', e => {
      let chevron = title.querySelector('.myAccordeon__title--chevron');

        if(chevron.classList.contains('chevron-up')) {
          chevron.classList.toggle('chevron-down');
          chevron.classList.toggle('chevron-up');
          content.classList.toggle('hidden');
        } else {
          this.closeAll();
          chevron.classList.toggle('chevron-down');
          chevron.classList.toggle('chevron-up');
          content.classList.toggle('hidden');
        }
    });
  }
}
window.onload = () => {
    console.log('app started.');

    new myAccorderon({
      element: document.getElementById('container1'),
      items:[ 
        { title: 'First Title', content: 'First content text', opened: true },
        { title: 'Second Title', content: 'Second content text'},
        { title: 'Third Title', content: 'Third content text'},
        { title: 'Forth Title', content: 'Forth content text'},
        { title: 'Fifth Title', content: 'Fifth content text'}
      ]
    });
};