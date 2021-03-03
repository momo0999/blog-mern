import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getImagesByCategory } from '../../actions/imageActions';
import Image from '../Image';
import ImageModel from '../ImageModel';
import {
  StyledHomeScreen,
  PageTitleWrapper,
  PageTitle,
  ImagesList,
  PrimaryLink,
} from '../../utils/utilsStyles.styled';

const PostCategoryScreen = ({ match }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();
  const { images, loading, error } = useSelector(
    (state) => state.imageCategory
  );
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
      {selectedImage && (
        <ImageModel
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}

      <PrimaryLink to='/photography'>Back to all images</PrimaryLink>
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
