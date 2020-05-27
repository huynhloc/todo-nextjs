import React, { useEffect, useState, useRef } from 'react';
import cx from 'classnames';
import css from './ImageUploader.scss';

type Props = {
  file: File;
  maxWith?: number;
  maxHeight?: number;
  onSuccess?: (url: string) => void;
  onError?: (error: Error) => void;
  className?: string;
  previewClassName?: string;
  preview?: boolean;
};

const ImageUploader: React.FC<Props> = ({
  file,
  maxWith,
  maxHeight,
  onSuccess,
  className,
  previewClassName,
  preview,
}) => {
  const [loading, setLoading] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const uploadImage = async (filename: string, blob: Blob) => {
    console.log('filename: ', filename);
    console.log('blob: ', blob);
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
    onSuccess && onSuccess('http://image-url');
  };
  const resizeImageFile = (file: File) => {
    console.log('resizeImageFile =====>');
    const URL = window.URL || window.webkitURL;
    const MAX_SIZE_IMG_W = maxWith || 640;
    const MAX_SIZE_IMG_H = maxHeight || 640;
    const originImage = new Image();
    const resultCanvas = document.createElement('canvas') as HTMLCanvasElement;

    originImage.onload = function() {
      const ratio = originImage.width / originImage.height;
      const maxRatio = MAX_SIZE_IMG_W / MAX_SIZE_IMG_H;

      if (
        originImage.width <= MAX_SIZE_IMG_W &&
        originImage.height <= MAX_SIZE_IMG_H
      ) {
        resultCanvas.width = originImage.width;
        resultCanvas.height = originImage.height;
      } else if (ratio >= maxRatio) {
        // base on MAX_SIZE_IMG_W
        resultCanvas.width = MAX_SIZE_IMG_W;
        resultCanvas.height = resultCanvas.width / ratio;
      } else {
        // base on MAX_SIZE_IMG_H
        resultCanvas.height = MAX_SIZE_IMG_H;
        resultCanvas.width = resultCanvas.height * ratio;
      }
      const canvas2dContext = resultCanvas.getContext(
        '2d'
      ) as CanvasRenderingContext2D;

      canvas2dContext.drawImage(
        originImage,
        0,
        0,
        resultCanvas.width,
        resultCanvas.height
      );

      resultCanvas.toBlob(blob => {
        if (preview) {
          const base64Data = resultCanvas.toDataURL('image/jpeg');
          const previewElm = imgRef.current as HTMLImageElement;
          previewElm.src = base64Data;
        }
        uploadImage(file.name, blob as Blob);
      }, 'image/jpeg');
    };
    originImage.src = URL.createObjectURL(file);
  };

  useEffect(() => {
    file && resizeImageFile(file);
  }, [file]);

  return (
    <div className={cx(css['container'], className)}>
      <img
        ref={imgRef}
        className={cx(css['thumb'], previewClassName)}
        src=""
        alt=""
      />
      {loading && (
        <div className={css['loader']}>
          <div className={css['indicator']} />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
