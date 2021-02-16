import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getImages } from '../../actions/imageActions';
import {
  ImagesList,
  StyledHomeScreen,
  PageTitle,
  PageTitleWrapper,
} from '../../utils/utilsStyles.styled';
import Image from '../Image';
import ImageModel from '../ImageModel';
import CategoriesImageLinks from '../CategoriesImageLinks';

const PhotographyScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();
  const { images, loading, error } = useSelector((state) => state.imageList);
  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);
  if (!images) {
    return;
  }
  return (
    <Fragment>
      <PageTitleWrapper>
        <PageTitle>Photography</PageTitle>
      </PageTitleWrapper>
      <CategoriesImageLinks images={images} />
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
