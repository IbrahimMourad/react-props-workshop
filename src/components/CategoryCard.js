import React from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CategoryCard = ({ desc, imgSrc, title, views, alertPro }) => {
  return (
    <Col md={3} className="category" onClick={() => alertPro(title)}>
      <div className="me-3">
        <img className="category-img" src={imgSrc} alt={title} />
      </div>
      <div className="category-info">
        <h6>{title}</h6>
        <span>{desc}</span>
        <span>{views}</span>
      </div>
    </Col>
  );
};

CategoryCard.defaultProps = {
  imgSrc:
    'https://yt3.ggpht.com/ytc/AKedOLSmjxIU9yuwvDGSuHZ88rKyfjRSmHJeKFmQZbnFiQ=s48-c-k-c0x00ffffff-no-rj',
  desc: 'default description',
  title: 'default title',
};

CategoryCard.propTypes = {
  views: PropTypes.number,
  alertPro: PropTypes.func,
};

export default CategoryCard;
