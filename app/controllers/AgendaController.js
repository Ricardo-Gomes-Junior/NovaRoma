const Agenda = require("../models/Agenda");

function TaskController() {
  function list(req, res) {
    Agenda.findAll({ raw: true })
      .then((data) => {
        res.render("agendas/list", {
          title: "Lista de Contatos",
          agendas: data,
        });
      })
      .catch((err) => console.log(err));
  }

  function create(req, res) {
    res.render("agendas/create");
  }

  function save(req, res) {
    const agenda = {
        nome: req.body.nome,
        celular: req.body.celular, 
        email: req.body.email, 
        rua: req.body.rua, 
        numero: req.body.numero, 
        bairro: req.body.bairro, 
        cidade: req.body.cidade,
        estado: req.body.estado, 
        cep: req.body.cep, 
        complemento: req.body.complemento 
    };

    Agenda.create(agenda)
      .then(res.redirect("/agendas"))
      .catch((err) => console.log(err));
  }

  function remove(req, res) {
    const id = req.params.id;

    Agenda.destroy({ where: { id: id } })
      .then(res.redirect("/agendas"))
      .catch((err) => console.log(err));
  }

  function edit(req, res) {
    const id = req.params.id;

    Agenda.findOne({ where: { id: id }, raw: true })
      .then((data) => {
        res.render("agendas/edit", { agenda: data });
      })
      .catch((err) => console.log());
  }

  function update(req, res) {
    console.log(req.body);
    const id = req.body.id;

    const agenda = {
        nome: req.body.nome,
        celular: req.body.celular, 
        email: req.body.email, 
        rua: req.body.rua, 
        numero: req.body.numero, 
        bairro: req.body.bairro, 
        cidade: req.body.cidade,
        estado: req.body.estado, 
        cep: req.body.cep, 
        complemento: req.body.complemento
    }

    Agenda.update(agenda, { where: { id: id } })
      .then(res.redirect("/agendas"))
      .catch((err) => console.log(err));
  }

  return {
    create,
    save,
    list,
    remove,
    edit,
    update,
  };
}

module.exports = TaskController();
