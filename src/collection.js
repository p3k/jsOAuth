    
    Collection = function (object) {
        var args = arguments, args_callee = args.callee, args_length = args.length,
            collection = this, i, hasOwn = object.hasOwnProperty;
            
        if (!(this instanceof args_callee)) {
            return new args_callee(object);
        }
        
        for (i in object) {
            if (hasOwn(i)) {
                collection[i] = object[i];
            }
        }
        
        return collection;
    };
    
    Collection.prototype.keys = function(){
        var i, arr = [], coll = this, hasOwn = coll.hasOwnProperty;
        for (i in coll) {
            if (hasOwn(i)) {
                arr.push(i);
            }
        }
        return arr;
    };
    
    Collection.prototype.values = function(){
        var i, arr = [], coll = this, hasOwn = coll.hasOwnProperty;
        for (i in coll) {
            if (hasOwn(i)) {
                arr.push(coll[i]);
            }
        }
        return arr;
    };
    
    Collection.prototype.shift = function(){};
    Collection.prototype.unshift = function(){};
    Collection.prototype.push = function(){};
    Collection.prototype.pop = function(){};
    Collection.prototype.ksort = function(){};
    Collection.prototype.sort = function(){};
    Collection.prototype.join = function(){};
    Collection.prototype.reverse = function(){};
 
    Collection.prototype.__iterator__ = function(){
        var obj = {1:1,2:2}, hasOwn = obj.hasOwnProperty;
        return {
            next: function() {
                for (i = 0; i < obj.length; i++) {  
                    if (hasOwn(key)) {
                        yeild (key);  
                    }
                }
                throw StopIteration
            }
        };
    };
    
   
    /** closure compiler "export" method, use quoted syntax */
    window['Collection'] = Collection;