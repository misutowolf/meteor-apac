apac=Npm.require("apac");
 
function makeSyncMethod(method){
	var wrapped=Meteor._wrapAsync(method);
	var syncMethod=function(){
		return wrapped.apply(this,arguments);
	};
	return syncMethod;
}

_.extend(apac.prototype, {
	executeSync: makeSyncMethod(apac.OperationHelper.prototype.execute)
});