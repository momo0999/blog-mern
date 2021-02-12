import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getImages } from '../../actions/imageActions';
import { Logo } from '../navbar/Navbar.styled';
import {
  ImagesList,
  StyledHomeScreen,
  SpaceBetween,
} from '../../utils/utilsStyles.styled';
import Image from '../Image';
import ImageModel from '../ImageModel';

const PhotographyScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  console.log(selectedImage);
  const dispatch = useDispatch();
  const imageList = useSelector((state) => state.imageList);
  const { images, loading, error } = imageList;
  useEffect(() => {
    if (!images) {
      return;
    } else {
      dispatch(getImages());
    }
  }, [dispatch]);
  const allCategories = [
    'All',
    ...new Set(images.map((image) => image.category)),
  ];
  return (
    <Fragment>
      <SpaceBetween>
        <Logo>Photography</Logo>
      </SpaceBetween>
      <div>
        <select name='category'>
          {allCategories.map((category) => {
            return <option>{category}</option>;
          })}
        </select>
      </div>
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
