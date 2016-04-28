
export default class AboutController{
  constructor($log){
    this.title = 'About Page'
    this.log = $log.info;
  }
  changeTitle(){
    this.log(this.newTitle)
    this.title = this.newTitle;
    this.newTitle = null;
  }
}

AboutController.$inject = ['$log'];
