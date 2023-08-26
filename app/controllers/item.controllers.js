const  db = require("../models");
const Item = db.item;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (req.body.name) {
    res.status(400).send({
        massege: "O conteúdo não pode esta vazio !"
    });
    return;
  }

  const item = {
    name: req.body.name,
    description: req.body.description,
    quantity: req.body.quantity,
    is_flamable: req.body.is_flamable ? req.body.is_flamable: false
  }
  Item.create(item)
    .then(data => {
        req.send(data);
    })

    .catch(err =>{
        res.status(500).send({
            message:
            err.message || "Ocoreu um erro ao criar o item."
        })
  })
};

exports.findAll = (req, res) => {
    const name = req.body.name;
    var condition = name ? {name: {[Op.like]: `%${name}%`}} : null;
   
       items.findAll({where: condition})
       .then(data => {
        req.send(data);
    })

    .catch(err =>{
        res.status(500).send({
            message:
            err.message || "Ocoreu um erro ao lister os itens."
        })
  })
             

};

exports.findOne = (req, res) => {

};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};

exports.deleteALL = (req, res) => {

};

exports.findAllflammabes = (req, res) => {

};