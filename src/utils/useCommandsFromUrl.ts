import { useSearchParams } from "react-router-dom";

export const useCommandsFromUrl = () => {
  const [searchParams] = useSearchParams();

  const commandsJSON = searchParams.get("commands");
  const commands = commandsJSON ? JSON.parse(commandsJSON) : {};

  return commands as string[];
};
