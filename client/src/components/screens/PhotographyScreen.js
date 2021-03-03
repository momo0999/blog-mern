import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getImages } from '../../actions/imageActions';
import {
  ImagesList,
  StyledHomeScreen,
  PageTitle,
  PageTitleWrapper,
  CategoryLink,
  RowWrapper,
} from '../../utils/utilsStyles.styled';
import Image from '../Image';
import ImageModel from '../ImageModel';

const PhotographyScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();
  const { images, loading, error } = useSelector((state) => state.imageList);
  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);
  const allCategories = [...new Set(images.map((image) => image.category))];
  if (!images) {
    return;
  }
  return (
    <Fragment>
      <PageTitleWrapper>
        <PageTitle>Photography</PageTitle>
      </PageTitleWrapper>
      <RowWrapper>
        {allCategories.map((category, index) => {
          return (
            <CategoryLink key={index} to={`/photography/category/${category}`}>
              {category}
            </CategoryLink>
          );
        })}
      </RowWrapper>
      {selectedImage && (
        <ImageModel
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}

      <StyledHomeScreen>
        <ImagesList>
          {loading && <h1>Loading...</h1>}
          {error && <h1>{error}</h1>}
          {images.map((image) => {
            return (
              <Image
                setSelectedImage={setSelectedImage}
                key={image._id}
                image={image}
              />
            );
          })}
        </ImagesList>
      </StyledHomeScreen>
    </Fragment>
  );
};

export default PhotographyScreen;
