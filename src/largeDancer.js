var makeLargeDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  //this.oldStep = this.step;
};

makeLargeDancer.prototype = Object.create(makeDancer.prototype);
makeLargeDancer.prototype.constructor = makeLargeDancer;

makeLargeDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.addClass('square');
  this.$node.toggle(function(){
    $(this).animate({height:100},200);
  },function(){
    $(this).animate({height:10},200);
  });
};