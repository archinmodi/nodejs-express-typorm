<<<<<<< HEAD
import * as shell from "shelljs";

shell.cp("-R", "views", "dist/");
shell.mkdir("dist/logs");
shell.mkdir(`dist/logs/${new Date().getFullYear()}`);
// shell.cp("-R", "src/public/js/lib", "dist/public/js/");
// shell.cp("-R", "src/public/fonts", "dist/public/");
=======
import * as shell from "shelljs";

shell.cp("-R", "views", "dist/");
shell.mkdir("dist/logs");
shell.mkdir(`dist/logs/${new Date().getFullYear()}`);
// shell.cp("-R", "src/public/js/lib", "dist/public/js/");
// shell.cp("-R", "src/public/fonts", "dist/public/");
>>>>>>> master
// shell.cp("-R", "src/public/images", "dist/public/");