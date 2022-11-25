exports.read = (req, res) => {
  const idx = req.params.idx;
  console.log(idx);
  res.status(200).send(`read ${idx}`);
};

exports.create = (req, res) => {
  const { data } = req.body;
  console.log(req.body);
  res.json({ error: 0, boardContent: data });
};

exports.update = (req, res) => {
  res.send("update");
};

exports.del = (req, res) => {
  res.send("delete");
};
