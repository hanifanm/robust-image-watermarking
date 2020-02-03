import styles from './EditImage.module.scss'
import React from 'react'
import cx from 'classnames'
import Section from '../../components/Section/Section';
import SubSection from '../../components/SubSection/SubSection';
import Image from './image.png'

const EditImage = ({ className }) => {
  let title = 'Edit Image'
  return (
    <Section title={title} className={cx(className, styles.root)} id='edit-image'>
      <SubSection />
      <SubSection>
        <img src={Image} alt='Watermarked' className={styles.watermarkedImage} />
      </SubSection>
    </Section>
  );
}

export default EditImage;