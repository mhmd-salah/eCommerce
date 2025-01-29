import { Command } from './AddToCartCommand';

export class Invoker {
  private commands: { [key: string]: Command } = {};

  setCommands(buttonId: string, command: Command) {
    this.commands[buttonId] = command;
  }

  pressButton(buttonId: string) {
    const command = this.commands[buttonId];
    if (command) {
      command.execute();
    }
  }
}
