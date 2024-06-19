import { avatarColors } from "contains/contants";
import { _getAvatarRd } from "contains/fakeData";
import React, { FC, useEffect, useState } from "react";
import Image from "../Image";

export interface AvatarProps {
  containerClassName?: string;
  sizeClass?: string;
  radius?: string;
  imgUrl?: string;
  userName?: string;
}

const _setBgColor = (name: string) => {
  const backgroundIndex = Math.floor(name.charCodeAt(0) % avatarColors.length);
  return avatarColors[backgroundIndex];
};

const Avatar: FC<AvatarProps> = ({
  containerClassName = "ring-1 ring-white dark:ring-neutral-900",
  sizeClass = "h-6 w-6 text-sm",
  radius = "rounded-full",
  imgUrl,
  userName,
}) => {
  const name = userName || "John Doe";

  const [url, setUrl] = useState(imgUrl);

  useEffect(() => {
    // FOR DEMO
    if (!url) {
      setUrl(_getAvatarRd());
    }
  }, []);

  return (
    <div
      className={`wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner ${radius} ${sizeClass} ${containerClassName}`}
      style={{ backgroundColor: url ? undefined : _setBgColor(name) }}
    >
      {url && (
        <Image
          fill
          sizes="100px"
          className="absolute inset-0 object-cover w-full h-full"
          src={url}
          alt={name}
        />
      )}
      <span className="wil-avatar__name">{name[0]}</span>
    </div>
  );
};

export default Avatar;