import { FC } from "react";
import { BackButton } from "@vkruglikov/react-telegram-web-app";
import { useNavigate } from "react-router-dom";

interface TelegramBackButtonProps {}

const TelegramBackButton: FC<TelegramBackButtonProps> = () => {
  const navigate = useNavigate();

  return <BackButton onClick={() => navigate(-1)} />;
};

export default TelegramBackButton;
