import MicroVerticalApp from  './MicroVerticalApp';


export const run = (context) => {
    context.setLayout('application'); // Make the application fill the entire viewport
    context.setContent(<MicroVerticalApp />);
};
