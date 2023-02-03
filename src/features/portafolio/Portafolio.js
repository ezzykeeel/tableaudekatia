import { useState, useEffect, useCallback } from "react";
import { PhotoAlbum, PhotoProps } from "react-photo-album";
import { photos } from "./photos";
import "./portafolio.scss";

const Portafolio = () => {
  const spacing = "10",
    padding = "10";
  const [columns, setColumns] = useState(2);

  useEffect(() => {
    const viewportSize = window.innerWidth;
    setColumns(viewportSize < 480 ? 2 : viewportSize < 900 ? 3 : 5);
  });

  const renderPhoto = useCallback(
    ({ imageProps: { alt, style, ...rest } }: PhotoProps) => (
      <img
        alt={alt}
        style={{
          ...style,
          borderRadius: padding > 2 ? "4px" : 0,
          boxShadow:
            spacing > 0
              ? "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)"
              : "none",
          transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
        }}
        {...rest}
      />
    ),
    [spacing, padding]
  );

  return (
    <div className="portafolio-container">
      <PhotoAlbum
        layout="columns"
        columns={columns}
        spacing="15"
        photos={photos}
        renderPhoto={renderPhoto}
      />
    </div>
  );
};

export default Portafolio;
