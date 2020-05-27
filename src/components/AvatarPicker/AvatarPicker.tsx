import React, { useState } from 'react';
import cx from 'classnames';
import { useDropzone } from 'react-dropzone';
import { ImageUploader } from 'components';
import DefaultProfilePhoto from 'assets/icons/default-profile-photo.svg';
import css from './AvatarPicker.scss';
import { useToastContext } from 'contexts/ToastContext/ToastContext';
import { ERROR_MESSAGE } from 'constants/error';

type Props = {
  containerClassName?: string;
  className?: string;
  labelClassName?: string;
  onChange?: (url: string) => void;
  disabled?: boolean;
  label?: string;
  url?: string;
};

const AvatarPicker: React.FC<Props> = ({
  containerClassName,
  className,
  labelClassName,
  label,
  onChange,
  disabled,
  url,
}) => {
  const { toastMessage } = useToastContext();
  const [file, setFile] = useState<File>();
  const { getRootProps, getInputProps } = useDropzone({
    disabled,
    multiple: false,
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFile(acceptedFiles[0]);
    },
  });

  const defaultImg = url ? (
    <img className={css['default-img']} />
  ) : (
    <DefaultProfilePhoto className={css['default-img']} />
  );
  return (
    <div className={cx(css['container'], containerClassName)}>
      {label && (
        <label className={cx(css['label'], labelClassName)} htmlFor={label}>
          {label}
        </label>
      )}
      <div className={css['dropzone-container']}>
        <div {...getRootProps({ className: cx(css['dropzone'], className) })}>
          <input {...getInputProps()} />
          {defaultImg}
          <ImageUploader
            file={file!}
            onSuccess={onChange}
            onError={() => {
              toastMessage && toastMessage(ERROR_MESSAGE.SERVER_ERROR, 'error');
            }}
            className={css['image-uploader']}
          />
          {!disabled && (
            <div className={css.overlay}>
              <span className={css.uploadText}>Upload image</span>
            </div>
          )}
        </div>
        <span className={css['description']}>
          Add a photo to personalize your account
        </span>
      </div>
    </div>
  );
};

export default AvatarPicker;
