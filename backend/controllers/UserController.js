const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM user", (err, user) => {
      if (err) {
        res.json(err);
      }
      res.json(user);
    });
  });
};

// controller.save = (req, res) => {
//   const data = req.body;
//   console.log(req.body);
//   req.getConnection((err, connection) => {
//     const query = connection.query(
//       "INSERT INTO customer set ?",
//       data,
//       (err, customer) => {
//         console.log(customer);
//         res.redirect("/");
//       }
//     );
//   });
// };

// controller.edit = (req, res) => {
//   const { id } = req.params;
//   req.getConnection((err, conn) => {
//     conn.query("SELECT * FROM customer WHERE id = ?", [id], (err, rows) => {
//       res.render("customers_edit", {
//         data: rows[0],
//       });
//     });
//   });
// };

// controller.update = (req, res) => {
//   const { id } = req.params;
//   const newCustomer = req.body;
//   req.getConnection((err, conn) => {
//     conn.query(
//       "UPDATE customer set ? where id = ?",
//       [newCustomer, id],
//       (err, rows) => {
//         res.redirect("/");
//       }
//     );
//   });
// };

// controller.delete = (req, res) => {
//   const { id } = req.params;
//   req.getConnection((err, connection) => {
//     connection.query("DELETE FROM customer WHERE id = ?", [id], (err, rows) => {
//       res.redirect("/");
//     });
//   });
// };

module.exports = controller;
