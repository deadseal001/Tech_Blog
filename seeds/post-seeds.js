const { Post } = require("../models");

const postdata = [
  {
    title: "Donec posuere metus vitae ipsum.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus officia, reprehenderit quidem reiciendis exercitationem perspiciatis odio vitae temporibus rerum dignissimos fugiat ex quae? Voluptatibus veniam, iure aliquam veritatis numquam blanditiis?",
    user_id: 10,
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo ullam tempore blanditiis debitis voluptatibus perferendis maiores pariatur a quis fuga! Architecto recusandae reiciendis nostrum? In quia assumenda dolorum quam dolores?",
    user_id: 8,
  },
  {
    title:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto omnis repudiandae ut repellendus aperiam quod ullam maiores voluptate dolorem! Tempora, aliquam. Eos eius aliquam nisi ut cumque maiores libero corrupti?",
    user_id: 1,
  },
  {
    title: "Nunc purus.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum fuga repellendus atque perspiciatis totam et, nulla odit aliquid asperiores architecto maiores. Quae debitis omnis voluptatum laborum minima quaerat, possimus accusamus.",
    user_id: 4,
  },
  {
    title: "Pellentesque eget nunc.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur suscipit incidunt quia consequatur? Similique sequi enim numquam distinctio laboriosam reprehenderit minima molestias, eos recusandae debitis, maxime non sint impedit saepe.",
    user_id: 7,
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem molestiae, accusantium veniam exercitationem rerum sequi deleniti laboriosam iure iusto officiis sapiente necessitatibus provident optio earum consequuntur ab enim at.",
    user_id: 4,
  },
  {
    title: "In hac habitasse platea dictumst.",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, placeat at non nam commodi nobis enim soluta ad blanditiis quam aliquam reiciendis voluptatem dolores quisquam a debitis dolore velit natus.",
    user_id: 1,
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magnam corrupti, reprehenderit eos unde quisquam odio minima quis ut tempora pariatur enim. Quo, pariatur repellat doloremque similique enim eveniet? Explicabo.",
    user_id: 1,
  },
  {
    title: "Duis ac nibh.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quae aperiam illo nobis sint, itaque eaque a laudantium illum, delectus rem eligendi accusantium libero, maxime inventore maiores voluptates. Molestiae, autem.",
    user_id: 9,
  },
  {
    title: "Curabitur at ipsum ac tellus semper interdum.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint fuga necessitatibus temporibus? Consequatur non itaque omnis similique autem sit laudantium quisquam, sapiente fugiat eum quas impedit magni culpa ab magnam.",
    user_id: 5,
  },
  {
    title: "In hac habitasse platea dictumst.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nulla recusandae culpa suscipit harum explicabo eveniet illo soluta tenetur voluptatum atque odit consequuntur architecto error tempore, repudiandae neque sed nesciunt.",
    user_id: 3,
  },
  {
    title: "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aspernatur consectetur perferendis dicta dolor quae fugit hic voluptas dolores, ad magnam illo deserunt aliquid temporibus, cum molestiae molestias! Voluptates, labore.",
    user_id: 10,
  },
  {
    title: "Donec dapibus.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laborum eius quidem ad! Corporis est ipsa officia. Velit nostrum doloremque amet ut reiciendis iure assumenda eos possimus non dolor! Adipisci?",
    user_id: 8,
  },
  {
    title: "Nulla tellus.",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora libero, ut, temporibus quos delectus a dicta totam consequuntur obcaecati nulla laudantium! Dolorem debitis veritatis ab nemo accusantium totam ea. Assumenda?",
    user_id: 3,
  },
  {
    title:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque reiciendis dicta inventore impedit officia nihil nemo quidem hic numquam voluptatibus vero cupiditate, maxime, atque perspiciatis velit iste beatae tempore magni!",
    user_id: 3,
  },
  {
    title: "Vestibulum ante ipsum primis in faucibus.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptate sed totam sit reprehenderit odit sequi accusantium expedita nihil illum at aliquam natus, consectetur voluptates, ipsam ipsum quos. Nesciunt, alias?",
    user_id: 7,
  },
  {
    title: "In hac habitasse platea dictumst.",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit rerum dolorum velit soluta quidem error numquam optio cum harum! Consequatur voluptatem voluptas aspernatur. Eveniet ducimus doloremque magni molestiae amet quaerat.",
    user_id: 6,
  },
  {
    title: "Etiam justo.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem et odio ex soluta eius obcaecati excepturi? Nihil ducimus modi voluptate quam aperiam ullam exercitationem dignissimos, maiores quae, tenetur rem quia.",
    user_id: 4,
  },
  {
    title: "Nulla ut erat id mauris vulputate elementum.",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, eum laudantium quisquam animi perferendis facere vitae distinctio quis quos. Itaque nisi iste enim saepe ratione quam rerum unde, dolorem quaerat.",
    user_id: 6,
  },
  {
    title:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis voluptate at eveniet ipsa provident, explicabo molestiae consectetur consequatur illo cupiditate quasi quaerat aliquid itaque, deleniti, in molestias facere officia commodi!",
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
