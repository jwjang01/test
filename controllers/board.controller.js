exports.read = (req, res) => {
  const idx = req.params.idx;
  console.log(idx);
  res.status(500).send(`read fail`);
};

exports.create = (req, res) => {
  res.send("post");
};

exports.update = (req, res) => {
  res.send("update");
};

exports.del = (req, res) => {
  res.send("delete");
};
