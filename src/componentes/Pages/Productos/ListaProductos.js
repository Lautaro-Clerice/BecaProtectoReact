import styled from 'styled-components';

export const productos = [
  {
    id: 1,
    title: 'Tazon chanchito',
    desc: 'Descripción del Producto A',
    img: 'https://res.cloudinary.com/dn6dmzeqq/image/upload/v1700195899/tazon_chanchito_1_t5bn8t.jpg',
    price: 4500,
    category: "Vasos"
  },
  {
    id: 2,
    title: 'Taza ondulada',
    desc: 'Descripción del Producto B',
    img: 'https://res.cloudinary.com/dn6dmzeqq/image/upload/v1700195899/taza_ondulada_vivi_el_hoyo_1_woyeiq.jpg',
    price: 3200,
    category: "Vasos"
  },
  {
    id: 3,
    title: 'Maceta llama',
    desc: 'Descripción del Producto C',
    img: 'https://res.cloudinary.com/dn6dmzeqq/image/upload/v1700195898/maceta_llama_1_ixyl65.jpg',
    price: 6750,
    category: "Deco"
  },
  {
    id: 4,
    title: 'Set matero vibras',
    desc: 'Descripción del Producto D',
    img: 'https://res.cloudinary.com/dn6dmzeqq/image/upload/v1700195898/set_matero_vibra_alto_1_oh5itf.jpg',
    price: 16000,
    category: "Mates"
  },
  {
    id: 5,
    title: 'Set matero animal',
    desc: 'Descripción del Producto E',
    img: 'https://res.cloudinary.com/dn6dmzeqq/image/upload/v1700195898/set_de_mate_animal_print_1_qy8lhg.jpg',
    price: 16000,
    category: "Mates"
  },
  {
    id: 6,
    title: 'Pantu gato',
    desc: 'Descripción del Producto F',
    img: 'https://res.cloudinary.com/dn6dmzeqq/image/upload/v1700195898/pantus_gatito_1_m48x7u.jpg',
    price: 6500,
    category: "Pantus"
  },
  {
    id: 7,
    title: 'Pantu chancho',
    desc: 'Descripción del Producto G',
    img: 'https://res.cloudinary.com/dn6dmzeqq/image/upload/v1700195898/pantus_chanchito_1_f1chwi.jpg',
    price: 6500,
    category: "Pantus"
  },
  {
    id: 8,
    title: 'Pantu Bob',
    desc: 'Descripción del Producto H',
    img: 'https://res.cloudinary.com/dn6dmzeqq/image/upload/v1700195898/pantus_bob_1_afqt56.jpg',
    price: 6500,
    category: "Pantus"
  },
  {
    id: 9,
    title: 'Vaso negro',
    desc: 'Descripción del Producto I',
    img: 'https://res.cloudinary.com/dn6dmzeqq/image/upload/v1700195897/vaso_coffe_negro2_1_ezokjg.jpg',
    price: 2700,
    category: "Vasos"
  },
  {
    id: 10,
    title: 'Botella silicona',
    desc: 'Descripción del Producto J',
    img: 'https://res.cloudinary.com/dn6dmzeqq/image/upload/v1700195897/bot.silicona_violeta_1_z1ijob.jpg',
    price: 3200,
    category: "Botellas"
  },
  {
    id: 11,
    title: 'Vaso termico',
    desc: 'Descripción del Producto K',
    img: 'https://res.cloudinary.com/dn6dmzeqq/image/upload/v1700195897/vaso_termico_verede_aqua_1_etxrkt.jpg',
    price: 2700,
    category: "Vasos"
  },
  {
    id: 12,
    title: 'Vaso termico',
    desc: 'Descripción del Producto L',
    img: 'https://res.cloudinary.com/dn6dmzeqq/image/upload/v1700195897/Vaso_termico_rosado_1_a5arqr.jpg',
    price: 2700,
    category: "Vasos"
  },
  {
    id: 13,
    title: 'Vaso termico',
    desc: 'Descripción del Producto M',
    img: 'https://res.cloudinary.com/dn6dmzeqq/image/upload/v1700195897/vaso_termico_flores_1_pko5az.jpg',
    price: 2700,
    category: "Vasos"
  },
  {
    id: 14,
    title: 'Botella flores',
    desc: 'Descripción del Producto N',
    img: 'https://res.cloudinary.com/dn6dmzeqq/image/upload/v1700195897/botella_con_tapa_flors_1_vcdhjn.jpg',
    price: 3200,
    category: "Botellas"
  },
];

export const ContainerProduct = styled.div`
  margin-top:20px;
  margin-bottom: 20px;
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  gap:20px;
`;
export const CardProduct = styled.div`
  font-family:arial;
  display:flex;
  border-radius:10px;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  width:180px;
  height:250px;
  box-shadow:0px 0px 8px grey;
  
  .btn-carrito {
    border:none;
  height:40px;
  cursor:pointer;
  margin-bottom: 10px;
  }

`;

export const ImgCardProd = styled.div`
display: flex;
  justify-content: center;
  margin-top:15x;
  width:95%;
  img {
    object-fit: cover;
    width: 160px;
    height: 160px;
    border-radius: 6px;
  }
`;

export const titlePrice = styled.div`
  display:flex;
  justify-content:space-around;
  width:100%;
  font-size:16px;
  height:10%;
  h2 {
    margin-top: 5px;
    margin-bottom: 5px;
    font-weight: 600;
    color: #86198f;
  }
  h1 {
    margin-bottom: 10px;
    padding-top:5px;
    font-size:16px;
  }

`;

export const AddCart = styled.div`
margin-top: 5px;
display:flex;
justify-content:center;
  p {
}
`;
export const BtnCarrito = styled.button`
 
`;

export const TotalProductos = productos.length;

export const Productos = productos.reduce((acc, productos) => {
  if(!acc[productos.category]) {
    acc[productos.category] = [];
  };
  acc[productos.category] = [...acc[productos.category], productos];
  return acc
  
}, {})