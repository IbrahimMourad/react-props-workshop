import React from 'react';
import { comments } from '../assets/comments';
import CategoryCard from './CategoryCard';
import './styles.css';

const CategoryList = () => {
  const alertPro = (name) => {
    alert(name);
  };

  return (
    <>
      {comments.map((comment) => (
        <CategoryCard
          key={comment.id}
          title={comment.title}
          desc={comment.desc}
          imgSrc={comment.imgSrc}
          views={comment.views}
          alertPro={alertPro}
        />
      ))}
    </>
  );
};

export default CategoryList;
