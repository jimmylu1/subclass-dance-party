var makeSkatingDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  //this.oldStep = this.step;
};

makeSkatingDancer.prototype = Object.create(makeDancer.prototype);
makeSkatingDancer.prototype.constructor = makeSkatingDancer;

makeSkatingDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.addClass('blueDancer');
  this.$node.animate({left: '1500px'});  
};