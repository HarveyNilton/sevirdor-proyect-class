
const Category = require("../models/categories.model")
const initModels = require("../models/initModels")
const User = require("../models/user.model")
const Post = require("../models/post.model")
const db = require("../utils/db")

initModels()

const users = [
    { username: 'bob4265', email: "harvey@academlo.com", emailVerified: true, password: '12345679' },
    { username: 'Diana3654', email: "diana@academlo.com", emailVerified: true, password: '12345679' },
    { username: 'JuanGarcia', email: "juan@academlo.com", emailVerified: true, password: '12345679' },
    { username: 'PabloPra', email: "pablo@academlo.com", emailVerified: true, password: '12345679' },
    { username: 'CarlosBod', email: "carlos@academlo.com", emailVerified: true, password: '12345679' },
    { username: 'Cesarin', email: 'cesar@academlo.com', emailVerified: true, password: '1234567' }
]

const categories = [
    { name: 'JavaScript' },
    { name: 'React' },
    { name: 'Node' },
    { name: 'Html' },
    { name: 'CSS' },
    { name: 'Paython' },
    { name: 'Base de Datos' }
]

const posts = [
    { title: 'Que es jsx', description: 'Me quede con el termino react no me quedo claro alguien me puede dar una mano', userId: 1, categoryId: 2 },
    { title: 'Que son los Hooks', description: 'Esto de los hook me tiene loca no entiendo ni pies ni cabeza, necesito uan ayuda por favor', userId: 2, categoryId: 2 },
    { title: 'Me han dicho que Grid es me jor que Flex', description: 'Mi primo es frontd Sinor y Flex es cosa del pasado y lo de ahora el Grid que tan cierto es eso', userId: 3, categoryId: 5 },
    { title: 'Me da miedo Node he escuchado cosas feas de el', description: 'Estoy aprendiendo que recomiendan', userId: 4, categoryId: 3 },

]


for (let i = 0; i < 1000; i++) {
    posts.push({
      title: `Pregunta sobre basse de datos ${i + 1}`,
      description: "shalala shalala shala shalalala",
      userId: (i % 6) + 1, // 2, 3 4 5 6 1
      categoryId: 7,
    });
  }

db.sync({ force: true })
    .then(
        async () => {
            users.forEach(user => {
                User.create(user)
            }),
                setTimeout(async () => {
                    const catergory = await Category.bulkCreate(categories)
                    const post = await Post.bulkCreate(posts)
                }, 400);


            /*if (result) {
                console.log('Users successfully');
            }*/


        }
    )