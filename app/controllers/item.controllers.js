const  db = require("../models");
const Item = db.ietm;
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
   
       item.findAll({where: condition})
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
  const id = req.params.id;

  item.findByPK(id)
  .then(data =>{
    if (data){
      res.send(data);
    }else{
      res.status(404).send({
        message: `Não foi possível encontrar um item com o id=${id}.`
      });
    }
  })
  .catch(err =>{
    res.status(500).send({
      message: "Ocorreu um erro ao tentar encontrar um item com o id =" +id
    });
  })
};

exports.update = (req, res) => {
  const id = req.params.id;

  Item.update(req.body, {
  where: {id: id}
  })
  .then(num => {
    if(num == 1){
      res.send({
        message: "O item foi atualizado de maneira bem sucedida"
      });
    }else{
      res.send({
      message: `Não foi possivel atualizar o item com o id=${id}.`  
      })
    }
  })
  .catch(err =>{
    res.status(500).send({
      message: "Ocorreu um erro ao tentar atualizar um item com o id = " + id
    });
  })
  
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Item.destroy({
    where: {id: id}
  })
  .then(num => {
    if(num == 1){
      res.send({
        message: "O item foi apagado com sucesso!"
      })
    } else {
      res.send({
        message: `Nâo foi possivel apagar o item com o id= ${id}`
      })
    }
  })
  .catch(err =>{
    res.status(500).send({
      message: "Ocorreu um erro ao tentar apagar o item com o id=" +id
    })
  })
};

exports.deleteALL = (req, res) => {
  Item.destroy({
    where: {},
    truncate: false
  })
  .then(nums =>{
    res.send({ message :`${nums} Itens foram apagados com sucessos.`});
  })
  .catch(err => {
    res.status(500).send({
      message:
      err.message || "Algum erro ocorreu ao tentar apagar todos os itens."
    })
  })
};

exports.findAllflammabes = (req, res) => {
  Item.findAllflammabes({
    where: {isflammable: true}
  })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
      err.message || "Alguem erro ocorreu ao tentar pesquisar todos os itens inflamáveis."
    })
  })
  
};