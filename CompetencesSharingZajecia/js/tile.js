const newLocal = `  <div class="card" style="width: 12rem;">
                        <h4 class="card-title text-center"> {{$ctrl.competence.Name | lowercase| uppercase}}</h4>
                        <div class="card-body">
                            <img class="card-img-top" ng-src="{{'assets/' +  $ctrl.competence.Picture}}">
                            <h6 class="card-title font-weight-bold" 
                                ng-class="{'competence-level-low': $ctrl.competence.Level < 3, 
                                            'competence-level-high': $ctrl.competence.Level > 3}">
                                Poziom: {{competence.Level| asText:false}}
                            </h6>
                            <p class="card-text" ng-if="competence.Description">Opis: {{competence.Description}}</p>
                        </div>
                    </div>`;
var cHello = {
    bindings:{
        competence: '='
    },
    template: newLocal,
    controller: function(){}
        
    
}