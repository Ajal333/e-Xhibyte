const { User } = require("../models/user.model");
const { ProductExb } = require("../models/productExb.model");

/*exports.viewProductExb = (req, res, next) => {
    ProductExb.find({isLive : true} ,(fairs,err) => {
        if(err) {
            console.log(err);
            return next(err);
        }
        return res.render('fests/productExb' , {fairs:fairs});
    })
}*/
exports.viewProductExb = (req, res) => {
  ProductExb.find({}, (err, exbs) => {
    var exbList = [];
    var n = 0;
    exbs.forEach((exb) => {
      exbList[n] = exb;
      n++;
    });

    res.render("fests/productExb", { exbList: exbList });
  });
};

exports.viewProductExbForm = (req, res) => {
  res.render("fests/addProductExb");
};

exports.addProductExb = (req, res, next) => {
  let newProductExb = new ProductExb({
    userId: req.user.id,
    name: req.body.name,
    organizer: req.body.organiser,
    location: req.body.location,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
  });

  newProductExb.save((err) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    console.log("New product exb added");
    return res.redirect("/productExb");
  });
};

exports.viewDeletePage = (req, res) => {
  res.render("fests/deleteProductExb");
};

exports.deleteProductExb = (req, res) => {
  ProductExb.findByIdAndDelete({ _id: req.params.id }, (err) => {
    if (err) {
      console.log("Error in deleting Product Exb");
      return next(err);
    }
    console.log("Product Exb deleted");
    return res.redirect("/productExb");
  });
};

exports.viewApplicantForm = (req, res) => {
  res.render("fests/addApplicant");
};

exports.addApplicantPE = (req, res, next) => {
  ProductExb.findById({ _id: req.params.id }, (productExb, err) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    let newApplicant = new applicant({});
    newApplicant.save((err) => {
      if (err) {
        console.log(err);
        return next(err);
      }
      console.log("Applicant added to Product Exb");
      return res.redirect("/productExb/:id");
    });
  });
};

/*exports.viewPEById = (req, res, next) => {
    ProductExb.findById({_id : req.params.id}, (fairs , err) => {
        if(err) {
            console.log(err);
            return next(err);
        }
        console.log('Product Exb found');
        return res.render('fests/productExb',{fairs:fairs})
    })
}*/
exports.viewPEById = (req, res) => {
  res.render("fests/productExbPage");
};

exports.viewUpProductExb = (req, res, next) => {
  ProductExb.find({ startDate: { $gt: Date.now() } }, (fairs, err) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    console.log("Showing upcoming Product Exb");
    return res.render("fests/productExb", { fairs: fairs });
  });
};
