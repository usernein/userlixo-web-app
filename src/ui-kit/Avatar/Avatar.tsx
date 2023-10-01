import { FC } from "react";
import styles from "./Avatar.module.scss";

interface AvatarProps {
  src: string;
}

const Avatar: FC<AvatarProps> = ({ src }) => (
  <div className={styles.Avatar}>
    <img alt="Userbot profile picture" src={src} />
  </div>
);

export default Avatar;
