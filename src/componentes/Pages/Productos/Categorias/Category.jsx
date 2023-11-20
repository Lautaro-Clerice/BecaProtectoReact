import React from 'react';
import { CardCategorias, CategoriasContainer, ImgStyle,  } from './CategoriesStyle';
import { Button } from '@nextui-org/react';
export const Category = ({ tittle, category,img }) => {
  return (
    <>
    <CategoriasContainer>
      <label>
      <CardCategorias>
      <ImgStyle src={img} alt={img} />  
      </CardCategorias>
      <Button className="tituloCat" color="secondary" variant="ghost">
        {tittle}
      </Button>
      </label>
      </CategoriasContainer>
    </>
  );
};

export default Category;
