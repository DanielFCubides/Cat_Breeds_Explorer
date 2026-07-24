require('dotenv').config();

const app = require('./src/app');
const CatsAPI = require('./src/catsApi');

const PORT = process.env.PORT || 3000;
const catsApi = new CatsAPI();

app.get('/cats/', async (req, res) => {
  try {
    const cats = await catsApi.get_cats({
      limit: req.query.limit,
      page: req.query.page,
    });
    res.json(cats.map(({ id, name, temperament, origin, description, life_span }) => ({
      id,
      name,
      temperament,
      origin,
      description,
      life_span,
      image_url: 'https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg',
    })));
  } catch (error) {
    res.status(502).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server successfully listening on port ${PORT}`);
});
