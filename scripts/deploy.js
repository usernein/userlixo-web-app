import Rsync from "rsync";
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";

const env = dotenv.config();
dotenvExpand.expand(env);

const rsync = new Rsync()
  .shell("ssh")
  .flags("azr")
  .source("./dist/")
  // eslint-disable-next-line no-undef
  .destination(process.env.RSYNC_DESTINATION);

// Execute the command
rsync.execute(function (error, code, cmd) {
  if (error) {
    console.log(error);
  } else {
    console.log("Deployed!", { code, cmd });
  }
});
