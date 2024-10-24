// @flow
import * as React from 'react'
import { ChangeEvent } from 'react'
import defaultBg from '../../../assets/wmq7bl2c1xbsd8huyjbpwlmbesbvlzqv.jpg'
import styles from './CoverImage.module.scss'
import IconButton from '@mui/material/IconButton'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import { CoverImageProps } from '../../data/dataPropsTypes'

export const CoverImage = ({ image, updateImage }: CoverImageProps) => {
  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null

    if (file) {
      updateImage(URL.createObjectURL(file))
    }
  }

  return (
    <div className={styles.imgContainer}>
      <div className={styles.hoverBlock}>
        <label>
          <input accept="image/*" style={{ display: 'none' }} type="file" onChange={handleFileInput} />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            style={{
              position: 'absolute',
              top: '50%',
              left: 'calc(50% - 8px)',
              transform: 'translate(-50%, -50%)',
              color: 'white',
            }}>
            <AddPhotoAlternateIcon />
          </IconButton>
        </label>
      </div>
      <img src={image ? image : defaultBg} className={styles.cover} alt={'Background image'} aria-hidden />
    </div>
  )
}
