import { ContactsController, ContactsControllerOptions } from "./controllers";
import parseArgs from 'minimist';

function parseaParams(argv): ContactsControllerOptions {
  const args = parseArgs(argv.slice(2));

  return {
    action: args.action || args._[0] || null ,
    params: args.params || args._.slice(1) || null,
  };
}

function main() {}

main();
