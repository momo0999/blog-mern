import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getImagesByCategory } from '../../actions/imageActions';
import Image from '../Image';
import ImageModel from '../ImageModel';
import CategoriesImageLinks from '../CategoriesImageLinks';
import {
  RowWrapper,
  Container,
  StyledHomeScreen,
  PageTitleWrapper,
  PageTitle,
  PrimaryLink,
  ImagesList,
} from '../../utils/utilsStyles.styled';

const PostCategoryScreen = ({ match }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();
  const imageCategory = useSelector((state) => state.imageCategory);
  const { images, loading, error } = imageCategory;
  useEffect(() => {
    dispatch(getImagesByCategory(match.params.category));
  }, [dispatch, match]);
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

export default PostCategoryScreen;
