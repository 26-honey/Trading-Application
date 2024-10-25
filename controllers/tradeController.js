 const trade = require('../models/trade');
const model = require('../models/trade');
 exports.index = (req,res, next) =>{
   // res.send('send all trade details');
   model.find()
   .then(trades => res.render('./trade/index',{trades}))
   .catch(err =>next(err));
};

exports.new = (req,res) =>{
    //res.send('send the new form');
    res.render('./trade/new');
};

exports.create = (req,res, next) =>{
    //res.send('Created a new trade');
    let trade = new model(req.body);
    trade.save()
    .then((trade) =>res.redirect('/trades'))
    .catch(err =>{
        if(err.name = 'ValidationError'){
            err.status = 400;
        }
        next(err);
    });
};

exports.show = (req, res, next) =>{
    let id = req.params.id;
    // an object id is a 24 bit Hex string
    if(!id.match(/^[0-9a-fA-F]{24}$/)){
       let err = new Error('Invalid trade Id');
       err.status= 400;
       return next(err);
    }
    model.findById(id)
    .then(trade=>{
    if(trade){
    res.render('./trade/show', {trade});
    } else{
        let err = new Error('cannot find the model detail with id ' + id);
        err.status = 404;
        next(err);
    }
})
.catch(err=> next(err));
};

exports.edit = (req, res, next) =>{
    let id = req.params.id;
    if(!id.match(/^[0-9a-fA-F]{24}$/)){
        let err = new Error('Invalid trade Id');
        err.status= 400;
        return next(err);
     }
     model.findById(id)
     .then(trade=>{
     if(trade){
        return res.render('./trade/edit', {trade});
     } else{
         let err = new Error('cannot find the model detail with id ' + id);
         err.status = 404;
         next(err);
     }
 })
 .catch(err=> next(err));
 };
   
exports.update = (req, res, next) =>{
    let trade = req.body;
    let id = req.params.id;
    if(!id.match(/^[0-9a-fA-F]{24}$/)){
        let err = new Error('Invalid trade Id');
        err.status= 400;
        return next(err);
     }
     model.findByIdAndUpdate(id, trade, {useFindAndModify: false, runValidators: true})
    .then( trade=>{
        if(trade){
        res.redirect('/trades/'+id);
    } else{
        let err = new Error('cannot find the model detail with id ' + id);
        err.status = 404;
        next(err);
    }
})
.catch(err =>{
    if(err.name === 'ValidationError')
    err.status = 400;
    next(err);
   });
};

exports.delete = (req,res,next)=> {
    let id = req.params.id;
    if(!id.match(/^[0-9a-fA-F]{24}$/)) {
        let err = new Error('Invalid Story Id');
        err.status = 400;
        return next(err);
    }
    model.findByIdAndDelete(id, {useFindAndModify: false})
    .then(trade=>{
        if(trade){
            res.redirect('/trades');
        }else{
            let err = new Error('No Story with id '+id+' found to delete');
            err.status=404;
            return next(err);
        }
    })
    .catch(err => next(err));
};
