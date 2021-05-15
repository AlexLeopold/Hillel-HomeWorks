window.onload = () => {
    console.log('app started.', DATABASE);
    const PLP = document.getElementById('container');
    let filter = document.getElementById('filterBy');
    let template = '';

    DATABASE.forEach(item => {
      let element = new Render('template', item);
      template += element.render();
    });
    PLP.innerHTML = template;
    manageQuantity()

    filter.addEventListener('change', function (e) {
      let filteredBy = e.target.value;
      let template = '';
      PLP.innerHTML = '';
    
      DATABASE.sort(function(a, b) {
        if ( a[filteredBy] < b[filteredBy] )
            return -1;
        if ( a[filteredBy] > b[filteredBy] )
            return 1;
        return 0;
      });
    
      DATABASE.forEach(item => {
        let element = new Render('template', item);
        template += element.render();
      });
      PLP.innerHTML = template;
      manageQuantity()
    })
};

class Render {
  constructor(templateId, data) {
    this.template = document.getElementById(templateId).innerText;
    this.data = data;
  }

  render() {
    for(let key in this.data) {
      this.template = this.template.replace(`{{${key}}}`, this.data[key]);
    }
    return this.template;
  }
}

function manageQuantity () {
  let contentQuantity = document.querySelectorAll('.plp__content--quantity');
  for(let key in contentQuantity) {
    if(contentQuantity.hasOwnProperty(key))
    contentQuantity[key].addEventListener('click', e => {
    let targ = e.target;
    let i = targ.parentElement.querySelector('.js-selector-quantity');
      if(targ.classList.contains('js-button-plus')) {
        i.innerText++
      } else if(targ.classList.contains('js-button-minus')) {
        if(i.innerText > 0) {
          i.innerText--
        }
      }
  })
}}