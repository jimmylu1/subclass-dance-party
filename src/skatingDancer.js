var makeSkatingDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  //this.oldStep = this.step;
};

makeSkatingDancer.prototype = Object.create(makeDancer.prototype);
makeSkatingDancer.prototype.constructor = makeSkatingDancer;

makeSkatingDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  
  var keptNode = this.$node;
  this.$node.attr('id', 'pacman');
  this.$node.addClass('moving');
  // setInterval(function(){
  //   keptNode.stop(true,true).animate({left: 1300}, 3000, 
  //         function(){ $(this).stop(true,true).animate({left: 0}, 3000); 
  //   });
  // }, 2000);
};


