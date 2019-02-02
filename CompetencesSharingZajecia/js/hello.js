const newLocal = `<div class="alert alert-success" role="alert">
                    Witaj! <b>{{$ctrl.firstlastname}}</b> z {{$ctrl.user.Company}} specjalisto od <i>{{$ctrl.competence.Name}}
                </div>`;
var cHello = {
    bindings:{
        firstlastname: "@",
        competence: '='
    },
    template: newLocal,
    controller: function (){
        this.user = {Company: 'WSB'};
    }
}