import PaletteProvider from 'bpmn-js/lib/features/palette/PaletteProvider';

export default class CustomPaletteProvider extends PaletteProvider {
  constructor(create, elementFactory, palette, translate) {
    super(create, elementFactory, palette, translate);
  }

  getPaletteEntries(element) {
    const actions = super.getPaletteEntries(element);

    // Add a custom action to the palette
    const customAction = {
      'custom-create-task': {
        group: 'model',
        className: 'icon-custom-task',
        title: 'Create Custom Task',
        action: {
          dragstart: createTask,
          click: createTask
        }
      }
    };

    return Object.assign({}, actions, customAction);
  }
}

CustomPaletteProvider.$inject=["create", "elementFactory", "palette", "translate"]

function createTask(event) {
  const shape = elementFactory.createShape({ type: 'bpmn:Task' });

  create.start(event, shape);
}
