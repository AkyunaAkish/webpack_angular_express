

export default class HomeController{
  constructor($log, $http){
    this.title = 'Home Page'
    this.log = $log.info;
    this.http = $http;
  }
  changeTitle(){
    this.log(this.newTitle)
    this.title = this.newTitle;
    this.newTitle = null;

    this.http.get('/api/v1/test').then(function(res){
      this.log('res', res);
    });

  }

}

HomeController.$inject = ['$log', '$http'];
